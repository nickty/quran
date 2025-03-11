import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or API
const getMiracleData = async (id: string) => {
  const miracles = {
    "114-surahs": {
      title: "The Miracle of 114 Surahs",
      description: "Perfect balance in the structure of the Quran with even and odd numbers.",
      content: `
        <p>The Quran consists of 114 surahs (chapters). When we add each surah number with its position, we get exactly 57 odd numbers and 57 even numbers.</p>
        
        <p>The sum of all surah numbers from 1 to 114 equals 6555. This is calculated using the formula for the sum of an arithmetic sequence: n(n+1)/2, where n is 114.</p>
        
        <p>The sum of the 57 odd numbers equals 6555, which is exactly the sum of all surah numbers from 1 to 114.</p>
        
        <p>The sum of the 57 even numbers equals 6236, which is exactly the total number of verses in the Quran.</p>
        
        <p>This perfect balance and these precise numerical relationships demonstrate a remarkable mathematical structure in the Quran that would be extremely difficult to achieve by human design.</p>
      `,
      keyPoints: [
        "Perfect balance: 57 odd numbers and 57 even numbers",
        "Sum of odd numbers (6555) equals the sum of all surah numbers",
        "Sum of even numbers (6236) equals the total number of verses",
        "This mathematical precision appears throughout the Quran's structure",
      ],
      stats: [
        { label: "Total Surahs", value: "114" },
        { label: "Odd Numbers", value: "57" },
        { label: "Even Numbers", value: "57" },
        { label: "Sum of Odd", value: "6555" },
        { label: "Sum of Even", value: "6236" },
        { label: "Total Verses", value: "6236" },
      ],
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      bgPattern:
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background",
    },
    "number-19": {
      title: "The Number 19 Pattern",
      description: "The mathematical code based on the number 19 throughout the Quran.",
      content: `
        <p>The number 19 appears as a significant pattern throughout the Quran. This page will be updated with detailed information about this numerical miracle.</p>
      `,
      keyPoints: [
        "The first verse of the Quran (Bismillah) consists of 19 letters",
        "The word &apos;Allah&apos; appears 2698 times (19 × 142)",
        "Many other multiples of 19 appear throughout the Quran",
        "This pattern was discovered in the modern era",
      ],
      stats: [
        { label: "Key Number", value: "19" },
        { label: "Basmalah Letters", value: "19" },
        { label: "Word &apos;Allah&apos;", value: "2698 (19×142)" },
      ],
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      bgPattern:
        "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background",
    },
    "word-count": {
      title: "Word Count Symmetry",
      description: "Symmetrical patterns in the count of specific words in the Quran.",
      content: `
        <p>The Quran contains remarkable symmetry in the count of specific words. This page will be updated with detailed information about this numerical miracle.</p>
      `,
      keyPoints: [
        "The word &apos;day&apos; appears exactly 365 times",
        "The word &apos;month&apos; appears exactly 12 times",
        "Words with opposite meanings often appear in equal numbers",
        "These patterns exist across the entire text",
      ],
      stats: [
        { label: "Word &apos;Day&apos;", value: "365" },
        { label: "Word &apos;Month&apos;", value: "12" },
      ],
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      bgPattern:
        "bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background",
    },
    "golden-ratio": {
      title: "Golden Ratio in the Quran",
      description: "The presence of the divine proportion (1.618) in the Quran's structure.",
      content: `
        <p>The divine proportion, known as the Golden Ratio (1.618), appears in various aspects of the Quran's structure. This page will be updated with detailed information about this numerical miracle.</p>
      `,
      keyPoints: [
        "The ratio between certain verse counts follows the Golden Ratio",
        "The structure of certain surahs exhibits the divine proportion",
        "This mathematical beauty is found throughout nature",
        "The presence of this ratio suggests divine design",
      ],
      stats: [
        { label: "Golden Ratio", value: "1.618" },
        { label: "Also Known As", value: "Divine Proportion" },
      ],
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      bgPattern:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-background to-background dark:from-amber-900/20",
    },
  }

  return miracles[id as keyof typeof miracles] || null
}

// Fix TypeScript error by using the correct type for Next.js 15
// In Next.js 15, params is a Promise
export default async function MiracleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await the params Promise to get the actual id
  const { id } = await params
  const miracleData = await getMiracleData(id)

  if (!miracleData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Miracle not found</h1>
        <p className="mb-6">The miracle you&apos;re looking for doesn&apos;t exist or hasn&apos;t been added yet.</p>
        <Link href="/miracles">
          <Button>Back to Miracles</Button>
        </Link>
      </div>
    )
  }

  // Render appropriate charts based on the miracle ID
  const renderCharts = () => {
    switch (id) {
      case "114-surahs":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribution of Numbers</CardTitle>
                <CardDescription>Perfect balance between odd and even numbers</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                {/* Simple visual representation of the pie chart */}
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-[220px] h-[220px]">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sum Comparison</CardTitle>
                <CardDescription>Relationship between sums and Quran structure</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                {/* Simple visual representation of the bar chart */}
                <div className="h-full flex flex-col">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/4 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Sum of Odd</div>
                        <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                          <div className="text-white font-bold text-center pt-2">6555</div>
                        </div>
                      </div>
                      <div className="w-1/4 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Sum of Even</div>
                        <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "85%" }}>
                          <div className="text-white font-bold text-center pt-2">6236</div>
                        </div>
                      </div>
                      <div className="w-1/4 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Surah Sum</div>
                        <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                          <div className="text-white font-bold text-center pt-2">6555</div>
                        </div>
                      </div>
                      <div className="w-1/4 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Total Verses</div>
                        <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "85%" }}>
                          <div className="text-white font-bold text-center pt-2">6236</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "number-19":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Number 19 Occurrences</CardTitle>
              <CardDescription>Key occurrences of the number 19 in the Quran</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              {/* Simple visual representation of the bar chart */}
              <div className="h-full flex flex-col">
                <div className="relative flex-1">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-1/3 px-2 flex flex-col items-center">
                      <div className="text-sm mb-2">Basmalah Letters</div>
                      <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                        <div className="text-white font-bold text-center pt-2">19</div>
                      </div>
                    </div>
                    <div className="w-1/3 px-2 flex flex-col items-center">
                      <div className="text-sm mb-2">Chapters between Basmalah</div>
                      <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "90%" }}>
                        <div className="text-white font-bold text-center pt-2">19</div>
                      </div>
                    </div>
                    <div className="w-1/3 px-2 flex flex-col items-center">
                      <div className="text-sm mb-2">Word &apos;Allah&apos; (÷142)</div>
                      <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                        <div className="text-white font-bold text-center pt-2">19</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case "word-count":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Time-Related Words</CardTitle>
                <CardDescription>Occurrences of time-related words in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                {/* Simple visual representation of the bar chart */}
                <div className="h-full flex flex-col">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/3 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Day</div>
                        <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "90%" }}>
                          <div className="text-white font-bold text-center pt-2">365</div>
                        </div>
                      </div>
                      <div className="w-1/3 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Month</div>
                        <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "30%" }}>
                          <div className="text-white font-bold text-center pt-2">12</div>
                        </div>
                      </div>
                      <div className="w-1/3 px-2 flex flex-col items-center">
                        <div className="text-sm mb-2">Year</div>
                        <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "20%" }}>
                          <div className="text-white font-bold text-center pt-2">7</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Opposite Words</CardTitle>
                <CardDescription>Equal occurrences of opposite words</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                {/* Simple visual representation of the bar chart */}
                <div className="h-full flex flex-col">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/2 px-4 flex flex-col items-center">
                        <div className="text-sm mb-2">Life</div>
                        <div className="w-full bg-primary/80 rounded-t-md" style={{ height: "70%" }}>
                          <div className="text-white font-bold text-center pt-2">145</div>
                        </div>
                      </div>
                      <div className="w-1/2 px-4 flex flex-col items-center">
                        <div className="text-sm mb-2">Death</div>
                        <div className="w-full bg-secondary/80 rounded-t-md" style={{ height: "70%" }}>
                          <div className="text-white font-bold text-center pt-2">145</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "golden-ratio":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Golden Ratio Visualization</CardTitle>
              <CardDescription>The divine proportion in the Quran</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="h-full flex items-center justify-center">
                {/* Simple visual representation of the golden ratio */}
                <div className="relative w-[400px] h-[250px] border border-primary/30 rounded-md overflow-hidden">
                  <div className="absolute top-0 left-0 w-[61.8%] h-full bg-primary/10 border-r border-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">61.8%</div>
                      <div className="text-sm">Golden Ratio</div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[38.2%] h-full bg-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">38.2%</div>
                      <div className="text-sm">Complement</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
                    1 : 1.618
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Decorative background pattern */}
      <div className={`absolute inset-0 -z-10 ${miracleData.bgPattern}`}></div>

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
              {/* <Image
                src={miracleData.image || "/placeholder.svg"}
                alt={miracleData.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              /> */}

              {/* Decorative elements based on the miracle type */}
              {id === "114-surahs" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-background/80 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">57</div>
                      <div className="text-sm">Odd Numbers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary">57</div>
                      <div className="text-sm">Even Numbers</div>
                    </div>
                  </div>
                </div>
              )}

              {id === "number-19" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                    <div className="text-6xl font-bold text-primary">19</div>
                    <div className="text-sm">The Key Number</div>
                  </div>
                </div>
              )}

              {id === "word-count" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold">
                      <span className="text-primary">365</span> = <span className="text-secondary">365</span>
                    </div>
                    <div className="text-sm">Perfect Word Count Symmetry</div>
                  </div>
                </div>
              )}

              {id === "golden-ratio" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold text-amber-600">φ = 1.618</div>
                    <div className="text-sm">The Divine Proportion</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{miracleData.title}</h1>
              {miracleData.featured && (
                <div className="flex items-center text-primary">
                  <Star className="h-5 w-5 mr-2 fill-primary" />
                  <span className="font-medium">Featured Miracle</span>
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

            {/* Charts Section */}
            {renderCharts()}

            {id === "114-surahs" && (
              <Card>
                <CardHeader>
                  <CardTitle>Visual Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
                        <ArrowLeft className="h-8 w-8 text-primary rotate-180" />
                      </div>

                      <div className="text-center">
                        <div className="bg-primary/10 rounded-lg p-6">
                          <div className="text-4xl font-bold">6555</div>
                          <div className="text-sm text-muted-foreground mt-2">Sum of Surah Numbers (1-114)</div>
                        </div>
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
                        <ArrowLeft className="h-8 w-8 text-secondary rotate-180" />
                      </div>

                      <div className="text-center">
                        <div className="bg-secondary/10 rounded-lg p-6">
                          <div className="text-4xl font-bold">6236</div>
                          <div className="text-sm text-muted-foreground mt-2">Total Verses in the Quran</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
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
                <CardTitle>Related Miracles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {id !== "number-19" && (
                    <Link href="/miracles/number-19">
                      <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Number 19 Pattern</div>
                    </Link>
                  )}
                  {id !== "word-count" && (
                    <Link href="/miracles/word-count">
                      <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Word Count Symmetry</div>
                    </Link>
                  )}
                  {id !== "golden-ratio" && (
                    <Link href="/miracles/golden-ratio">
                      <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                        Golden Ratio in the Quran
                      </div>
                    </Link>
                  )}
                  {id !== "114-surahs" && (
                    <Link href="/miracles/114-surahs">
                      <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">
                        The Miracle of 114 Surahs
                      </div>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              {id === "114-surahs" && (
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 p-4">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-primary">57</div>
                      <div className="h-40 w-1 bg-primary/20 my-2"></div>
                      <div className="text-sm text-primary/70">Odd</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-secondary">57</div>
                      <div className="h-40 w-1 bg-secondary/20 my-2"></div>
                      <div className="text-sm text-secondary/70">Even</div>
                    </div>
                  </div>
                </div>
              )}

              {id === "number-19" && (
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl font-bold text-primary/10">19</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-1">
                        {Array.from({ length: 19 }).map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-primary/20 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {id === "word-count" && (
                <div className="absolute inset-0 bg-secondary/5 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Day</div>
                      <div className="text-3xl font-bold text-primary">365</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Month</div>
                      <div className="text-3xl font-bold text-secondary">12</div>
                    </div>
                  </div>
                </div>
              )}

              {id === "golden-ratio" && (
                <div className="absolute inset-0 bg-amber-50/30 dark:bg-amber-950/10 flex items-center justify-center">
                  <div className="relative w-[160px] h-[100px]">
                    <div className="absolute inset-0 border-2 border-amber-600/30 rounded-md"></div>
                    <div className="absolute top-0 left-0 w-[61.8%] h-full border-r-2 border-amber-600/50"></div>
                    <div className="absolute top-0 left-0 w-[61.8%] h-[61.8%] border-r-2 border-b-2 border-amber-600/70"></div>
                    <div className="absolute bottom-0 right-0 w-[38.2%] h-[38.2%] border-l-2 border-t-2 border-amber-600/70"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

