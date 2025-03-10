"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, BookText, FileText, AlignJustify, BookMarked } from "lucide-react"
import quranData from "@/data/quran.json"
import type { QuranStats } from "@/lib/quran-analytics"

export default function QuranDashboard() {
  const [stats, setStats] = useState<QuranStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Calculate statistics from the Quran data
    const calculateStats = () => {
      // Total number of verses
      const totalVerses = quranData.length

      // Total number of suras
      const uniqueSuras = new Set(quranData.map((verse) => verse.sura_no))
      const totalSuras = uniqueSuras.size

      // Total number of pages
      const uniquePages = new Set(quranData.map((verse) => verse.page))
      const totalPages = uniquePages.size

      // Total number of words (approximate based on spaces in aya_text_emlaey)
      const totalWords = quranData.reduce((count, verse) => {
        return count + (verse.aya_text_emlaey.split(" ").length || 0)
      }, 0)

      // Total number of characters
      const totalCharacters = quranData.reduce((count, verse) => {
        return count + (verse.aya_text_emlaey.length || 0)
      }, 0)

      // Verses per sura
      const versesPerSura = Array.from(uniqueSuras)
        .map((suraNo) => {
          const suraVerses = quranData.filter((verse) => verse.sura_no === suraNo)
          const suraName = suraVerses[0]?.sura_name_en || `Surah ${suraNo}`
          return {
            suraNo,
            suraName,
            verseCount: suraVerses.length,
          }
        })
        .sort((a, b) => a.suraNo - b.suraNo)

      // Longest and shortest verses
      const sortedByLength = [...quranData].sort((a, b) => b.aya_text_emlaey.length - a.aya_text_emlaey.length)

      const longestVerse = sortedByLength[0]
      const shortestVerse = sortedByLength[sortedByLength.length - 1]

      // Juz (Jozz) statistics
      const juzCount = new Set(quranData.map((verse) => verse.jozz)).size

      // Return the calculated statistics
      return {
        totalVerses,
        totalSuras,
        totalPages,
        totalWords,
        totalCharacters,
        versesPerSura,
        longestVerse,
        shortestVerse,
        juzCount,
      }
    }

    setStats(calculateStats())
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className="flex justify-center py-12">Loading statistics...</div>
  }

  if (!stats) {
    return <div className="flex justify-center py-12">Error loading statistics</div>
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Total Suras"
          value={stats.totalSuras}
          description="Number of chapters in the Quran"
          icon={<BookOpen className="h-5 w-5 text-primary" />}
        />

        <StatCard
          title="Total Verses"
          value={stats.totalVerses}
          description="Total number of ayat in the Quran"
          icon={<FileText className="h-5 w-5 text-primary" />}
        />

        <StatCard
          title="Total Words"
          value={stats.totalWords.toLocaleString()}
          description="Approximate word count"
          icon={<AlignJustify className="h-5 w-5 text-primary" />}
        />

        <StatCard
          title="Total Characters"
          value={stats.totalCharacters.toLocaleString()}
          description="Number of characters in the Quran"
          icon={<BookText className="h-5 w-5 text-primary" />}
        />

        <StatCard
          title="Total Pages"
          value={stats.totalPages}
          description="Number of pages in the standard Quran"
          icon={<BookMarked className="h-5 w-5 text-primary" />}
        />

        <StatCard
          title="Total Juz"
          value={stats.juzCount}
          description="Number of parts in the Quran"
          icon={<BarChart className="h-5 w-5 text-primary" />}
        />
      </div>

      <Tabs defaultValue="sura-stats" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sura-stats">Surah Statistics</TabsTrigger>
          <TabsTrigger value="verse-stats">Verse Statistics</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="sura-stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Surah Statistics</CardTitle>
              <CardDescription>Overview of the 114 surahs in the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.versesPerSura.slice(0, 15).map((sura) => (
                  <div key={sura.suraNo} className="flex justify-between p-3 border rounded-md">
                    <div className="font-medium">
                      {sura.suraNo}. {sura.suraName}
                    </div>
                    <div className="text-muted-foreground">{sura.verseCount} verses</div>
                  </div>
                ))}
                <div className="p-3 border rounded-md text-center text-muted-foreground">
                  And {stats.versesPerSura.length - 15} more surahs...
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verse-stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Verse Statistics</CardTitle>
              <CardDescription>Information about the verses in the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Longest Verse</h3>
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">
                        Surah {stats.longestVerse?.sura_no}: {stats.longestVerse?.sura_name_en}
                      </span>
                      <span>Ayah {stats.longestVerse?.aya_no}</span>
                    </div>
                    <div className="text-right mb-2 text-lg font-arabic">{stats.longestVerse?.aya_text_emlaey}</div>
                    <div className="text-muted-foreground text-sm">
                      Length: {stats.longestVerse?.aya_text_emlaey.length} characters,
                      {stats.longestVerse?.aya_text_emlaey.split(" ").length} words
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Shortest Verse</h3>
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">
                        Surah {stats.shortestVerse?.sura_no}: {stats.shortestVerse?.sura_name_en}
                      </span>
                      <span>Ayah {stats.shortestVerse?.aya_no}</span>
                    </div>
                    <div className="text-right mb-2 text-lg font-arabic">{stats.shortestVerse?.aya_text_emlaey}</div>
                    <div className="text-muted-foreground text-sm">
                      Length: {stats.shortestVerse?.aya_text_emlaey.length} characters,
                      {stats.shortestVerse?.aya_text_emlaey.split(" ").length} words
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Analysis</CardTitle>
              <CardDescription>Distribution of verses across the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p>Distribution chart will be displayed here</p>
                  <p className="text-sm mt-2">
                    This will show the distribution of verses, words, and characters across surahs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: number | string
  description: string
  icon?: React.ReactNode
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

