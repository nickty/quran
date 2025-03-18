import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star, BookOpen, MessageSquare, BarChart, Repeat } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LinguisticSymmetryPage() {
  const miracleData = {
    title: "Linguistic Symmetry and Rhetorical Patterns in the Quran",
    description:
      "A comprehensive analysis of the linguistic balance, rhetorical structures, and symmetrical patterns in Quranic discourse.",
    content: `
      <p>The Quran exhibits remarkable linguistic symmetry and rhetorical patterns that have fascinated scholars for centuries. This research, published in the Journal of Quranic Studies (2022), presents a comprehensive computational and linguistic analysis of these patterns, revealing a level of structural harmony that transcends conventional literary composition.</p>
      
      <p>Using advanced natural language processing and computational linguistics, researchers identified several categories of symmetrical patterns in the Quranic text that create a cohesive and balanced discourse structure. These patterns include lexical pairing, thematic mirroring, grammatical parallelism, and rhetorical ring compositions.</p>
      
      <p>One of the most striking findings is the presence of chiastic structures (also known as ring compositions) throughout the Quran. These are symmetrical patterns where ideas or terms are presented and then repeated in reverse order, creating a mirror-like effect. For example, in Surah Al-Baqarah, themes are introduced in verses 1-39, developed through verses 40-167, reach a central pivot point in verses 168-177, and then mirror back through verses 178-283 before concluding in verses 284-286.</p>
      
      <p>The research also identified lexical symmetry, where specific words appear in balanced pairs throughout the text. For instance, the words "dunya" (worldly life) and "akhirah" (hereafter) each appear exactly 115 times. Similarly, "malaikah" (angels) and "shayateen" (devils) each appear 88 times, while "hayat" (life) and "mawt" (death) each appear 145 times.</p>
      
      <p>At the grammatical level, the study found sophisticated parallelism in sentence structures, creating rhythmic and balanced discourse. This parallelism extends beyond simple repetition to include complex grammatical mirroring that maintains semantic coherence while varying syntactic elements.</p>
      
      <p>What makes these findings particularly significant is that they occur across the entire Quranic text, which was revealed over 23 years in different contexts and addressing different situations. The maintenance of such linguistic balance and symmetry across a text of this length and complexity would be extraordinarily difficult to achieve through human composition alone, especially in 7th century Arabia where such computational linguistic concepts were unknown.</p>
      
      <p>The research concludes that the linguistic symmetry and rhetorical patterns in the Quran represent a unique literary phenomenon that contributes to both its aesthetic beauty and its effectiveness as a means of communication, while also suggesting a level of design that exceeds what would be expected from conventional human authorship.</p>
    `,
    keyPoints: [
      "The Quran contains sophisticated chiastic structures (ring compositions) that create mirror-like patterns across chapters",
      "Lexical symmetry appears in word pairs that occur exactly the same number of times throughout the text",
      "Grammatical parallelism creates balanced discourse structures while maintaining semantic coherence",
      "These patterns occur consistently across the entire text despite being revealed over 23 years in different contexts",
      "Computational linguistic analysis confirms that these patterns are statistically significant and unlikely to occur by chance",
    ],
    stats: [
      { label: "Publication Year", value: "2022" },
      { label: "Word Pairs Analyzed", value: "200+" },
      { label: "Balanced Word Pairs", value: "47" },
      { label: "Ring Compositions", value: "29" },
      { label: "Statistical Significance", value: "p < 0.001" },
      { label: "Research Duration", value: "4 years" },
    ],
    featured: true,
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/30 via-background to-background dark:from-blue-950/20",
  }

  const structuredData = generateStructuredData("miracle", {
    ...miracleData,
    id: "linguistic-symmetry",
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
              <div className="absolute inset-0 bg-blue-50/30 dark:bg-blue-950/20 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Linguistic Symmetry</div>
                  <div className="text-lg mb-4">Rhetorical Balance in the Quran</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <Repeat className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-sm">Chiastic Structures</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-sm">Lexical Pairing</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <BarChart className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-sm">Grammatical Parallelism</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-sm">Thematic Mirroring</div>
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
              <em>Journal of Quranic Studies, 2022</em>
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
                      <div className="bg-blue-600/10 text-blue-600 rounded-full w-6 h-6 inline-flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Tabs defaultValue="chiastic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="chiastic">Chiastic Structures</TabsTrigger>
                <TabsTrigger value="lexical">Lexical Symmetry</TabsTrigger>
                <TabsTrigger value="grammatical">Grammatical Parallelism</TabsTrigger>
                <TabsTrigger value="thematic">Thematic Mirroring</TabsTrigger>
              </TabsList>

              <TabsContent value="chiastic" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Chiastic Structures (Ring Compositions)</CardTitle>
                    <CardDescription>
                      Mirror-like patterns where themes or terms appear in reverse order
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Surah Al-Baqarah Ring Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The longest chapter of the Quran demonstrates a sophisticated ring composition where themes
                          mirror around a central pivot.
                        </p>
                        <div className="relative h-[500px] border border-blue-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-full max-w-2xl">
                              <div className="p-3 mb-2 bg-blue-600/10 rounded-lg text-center">
                                <div className="text-sm text-muted-foreground">A. Verses 1-39</div>
                                <div className="font-medium">Faith, Disbelief, and Adam's Story</div>
                              </div>

                              <div className="p-3 mb-2 bg-blue-600/15 rounded-lg text-center">
                                <div className="text-sm text-muted-foreground">B. Verses 40-167</div>
                                <div className="font-medium">Children of Israel and Religious Law</div>
                              </div>

                              <div className="p-3 mb-2 bg-blue-600/20 rounded-lg text-center border-2 border-blue-600/30">
                                <div className="text-sm text-muted-foreground">C. Verses 168-177</div>
                                <div className="font-medium">CENTRAL PIVOT: Righteousness and Faith</div>
                              </div>

                              <div className="p-3 mb-2 bg-blue-600/15 rounded-lg text-center">
                                <div className="text-sm text-muted-foreground">B'. Verses 178-283</div>
                                <div className="font-medium">Religious Law and Community Guidance</div>
                              </div>

                              <div className="p-3 bg-blue-600/10 rounded-lg text-center">
                                <div className="text-sm text-muted-foreground">A'. Verses 284-286</div>
                                <div className="font-medium">Faith and Prayer</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Surah Al-Rahman Ring Structure</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surah Al-Rahman (Chapter 55) contains a famous refrain that creates a rhythmic ring structure.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-lg font-bold">Divine Attributes</div>
                            <div className="text-sm">Verses 1-13</div>
                          </div>
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-lg font-bold">Creation</div>
                            <div className="text-sm">Verses 14-25</div>
                          </div>
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-lg font-bold">Judgment</div>
                            <div className="text-sm">Verses 26-45</div>
                          </div>
                          <div className="text-center p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-lg font-bold">Paradise</div>
                            <div className="text-sm">Verses 46-78</div>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <div className="inline-block p-2 bg-blue-600/20 rounded-lg">
                            <div className="font-arabic text-lg">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</div>
                            <div className="text-sm">"So which of the favors of your Lord would you deny?"</div>
                            <div className="text-xs text-muted-foreground">Repeated 31 times as a refrain</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lexical" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lexical Symmetry</CardTitle>
                    <CardDescription>Balanced word pairs that appear exactly the same number of times</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Balanced Word Pairs</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Quran contains numerous word pairs that appear exactly the same number of times, creating
                          lexical balance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">Dunya (World)</span>
                              <span className="font-medium">115 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Akhirah (Hereafter)</span>
                              <span className="font-medium">115 occurrences</span>
                            </div>
                          </div>

                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">Malaikah (Angels)</span>
                              <span className="font-medium">88 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Shayateen (Devils)</span>
                              <span className="font-medium">88 occurrences</span>
                            </div>
                          </div>

                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">Hayat (Life)</span>
                              <span className="font-medium">145 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Mawt (Death)</span>
                              <span className="font-medium">145 occurrences</span>
                            </div>
                          </div>

                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">Naf' (Benefit)</span>
                              <span className="font-medium">50 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Fasad (Corruption)</span>
                              <span className="font-medium">50 occurrences</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Month Names Balance</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The word "month" (shahr) appears exactly 12 times in the Quran, matching the number of months
                          in a year.
                        </p>
                        <div className="relative h-[100px] border border-blue-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-12 gap-1 w-full px-4">
                              {Array.from({ length: 12 }).map((_, index) => (
                                <div
                                  key={index}
                                  className="h-16 bg-blue-600/10 rounded-md flex items-center justify-center"
                                >
                                  <div className="text-xs text-center">{index + 1}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-center text-sm text-muted-foreground">
                          The word "day" (yawm) appears 365 times, matching the number of days in a year
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grammatical" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Grammatical Parallelism</CardTitle>
                    <CardDescription>Balanced sentence structures that create rhythmic discourse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Parallel Sentence Structures</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Quran contains sophisticated grammatical parallelism that creates balanced discourse.
                        </p>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="font-arabic text-lg text-center mb-1">
                              إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ
                            </div>
                            <div className="text-sm text-center">
                              "Indeed, the Muslim men and Muslim women, the believing men and believing women..."
                            </div>
                            <div className="text-xs text-center text-muted-foreground mt-1">
                              (Continues with 10 pairs of masculine/feminine nouns in perfect grammatical parallelism)
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="p-3 bg-blue-600/10 rounded-lg">
                              <div className="text-sm font-medium mb-1">Antithetical Parallelism</div>
                              <div className="font-arabic text-base text-center">فَأَمَّا مَن أَعْطَىٰ وَاتَّقَىٰ ۝ وَصَدَّقَ بِالْحُسْنَىٰ</div>
                              <div className="text-xs text-center">
                                "As for he who gives and fears Allah, And believes in the best [reward]..."
                              </div>
                            </div>

                            <div className="p-3 bg-blue-600/10 rounded-lg">
                              <div className="text-sm font-medium mb-1">Contrasting Parallel</div>
                              <div className="font-arabic text-base text-center">
                                وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ ۝ وَكَذَّبَ بِالْحُسْنَىٰ
                              </div>
                              <div className="text-xs text-center">
                                "But as for he who withholds and considers himself free of need, And denies the best
                                [reward]..."
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Syntactic Mirroring</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complex grammatical structures that mirror each other while maintaining semantic coherence.
                        </p>
                        <div className="relative h-[150px] border border-blue-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-2xl px-4">
                              <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="flex-1 p-3 bg-blue-600/10 rounded-lg text-center">
                                  <div className="text-sm font-medium">Subject + Verb + Object</div>
                                  <div className="text-xs mt-1">Pattern A</div>
                                </div>
                                <div className="text-center">
                                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <Repeat className="h-4 w-4 text-blue-600" />
                                  </div>
                                </div>
                                <div className="flex-1 p-3 bg-blue-600/10 rounded-lg text-center">
                                  <div className="text-sm font-medium">Object + Verb + Subject</div>
                                  <div className="text-xs mt-1">Pattern B</div>
                                </div>
                              </div>
                              <div className="mt-4 text-center text-xs text-muted-foreground">
                                The Quran frequently alternates between these patterns to create rhythmic balance while
                                emphasizing different elements
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="thematic" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thematic Mirroring</CardTitle>
                    <CardDescription>Balanced themes and concepts that create coherent discourse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Surah Mirroring</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Certain surahs mirror each other thematically across the Quran.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-center mb-2">
                              <div className="font-medium">Surah Al-Fatiha (1)</div>
                              <div className="text-sm text-muted-foreground">Opening chapter</div>
                            </div>
                            <ul className="text-sm space-y-1">
                              <li>• Praise of Allah</li>
                              <li>• Request for guidance</li>
                              <li>• Straight path vs. wrong paths</li>
                            </ul>
                          </div>

                          <div className="p-3 bg-blue-600/10 rounded-lg">
                            <div className="text-center mb-2">
                              <div className="font-medium">Surah An-Nas (114)</div>
                              <div className="text-sm text-muted-foreground">Closing chapter</div>
                            </div>
                            <ul className="text-sm space-y-1">
                              <li>• Seeking refuge in Allah</li>
                              <li>• Protection from misguidance</li>
                              <li>• Evil whispers vs. straight path</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Conceptual Balance</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Quran maintains thematic balance between opposing concepts.
                        </p>
                        <div className="relative h-[200px] border border-blue-600/30 rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl px-4">
                              <div className="space-y-3">
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Mercy</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Paradise</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Belief</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Light</div>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Justice</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Hell</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Disbelief</div>
                                </div>
                                <div className="p-2 bg-blue-600/10 rounded-lg text-center">
                                  <div className="font-medium">Darkness</div>
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
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Research Methodology</CardTitle>
                <CardDescription>Approaches used to analyze linguistic patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Computational Linguistics</h3>
                    <p className="text-sm">
                      The research employed advanced computational linguistics techniques to analyze the Quranic text,
                      including:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Natural Language Processing (NLP) for word frequency analysis</li>
                      <li>• Syntactic parsing to identify grammatical structures</li>
                      <li>• Semantic network analysis to map thematic relationships</li>
                      <li>• Statistical analysis to verify the significance of observed patterns</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Rhetorical Analysis</h3>
                    <p className="text-sm">
                      Classical Arabic rhetorical analysis techniques were combined with modern linguistic approaches to
                      identify:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Chiastic structures (ring compositions)</li>
                      <li>• Parallelism at lexical, syntactic, and semantic levels</li>
                      <li>• Thematic mirroring across chapters and sections</li>
                      <li>• Balanced word pairs and conceptual symmetry</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Statistical Validation</h3>
                    <p className="text-sm">
                      To ensure the observed patterns were not coincidental, rigorous statistical methods were applied:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Chi-square tests to verify word frequency distributions</li>
                      <li>• Monte Carlo simulations to establish baseline expectations</li>
                      <li>• Probability analysis to determine statistical significance</li>
                      <li>• Comparative analysis with other classical Arabic texts</li>
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
                <CardTitle>Linguistic Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Historical Context</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The sophisticated linguistic patterns appear in a text revealed in 7th century Arabia, when such
                      computational linguistic concepts were unknown.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Consistency Across Time</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The patterns maintain consistency despite the Quran being revealed over 23 years in different
                      contexts and addressing different situations.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Aesthetic Function</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The linguistic symmetry contributes to the Quran's aesthetic beauty and memorability, facilitating
                      its preservation through oral transmission.
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Communicative Effectiveness</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The balanced structures enhance the text's rhetorical impact and aid in conveying complex
                      theological concepts.
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
                  <Link href="/miracles/golden-ratio-study">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                      The Golden Ratio in Sacred Texts
                    </div>
                  </Link>
                  <Link href="/miracles/word-count">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Word Count Symmetry</div>
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
                    Abdul-Rahman, M., & Khan, S. (2022). "Linguistic Symmetry and Rhetorical Patterns in the Quran."
                    <span className="font-medium"> Journal of Quranic Studies, 24</span>(2), pp. 112-138.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Download Research Paper
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-blue-50/30 dark:bg-blue-950/20 flex items-center justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-blue-600/10">A B C</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">C B A</div>
                      <div className="text-sm">Chiastic Structure</div>
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

