"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import quranData from "@/data/quran.json"
import type { SuraStats } from "@/lib/quran-analytics"

export default function QuranAnalytics() {
  const [selectedSura, setSelectedSura] = useState<number>(1)
  const [suraList, setSuraList] = useState<{ no: number; name: string; arabic: string }[]>([])
  const [suraStats, setSuraStats] = useState<SuraStats | null>(null)

  useEffect(() => {
    // Extract unique suras for the dropdown
    const uniqueSuras = Array.from(new Set(quranData.map((verse) => verse.sura_no)))
      .map((suraNo) => {
        const sura = quranData.find((verse) => verse.sura_no === suraNo)
        return {
          no: suraNo,
          name: sura?.sura_name_en || "",
          arabic: sura?.sura_name_ar || "",
        }
      })
      .sort((a, b) => a.no - b.no)

    setSuraList(uniqueSuras)
  }, [])

  useEffect(() => {
    // Calculate statistics for the selected surah
    const calculateSuraStats = () => {
      const suraVerses = quranData.filter((verse) => verse.sura_no === selectedSura)

      if (suraVerses.length === 0) return null

      // Basic stats
      const verseCount = suraVerses.length
      const totalWords = suraVerses.reduce((count, verse) => count + (verse.aya_text_emlaey.split(" ").length || 0), 0)
      const totalCharacters = suraVerses.reduce((count, verse) => count + (verse.aya_text_emlaey.length || 0), 0)

      // Page range
      const pages = suraVerses.map((verse) => verse.page)
      const startPage = Math.min(...pages)
      const endPage = Math.max(...pages)

      // Juz range
      const juzs = suraVerses.map((verse) => verse.jozz)
      const startJuz = Math.min(...juzs)
      const endJuz = Math.max(...juzs)

      // Verse length analysis
      const verseLengths = suraVerses.map((verse) => ({
        ayaNo: verse.aya_no,
        length: verse.aya_text_emlaey.length,
        words: verse.aya_text_emlaey.split(" ").length,
      }))

      const longestVerse = [...suraVerses].sort((a, b) => b.aya_text_emlaey.length - a.aya_text_emlaey.length)[0]

      const shortestVerse = [...suraVerses].sort((a, b) => a.aya_text_emlaey.length - b.aya_text_emlaey.length)[0]

      // Word frequency (simplified)
      const wordFrequency: Record<string, number> = {}
      suraVerses.forEach((verse) => {
        const words = verse.aya_text_emlaey.split(" ")
        words.forEach((word) => {
          wordFrequency[word] = (wordFrequency[word] || 0) + 1
        })
      })

      // Sort word frequency
      const sortedWordFrequency = Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)

      return {
        suraInfo: suraVerses[0],
        verseCount,
        totalWords,
        totalCharacters,
        pageRange: { start: startPage, end: endPage },
        juzRange: { start: startJuz, end: endJuz },
        verseLengths,
        longestVerse,
        shortestVerse,
        wordFrequency: sortedWordFrequency,
      }
    }

    setSuraStats(calculateSuraStats())
  }, [selectedSura])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quran Analytics</h2>

        <Select value={selectedSura.toString()} onValueChange={(value) => setSelectedSura(Number.parseInt(value))}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select Surah" />
          </SelectTrigger>
          <SelectContent>
            {suraList.map((sura) => (
              <SelectItem key={sura.no} value={sura.no.toString()}>
                {sura.no}. {sura.name} ({sura.arabic})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {suraStats ? (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                Surah {suraStats.suraInfo.sura_no}: {suraStats.suraInfo.sura_name_en} ({suraStats.suraInfo.sura_name_ar}
                )
              </CardTitle>
              <CardDescription>Detailed analysis and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Verses</div>
                  <div className="text-2xl font-bold">{suraStats.verseCount}</div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Words</div>
                  <div className="text-2xl font-bold">{suraStats.totalWords}</div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Characters</div>
                  <div className="text-2xl font-bold">{suraStats.totalCharacters}</div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Pages</div>
                  <div className="text-2xl font-bold">
                    {suraStats.pageRange.start === suraStats.pageRange.end
                      ? suraStats.pageRange.start
                      : `${suraStats.pageRange.start} - ${suraStats.pageRange.end}`}
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Juz</div>
                  <div className="text-2xl font-bold">
                    {suraStats.juzRange.start === suraStats.juzRange.end
                      ? suraStats.juzRange.start
                      : `${suraStats.juzRange.start} - ${suraStats.juzRange.end}`}
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Avg. Verse Length</div>
                  <div className="text-2xl font-bold">
                    {Math.round(suraStats.totalCharacters / suraStats.verseCount)} chars
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="verse-analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="verse-analysis">Verse Analysis</TabsTrigger>
              <TabsTrigger value="word-frequency">Word Frequency</TabsTrigger>
              <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
            </TabsList>

            <TabsContent value="verse-analysis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verse Analysis</CardTitle>
                  <CardDescription>Analysis of verse lengths and structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Longest Verse</h3>
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between mb-2">
                          <span>Ayah {suraStats.longestVerse?.aya_no}</span>
                          <span className="text-muted-foreground">
                            {suraStats.longestVerse?.aya_text_emlaey.length} characters
                          </span>
                        </div>
                        <div className="text-right mb-2 text-lg font-arabic">
                          {suraStats.longestVerse?.aya_text_emlaey}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Shortest Verse</h3>
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between mb-2">
                          <span>Ayah {suraStats.shortestVerse?.aya_no}</span>
                          <span className="text-muted-foreground">
                            {suraStats.shortestVerse?.aya_text_emlaey.length} characters
                          </span>
                        </div>
                        <div className="text-right mb-2 text-lg font-arabic">
                          {suraStats.shortestVerse?.aya_text_emlaey}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Verse Length Distribution</h3>
                      <div className="h-[200px] flex items-center justify-center border rounded-md">
                        <div className="text-center text-muted-foreground">
                          <p>Verse length distribution chart will be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="word-frequency" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Word Frequency</CardTitle>
                  <CardDescription>Most common words in this surah</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {suraStats.wordFrequency.map(([word, count]: [string, number], index: number) => (
                        <div key={index} className="flex justify-between p-3 border rounded-md">
                          <div className="font-arabic">{word}</div>
                          <div className="text-muted-foreground">{count} occurrences</div>
                        </div>
                      ))}
                    </div>

                    <div className="h-[200px] flex items-center justify-center border rounded-md">
                      <div className="text-center text-muted-foreground">
                        <p>Word frequency chart will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visualizations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visualizations</CardTitle>
                  <CardDescription>Visual representations of surah data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="h-[200px] flex items-center justify-center border rounded-md">
                      <div className="text-center text-muted-foreground">
                        <p>Word cloud visualization will be displayed here</p>
                      </div>
                    </div>

                    <div className="h-[200px] flex items-center justify-center border rounded-md">
                      <div className="text-center text-muted-foreground">
                        <p>Verse structure visualization will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="flex justify-center py-12">
          <p className="text-muted-foreground">Select a surah to view analytics</p>
        </div>
      )}
    </div>
  )
}

