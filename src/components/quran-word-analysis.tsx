"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import quranData from "@/data/quran.json"
import type { QuranVerse } from "@/types/quran"

export default function QuranWordAnalysis() {
  const [searchWord, setSearchWord] = useState("")
  const [searchResults, setSearchResults] = useState<any>(null)
  const [commonWords, setCommonWords] = useState<[string, number][]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Calculate most common words across the Quran
    const calculateCommonWords = () => {
      const wordFrequency: Record<string, number> = {}

      // Process first 1000 verses for performance (can be expanded)
      const sampleVerses = quranData.slice(0, 1000)

      sampleVerses.forEach((verse) => {
        const words = verse.aya_text_emlaey.split(" ")
        words.forEach((word) => {
          // Skip very short words (often particles)
          if (word.length < 2) return

          wordFrequency[word] = (wordFrequency[word] || 0) + 1
        })
      })

      // Sort by frequency and take top 20
      return Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
    }

    setCommonWords(calculateCommonWords())
  }, [])

  const handleSearch = () => {
    if (!searchWord.trim()) return

    setIsLoading(true)

    // Find all occurrences of the word
    const results = quranData.filter((verse) => verse.aya_text_emlaey.includes(searchWord))

    // Calculate statistics
    const totalOccurrences = results.reduce((count, verse) => {
      const regex = new RegExp(searchWord, "g")
      const matches = verse.aya_text_emlaey.match(regex)
      return count + (matches ? matches.length : 0)
    }, 0)

    // Group by surah
    const occurrencesBySurah: Record<string, number> = {}
    results.forEach((verse) => {
      const suraName = verse.sura_name_en
      const regex = new RegExp(searchWord, "g")
      const matches = verse.aya_text_emlaey.match(regex)
      const count = matches ? matches.length : 0

      occurrencesBySurah[suraName] = (occurrencesBySurah[suraName] || 0) + count
    })

    // Sort surahs by occurrence count
    const sortedSurahs = Object.entries(occurrencesBySurah).sort((a, b) => b[1] - a[1])

    setSearchResults({
      word: searchWord,
      totalOccurrences,
      occurrenceCount: results.length,
      occurrencesBySurah: sortedSurahs,
      verses: results.slice(0, 10), // Limit to first 10 for performance
    })

    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Word Analysis</CardTitle>
          <CardDescription>Search for words and analyze their occurrence in the Quran</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Enter a word to search..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={isLoading}>
              <Search className="h-4 w-4 mr-2" />
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </div>

          {searchResults ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Word</div>
                  <div className="text-2xl font-bold font-arabic">{searchResults.word}</div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Total Occurrences</div>
                  <div className="text-2xl font-bold">{searchResults.totalOccurrences}</div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Verses Containing Word</div>
                  <div className="text-2xl font-bold">{searchResults.occurrenceCount}</div>
                </div>
              </div>

              <Tabs defaultValue="verses" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="verses">Verses</TabsTrigger>
                  <TabsTrigger value="distribution">Distribution</TabsTrigger>
                </TabsList>

                <TabsContent value="verses" className="mt-6">
                  <div className="space-y-4">
                    {searchResults.verses.map((verse: QuranVerse) => (
                      <Card key={`${verse.sura_no}-${verse.aya_no}`}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">
                              Surah {verse.sura_no}: {verse.sura_name_en}
                            </span>
                            <span>Ayah {verse.aya_no}</span>
                          </div>
                          <div className="text-right mb-2 text-lg font-arabic">{verse.aya_text_emlaey}</div>
                        </CardContent>
                      </Card>
                    ))}

                    {searchResults.occurrenceCount > 10 && (
                      <div className="text-center text-muted-foreground">
                        Showing 10 of {searchResults.occurrenceCount} verses containing "{searchResults.word}"
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="distribution" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Distribution by Surah</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {searchResults.occurrencesBySurah
                        .slice(0, 10)
                        .map(([surah, count]: [string, number], index: number) => (
                          <div key={index} className="flex justify-between p-3 border rounded-md">
                            <div>{surah}</div>
                            <div className="text-muted-foreground">{count} occurrences</div>
                          </div>
                        ))}
                    </div>

                    <div className="h-[200px] flex items-center justify-center border rounded-md">
                      <div className="text-center text-muted-foreground">
                        <p>Word distribution chart will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Most Common Words in the Quran</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {commonWords.map(([word, count], index) => (
                  <div
                    key={index}
                    className="flex justify-between p-3 border rounded-md cursor-pointer hover:bg-muted"
                    onClick={() => {
                      setSearchWord(word)
                      handleSearch()
                    }}
                  >
                    <div className="font-arabic">{word}</div>
                    <div className="text-muted-foreground">{count} occurrences</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

