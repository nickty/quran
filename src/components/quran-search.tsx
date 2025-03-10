"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import quranData from "@/data/quran.json"
import type { QuranVerse } from "@/types/quran"

export default function QuranSearch() {
  const [searchType, setSearchType] = useState<"text" | "sura" | "aya">("text")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<QuranVerse[]>([])

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    let results: QuranVerse[] = []

    switch (searchType) {
      case "text":
        results = quranData.filter((verse) => verse.aya_text_emlaey.toLowerCase().includes(searchQuery.toLowerCase()))
        break
      case "sura":
        const suraNumber = Number.parseInt(searchQuery)
        if (!isNaN(suraNumber)) {
          results = quranData.filter((verse) => verse.sura_no === suraNumber)
        }
        break
      case "aya":
        const ayaNumber = Number.parseInt(searchQuery)
        if (!isNaN(ayaNumber)) {
          results = quranData.filter((verse) => verse.aya_no === ayaNumber)
        }
        break
    }

    setSearchResults(results)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={searchType} onValueChange={(value) => setSearchType(value as "text" | "sura" | "aya")}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Search by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text Content</SelectItem>
              <SelectItem value="sura">Surah Number</SelectItem>
              <SelectItem value="aya">Ayah Number</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex w-full gap-2">
            <Input
              placeholder={
                searchType === "text"
                  ? "Enter search text..."
                  : searchType === "sura"
                    ? "Enter surah number..."
                    : "Enter ayah number..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Search Results ({searchResults.length})</h2>

        {searchResults.length > 0 ? (
          <div className="space-y-4">
            {searchResults.map((verse) => (
              <Card key={`${verse.sura_no}-${verse.aya_no}`}>
                <CardContent className="pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      Surah {verse.sura_no}: {verse.sura_name_en} ({verse.sura_name_ar})
                    </span>
                    <span>Ayah {verse.aya_no}</span>
                  </div>

                  <div className="text-right mb-2 text-xl font-arabic">{verse.aya_text_emlaey}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : searchQuery ? (
          <p className="text-center py-8 text-muted-foreground">No results found</p>
        ) : null}
      </div>
    </div>
  )
}

