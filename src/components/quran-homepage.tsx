"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, BookOpen, ChevronRight, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function QuranHomepage() {
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
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Mathematical Miracles in the Quran</h1>
          <p className="text-lg mb-6">
            Discover the remarkable numerical patterns and mathematical precision in the structure of the Holy Quran
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/miracles">
              <Button size="lg" className="gap-2">
                <Star className="h-4 w-4" />
                Explore Miracles
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Miracle */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">The Miracle of 114 Surahs</h2>
          <div className="flex items-center text-primary">
            <span className="mr-2 text-sm font-medium">Featured</span>
            <Star className="h-4 w-4 fill-primary" />
          </div>
        </div>
        <p className="text-muted-foreground">
          The perfect balance and harmony in the structure of the Quran reveals a remarkable mathematical precision
        </p>
      </div>

      {/* Visual Relationship Diagram - NEW */}
      <Card className="overflow-hidden border-primary/20">
        <CardHeader className="bg-primary/5">
          <CardTitle>The Perfect Match</CardTitle>
          <CardDescription>Visual representation of the remarkable numerical relationships</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Left Side - Odd Numbers */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-xl font-medium mb-2">57 Odd Numbers</div>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="text-4xl font-bold">6555</div>
                    <div className="text-sm text-muted-foreground mt-2">Sum of Odd Numbers</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-primary rotate-90 md:rotate-0" />
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="text-4xl font-bold">6555</div>
                    <div className="text-sm text-muted-foreground mt-2">Sum of Surah Numbers (1-114)</div>
                  </div>
                </div>

                <div className="text-center p-4 border border-dashed rounded-lg">
                  <div className="text-sm font-medium">The sum of odd numbers equals</div>
                  <div className="text-lg font-bold">the sum of all surah numbers</div>
                </div>
              </div>

              {/* Right Side - Even Numbers */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-xl font-medium mb-2">57 Even Numbers</div>
                  <div className="bg-secondary/10 rounded-lg p-6">
                    <div className="text-4xl font-bold">6236</div>
                    <div className="text-sm text-muted-foreground mt-2">Sum of Even Numbers</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-secondary rotate-90 md:rotate-0" />
                </div>

                <div className="text-center">
                  <div className="bg-secondary/10 rounded-lg p-6">
                    <div className="text-4xl font-bold">6236</div>
                    <div className="text-sm text-muted-foreground mt-2">Total Verses in the Quran</div>
                  </div>
                </div>

                <div className="text-center p-4 border border-dashed rounded-lg">
                  <div className="text-sm font-medium">The sum of even numbers equals</div>
                  <div className="text-lg font-bold">the total number of verses</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg max-w-2xl text-center">
              <p className="text-sm">
                When adding each surah number with its position, we get exactly 57 odd numbers and 57 even numbers. This
                perfect balance reveals a remarkable mathematical precision in the Quran&apos;s structure.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Miracle Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Miracle Explanation */}
          <Card className="overflow-hidden border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Perfect Balance in Numbers</CardTitle>
                  <CardDescription>The harmony of even and odd numbers</CardDescription>
                </div>
                <Calculator className="h-8 w-8 text-primary opacity-80" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
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
                    <Button variant="outline" size="sm" onClick={() => toggleCalculation("surahSum")} className="mt-2">
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
                      When adding each surah number with its position, there are exactly <strong>57 odd numbers</strong>{" "}
                      and <strong>57 even numbers</strong>
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
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card>
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
              <CardDescription>The remarkable numerical relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-1">Sum of Even Numbers = Total Verses</h4>
                      <p className="text-sm text-muted-foreground">
                        The sum of all even numbers (6236) equals the exact number of verses in the Quran, connecting
                        the surah structure to verse count.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-1">Sum of Odd Numbers = Sum of Surah Numbers</h4>
                      <p className="text-sm text-muted-foreground">
                        The sum of all odd numbers (6555) equals the sum of all surah numbers from 1 to 114, creating a
                        harmonious mathematical pattern.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-1">Perfect Balance: 57 Odd and 57 Even Numbers</h4>
                      <p className="text-sm text-muted-foreground">
                        The even distribution of 57 odd and 57 even numbers demonstrates perfect balance in the
                        Quran&apos;s structure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Visual Representation */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Visual Representation</CardTitle>
              <CardDescription>The balance of even and odd numbers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Pie Chart */}
                <div className="h-[300px] w-full flex items-center justify-center p-4">
                  <div className="relative w-[220px] h-[220px]">
                    {/* Simple CSS Pie Chart */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/80"></div>
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/80"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background rounded-full w-[140px] h-[140px] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm font-medium">50% / 50%</div>
                          <div className="text-xs text-muted-foreground">Perfect Balance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-primary/80 rounded-sm mr-2"></div>
                      <span>Odd Numbers (57)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-secondary/80 rounded-sm mr-2"></div>
                      <span>Even Numbers (57)</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="h-[300px] w-full p-4">
                  <div className="flex h-full flex-col">
                    <div className="text-sm text-muted-foreground mb-2">Sum comparison</div>
                    <div className="relative flex-1">
                      <div className="absolute inset-0 flex items-end">
                        <div className="w-1/2 px-4 flex flex-col items-center">
                          <div className="text-sm mb-2">Sum of Odd Numbers</div>
                          <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                            <div className="text-white font-bold text-center pt-2">6555</div>
                          </div>
                        </div>
                        <div className="w-1/2 px-4 flex flex-col items-center">
                          <div className="text-sm mb-2">Sum of Even Numbers</div>
                          <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "85%" }}>
                            <div className="text-white font-bold text-center pt-2">6236</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Numbers */}
          <Card>
            <CardHeader>
              <CardTitle>Key Numbers</CardTitle>
              <CardDescription>The significant numerical values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">114</div>
                  <div className="text-sm font-medium">Total Surahs</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">6236</div>
                  <div className="text-sm font-medium">Total Verses</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6555</div>
                  <div className="text-sm font-medium">Sum of Surah Numbers</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">57</div>
                  <div className="text-sm font-medium">Even/Odd Count</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* More Miracles Coming Soon */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
            <div>
              <h3 className="text-xl font-medium mb-2">More Numerical Miracles Coming Soon</h3>
              <p className="text-muted-foreground">
                We are continuously researching and adding more mathematical patterns and numerical miracles found in
                the Holy Quran.
              </p>
            </div>
            <Link href="/miracles">
              <Button className="gap-2">
                Explore All Miracles
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <div className="text-center text-sm text-muted-foreground pt-4 border-t">
        <p>
          This application is dedicated to exploring the mathematical and scientific aspects of the Holy Quran.
          <br />
          Use the tabs above to access additional features like analytics, word analysis, and search.
        </p>
      </div>
    </div>
  )
}

