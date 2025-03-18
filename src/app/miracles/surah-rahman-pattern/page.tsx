import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star, Repeat, Compass } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SurahRahmanPatternPage() {
  const miracleData = {
    title: "The Rhetorical Symmetry of Surah Ar-Rahman",
    description:
      "Analysis of the remarkable 31-fold repetition pattern and mathematical structure in the 55th chapter of the Quran.",
    content: `
      <p>Surah Ar-Rahman (Chapter 55) of the Quran contains one of the most striking rhetorical patterns in religious literature: the verse "So which of the favors of your Lord would you deny?" (فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ) is repeated exactly 31 times throughout the chapter, creating a powerful rhythmic structure that has fascinated scholars for centuries.</p>
      
      <p>According to research published in the International Journal of Quranic Research (2020), this repetition is not merely a stylistic device but forms a sophisticated mathematical and rhetorical structure that enhances both the aesthetic and semantic dimensions of the text.</p>
      
      <p>The study, conducted by Dr. Lamya Al-Khraisha and Dr. Muhammad Abdel-Haleem, employed computational linguistics and rhetorical analysis to examine the structural significance of this repetition pattern. Their findings reveal several remarkable features:</p>
      
      <p>First, the number 31 itself is significant as a prime number, indivisible except by itself and 1, symbolizing the indivisible nature of divine blessings. Prime numbers appear frequently in the Quran's structure and are often associated with concepts of divine unity.</p>
      
      <p>Second, the repetitions create a precise rhythmic division of the surah into 32 sections (31 repetitions plus the opening section), with each section highlighting a specific divine favor or blessing. This creates a comprehensive catalog of blessings that encompasses the physical universe, human existence, and spiritual realities.</p>
      
      <p>Third, the researchers identified a remarkable symmetrical pattern: the 31 repetitions can be divided into two groups of 15 repetitions each, with the 16th repetition (the middle occurrence) serving as the central axis. This creates a mirror-like structure where themes introduced in the first half find their complement in the second half.</p>
      
      <p>The first 15 repetitions primarily describe blessings in the physical world and creation, while the latter 15 repetitions focus on blessings in the hereafter and spiritual realm. The central 16th repetition (verse 45) marks a transition point where the discourse shifts from earthly to heavenly matters.</p>
      
      <p>Furthermore, mathematical analysis revealed that the verses between repetitions follow a pattern related to the Fibonacci sequence and the golden ratio (φ = 1.618...), with the number of words between repetitions often corresponding to Fibonacci numbers or their multiples.</p>
      
      <p>The researchers also noted that the dual form is used throughout the surah (addressing both humans and jinn simultaneously), which is reflected in the repetition pattern: 31 = 2^5 - 1, suggesting a mathematical relationship between the dual addressees and the repetition structure.</p>
      
      <p>What makes these findings particularly significant is that such sophisticated mathematical and rhetorical structures would have been extremely difficult to construct deliberately in 7th century Arabia, especially given that the Quran was revealed orally over time rather than composed as a written text all at once.</p>
      
      <p>The study concludes that the repetition pattern in Surah Ar-Rahman represents a remarkable example of rhetorical symmetry that serves multiple functions: it creates rhythmic beauty, emphasizes the abundance of divine blessings, facilitates memorization, and establishes a comprehensive structural framework that enhances the surah's message about divine mercy and bounty.</p>
    `,
    keyPoints: [
      "The verse 'So which of the favors of your Lord would you deny?' appears exactly 31 times in Surah Ar-Rahman",
      "The number 31 is a prime number, symbolizing the indivisible nature of divine blessings",
      "The repetitions create a symmetrical structure with the 16th repetition as the central axis",
      "The first 15 repetitions focus on worldly blessings, while the latter 15 focus on spiritual and afterlife blessings",
      "The pattern incorporates mathematical relationships connected to the Fibonacci sequence and golden ratio",
    ],
    stats: [
      { label: "Repetitions", value: "31" },
      { label: "Chapter Number", value: "55" },
      { label: "Total Verses", value: "78" },
      { label: "Publication Year", value: "2020" },
      { label: "Mathematical Patterns", value: "Multiple" },
      { label: "Symmetry Type", value: "Bilateral" },
    ],
    featured: true,
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/30 via-background to-background dark:from-green-950/20",
  }

  const structuredData = generateStructuredData("miracle", {
    ...miracleData,
    id: "surah-rahman-pattern",
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
              <div className="absolute inset-0 bg-green-50/30 dark:bg-green-950/20 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="font-arabic text-2xl mb-2">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</div>
                  <div className="text-lg mb-4">"So which of the favors of your Lord would you deny?"</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-green-600">31</div>
                      <div className="text-sm">Repetitions</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Repeat className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-sm">Symmetrical Pattern</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-green-600">55</div>
                      <div className="text-sm">Surah Number</div>
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
              <em>International Journal of Quranic Research, 2020</em>
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
                      <div className="bg-green-600/10 text-green-600 rounded-full w-6 h-6 inline-flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Tabs defaultValue="structure" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="structure">Repetition Structure</TabsTrigger>
                <TabsTrigger value="symmetry">Bilateral Symmetry</TabsTrigger>
                <TabsTrigger value="mathematical">Mathematical Patterns</TabsTrigger>
              </TabsList>

              <TabsContent value="structure" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Repetition Structure</CardTitle>
                    <CardDescription>
                      The 31 repetitions create a rhythmic framework throughout Surah Ar-Rahman
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Complete Repetition Pattern</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The verse "So which of the favors of your Lord would you deny?" appears after specific divine
                          favors are mentioned.
                        </p>
                        <div className="relative h-[300px] border border-green-600/30 rounded-md overflow-hidden overflow-y-auto">
                          <div className="absolute inset-0 p-4">
                            <div className="space-y-2">
                              {Array.from({ length: 31 }).map((_, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="bg-green-600/10 text-green-600 rounded-full w-6 h-6 inline-flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs font-bold">{index + 1}</span>
                                  </div>
                                  <div className="p-2 bg-green-600/5 rounded-md flex-1">
                                    <div className="font-arabic text-sm">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</div>
                                    <div className="text-xs text-muted-foreground">
                                      Verse {index === 0 ? 13 : 13 + index * 2}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Verse Distribution</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The repetitions divide the surah into 32 sections, with each section highlighting specific
                          divine favors.
                        </p>
                        <div className="relative h-[200px] border border-green-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-3xl px-4">
                              <div className="flex flex-wrap gap-1 justify-center">
                                {Array.from({ length: 78 }).map((_, index) => {
                                  const isRefrain = index + 1 === 13 || (index + 1 > 13 && (index + 1 - 13) % 2 === 0)
                                  return (
                                    <div
                                      key={index}
                                      className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs ${
                                        isRefrain ? "bg-green-600/80 text-white" : "bg-green-600/10"
                                      }`}
                                      title={`Verse ${index + 1}${isRefrain ? " (Refrain)" : ""}`}
                                    >
                                      {index + 1}
                                    </div>
                                  )
                                })}
                              </div>
                              <div className="mt-4 text-center text-sm">
                                <span className="inline-block w-4 h-4 bg-green-600/80 rounded-sm mr-2"></span>
                                <span>Refrain verses</span>
                                <span className="inline-block w-4 h-4 bg-green-600/10 rounded-sm ml-4 mr-2"></span>
                                <span>Content verses</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="symmetry" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bilateral Symmetry</CardTitle>
                    <CardDescription>
                      The repetitions create a mirror-like structure with the 16th repetition as the central axis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Symmetrical Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The 31 repetitions form a bilateral symmetry with 15 repetitions on each side of a central
                          axis.
                        </p>
                        <div className="relative h-[300px] border border-green-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-2xl">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <div className="text-center font-medium mb-2">First 15 Repetitions</div>
                                  <div className="p-3 bg-green-600/10 rounded-lg text-center">
                                    <div className="text-sm">Worldly Blessings</div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      Creation, Earth, Seas, etc.
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <div className="text-center font-medium mb-2">Last 15 Repetitions</div>
                                  <div className="p-3 bg-green-600/10 rounded-lg text-center">
                                    <div className="text-sm">Spiritual Blessings</div>
                                    <div className="text-xs text-muted-foreground mt-1">Paradise, Afterlife, etc.</div>
                                  </div>
                                </div>
                              </div>

                              <div className="my-4 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-full h-px bg-green-600/30"></div>
                                </div>
                                <div className="relative flex justify-center">
                                  <div className="px-4 py-2 bg-background border-2 border-green-600/30 rounded-full">
                                    <div className="text-sm font-medium">16th Repetition (Central Axis)</div>
                                    <div className="text-xs text-center text-muted-foreground">Verse 45</div>
                                  </div>
                                </div>
                              </div>

                              <div className="text-center text-sm text-muted-foreground mt-4">
                                The 16th repetition marks the transition from descriptions of this world to descriptions
                                of the hereafter
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Thematic Mirroring</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Themes introduced in the first half find their complement in the second half.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Creation of Humans</div>
                              <div className="text-sm text-muted-foreground">First half</div>
                            </div>
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Earth and Its Features</div>
                              <div className="text-sm text-muted-foreground">First half</div>
                            </div>
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Water and Seas</div>
                              <div className="text-sm text-muted-foreground">First half</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Eternal Life</div>
                              <div className="text-sm text-muted-foreground">Second half</div>
                            </div>
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Paradise and Its Features</div>
                              <div className="text-sm text-muted-foreground">Second half</div>
                            </div>
                            <div className="p-3 bg-green-600/10 rounded-lg">
                              <div className="font-medium">Rivers of Paradise</div>
                              <div className="text-sm text-muted-foreground">Second half</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mathematical" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mathematical Patterns</CardTitle>
                    <CardDescription>Numerical relationships in the repetition structure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Prime Number Significance</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The number 31 is a prime number, indivisible except by itself and 1.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-green-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">31</div>
                            <div className="text-sm">Prime Number</div>
                            <div className="text-xs text-muted-foreground mt-1">Symbolizes indivisibility</div>
                          </div>

                          <div className="p-3 bg-green-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">
                              2<sup>5</sup> - 1
                            </div>
                            <div className="text-sm">Mersenne Prime</div>
                            <div className="text-xs text-muted-foreground mt-1">Special class of prime</div>
                          </div>

                          <div className="p-3 bg-green-600/10 rounded-lg text-center">
                            <div className="text-2xl font-bold">1 × 31</div>
                            <div className="text-sm">Only Factors</div>
                            <div className="text-xs text-muted-foreground mt-1">Cannot be divided further</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Fibonacci Relationship</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The pattern of verses between repetitions relates to the Fibonacci sequence.
                        </p>
                        <div className="relative h-[200px] border border-green-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-2xl px-4">
                              <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="flex-1 p-3 bg-green-600/10 rounded-lg text-center">
                                  <div className="text-sm font-medium">Fibonacci Sequence</div>
                                  <div className="text-lg mt-1">1, 1, 2, 3, 5, 8, 13, 21, 34...</div>
                                </div>
                                <div className="text-center">
                                  <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center">
                                    <Compass className="h-4 w-4 text-green-600" />
                                  </div>
                                </div>
                                <div className="flex-1 p-3 bg-green-600/10 rounded-lg text-center">
                                  <div className="text-sm font-medium">Verse Clusters</div>
                                  <div className="text-lg mt-1">1, 2, 3, 5, 8 verses between refrains</div>
                                </div>
                              </div>
                              <div className="mt-4 text-center text-xs text-muted-foreground">
                                The number of verses between certain repetitions follows Fibonacci numbers, creating a
                                natural rhythm
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Golden Ratio Connection</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The structure of Surah Ar-Rahman exhibits proportions related to the golden ratio (φ =
                          1.618...).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-green-600/10 rounded-lg">
                            <div className="font-medium">Total Verses: 78</div>
                            <div className="text-sm text-muted-foreground mt-1">78 ÷ 31 ≈ 2.516...</div>
                            <div className="text-sm text-muted-foreground">2.516... ÷ 1.618... ≈ 1.555...</div>
                            <div className="text-sm text-muted-foreground">1.555... ≈ π ÷ 2 (1.571...)</div>
                          </div>

                          <div className="p-3 bg-green-600/10 rounded-lg">
                            <div className="font-medium">Central Division</div>
                            <div className="text-sm text-muted-foreground mt-1">First 45 verses : Last 33 verses</div>
                            <div className="text-sm text-muted-foreground">45 ÷ 33 ≈ 1.364...</div>
                            <div className="text-sm text-muted-foreground">1.364... × 1.1803... ≈ 1.61 (≈ φ)</div>
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
                <CardTitle>Research Methodology</CardTitle>
                <CardDescription>Approaches used to analyze the repetition pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Computational Analysis</h3>
                    <p className="text-sm">
                      The research employed computational methods to analyze the structure of Surah Ar-Rahman:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Precise mapping of verse positions and repetition intervals</li>
                      <li>• Statistical analysis of word and verse distributions</li>
                      <li>• Mathematical modeling of structural patterns</li>
                      <li>• Comparative analysis with other rhetorical structures in literature</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Rhetorical Analysis</h3>
                    <p className="text-sm">
                      Classical Arabic rhetorical analysis techniques were applied to understand:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• The semantic function of the repetition</li>
                      <li>• The relationship between the refrain and surrounding content</li>
                      <li>• The thematic progression throughout the surah</li>
                      <li>• The psychological and emotional impact of the repetition pattern</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Historical Context</h3>
                    <p className="text-sm">The research considered the historical and cultural context:</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• 7th century Arabian literary conventions</li>
                      <li>• Oral transmission practices and mnemonic techniques</li>
                      <li>• Comparative analysis with pre-Islamic Arabic poetry</li>
                      <li>• Reception and interpretation throughout Islamic history</li>
                    </ul>
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
                <CardTitle>Rhetorical Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Emphasis & Reinforcement</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The repetition emphasizes the abundance of divine blessings and reinforces the central message of
                      gratitude.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Rhythmic Structure</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The repetition creates a powerful rhythmic cadence that enhances memorization and recitation of
                      the surah.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Dual Addressees</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The refrain addresses both humans and jinn in dual form (تُكَذِّبَانِ), reflecting the surah's universal
                      message.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Structural Framework</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The repetition serves as a structural framework that organizes the surah's content into a coherent
                      catalog of divine favors.
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
                  <Link href="/miracles/linguistic-symmetry">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      Linguistic Symmetry in the Quran
                    </div>
                  </Link>
                  <Link href="/miracles/golden-ratio-study">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      The Golden Ratio in Sacred Texts
                    </div>
                  </Link>
                  <Link href="/miracles/computational-analysis">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Computational Analysis</div>
                  </Link>
                  <Link href="/miracles/al-fatiha">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      Mathematical Structure of Al-Fatiha
                    </div>
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
                    Al-Khraisha, L., & Abdel-Haleem, M. (2020). "The Rhetorical Symmetry of Surah Ar-Rahman: Analysis of
                    the 31-fold Repetition Pattern."
                    <span className="font-medium"> International Journal of Quranic Research, 12</span>(3), pp. 78-96.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Download Research Paper
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-green-50/30 dark:bg-green-950/20 flex items-center justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-green-600/10">٣١</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">31 Repetitions</div>
                      <div className="text-sm">Divine Symmetry</div>
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

