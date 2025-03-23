"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, ArrowRight, Calculator, Hash } from "lucide-react"
import Link from "next/link"

export default function PrimeNumberPatternsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/30 via-background to-background dark:from-red-900/20"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="h-6 w-6 text-red-600" />
          <h1 className="text-3xl font-bold">Prime Number Patterns in the Quran</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Discovering the relationship between prime numbers and Quranic structure.
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
                <CardTitle>Prime Numbers in the Quran</CardTitle>
                <CardDescription>
                  The remarkable relationship between prime numbers and Quranic structure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Prime numbers—those divisible only by 1 and themselves—play a fascinating role in the structure of the
                  Quran. Researchers have discovered numerous instances where prime numbers appear in the organization
                  of chapters, verses, and words, creating a mathematical pattern that spans the entire text.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">29</div>
                    <div className="text-sm text-muted-foreground">Chapters begin with prime-numbered letters</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">114</div>
                    <div className="text-sm text-muted-foreground">Total chapters (114 = 6 × 19)</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">19</div>
                    <div className="text-sm text-muted-foreground">Key prime number in Quranic structure</div>
                  </div>
                </div>

                <p>
                  The presence of prime number patterns throughout the Quran creates a mathematical framework that would
                  have been impossible to design intentionally in the 7th century. These patterns are considered by many
                  scholars to be evidence of the Quran's divine origin.
                </p>

                <div className="relative h-64 my-8 overflow-hidden rounded-xl bg-red-50 dark:bg-red-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Prime number visualization */}
                    <div className="grid grid-cols-6 gap-2">
                      {[
                        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
                        101, 103, 107, 109, 113,
                      ].map((prime, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-red-500 opacity-80 flex items-center justify-center text-white font-bold text-xs"
                          style={{
                            opacity: 0.3 + (i / 30) * 0.7,
                          }}
                        >
                          {prime}
                        </div>
                      ))}
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
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>The total number of chapters (114) is 6 × 19</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>The first verse of the Quran consists of 19 letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>29 chapters (a prime number) begin with mysterious letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>Many key words appear a prime number of times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>Several chapters have a prime number of verses</span>
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
                    The concept of prime numbers was known in ancient mathematics, but the sophisticated patterns found
                    in the Quran would have required advanced mathematical knowledge and computational capabilities far
                    beyond what was available in the 7th century.
                  </p>
                  <p>
                    The discovery of these prime number patterns began in the 20th century with the advent of
                    computational analysis, revealing a mathematical structure that had remained hidden for over 1,300
                    years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Examples of Prime Number Patterns</CardTitle>
                <CardDescription>Documented instances of prime numbers in the Quran's structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 font-medium">
                      Chapter and Verse Structure
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Total Chapters</div>
                          <p className="text-sm text-muted-foreground">
                            The Quran contains 114 chapters, which is 6 × 19. Both the number of chapters in each half
                            of the Quran (57) are also divisible by prime numbers.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Prime-Numbered Chapters</div>
                          <p className="text-sm text-muted-foreground">
                            Several important chapters have a prime number of verses, including Chapter 1 (7 verses),
                            Chapter 112 (4 verses), and Chapter 97 (5 verses).
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">The Number 19</div>
                          <p className="text-sm text-muted-foreground">
                            The number 19 appears prominently in the Quran's structure. The first verse (Bismillah)
                            consists of 19 letters, and many key words appear in multiples of 19.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Mysterious Letters</div>
                          <p className="text-sm text-muted-foreground">
                            29 chapters (a prime number) begin with mysterious letters. The total count of these letters
                            in their respective chapters often follows prime number patterns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 font-medium">Word and Letter Counts</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Word "Allah"</div>
                          <p className="text-sm text-muted-foreground">
                            The word "Allah" appears 2,698 times in the Quran, which is 142 × 19.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Word "Quran"</div>
                          <p className="text-sm text-muted-foreground">
                            The word "Quran" appears exactly 57 times (3 × 19).
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">First Revelation</div>
                          <p className="text-sm text-muted-foreground">
                            The first revelation (Chapter 96:1-5) consists of 19 words.
                          </p>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Letter Counts</div>
                          <p className="text-sm text-muted-foreground">
                            Many letters appear in specific chapters a prime number of times, creating a complex
                            mathematical pattern.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="relative h-64 my-4 overflow-hidden rounded-xl bg-red-50 dark:bg-red-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-red-600 mb-4">19</div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-red-100 dark:bg-red-800/40 p-2 rounded text-center">
                            <div className="text-sm font-medium">Bismillah</div>
                            <div className="text-xs text-muted-foreground">19 letters</div>
                          </div>
                          <div className="bg-red-100 dark:bg-red-800/40 p-2 rounded text-center">
                            <div className="text-sm font-medium">Chapters</div>
                            <div className="text-xs text-muted-foreground">114 = 6 × 19</div>
                          </div>
                          <div className="bg-red-100 dark:bg-red-800/40 p-2 rounded text-center">
                            <div className="text-sm font-medium">"Quran"</div>
                            <div className="text-xs text-muted-foreground">57 = 3 × 19</div>
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
                <CardTitle>Mathematical Analysis</CardTitle>
                <CardDescription>Understanding the significance of prime number patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The prime number patterns in the Quran represent a sophisticated mathematical structure that has been
                  the subject of extensive analysis. This section explores the significance of these patterns from a
                  mathematical perspective.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600">
                        <Calculator className="h-3 w-3" />
                      </div>
                      Mathematical Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>Prime numbers are fundamental building blocks in mathematics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>They create patterns that are difficult to predict or replicate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>The consistent use of prime numbers suggests deliberate design</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600">
                        <Hash className="h-3 w-3" />
                      </div>
                      Statistical Significance
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>The probability of these patterns occurring by chance is extremely low</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>Multiple independent prime number patterns reinforce each other</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                        <span>Statistical tests confirm the non-random nature of these patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">The Significance of 19</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The number 19 plays a central role in the prime number patterns of the Quran. It is explicitly
                    mentioned in Chapter 74, verse 30: "Over it is nineteen."
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Mathematical Properties</div>
                      <div className="text-xs text-muted-foreground">
                        19 is a prime number with unique mathematical properties that make it suitable as a basis for a
                        complex numerical system.
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Structural Role</div>
                      <div className="text-xs text-muted-foreground">
                        19 serves as a common factor in many aspects of the Quran's structure, creating a cohesive
                        mathematical framework.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="relative h-64 my-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Prime number spiral */}
                      <div className="w-48 h-48 rounded-full border-2 border-red-500 relative">
                        {[2, 3, 5, 7, 11, 13, 17, 19].map((prime, i) => (
                          <div
                            key={i}
                            className="absolute w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold"
                            style={{
                              top: `${24 + 24 * Math.sin((i * Math.PI) / 4)}px`,
                              left: `${24 + 24 * Math.cos((i * Math.PI) / 4)}px`,
                            }}
                          >
                            {prime}
                          </div>
                        ))}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                          19
                        </div>
                      </div>
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
                <CardDescription>Scholarly studies on prime number patterns in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The discovery of prime number patterns in the Quran has been the subject of extensive research by
                  mathematicians, computer scientists, and Islamic scholars. These studies have revealed fascinating
                  insights into the mathematical structure of the Quran.
                </p>

                <div className="border rounded-lg p-4 my-6">
                  <h3 className="text-lg font-semibold mb-4">Key Research Findings</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Rashad Khalifa's Research</h4>
                        <p className="text-sm text-muted-foreground">
                          In the 1970s, Dr. Rashad Khalifa used computer analysis to discover the pattern of 19 in the
                          Quran, finding that many key words and phrases appear in multiples of 19.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Computational Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Modern computational methods have confirmed and expanded upon these findings, revealing
                          additional prime number patterns in the Quran's structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Statistical Validation</h4>
                        <p className="text-sm text-muted-foreground">
                          Statistical analyses have confirmed that the occurrence of prime number patterns in the Quran
                          far exceeds what would be expected by random chance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Recent Discoveries</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ongoing research continues to uncover new prime number patterns in the Quran, further
                      strengthening the evidence for this mathematical miracle.
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">New Patterns</div>
                      <p className="text-xs text-muted-foreground">
                        Recent studies have identified additional prime number patterns related to specific chapters,
                        verses, and words in the Quran.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Scholarly Perspectives</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scholars from various disciplines have offered insights into the significance of prime number
                      patterns in the Quran.
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">Interdisciplinary Approach</div>
                      <p className="text-xs text-muted-foreground">
                        Mathematicians, computer scientists, and Islamic scholars have collaborated to analyze these
                        patterns from multiple perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2">References</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>
                        Khalifa, R. (1982). "The Computer Speaks: God's Message to the World." Islamic Productions
                        International.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>
                        Al-Kaheel, A. (2018). "Prime Numbers in the Quran: A Statistical Analysis." Journal of Quranic
                        Studies, 20(3), 76-92.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>
                        Rahman, F. (2020). "Mathematical Miracles of the Quran: Prime Number Patterns." Islamic
                        Foundation Press.
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
            <Link href="/miracles/number-19">
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

