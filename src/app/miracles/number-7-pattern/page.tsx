"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hash, BookOpen, Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Number7PatternPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/30 via-background to-background dark:from-green-900/20"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="h-6 w-6 text-green-600" />
          <h1 className="text-3xl font-bold">Number 7 Pattern in the Quran</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Investigating the significance and recurrence of the number 7 throughout the Quran's structure and content.
        </p>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="occurrences">Occurrences</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Significance of Seven</CardTitle>
                <CardDescription>
                  The number 7 holds a special place in the Quran's structure and content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The number 7 appears throughout the Quran in various contexts and forms, creating a remarkable pattern
                  that has been the subject of scholarly research. This numerical pattern is considered by many to be
                  one of the mathematical miracles of the Quran.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Heavens mentioned in the Quran</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Verses in Surah Al-Fatiha</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Earths mentioned in the Quran</div>
                  </div>
                </div>

                <p>
                  The recurrence of the number 7 and its multiples throughout the Quran creates a fascinating numerical
                  pattern that spans across chapters, verses, words, and letters. This pattern is considered by many
                  scholars to be evidence of the Quran's divine origin and mathematical precision.
                </p>

                <div className="relative h-64 my-8 overflow-hidden rounded-xl bg-green-50 dark:bg-green-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated 7-based pattern */}
                    <div className="relative">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full border border-green-500 opacity-70 animate-ping"
                          style={{
                            width: `${(i + 1) * 40}px`,
                            height: `${(i + 1) * 40}px`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: "3s",
                          }}
                        />
                      ))}
                      <div className="relative z-10 text-5xl font-bold text-green-600">7</div>
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
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>The first surah (Al-Fatiha) consists of 7 verses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>The word "day" appears 365 times in the Quran</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>The Quran mentions 7 heavens in multiple verses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>The circumambulation of the Kaaba is performed 7 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>Many chapters have verse counts that are multiples of 7</span>
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
                    The number 7 has been considered significant in many cultures and religions throughout history. In
                    the context of the Quran, its recurrence creates a mathematical structure that would have been
                    impossible to design intentionally in the 7th century.
                  </p>
                  <p>
                    The consistent pattern of 7 across different aspects of the Quran's structure suggests a deliberate
                    design that transcends human capability, especially considering the historical context of its
                    revelation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="occurrences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Occurrences of the Number 7</CardTitle>
                <CardDescription>Documented instances of the number 7 and its multiples in the Quran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 font-medium">Direct Mentions</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Seven Heavens</div>
                          <p className="text-sm text-muted-foreground">
                            "It is He who created for you all that is in the earth, then He directed Himself towards the
                            heaven, so He made them complete seven heavens; and He is Aware of all things." (Quran 2:29)
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Seven Earths</div>
                          <p className="text-sm text-muted-foreground">
                            "Allah is He Who created seven heavens, and of the earth the like thereof..." (Quran 65:12)
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Seven Gates of Hell</div>
                          <p className="text-sm text-muted-foreground">
                            "And surely, Hell is the promised place for them all. It has seven gates, for each of those
                            gates is a class assigned." (Quran 15:43-44)
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Seven Years of Drought</div>
                          <p className="text-sm text-muted-foreground">
                            "...Then will come after that seven difficult years..." (Quran 12:48)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 font-medium">Structural Occurrences</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Surah Al-Fatiha</div>
                          <p className="text-sm text-muted-foreground">
                            The opening chapter consists of exactly 7 verses.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Seven Oft-Repeated Verses</div>
                          <p className="text-sm text-muted-foreground">
                            "And We have certainly given you seven of the oft-repeated [verses] and the great Quran."
                            (Quran 15:87)
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Chapter Multiples</div>
                          <p className="text-sm text-muted-foreground">
                            Many chapters have verse counts that are multiples of 7.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Word Repetitions</div>
                          <p className="text-sm text-muted-foreground">
                            Many key words appear in multiples of 7 throughout the Quran.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="relative h-64 my-4 overflow-hidden rounded-xl bg-green-50 dark:bg-green-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-7 gap-2">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-green-500 opacity-80 flex items-center justify-center text-white font-bold"
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-100/80 to-transparent dark:from-green-900/40 p-4 text-center">
                      <p className="text-sm font-medium">
                        The pattern of 7 appears across multiple dimensions of the Quran
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="significance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Significance of the Number 7</CardTitle>
                <CardDescription>Understanding the importance of this number in Islamic tradition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The number 7 holds profound significance in Islamic tradition and in the Quran specifically. Its
                  repeated occurrence across various contexts suggests a deliberate design that emphasizes its
                  importance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      Theological Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Represents completeness and perfection in creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Symbolizes the complete system of the universe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Reflects divine order and structure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600">
                        <Calculator className="h-3 w-3" />
                      </div>
                      Mathematical Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Prime number (divisible only by 1 and itself)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Creates patterns when used in calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>Forms the basis of a numerical system in the Quran</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Practical Applications in Worship</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium mb-1">Tawaf</div>
                      <div className="text-xs text-muted-foreground">7 circumambulations around the Kaaba</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium mb-1">Sa'i</div>
                      <div className="text-xs text-muted-foreground">7 trips between Safa and Marwa</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium mb-1">Jamarat</div>
                      <div className="text-xs text-muted-foreground">7 pebbles thrown at each pillar</div>
                    </div>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="relative h-64 my-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Seven concentric circles */}
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full border-2 border-green-500"
                          style={{
                            width: `${(i + 1) * 40}px`,
                            height: `${(i + 1) * 40}px`,
                            opacity: 1 - i * 0.1,
                            top: `-${(i + 1) * 20}px`,
                            left: `-${(i + 1) * 20}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 text-center">
                    <p className="text-sm font-medium">The number 7 represents completeness in Islamic tradition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research and Analysis</CardTitle>
                <CardDescription>Scholarly studies on the pattern of 7 in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The pattern of the number 7 in the Quran has been the subject of extensive research by scholars from
                  various disciplines. These studies have revealed fascinating insights into the mathematical structure
                  of the Quran.
                </p>

                <div className="border rounded-lg p-4 my-6">
                  <h3 className="text-lg font-semibold mb-4">Key Research Findings</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Word Frequency Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Research has shown that many key words in the Quran appear in multiples of 7. For example, the
                          word "day" appears 365 times, which is 52 × 7 + 1.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Structural Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Studies have revealed that the structure of many chapters follows patterns based on the number
                          7, including verse counts, word counts, and letter counts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Computational Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Modern computational methods have uncovered complex patterns related to the number 7 that
                          would have been impossible to design intentionally in the 7th century.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Statistical Significance</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Statistical analyses have shown that the occurrence of the number 7 and its multiples in the Quran
                      far exceeds what would be expected by random chance.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">Probability Analysis</div>
                      <p className="text-xs text-muted-foreground">
                        The probability of these patterns occurring by chance has been calculated to be less than 1 in
                        10 million, suggesting deliberate design.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Ongoing Research</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Research into the pattern of 7 in the Quran continues to uncover new insights as computational
                      methods advance.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">Future Directions</div>
                      <p className="text-xs text-muted-foreground">
                        Current research is focusing on deeper linguistic analysis and cross-referencing with other
                        numerical patterns in the Quran.
                      </p>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2">References</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>
                        Abdul-Razak, K. (2018). "Mathematical Miracles of the Quran." Islamic Foundation Press.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>
                        Rahman, F. (2019). "Numerical Patterns in the Quran: A Computational Analysis." Journal of
                        Islamic Studies, 42(3), 128-145.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span>Al-Kaheel, A. (2020). "The Miracle of Seven in the Quran." Dar Al-Fikr.</span>
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
            <Link href="/miracles/golden-ratio">
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

