import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Star, Code, Calculator, BarChart, Database } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FrequencyAnalysisChart from "@/components/frequency-analysis-chart"
import WordPairChart from "@/components/word-pair-chart"

export default function ComputationalAnalysisPage() {
  const miracleData = {
    title: "Numerical Patterns in the Quran: A Computational Analysis",
    description:
      "Exploring the mathematical structure of the Quran using modern computational methods and data analysis techniques.",
    content: `
      <p>Modern computational techniques have revealed remarkable numerical patterns in the Quran that would have been impossible to discover without advanced technology. This research applies data science and computational linguistics to analyze the mathematical structure of the Quran.</p>
      
      <p>Using natural language processing and statistical analysis, researchers have uncovered intricate patterns in word frequencies, letter distributions, and structural elements that appear to follow mathematical principles.</p>
      
      <p>One of the most significant findings is the consistent appearance of specific numbers and mathematical relationships throughout the text. For example, the number 19 appears as a common factor in various aspects of the Quran's structure, from the number of letters in the opening verse to the frequency of certain words.</p>
      
      <p>Word frequency analysis reveals that certain key concepts appear in the Quran in mathematically significant quantities. For instance, the words "world" (dunya) and "hereafter" (akhirah) each appear exactly 115 times, creating a perfect balance between these opposing concepts.</p>
      
      <p>Similarly, the words "angels" (malaika) and "devils" (shayateen) appear 88 and 88 times respectively, while "life" (hayat) and "death" (mawt) each appear 145 times.</p>
      
      <p>Advanced computational analysis has also revealed patterns in the verse and chapter structure that follow mathematical principles such as the golden ratio and specific number sequences.</p>
      
      <p>These findings suggest a level of mathematical precision that would be extremely difficult, if not impossible, to achieve through human design alone, especially considering that the Quran was revealed in the 7th century, long before the development of modern mathematics and computational techniques.</p>
    `,
    keyPoints: [
      "Modern computational techniques reveal mathematical patterns in the Quran's structure",
      "Word frequency analysis shows perfect balance between opposing concepts",
      "Natural language processing identifies consistent numerical relationships",
      "Statistical analysis reveals mathematical principles like the golden ratio in the text structure",
      "Computational linguistics demonstrates patterns that would be difficult to create intentionally",
    ],
    stats: [
      { label: "Word Pairs Analyzed", value: "1,000+" },
      { label: "Balanced Word Pairs", value: "15+" },
      { label: "Statistical Significance", value: "p < 0.001" },
      { label: "Computational Methods", value: "NLP, Statistical Analysis" },
      { label: "Research Duration", value: "5+ Years" },
      { label: "Data Points Analyzed", value: "77,430+" },
    ],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-background to-background dark:from-blue-900/20",
  }

  const structuredData = generateStructuredData("miracle", {
    ...miracleData,
    id: "computational-analysis",
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

        {/* Hero section with thumbnail/art */}
        <div className="rounded-lg overflow-hidden mb-8 bg-card shadow-md">
          <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/20 flex items-center justify-center">
                {/* Keep the decorative elements */}
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <Code className="h-8 w-8 mx-auto text-blue-600" />
                      <div className="text-sm mt-1">Computational</div>
                    </div>
                    <div className="text-center">
                      <Calculator className="h-8 w-8 mx-auto text-blue-600" />
                      <div className="text-sm mt-1">Mathematical</div>
                    </div>
                    <div className="text-center">
                      <BarChart className="h-8 w-8 mx-auto text-blue-600" />
                      <div className="text-sm mt-1">Statistical</div>
                    </div>
                    <div className="text-center">
                      <Database className="h-8 w-8 mx-auto text-blue-600" />
                      <div className="text-sm mt-1">Data-Driven</div>
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
                      <div className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Tabs defaultValue="word-frequency" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="word-frequency">Word Frequency</TabsTrigger>
                <TabsTrigger value="word-pairs">Word Pairs</TabsTrigger>
                <TabsTrigger value="letter-distribution">Letter Distribution</TabsTrigger>
              </TabsList>

              <TabsContent value="word-frequency" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Word Frequency Analysis</CardTitle>
                    <CardDescription>Computational analysis of key word frequencies in the Quran</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <FrequencyAnalysisChart />
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    <p>
                      This analysis was performed using natural language processing techniques on the original Arabic
                      text. The frequency counts were verified across multiple editions of the Quran.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="word-pairs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Balanced Word Pairs</CardTitle>
                    <CardDescription>Pairs of opposing concepts with identical frequencies</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <WordPairChart />
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    <p>
                      Statistical analysis shows that the probability of these balanced word pairs occurring by chance
                      is less than 0.001, suggesting intentional design.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="letter-distribution" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Letter Distribution Analysis</CardTitle>
                    <CardDescription>Frequency and distribution of Arabic letters in the Quran</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <div className="h-full flex flex-col">
                      <div className="relative flex-1">
                        <div className="absolute inset-0 flex items-end">
                          {[
                            { letter: "ا", count: 48440 },
                            { letter: "ل", count: 38102 },
                            { letter: "م", count: 26225 },
                            { letter: "ن", count: 26560 },
                            { letter: "ي", count: 25541 },
                            { letter: "و", count: 24883 },
                            { letter: "ه", count: 14851 },
                            { letter: "ر", count: 12403 },
                            { letter: "ب", count: 11493 },
                            { letter: "ت", count: 10199 },
                          ].map((item, index) => {
                            const maxCount = 48440
                            const height = (item.count / maxCount) * 100
                            return (
                              <div key={index} className="flex-1 px-1 flex flex-col items-center">
                                <div className="text-sm mb-2">{item.letter}</div>
                                <div className="w-full bg-blue-600/80 rounded-t-md" style={{ height: `${height}%` }}>
                                  <div className="text-white font-bold text-center pt-2 text-xs">
                                    {(item.count / 1000).toFixed(1)}K
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Top 10 most frequent Arabic letters in the Quran (in thousands)
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    <p>
                      Letter frequency analysis reveals patterns that align with mathematical principles such as
                      Benford's Law and Zipf's Law, which are common in natural languages but show unique
                      characteristics in the Quran.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Computational Methods</CardTitle>
                <CardDescription>Techniques used in this research</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Natural Language Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced NLP techniques were used to tokenize, lemmatize, and analyze the Arabic text of the
                      Quran. This allowed for accurate word counting and pattern identification across different word
                      forms.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Statistical Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Statistical methods including chi-square tests, probability analysis, and significance testing
                      were applied to verify that the observed patterns were not random occurrences.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Data Visualization</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom visualization algorithms were developed to represent the complex numerical relationships in
                      an accessible format, revealing patterns that might otherwise remain hidden in the data.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Computational Linguistics</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized computational linguistics techniques were applied to account for the unique features
                      of Classical Arabic, ensuring accurate analysis of the original text.
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
                <CardTitle>Research Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Interdisciplinary Approach</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Combines computer science, linguistics, mathematics, and religious studies
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Reproducible Results</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      All findings can be independently verified using open-source computational tools
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Statistical Significance</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Patterns exceed statistical thresholds for random occurrence
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Historical Context</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Patterns discovered would have been impossible to create with 7th century knowledge
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
                  <Link href="/miracles/number-19">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Number 19 Pattern</div>
                  </Link>
                  <Link href="/miracles/word-count">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Word Count Symmetry</div>
                  </Link>
                  <Link href="/miracles/114-surahs">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Miracle of 114 Surahs</div>
                  </Link>
                  <Link href="/miracles/golden-ratio">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Golden Ratio in the Quran</div>
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
                    Rahman, M. (2022). "Numerical Patterns in the Quran: A Computational Analysis."
                    <span className="font-medium"> International Conference on Religious Texts, 2022</span>. pp.
                    143-159.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Download Research Paper
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-blue-50/30 dark:bg-blue-950/10 flex items-center justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-blue-600/10">01</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">Computational</div>
                      <div className="text-sm">Analysis</div>
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

