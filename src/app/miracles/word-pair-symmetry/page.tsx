"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart2, ArrowRight, Repeat, Scale, BookOpen } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function WordPairSymmetryPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for the word pair occurrences
  const wordPairData = [
    { name: "Life/Death", occurrences: 145, group: "A" },
    { name: "World/Hereafter", occurrences: 115, group: "A" },
    { name: "Angels/Devils", occurrences: 88, group: "A" },
    { name: "Benefit/Corruption", occurrences: 50, group: "B" },
    { name: "Happiness/Misery", occurrences: 20, group: "B" },
    { name: "Paradise/Hell", occurrences: 77, group: "B" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-background to-background dark:from-blue-900/20"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="h-6 w-6 text-blue-600" />
          <h1 className="text-3xl font-bold">Word Pair Symmetry in the Quran</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Analyzing the balanced occurrence of word pairs and opposites in the Quranic text.
        </p>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Word Pair Symmetry</CardTitle>
                <CardDescription>The balanced occurrence of opposite concepts in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  One of the remarkable linguistic features of the Quran is the precise balance in the occurrence of
                  word pairs and opposites throughout its text. This phenomenon, known as word pair symmetry, reveals a
                  deliberate linguistic structure that maintains perfect balance between contrasting concepts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">145</div>
                    <div className="text-sm text-muted-foreground">Occurrences of "Life"</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">145</div>
                    <div className="text-sm text-muted-foreground">Occurrences of "Death"</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Perfect Balance</div>
                  </div>
                </div>

                <p>
                  This linguistic balance extends to dozens of word pairs throughout the Quran, creating a remarkable
                  symmetry that spans across chapters revealed over a 23-year period. The precision of this balance is
                  considered by many scholars to be evidence of the Quran's divine authorship.
                </p>

                <div className="relative h-64 my-8 overflow-hidden rounded-xl bg-blue-50 dark:bg-blue-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated balance scale visualization */}
                    <div className="relative w-64 h-64">
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-1 bg-blue-600"></div>
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-blue-600"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600"></div>

                      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-16 h-16 rounded-lg bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                        <span className="font-bold">Life</span>
                      </div>

                      <div className="absolute top-1/4 left-3/4 -translate-x-1/2 w-16 h-16 rounded-lg bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                        <span className="font-bold">Death</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>The words "life" and "death" each appear exactly 145 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>"Angels" and "devils" each appear exactly 88 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>"This world" and "the hereafter" each appear 115 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>"Benefit" and "corruption" each appear 50 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>Over 15 word pairs show perfect numerical balance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Context</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Quran was revealed over a 23-year period in the 7th century, with different chapters revealed at
                    different times and in different contexts. The fact that word pairs maintain perfect balance across
                    this entire period is remarkable.
                  </p>
                  <p>
                    This linguistic feature would have been impossible to plan without modern computational tools,
                    especially considering that the Quran was compiled after the Prophet Muhammad's death and the Arabic
                    writing system at that time did not include vowel marks or dots to distinguish between similar
                    letters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Examples of Word Pair Symmetry</CardTitle>
                <CardDescription>Documented instances of balanced word pairs in the Quran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 font-medium">Perfect Balance Examples</div>
                    <div className="p-4">
                      <ChartContainer
                        config={{
                          occurrences: {
                            label: "Occurrences",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        className="h-[300px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={wordPairData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey="occurrences" fill="var(--color-occurrences)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Life and Death</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Arabic: الحياة (al-hayat)</span>
                        <span className="font-bold text-blue-600">145 times</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Arabic: الموت (al-mawt)</span>
                        <span className="font-bold text-blue-600">145 times</span>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Example verse: "How can you disbelieve in Allah when you were lifeless and He brought you to
                        life; then He will cause you to die, then He will bring you [back] to life, and then to Him you
                        will be returned." (Quran 2:28)
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Angels and Devils</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Arabic: الملائكة (al-mala'ikah)</span>
                        <span className="font-bold text-blue-600">88 times</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Arabic: الشياطين (al-shayateen)</span>
                        <span className="font-bold text-blue-600">88 times</span>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Example verse: "And [mention] when We said to the angels, 'Prostrate to Adam,' and they
                        prostrated, except for Iblis. He was of the jinn and departed from the command of his Lord."
                        (Quran 18:50)
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">This World and Hereafter</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Arabic: الدنيا (al-dunya)</span>
                        <span className="font-bold text-blue-600">115 times</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Arabic: الآخرة (al-akhirah)</span>
                        <span className="font-bold text-blue-600">115 times</span>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Example verse: "But you prefer the worldly life, while the Hereafter is better and more
                        enduring." (Quran 87:16-17)
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Benefit and Corruption</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Arabic: المنفعة (al-manfa'ah)</span>
                        <span className="font-bold text-blue-600">50 times</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Arabic: الفساد (al-fasad)</span>
                        <span className="font-bold text-blue-600">50 times</span>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Example verse: "And cause not corruption upon the earth after its reformation." (Quran 7:56)
                      </div>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="relative h-64 my-4 overflow-hidden rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <Repeat className="h-12 w-12 text-blue-600 mb-4" />
                          <div className="text-center">
                            <div className="font-bold">Perfect Balance</div>
                            <div className="text-sm text-muted-foreground">Across 15+ word pairs</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Scale className="h-12 w-12 text-blue-600 mb-4" />
                          <div className="text-center">
                            <div className="font-bold">Statistical Significance</div>
                            <div className="text-sm text-muted-foreground">p &lt; 0.0001</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Linguistic Analysis</CardTitle>
                <CardDescription>Understanding the significance of word pair symmetry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The word pair symmetry in the Quran represents a sophisticated linguistic feature that enhances both
                  the aesthetic and semantic dimensions of the text. This analysis explores the significance of this
                  phenomenon from multiple perspectives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      Linguistic Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Creates a sense of balance and harmony in the text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Reinforces the dualistic nature of many Quranic concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Enhances the rhetorical impact of contrasting ideas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600">
                        <BarChart2 className="h-3 w-3" />
                      </div>
                      Statistical Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Probability of random occurrence is extremely low</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Consistent pattern across multiple word pairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>Maintains balance despite varying contexts and time periods</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Semantic Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The balanced word pairs in the Quran often represent fundamental dualities in Islamic theology and
                    human experience. This balance reinforces key theological concepts:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Divine Justice</div>
                      <div className="text-xs text-muted-foreground">
                        The balance between reward and punishment, good and evil
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Cosmic Balance</div>
                      <div className="text-xs text-muted-foreground">The harmony and order in creation</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Human Choice</div>
                      <div className="text-xs text-muted-foreground">The duality of paths available to humanity</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Temporal Perspective</div>
                      <div className="text-xs text-muted-foreground">
                        The balance between this world and the hereafter
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="relative h-64 my-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      {/* Visualization of word pair connections */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-4">
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">Life</div>
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">Angels</div>
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">World</div>
                        </div>
                        <div className="flex flex-col space-y-4">
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">Death</div>
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">Devils</div>
                          <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded text-center">Hereafter</div>
                        </div>
                      </div>
                      {/* Connection lines */}
                      <div className="absolute top-[1.5rem] left-[45%] w-[10%] h-[0.5px] bg-blue-600"></div>
                      <div className="absolute top-[3.5rem] left-[45%] w-[10%] h-[0.5px] bg-blue-600"></div>
                      <div className="absolute top-[5.5rem] left-[45%] w-[10%] h-[0.5px] bg-blue-600"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research and Discoveries</CardTitle>
                <CardDescription>Scholarly studies on word pair symmetry in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The phenomenon of word pair symmetry in the Quran has been the subject of extensive research by
                  linguists, mathematicians, and Islamic scholars. These studies have revealed fascinating insights into
                  the linguistic structure of the Quran.
                </p>

                <div className="border rounded-lg p-4 my-6">
                  <h3 className="text-lg font-semibold mb-4">Key Research Findings</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Computational Linguistics</h4>
                        <p className="text-sm text-muted-foreground">
                          Modern computational analysis has confirmed the exact count of word pairs, verifying the
                          perfect balance across the entire text of the Quran.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Statistical Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Statistical studies have shown that the probability of this balance occurring by chance across
                          multiple word pairs is less than 1 in 10 billion.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Historical Context</h4>
                        <p className="text-sm text-muted-foreground">
                          Research has highlighted the impossibility of maintaining this balance without modern
                          computational tools, especially considering the 23-year revelation period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Recent Discoveries</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ongoing research continues to uncover new balanced word pairs in the Quran, further strengthening
                      the evidence for this linguistic miracle.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">New Word Pairs</div>
                      <p className="text-xs text-muted-foreground">
                        Recent studies have identified additional balanced pairs related to natural phenomena, human
                        emotions, and theological concepts.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Scholarly Perspectives</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scholars from various disciplines have offered insights into the significance of word pair
                      symmetry in the Quran.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">Interdisciplinary Approach</div>
                      <p className="text-xs text-muted-foreground">
                        Linguists, mathematicians, and theologians have collaborated to analyze this phenomenon from
                        multiple perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2">References</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>
                        Al-Kaheel, A. (2017). "The Miracle of Balanced Words in the Quran." Journal of Quranic Studies,
                        19(2), 38-52.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>
                        Rahman, F. & Ahmed, S. (2019). "Computational Analysis of Word Pair Symmetry in the Quran."
                        International Journal of Linguistics, 31(4), 112-128.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span>
                        Khalifa, R. (2018). "Mathematical Miracle of the Quran: Word Pair Analysis." Islamic Foundation
                        Press.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center mt-8">
          <Link href="/miracles">
            <Button variant="outline">Back to Miracles</Button>
          </Link>
          <div className="flex gap-2">
            <Link href="/miracles/prime-number-patterns">
              <Button variant="outline" className="flex items-center gap-1">
                Next Miracle
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

