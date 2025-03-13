"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, BookText, FileText, AlignJustify, BookMarked } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import quranData from "@/data/quran.json"
import type { QuranStats } from "@/lib/quran-analytics"
import { ChartContainer, ChartBar } from "@/components/ui/chart"
import { ChartPie } from "@/components/ui/chart-pie"

export default function QuranDashboard() {
  const [stats, setStats] = useState<QuranStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  // const [currentPage, setCurrentPage] = useState(1)
  // const surahsPerPage = 15

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
            suraNameAr: suraVerses[0]?.sura_name_ar,
            verseCount: suraVerses.length,
            wordCount: suraVerses.reduce((count, verse) => count + verse.aya_text_emlaey.split(" ").length, 0),
            charCount: suraVerses.reduce((count, verse) => count + verse.aya_text_emlaey.length, 0),
          }
        })
        .sort((a, b) => a.suraNo - b.suraNo)

      // Longest and shortest verses
      const sortedByLength = [...quranData].sort((a, b) => b.aya_text_emlaey.length - a.aya_text_emlaey.length)

      const longestVerse = sortedByLength[0]
      const shortestVerse = sortedByLength[sortedByLength.length - 1]

      // Juz (Jozz) statistics
      const juzCount = new Set(quranData.map((verse) => verse.jozz)).size

      // Distribution data for charts
      const verseLengthDistribution = calculateVerseLengthDistribution(quranData)
      const versesPerSuraDistribution = versesPerSura.map((s) => ({
        name: `${s.suraNo}. ${s.suraName}`,
        value: s.verseCount,
      }))
      const wordsPerSuraDistribution = versesPerSura.map((s) => ({
        name: `${s.suraNo}. ${s.suraName}`,
        value: s.wordCount,
      }))
      const charsPerSuraDistribution = versesPerSura.map((s) => ({
        name: `${s.suraNo}. ${s.suraName}`,
        value: s.charCount,
      }))

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
        verseLengthDistribution,
        versesPerSuraDistribution,
        wordsPerSuraDistribution,
        charsPerSuraDistribution,
      }
    }

    setStats(calculateStats())
    setIsLoading(false)
  }, [])

  // Calculate verse length distribution
  const calculateVerseLengthDistribution = (verses: typeof quranData) => {
    const lengthRanges = [
      { range: "0-50", min: 0, max: 50, count: 0 },
      { range: "51-100", min: 51, max: 100, count: 0 },
      { range: "101-150", min: 101, max: 150, count: 0 },
      { range: "151-200", min: 151, max: 200, count: 0 },
      { range: "201-250", min: 201, max: 250, count: 0 },
      { range: "251-300", min: 251, max: 300, count: 0 },
      { range: "301+", min: 301, max: Number.POSITIVE_INFINITY, count: 0 },
    ]

    verses.forEach((verse) => {
      const length = verse.aya_text_emlaey.length
      const range = lengthRanges.find((r) => length >= r.min && length <= r.max)
      if (range) range.count++
    })

    return lengthRanges.map((r) => ({
      name: r.range,
      value: r.count,
    }))
  }

  // Filter surahs based on search query
  const filteredSurahs =
    stats?.versesPerSura.filter(
      (sura) =>
        sura.suraName.toLowerCase().includes(searchQuery.toLowerCase()) || sura.suraNo.toString().includes(searchQuery),
    ) || []

  // Calculate pagination
  // const totalPages = Math.ceil(filteredSurahs.length / surahsPerPage)
  // const currentSurahs = filteredSurahs.slice((currentPage - 1) * surahsPerPage, currentPage * surahsPerPage)

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
              <div className="flex items-center gap-2 mt-2">
                <Input
                  placeholder="Search by name or number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
                {searchQuery && (
                  <Button variant="ghost" size="sm" onClick={() => setSearchQuery("")}>
                    Clear
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Graphical Overview */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Graphical Overview</h3>
                  <div className="h-[400px] border rounded-md p-4">
                    <ChartContainer title="Verses per Surah" description="Number of verses in each surah">
                      <ChartBar
                        data={stats.versesPerSuraDistribution}
                        xAxis={["Surah"]}
                        series={["Verses"]}
                        height={350}
                      />
                    </ChartContainer>
                  </div>
                </div>

                {/* Top 10 Longest and Shortest Surahs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-base font-medium">Longest Surahs</h3>
                    <div className="space-y-1">
                      {stats.versesPerSura
                        .sort((a, b) => b.verseCount - a.verseCount)
                        .slice(0, 10)
                        .map((sura) => (
                          <div
                            key={sura.suraNo}
                            className="flex justify-between p-2 bg-muted rounded-md"
                            style={{
                              background: `linear-gradient(to right, rgba(var(--primary), 0.1) ${Math.min(100, (sura.verseCount / 286) * 100)}%, transparent ${Math.min(100, (sura.verseCount / 286) * 100)}%)`,
                            }}
                          >
                            <div className="font-medium">
                              {sura.suraNo}. {sura.suraName}
                            </div>
                            <div>{sura.verseCount} verses</div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-medium">Shortest Surahs</h3>
                    <div className="space-y-1">
                      {stats.versesPerSura
                        .sort((a, b) => a.verseCount - b.verseCount)
                        .slice(0, 10)
                        .map((sura) => (
                          <div
                            key={sura.suraNo}
                            className="flex justify-between p-2 bg-muted rounded-md"
                            style={{
                              background: `linear-gradient(to right, rgba(var(--secondary), 0.1) ${Math.min(100, (sura.verseCount / 10) * 100)}%, transparent ${Math.min(100, (sura.verseCount / 10) * 100)}%)`,
                            }}
                          >
                            <div className="font-medium">
                              {sura.suraNo}. {sura.suraName}
                            </div>
                            <div>{sura.verseCount} verses</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Heat Map Visualization */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Surah Length Heat Map</h3>
                  <div className="border rounded-md p-4">
                    <div className="grid grid-cols-10 gap-1">
                      {stats.versesPerSura.map((sura) => {
                        // Calculate color intensity based on verse count
                        // Al-Baqarah (286 verses) is the longest, so we use that as max
                        const intensity = Math.min(100, (sura.verseCount / 286) * 100)
                        return (
                          <div
                            key={sura.suraNo}
                            className="aspect-square rounded-md flex flex-col items-center justify-center text-xs p-1 cursor-help transition-transform hover:scale-110"
                            style={{
                              backgroundColor: `hsl(var(--primary), ${intensity}%)`,
                              color: intensity > 50 ? "white" : "inherit",
                            }}
                            title={`${sura.suraNo}. ${sura.suraName} (${sura.suraNameAr}): ${sura.verseCount} verses`}
                          >
                            <div className="font-bold">{sura.suraNo}</div>
                            <div className="hidden sm:block text-[0.6rem] text-center overflow-hidden text-ellipsis">
                              {sura.verseCount}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-xs">Fewer verses</div>
                      <div className="w-full max-w-xs h-2 mx-2 rounded-full bg-gradient-to-r from-primary/10 to-primary"></div>
                      <div className="text-xs">More verses</div>
                    </div>
                  </div>
                </div>

                {/* All Surahs List */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">All Surahs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[600px] overflow-y-auto p-1">
                    {filteredSurahs.map((sura) => (
                      <div
                        key={sura.suraNo}
                        className="flex justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <div className="font-medium">
                          {sura.suraNo}. {sura.suraName}
                          <span className="text-xs text-muted-foreground ml-1">({sura.suraNameAr})</span>
                        </div>
                        <div className="text-muted-foreground">{sura.verseCount} verses</div>
                      </div>
                    ))}
                  </div>
                  {filteredSurahs.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No surahs found matching &quot;{searchQuery}&quot;
                    </div>
                  )}
                  {searchQuery && filteredSurahs.length > 0 && (
                    <div className="text-center text-sm text-muted-foreground">
                      Showing {filteredSurahs.length} of {stats.versesPerSura.length} surahs
                    </div>
                  )}
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
                      Length: {stats.longestVerse?.aya_text_emlaey.length} characters,{" "}
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
                      Length: {stats.shortestVerse?.aya_text_emlaey.length} characters,{" "}
                      {stats.shortestVerse?.aya_text_emlaey.split(" ").length} words
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Verse Length Distribution</h3>
                  <div className="h-[300px] border rounded-md p-4">
                    <ChartContainer
                      title="Verse Length Distribution"
                      description="Number of verses by character length"
                    >
                      <ChartBar
                        data={stats.verseLengthDistribution}
                        xAxis={["Character Range"]}
                        series={["Number of Verses"]}
                        height={250}
                      />
                    </ChartContainer>
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
              <CardDescription>Distribution of verses, words, and characters across the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Verses per Surah</h3>
                  <div className="h-[400px] border rounded-md p-4">
                    <ChartContainer title="Verses per Surah" description="Number of verses in each surah">
                      <ChartBar
                        data={stats.versesPerSuraDistribution.slice(0, 20)}
                        xAxis={["Surah"]}
                        series={["Verses"]}
                        height={350}
                      />
                    </ChartContainer>
                    <div className="text-center text-sm text-muted-foreground mt-2">
                      Showing first 20 surahs. The longest surah (Al-Baqarah) has 286 verses.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Words per Surah</h3>

                  {/* Multi-view visualization */}
                  <div className="space-y-4">
                    {/* Bar Chart View */}
                    <div className="border rounded-md p-4">
                      <ChartContainer title="Bar Chart View" description="Words per surah in multi-row bar chart">
                        <ChartBar
                          data={stats.wordsPerSuraDistribution}
                          xAxis={["Surah"]}
                          series={["Words"]}
                          height={400}
                        />
                      </ChartContainer>
                    </div>

                    {/* Pie Chart View - All Surahs by Word Count */}
                    <div className="border rounded-md p-4">
                      <ChartContainer
                        title="All Surahs by Word Count"
                        description="Proportion of words across all 114 surahs"
                      >
                        <div className="h-[600px] overflow-y-auto">
                          <ChartPie
                            data={stats.wordsPerSuraDistribution}
                            _dataKey="value"
                            _nameKey="name"
                            innerRadius={100}
                            _paddingAngle={0.5}
                            height={600}
                          />
                        </div>
                      </ChartContainer>
                    </div>
                  </div>

                  {/* Heatmap View */}
                  <div className="border rounded-md p-4">
                    <ChartContainer title="Word Count Heatmap" description="Visual density of words across all surahs">
                      <div className="h-[200px] py-4">
                        <div className="grid grid-cols-10 gap-1">
                          {stats.wordsPerSuraDistribution.map((surah) => {
                            // Calculate color intensity based on word count
                            // Find the max word count for normalization
                            const maxWords = Math.max(...stats.wordsPerSuraDistribution.map((s) => s.value))
                            const intensity = Math.min(100, (surah.value / maxWords) * 100)

                            return (
                              <div
                                key={surah.name}
                                className="aspect-square rounded-md flex flex-col items-center justify-center text-xs p-1 cursor-help transition-transform hover:scale-110"
                                style={{
                                  backgroundColor: `hsl(var(--primary), ${intensity}%)`,
                                  color: intensity > 50 ? "white" : "inherit",
                                }}
                                title={`${surah.name}: ${surah.value} words`}
                              >
                                <div className="font-bold">{surah.name.split(". ")[0]}</div>
                                <div className="hidden sm:block text-[0.6rem] text-center overflow-hidden text-ellipsis">
                                  {surah.value}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-xs">Fewer words</div>
                          <div className="w-full max-w-xs h-2 mx-2 rounded-full bg-gradient-to-r from-primary/10 to-primary"></div>
                          <div className="text-xs">More words</div>
                        </div>
                      </div>
                    </ChartContainer>
                  </div>

                  {/* Distribution Analysis */}
                  <div className="border rounded-md p-4">
                    <ChartContainer
                      title="Word Count Distribution"
                      description="Analysis of word count ranges across surahs"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                        {/* Top 5 Surahs with Most Words */}
                        <div className="space-y-2">
                          <h4 className="text-base font-medium">Surahs with Most Words</h4>
                          <div className="space-y-1">
                            {[...stats.wordsPerSuraDistribution]
                              .sort((a, b) => b.value - a.value)
                              .slice(0, 5)
                              .map((surah) => {
                                const maxWords = Math.max(...stats.wordsPerSuraDistribution.map((s) => s.value))
                                const percentage = (surah.value / maxWords) * 100

                                return (
                                  <div
                                    key={surah.name}
                                    className="flex justify-between p-2 bg-muted rounded-md"
                                    style={{
                                      background: `linear-gradient(to right, rgba(var(--primary), 0.1) ${percentage}%, transparent ${percentage}%)`,
                                    }}
                                  >
                                    <div className="font-medium">{surah.name}</div>
                                    <div>{surah.value.toLocaleString()} words</div>
                                  </div>
                                )
                              })}
                          </div>
                        </div>

                        {/* Top 5 Surahs with Fewest Words */}
                        <div className="space-y-2">
                          <h4 className="text-base font-medium">Surahs with Fewest Words</h4>
                          <div className="space-y-1">
                            {[...stats.wordsPerSuraDistribution]
                              .sort((a, b) => a.value - b.value)
                              .slice(0, 5)
                              .map((surah) => {
                                const minWords = Math.min(...stats.wordsPerSuraDistribution.map((s) => s.value))
                                const maxRange = 100 // For better visualization
                                const percentage = ((surah.value - minWords) / maxRange) * 100

                                return (
                                  <div
                                    key={surah.name}
                                    className="flex justify-between p-2 bg-muted rounded-md"
                                    style={{
                                      background: `linear-gradient(to right, rgba(var(--secondary), 0.1) ${percentage}%, transparent ${percentage}%)`,
                                    }}
                                  >
                                    <div className="font-medium">{surah.name}</div>
                                    <div>{surah.value.toLocaleString()} words</div>
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                      </div>

                      {/* Word Count Statistics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="p-3 border rounded-md text-center">
                          <div className="text-sm text-muted-foreground">Total Words</div>
                          <div className="text-xl font-bold">
                            {stats.wordsPerSuraDistribution
                              .reduce((sum, surah) => sum + surah.value, 0)
                              .toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 border rounded-md text-center">
                          <div className="text-sm text-muted-foreground">Average per Surah</div>
                          <div className="text-xl font-bold">
                            {Math.round(
                              stats.wordsPerSuraDistribution.reduce((sum, surah) => sum + surah.value, 0) /
                                stats.wordsPerSuraDistribution.length,
                            ).toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 border rounded-md text-center">
                          <div className="text-sm text-muted-foreground">Maximum</div>
                          <div className="text-xl font-bold">
                            {Math.max(...stats.wordsPerSuraDistribution.map((s) => s.value)).toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 border rounded-md text-center">
                          <div className="text-sm text-muted-foreground">Minimum</div>
                          <div className="text-xl font-bold">
                            {Math.min(...stats.wordsPerSuraDistribution.map((s) => s.value)).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </ChartContainer>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mt-2">
                    Word count is approximate based on spaces in the text.
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Surah Length Comparison</h3>
                  <div className="p-4 border rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-base font-medium mb-2">Longest Surahs (by verse count)</h4>
                        <div className="space-y-2">
                          {stats.versesPerSura
                            .sort((a, b) => b.verseCount - a.verseCount)
                            .slice(0, 5)
                            .map((sura, index) => (
                              <div key={sura.suraNo} className="flex justify-between p-2 bg-muted rounded-md">
                                <div>
                                  {index + 1}. {sura.suraName} (Surah {sura.suraNo})
                                </div>
                                <div className="font-medium">{sura.verseCount} verses</div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-medium mb-2">Shortest Surahs (by verse count)</h4>
                        <div className="space-y-2">
                          {stats.versesPerSura
                            .sort((a, b) => a.verseCount - b.verseCount)
                            .slice(0, 5)
                            .map((sura, index) => (
                              <div key={sura.suraNo} className="flex justify-between p-2 bg-muted rounded-md">
                                <div>
                                  {index + 1}. {sura.suraName} (Surah {sura.suraNo})
                                </div>
                                <div className="font-medium">{sura.verseCount} verses</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Distribution by Juz</h3>
                  <div className="p-4 border rounded-md">
                    <div className="flex items-center justify-center h-[200px]">
                      <div className="text-center">
                        <p className="text-muted-foreground">
                          The Quran is divided into {stats.juzCount} equal parts (juz/ajza).
                        </p>
                        <p className="text-muted-foreground mt-2">
                          Each juz contains approximately {Math.round(stats.totalVerses / stats.juzCount)} verses.
                        </p>
                      </div>
                    </div>
                  </div>
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

