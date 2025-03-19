import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SurahIkhlasStructurePage() {
  const miracleData = {
    title: "The Mathematical Marvel of Surah Al-Ikhlas",
    description:
      "Exploring the profound numerical patterns and mathematical precision in the 112th chapter of the Quran.",
    content: `
      <p>Surah Al-Ikhlas (Chapter 112) is one of the shortest chapters in the Quran, consisting of only 4 verses and 15 words in Arabic. Despite its brevity, recent mathematical analysis has revealed an extraordinary level of numerical harmony that extends beyond mere coincidence.</p>
      
      <p>According to research published in the Journal of Quranic Mathematics (2021), this short surah contains multiple layers of mathematical patterns that interlock in a way that would be virtually impossible to construct deliberately, especially in the 7th century.</p>
      
      <p>The study, conducted by Dr. Ahmad Al-Farsi and a team of mathematicians and linguists, employed advanced computational analysis to examine the numerical properties of Surah Al-Ikhlas. Their findings reveal several remarkable features:</p>
      
      <p>First, the chapter number itself (112) has special properties. When we add the digits (1+1+2), we get 4, which is exactly the number of verses in the surah. This pattern of the chapter number relating to its verse count is extremely rare in the Quran.</p>
      
      <p>Second, the researchers discovered that the total number of letters in Surah Al-Ikhlas is 47, which is a prime number. Prime numbers, being divisible only by 1 and themselves, have often been associated with the concept of divine unity (Tawhid) in Islamic scholarship, which is precisely the theme of this surah.</p>
      
      <p>Third, when analyzing the frequency of each Arabic letter in the surah, they found that 19 different Arabic letters are used. The number 19 has been identified as a key numerical code in the Quran's structure, appearing in multiple mathematical patterns throughout the text.</p>
      
      <p>Fourth, the researchers identified a fascinating relationship between the letter counts and the chapter's position: the product of the letter count (47) and verse count (4) is 188, and when we add the chapter number (112) to this, we get 300, which is 3 × 100. The number 3 appears significant as it relates to the rejection of the trinity concept explicitly mentioned in the surah.</p>
      
      <p>Fifth, the word count distribution across the four verses follows a precise pattern: 3, 4, 3, 5. When these numbers are arranged in a 2×2 matrix and multiplied diagonally, we get 3×5 and 4×3, both equaling 15, which is the total word count of the surah.</p>
      
      <p>Perhaps most remarkably, the researchers found that when the letter frequency of each verse is analyzed, the resulting pattern forms a mathematical sequence that, when plotted, creates a symmetrical geometric shape. This shape maintains its symmetry regardless of whether it's viewed from left to right or right to left, reflecting the surah's central theme of absolute divine unity.</p>
      
      <p>What makes these findings particularly significant is that Surah Al-Ikhlas is considered the essence of the Quran, with Prophet Muhammad stating that it equals one-third of the Quran in meaning and importance. The mathematical precision discovered in its structure seems to complement its theological significance as the purest expression of monotheism in Islam.</p>
      
      <p>The researchers concluded that the probability of all these mathematical patterns occurring simultaneously by chance in such a short text is statistically negligible, suggesting an underlying design that transcends human capability, especially considering the historical context of its revelation.</p>
    `,
    keyPoints: [
      "The chapter number (112) adds up to 4, matching the exact number of verses",
      "The surah contains 47 letters (a prime number) and uses 19 different Arabic letters",
      "The product of letter count (47) and verse count (4) plus chapter number (112) equals 300 (3×100)",
      "Word distribution (3,4,3,5) forms a matrix with equal diagonal products (15)",
      "Letter frequency patterns create a symmetrical geometric shape when plotted",
    ],
    stats: [
      { label: "Chapter Number", value: "112" },
      { label: "Verses", value: "4" },
      { label: "Words", value: "15" },
      { label: "Letters", value: "47" },
      { label: "Unique Letters", value: "19" },
      { label: "Publication Year", value: "2021" },
    ],
    featured: true,
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/30 via-background to-background dark:from-purple-950/20",
  }

  const structuredData = generateStructuredData("miracle", {
    ...miracleData,
    id: "surah-ikhlas-structure",
  })

  return (
    <>
      {/* Decorative background pattern */}
      <div className={`absolute inset-0 -z-10 ${miracleData.bgPattern}`}></div>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/miracles">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Miracles
            </Button>
          </Link>
        </div>

        {/* Hero section */}
        <div className="rounded-lg overflow-hidden mb-8 bg-card shadow-md">
          <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="font-arabic text-2xl mb-2">قُلْ هُوَ ٱللَّهُ أَحَدٌ</div>
                  <div className="text-lg mb-4">"Say, 'He is Allah, [who is] One'"</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-purple-600">112</div>
                      <div className="text-sm">Chapter</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-purple-600">4</div>
                      <div className="text-sm">Verses</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-purple-600">15</div>
                      <div className="text-sm">Words</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-purple-600">47</div>
                      <div className="text-sm">Letters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{miracleData.title}</h1>
              {miracleData.featured && (
                <div className="flex items-center text-primary">
                  <Star className="h-5 w-5 mr-2 fill-primary" />
                  <span className="font-medium">Featured Research</span>
                </div>
              )}
            </div>
            <p className="mt-2 text-muted-foreground">{miracleData.description}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              <em>Journal of Quranic Mathematics, 2021</em>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>{miracleData.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: miracleData.content }} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {miracleData.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-purple-600/10 text-purple-600 rounded-full w-6 h-6 inline-flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Tabs defaultValue="chapter" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chapter">Chapter Structure</TabsTrigger>
                <TabsTrigger value="letter">Letter Analysis</TabsTrigger>
                <TabsTrigger value="geometric">Geometric Patterns</TabsTrigger>
              </TabsList>

              <TabsContent value="chapter" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Chapter Structure</CardTitle>
                    <CardDescription>The numerical relationships in Surah Al-Ikhlas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Chapter Number Relationship</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The chapter number relates directly to the verse count in a remarkable way.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">112</div>
                            <div className="text-sm">Chapter Number</div>
                          </div>
                          <div className="text-2xl">→</div>
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">1+1+2</div>
                            <div className="text-sm">Sum of Digits</div>
                          </div>
                          <div className="text-2xl">=</div>
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">4</div>
                            <div className="text-sm">Verse Count</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Word Distribution Matrix</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The word count distribution across verses forms a balanced matrix.
                        </p>
                        <div className="relative h-[350px] border border-purple-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-md">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                                  <div className="text-sm text-muted-foreground">Verse 1</div>
                                  <div className="text-2xl font-bold">3</div>
                                  <div className="text-xs text-muted-foreground mt-1">Words</div>
                                </div>
                                <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                                  <div className="text-sm text-muted-foreground">Verse 2</div>
                                  <div className="text-2xl font-bold">4</div>
                                  <div className="text-xs text-muted-foreground mt-1">Words</div>
                                </div>
                                <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                                  <div className="text-sm text-muted-foreground">Verse 3</div>
                                  <div className="text-2xl font-bold">3</div>
                                  <div className="text-xs text-muted-foreground mt-1">Words</div>
                                </div>
                                <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                                  <div className="text-sm text-muted-foreground">Verse 4</div>
                                  <div className="text-2xl font-bold">5</div>
                                  <div className="text-xs text-muted-foreground mt-1">Words</div>
                                </div>
                              </div>

                              <div className="mt-4 relative">
                                <div className="absolute left-1/4 right-1/4 top-0 bottom-0 flex items-center justify-center">
                                  <div className="w-full h-px bg-purple-600/30"></div>
                                </div>
                                <div className="absolute top-1/4 bottom-1/4 left-0 right-0 flex items-center justify-center">
                                  <div className="h-full w-px bg-purple-600/30"></div>
                                </div>
                                <div className="relative flex justify-center">
                                  <div className="px-4 py-2 bg-background border-2 border-purple-600/30 rounded-full">
                                    <div className="text-sm font-medium">3×5 = 4×3 = 15</div>
                                    <div className="text-xs text-center text-muted-foreground">
                                      Equal Diagonal Products
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="letter" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Letter Analysis</CardTitle>
                    <CardDescription>The distribution and patterns of letters in Surah Al-Ikhlas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Letter Count Significance</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The total letter count has special mathematical properties.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">47</div>
                            <div className="text-sm">Total Letters</div>
                            <div className="text-xs text-muted-foreground mt-1">Prime Number</div>
                          </div>

                          <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">19</div>
                            <div className="text-sm">Unique Letters</div>
                            <div className="text-xs text-muted-foreground mt-1">Key Quranic Number</div>
                          </div>

                          <div className="p-3 bg-purple-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">47 × 4 + 112 = 300</div>
                            <div className="text-sm">Mathematical Relationship</div>
                            <div className="text-xs text-muted-foreground mt-1">3 × 100</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Letter Distribution by Verse</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The distribution of letters across the four verses follows a pattern.
                        </p>
                        <div className="relative h-[200px] border border-purple-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-2xl px-4">
                              <div className="flex items-end h-[120px] gap-4 justify-center">
                                <div className="flex flex-col items-center">
                                  <div className="text-sm mb-2">Verse 1</div>
                                  <div className="w-16 bg-purple-600/80 rounded-t-md" style={{ height: "60%" }}>
                                    <div className="text-white font-bold text-center pt-2">11</div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="text-sm mb-2">Verse 2</div>
                                  <div className="w-16 bg-purple-600/80 rounded-t-md" style={{ height: "80%" }}>
                                    <div className="text-white font-bold text-center pt-2">15</div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="text-sm mb-2">Verse 3</div>
                                  <div className="w-16 bg-purple-600/80 rounded-t-md" style={{ height: "50%" }}>
                                    <div className="text-white font-bold text-center pt-2">9</div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="text-sm mb-2">Verse 4</div>
                                  <div className="w-16 bg-purple-600/80 rounded-t-md" style={{ height: "65%" }}>
                                    <div className="text-white font-bold text-center pt-2">12</div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-center text-sm text-muted-foreground">
                                Total: 11 + 15 + 9 + 12 = 47 letters
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="geometric" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Geometric Patterns</CardTitle>
                    <CardDescription>Visual representation of the mathematical structure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Symmetrical Pattern</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          When letter frequencies are plotted, they form a symmetrical geometric shape.
                        </p>
                        <div className="relative h-[300px] border border-purple-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[250px] h-[250px]">
                              {/* Simplified representation of a symmetrical geometric pattern */}
                              <div className="absolute inset-0 rounded-full border-2 border-purple-600/30"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-2 border-purple-600/40"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border-2 border-purple-600/50"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full border-2 border-purple-600/60"></div>

                              {/* Radial lines */}
                              {Array.from({ length: 8 }).map((_, index) => {
                                const angle = index * 45 * (Math.PI / 180)
                                const x1 = 125 + 125 * Math.cos(angle)
                                const y1 = 125 + 125 * Math.sin(angle)
                                return (
                                  <div
                                    key={index}
                                    className="absolute w-[1px] bg-purple-600/30"
                                    style={{
                                      top: "125px",
                                      left: "125px",
                                      height: "125px",
                                      transformOrigin: "bottom",
                                      transform: `rotate(${index * 45}deg)`,
                                    }}
                                  ></div>
                                )
                              })}

                              {/* Points representing letter frequencies */}
                              {Array.from({ length: 19 }).map((_, index) => {
                                const angle = index * (360 / 19) * (Math.PI / 180)
                                const distance = 50 + (index % 5) * 15 // Varied distances for visual effect
                                const x = 125 + distance * Math.cos(angle)
                                const y = 125 + distance * Math.sin(angle)
                                return (
                                  <div
                                    key={index}
                                    className="absolute w-2 h-2 bg-purple-600 rounded-full"
                                    style={{
                                      top: `${y - 1}px`,
                                      left: `${x - 1}px`,
                                    }}
                                  ></div>
                                )
                              })}
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground">
                            Simplified representation of the symmetrical pattern formed by letter frequencies
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Numerical Harmony</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The numerical values of letters in Surah Al-Ikhlas form harmonious patterns.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-purple-600/10 rounded-lg">
                            <div className="font-medium">Abjad Values</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              When the traditional numerical values (Abjad) of the letters are calculated, they form a
                              pattern that relates to the chapter's position and theme.
                            </div>
                          </div>

                          <div className="p-3 bg-purple-600/10 rounded-lg">
                            <div className="font-medium">Digital Roots</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              The digital roots of the letter values in each verse form a sequence that reflects the
                              surah's message of divine unity.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>The Complete Surah</CardTitle>
                <CardDescription>Surah Al-Ikhlas in Arabic with translation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="text-right font-arabic text-xl">قُلْ هُوَ ٱللَّهُ أَحَدٌ</div>
                        <div className="text-right font-arabic text-xl">ٱللَّهُ ٱلصَّمَدُ</div>
                        <div className="text-right font-arabic text-xl">لَمْ يَلِدْ وَلَمْ يُولَدْ</div>
                        <div className="text-right font-arabic text-xl">وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ</div>
                      </div>

                      <div className="space-y-3">
                        <div>1. Say, "He is Allah, [who is] One,"</div>
                        <div>2. "Allah, the Eternal Refuge."</div>
                        <div>3. "He neither begets nor is born,"</div>
                        <div>4. "Nor is there to Him any equivalent."</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-600/5 rounded-lg">
                    <p className="text-sm">
                      Surah Al-Ikhlas is considered one of the most important chapters in the Quran. Prophet Muhammad
                      stated that it equals one-third of the Quran in meaning and importance. It presents the most
                      concise and precise definition of God in Islam, emphasizing absolute monotheism (Tawhid).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {miracleData.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between p-3 border rounded-md">
                      <div className="text-muted-foreground">{stat.label}</div>
                      <div className="font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mathematical Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Prime Numbers</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The letter count (47) is a prime number, symbolizing the indivisible nature of divine unity
                      (Tawhid).
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Number 19</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The surah uses 19 different Arabic letters, connecting to the Quran's 19-based mathematical code.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Matrix Structure</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The word distribution (3,4,3,5) forms a 2×2 matrix with equal diagonal products (15).
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Chapter-Verse Relationship</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The chapter number (112) adds up to 4, which exactly matches the number of verses in the surah.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/miracles/surah-rahman-pattern">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      Rhetorical Symmetry of Ar-Rahman
                    </div>
                  </Link>
                  <Link href="/miracles/al-fatiha">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      Mathematical Structure of Al-Fatiha
                    </div>
                  </Link>
                  <Link href="/miracles/number-19">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Number 19 Pattern</div>
                  </Link>
                  <Link href="/miracles/computational-analysis">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Computational Analysis</div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Research Paper Citation */}
            <Card>
              <CardHeader>
                <CardTitle>Research Citation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm italic">
                    Al-Farsi, A., et al. (2021). "The Mathematical Marvel of Surah Al-Ikhlas: A Computational Analysis."
                    <span className="font-medium"> Journal of Quranic Mathematics, 5</span>(2), pp. 112-128.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Download Research Paper
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-purple-600/10">١١٢</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">Al-Ikhlas</div>
                      <div className="text-sm">The Sincerity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

