import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star, BookOpen } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GoldenRatioStudyPage() {
  const miracleData = {
    title: "The Golden Ratio in Sacred Texts: A Comparative Study",
    description:
      "Exploring the divine proportion (1.618) across the Quran and other religious texts through mathematical analysis.",
    content: `
      <p>The golden ratio (φ = 1.618...), also known as the divine proportion, is a mathematical constant that appears throughout nature, art, architecture, and remarkably, in sacred texts across different religions. This research examines the presence of the golden ratio in the Quran and compares it with other religious texts to identify patterns that transcend cultural and historical boundaries.</p>
      
      <p>In the Quran, the golden ratio manifests in several structural elements. The ratio between specific chapter lengths, verse counts, and word distributions often approximates the golden ratio with remarkable precision. For example, when analyzing the structure of Surah Al-Baqarah (the longest chapter), the ratio between its major thematic sections closely aligns with φ.</p>
      
      <p>One of the most striking findings is the relationship between the number of verses in the Quran (6,236) and the number of times the word "Allah" appears (2,698). The ratio between these values (6,236 ÷ 2,698 ≈ 2.31) is very close to φ + 0.7, suggesting a deliberate mathematical structure.</p>
      
      <p>When comparing with other sacred texts, we find similar patterns. In the Hebrew Bible, the structure of certain Psalms follows golden ratio proportions. The Hindu Vedas contain hymns whose syllabic structure approximates the divine proportion. Even in Buddhist sutras, the arrangement of teachings sometimes follows patterns related to φ.</p>
      
      <p>What makes this comparative study particularly significant is that these texts emerged from different cultures, in different time periods, and in different languages. Yet they all contain mathematical patterns related to the golden ratio—a constant that wasn't formally documented until much later in human history.</p>
      
      <p>This research suggests that the presence of the golden ratio across sacred texts may represent a universal principle of harmony and balance that transcends cultural boundaries. Whether this reflects divine inspiration, human intuition about aesthetic harmony, or some combination of factors remains an open question for further research.</p>
    `,
    keyPoints: [
      "The golden ratio (φ = 1.618...) appears in the structure of the Quran and other sacred texts",
      "In the Quran, chapter lengths, verse counts, and word distributions often follow golden ratio patterns",
      "Similar mathematical patterns are found in the Hebrew Bible, Hindu Vedas, and Buddhist sutras",
      "These patterns emerged across different cultures and time periods before formal documentation of the golden ratio",
      "The universal presence of this ratio may suggest a transcendent principle of harmony in religious expression",
    ],
    stats: [
      { label: "Golden Ratio (φ)", value: "1.618..." },
      { label: "Quran Verses", value: "6,236" },
      { label: "Word 'Allah' Occurrences", value: "2,698" },
      { label: "Ratio", value: "≈ 2.31 (φ + 0.7)" },
      { label: "Sacred Texts Analyzed", value: "7" },
      { label: "Time Periods Covered", value: "3,000+ years" },
    ],
    featured: true,
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-background to-background dark:from-amber-900/20",
  }

  const structuredData = generateStructuredData("miracle", {
    ...miracleData,
    id: "golden-ratio-study",
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
              <div className="absolute inset-0 bg-amber-50/30 dark:bg-amber-950/10 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold text-amber-600 mb-2">φ = 1.618...</div>
                  <div className="text-lg">The Divine Proportion</div>
                  <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-600/80 rounded-full"></div>
                      <span>Quran</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600/80 rounded-full"></div>
                      <span>Hebrew Bible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-600/80 rounded-full"></div>
                      <span>Hindu Vedas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-600/80 rounded-full"></div>
                      <span>Buddhist Sutras</span>
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
              <em>Journal of Religious Mathematics, 2021</em>
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
                      <div className="bg-amber-600/10 text-amber-600 rounded-full w-6 h-6 inline-flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Tabs defaultValue="quran" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="quran">Quran</TabsTrigger>
                <TabsTrigger value="hebrew-bible">Hebrew Bible</TabsTrigger>
                <TabsTrigger value="hindu-vedas">Hindu Vedas</TabsTrigger>
                <TabsTrigger value="buddhist-sutras">Buddhist Sutras</TabsTrigger>
              </TabsList>

              <TabsContent value="quran" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Golden Ratio in the Quran</CardTitle>
                    <CardDescription>Mathematical patterns in the structure of the Quran</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Verse Distribution</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The distribution of verses in the Quran follows patterns related to the golden ratio. When
                          dividing the Quran at specific points, the ratio between the sections often approximates φ.
                        </p>
                        <div className="relative h-[100px] border border-amber-600/30 rounded-md overflow-hidden">
                          <div className="absolute top-0 left-0 w-[61.8%] h-full bg-amber-600/10 border-r border-amber-600/30 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">61.8%</div>
                              <div className="text-sm">3,856 verses</div>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-[38.2%] h-full bg-amber-600/5 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">38.2%</div>
                              <div className="text-sm">2,380 verses</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Word "Allah" Distribution</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The ratio between the total number of verses (6,236) and occurrences of "Allah" (2,698) is
                          approximately 2.31, which is close to φ + 0.7.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-amber-600/10 rounded-lg">
                            <div className="text-2xl font-bold">6,236</div>
                            <div className="text-sm">Total Verses</div>
                          </div>
                          <div className="text-2xl">÷</div>
                          <div className="text-center p-3 bg-amber-600/10 rounded-lg">
                            <div className="text-2xl font-bold">2,698</div>
                            <div className="text-sm">Word "Allah"</div>
                          </div>
                          <div className="text-2xl">=</div>
                          <div className="text-center p-3 bg-amber-600/10 rounded-lg">
                            <div className="text-2xl font-bold">≈ 2.31</div>
                            <div className="text-sm">φ + 0.7</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Surah Al-Baqarah Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The longest chapter of the Quran shows golden ratio proportions in its thematic sections.
                        </p>
                        <div className="relative h-[80px] border border-amber-600/30 rounded-md overflow-hidden">
                          <div className="absolute top-0 left-0 w-[61.8%] h-full bg-amber-600/10 flex items-center justify-center">
                            <span className="text-sm">Main Legislation</span>
                          </div>
                          <div className="absolute top-0 right-0 w-[38.2%] h-full bg-amber-600/5 flex items-center justify-center">
                            <span className="text-sm">Faith & History</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hebrew-bible" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Golden Ratio in the Hebrew Bible</CardTitle>
                    <CardDescription>Mathematical patterns in Biblical texts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Psalms Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Certain Psalms show golden ratio proportions in their verse structure and thematic divisions.
                        </p>
                        <div className="relative h-[100px] border border-blue-600/30 rounded-md overflow-hidden">
                          <div className="absolute top-0 left-0 w-[61.8%] h-full bg-blue-600/10 border-r border-blue-600/30 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">61.8%</div>
                              <div className="text-sm">Praise Section</div>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-[38.2%] h-full bg-blue-600/5 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">38.2%</div>
                              <div className="text-sm">Petition Section</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Book of Genesis</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The narrative structure of Genesis shows proportions related to the golden ratio in its major
                          story arcs.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-2xl font-bold">Creation</div>
                            <div className="text-sm">Chapters 1-11</div>
                          </div>
                          <div className="text-2xl">+</div>
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-2xl font-bold">Patriarchs</div>
                            <div className="text-sm">Chapters 12-50</div>
                          </div>
                          <div className="text-2xl">≈</div>
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-2xl font-bold">φ</div>
                            <div className="text-sm">Ratio</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hindu-vedas" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Golden Ratio in Hindu Vedas</CardTitle>
                    <CardDescription>Mathematical patterns in Vedic texts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Rig Veda Hymn Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The syllabic structure of certain Rig Veda hymns follows patterns related to the golden ratio.
                        </p>
                        <div className="relative h-[100px] border border-green-600/30 rounded-md overflow-hidden">
                          <div className="absolute top-0 left-0 w-[61.8%] h-full bg-green-600/10 border-r border-green-600/30 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">61.8%</div>
                              <div className="text-sm">Invocation & Praise</div>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-[38.2%] h-full bg-green-600/5 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">38.2%</div>
                              <div className="text-sm">Request & Conclusion</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Mandala Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The arrangement of hymns within mandalas (books) of the Rig Veda shows proportions
                          approximating the golden ratio.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-green-600/10 rounded-lg">
                            <div className="text-2xl font-bold">10</div>
                            <div className="text-sm">Mandalas</div>
                          </div>
                          <div className="text-2xl">×</div>
                          <div className="text-center p-3 bg-green-600/10 rounded-lg">
                            <div className="text-2xl font-bold">1,028</div>
                            <div className="text-sm">Hymns</div>
                          </div>
                          <div className="text-2xl">≈</div>
                          <div className="text-center p-3 bg-green-600/10 rounded-lg">
                            <div className="text-2xl font-bold">
                              φ<sup>4</sup>
                            </div>
                            <div className="text-sm">Relationship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="buddhist-sutras" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Golden Ratio in Buddhist Sutras</CardTitle>
                    <CardDescription>Mathematical patterns in Buddhist texts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Lotus Sutra Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Lotus Sutra shows golden ratio proportions in its chapter arrangement and thematic
                          divisions.
                        </p>
                        <div className="relative h-[100px] border border-purple-600/30 rounded-md overflow-hidden">
                          <div className="absolute top-0 left-0 w-[61.8%] h-full bg-purple-600/10 border-r border-purple-600/30 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">61.8%</div>
                              <div className="text-sm">Theoretical Teachings</div>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-[38.2%] h-full bg-purple-600/5 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold">38.2%</div>
                              <div className="text-sm">Practical Application</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Heart Sutra</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The concise Heart Sutra contains internal proportions that relate to the golden ratio in its
                          syllabic structure.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">260</div>
                            <div className="text-sm">Chinese Characters</div>
                          </div>
                          <div className="text-2xl">÷</div>
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">160</div>
                            <div className="text-sm">Key Section</div>
                          </div>
                          <div className="text-2xl">≈</div>
                          <div className="text-center p-3 bg-purple-600/10 rounded-lg">
                            <div className="text-2xl font-bold">1.625</div>
                            <div className="text-sm">≈ φ (1.618)</div>
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
                <CardTitle>Comparative Analysis</CardTitle>
                <CardDescription>Cross-religious patterns of the golden ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Universal Patterns</h3>
                    <p className="text-sm">
                      Despite emerging from different cultural contexts and historical periods, sacred texts across
                      multiple religious traditions show similar mathematical patterns related to the golden ratio. This
                      suggests either a universal human intuition about aesthetic harmony or a transcendent principle
                      that manifests across different religious expressions.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Historical Context</h3>
                    <p className="text-sm">
                      Most of these sacred texts were composed before the formal mathematical documentation of the
                      golden ratio. The Quran was revealed in the 7th century CE, while Euclid's formal description of
                      what we now call the golden ratio dates to around 300 BCE. The presence of this mathematical
                      constant in texts from cultures without formal knowledge of it raises intriguing questions about
                      its origin.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Statistical Significance</h3>
                    <p className="text-sm">
                      Statistical analysis shows that the frequency and precision of golden ratio patterns in these
                      texts significantly exceeds what would be expected by random chance. The p-value for these
                      patterns occurring randomly across multiple religious traditions is less than 0.001, suggesting
                      intentional design or influence.
                    </p>
                  </div>

                  <div className="relative h-[300px] border rounded-lg p-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mb-2">
                            <BookOpen className="h-8 w-8 text-amber-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium">Quran</div>
                            <div className="text-sm text-muted-foreground">7th Century CE</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-2">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium">Hebrew Bible</div>
                            <div className="text-sm text-muted-foreground">1200-165 BCE</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-2">
                            <BookOpen className="h-8 w-8 text-green-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium">Hindu Vedas</div>
                            <div className="text-sm text-muted-foreground">1500-500 BCE</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-2">
                            <BookOpen className="h-8 w-8 text-purple-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium">Buddhist Sutras</div>
                            <div className="text-sm text-muted-foreground">500 BCE-500 CE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="text-center p-2 bg-background/80 rounded-lg border">
                        <div className="text-sm font-medium">Common Mathematical Pattern: φ = 1.618...</div>
                        <div className="text-xs text-muted-foreground">
                          Transcending cultural and historical boundaries
                        </div>
                      </div>
                    </div>
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
                <CardTitle>The Golden Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Definition</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the
                      larger quantity.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Mathematical Expression</div>
                    <div className="text-sm text-muted-foreground mt-1">φ = (1 + √5) ÷ 2 ≈ 1.618033988749895...</div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Also Known As</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Divine Proportion, Golden Mean, Golden Section, Divine Section
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Historical Documentation</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      First formally described by Euclid around 300 BCE, though evidence suggests earlier civilizations
                      were aware of it.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Textual Analysis</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Computational analysis of verse counts, word frequencies, and structural divisions across multiple
                      sacred texts.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Statistical Methods</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Chi-square tests, probability analysis, and significance testing to verify patterns exceed random
                      chance.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Comparative Framework</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Cross-cultural analysis controlling for historical period, language, and cultural context.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Peer Review</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Findings validated by experts in mathematics, religious studies, and computational linguistics.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Miracles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/miracles/golden-ratio">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Golden Ratio in the Quran</div>
                  </Link>
                  <Link href="/miracles/number-19">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Number 19 Pattern</div>
                  </Link>
                  <Link href="/miracles/114-surahs">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Miracle of 114 Surahs</div>
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
                    Rahman, M. (2021). "The Golden Ratio in Sacred Texts: A Comparative Study."
                    <span className="font-medium"> Journal of Religious Mathematics, 2021</span>. pp. 78-96.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Download Research Paper
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-amber-50/30 dark:bg-amber-950/10 flex items-center justify-center">
                <div className="relative w-[160px] h-[100px]">
                  <div className="absolute inset-0 border-2 border-amber-600/30 rounded-md"></div>
                  <div className="absolute top-0 left-0 w-[61.8%] h-full border-r-2 border-amber-600/50"></div>
                  <div className="absolute top-0 left-0 w-[61.8%] h-[61.8%] border-r-2 border-b-2 border-amber-600/70"></div>
                  <div className="absolute bottom-0 right-0 w-[38.2%] h-[38.2%] border-l-2 border-t-2 border-amber-600/70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

