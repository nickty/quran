"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calculator, Info } from "lucide-react"

export default function QuranNumericalMiracles() {
  const [showCalculation, setShowCalculation] = useState<Record<string, boolean>>({
    surahSum: false,
    evenOddSum: false,
  })

  // Toggle calculation visibility
  const toggleCalculation = (key: string) => {
    setShowCalculation((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Numerical Miracles in the Quran</h2>
        <p className="text-muted-foreground">
          Discover the mathematical patterns and numerical harmony within the Holy Quran
        </p>
      </div>

      <Tabs defaultValue="surah-verse" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="surah-verse">Surah & Verse Numbers</TabsTrigger>
          <TabsTrigger value="more-miracles">More Miracles</TabsTrigger>
        </TabsList>

        <TabsContent value="surah-verse" className="mt-6 space-y-6">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>The Miracle of 114 Surahs</CardTitle>
                  <CardDescription>Perfect balance in the structure of the Quran</CardDescription>
                </div>
                <Calculator className="h-8 w-8 text-primary opacity-80" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                        1
                      </span>
                      Sum of Surah Numbers
                    </h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="mb-2">
                        The sum of all surah numbers from 1 to 114 equals <strong>6555</strong>
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCalculation("surahSum")}
                        className="mt-2"
                      >
                        {showCalculation.surahSum ? "Hide Calculation" : "Show Calculation"}
                      </Button>

                      {showCalculation.surahSum && (
                        <div className="mt-4 p-3 border rounded-md text-sm">
                          <p className="mb-2">
                            Using the formula for sum of arithmetic sequence: <br />
                            <span className="font-mono">Sum = n(n+1)/2</span>
                          </p>
                          <p className="mb-2">
                            <span className="font-mono">Sum = 114 × (114+1)/2</span>
                          </p>
                          <p className="mb-2">
                            <span className="font-mono">Sum = 114 × 115/2</span>
                          </p>
                          <p className="mb-2">
                            <span className="font-mono">Sum = 114 × 57.5</span>
                          </p>
                          <p className="font-mono">Sum = 6555</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                        2
                      </span>
                      Even & Odd Distribution
                    </h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <p>
                        When adding each surah number with its position, there are exactly{" "}
                        <strong>57 odd numbers</strong> and <strong>57 even numbers</strong>
                      </p>
                      <div className="flex justify-center gap-8 mt-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold">57</div>
                          <div className="text-sm text-muted-foreground">Odd Numbers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">57</div>
                          <div className="text-sm text-muted-foreground">Even Numbers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                        3
                      </span>
                      Sum of Even Numbers
                    </h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="mb-2">
                        The sum of all even numbers equals <strong>6236</strong>, which is exactly the{" "}
                        <strong>total number of verses</strong> in the Quran
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCalculation("evenOddSum")}
                        className="mt-2"
                      >
                        {showCalculation.evenOddSum ? "Hide Calculation" : "Show Calculation"}
                      </Button>

                      {showCalculation.evenOddSum && (
                        <div className="mt-4 p-3 border rounded-md text-sm">
                          <p className="mb-2">
                            <span className="font-mono">
                              Sum of even numbers when adding surah number with its position = 6236
                            </span>
                          </p>
                          <p className="mb-2">
                            <span className="font-mono">Total verses in the Quran = 6236</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                        4
                      </span>
                      Sum of Odd Numbers
                    </h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <p>
                        The sum of all odd numbers equals <strong>6555</strong>, which is exactly the{" "}
                        <strong>sum of all surah numbers</strong> from 1 to 114
                      </p>
                      <div className="flex justify-center mt-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold">6555</div>
                          <div className="text-sm text-muted-foreground">Sum of Odd Numbers = Sum of Surah Numbers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 flex justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <Info className="h-4 w-4 mr-2" />
                These numerical patterns highlight the mathematical precision in the Quran's structure
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Representation</CardTitle>
              <CardDescription>The balance of even and odd numbers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative h-[300px] border rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-primary/10 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold">57</div>
                      <div className="text-lg">Odd Numbers</div>
                      <div className="mt-2 text-2xl font-semibold">6555</div>
                      <div className="text-sm text-muted-foreground">Sum</div>
                    </div>
                    <div className="w-1/2 bg-secondary/10 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold">57</div>
                      <div className="text-lg">Even Numbers</div>
                      <div className="mt-2 text-2xl font-semibold">6236</div>
                      <div className="text-sm text-muted-foreground">Sum</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
                    Total Surahs: 114 | Total Verses: 6236 | Sum of Surah Numbers: 6555
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Perfect Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The even distribution of 57 odd and 57 even numbers demonstrates perfect balance in the Quran's
                        structure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Verse Connection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The sum of even numbers (6236) equals the exact number of verses in the Quran, connecting the
                        surah structure to verse count.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Mathematical Harmony</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The sum of odd numbers (6555) equals the sum of all surah numbers, creating a harmonious
                        mathematical pattern.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="more-miracles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>More Numerical Miracles</CardTitle>
              <CardDescription>Additional mathematical patterns in the Quran</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4">
                  <Calculator className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  More numerical miracles and mathematical patterns will be added to this section in future updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

