import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { generateStructuredData } from "@/components/structured-data"

export default async function AlFatihaMiraclePage() {
  const miracleData = {
    title: "The Mathematical Structure of Surah Al-Fatiha",
    description:
      "Discover the remarkable numerical patterns and mathematical precision in the opening chapter of the Quran.",
    content: `
      <p>Surah Al-Fatiha, the opening chapter of the Quran, contains remarkable mathematical patterns that point to divine design. This surah, despite being only 7 verses long, demonstrates extraordinary numerical relationships both within itself and with the entire Quran.</p>
      
      <p>Al-Fatiha consists of exactly 7 verses, 29 words, and 139 letters in its original Arabic text. These numbers themselves hold significance in the mathematical structure of the Quran.</p>
      
      <p>The number 7 appears prominently throughout the Quran and is considered a divine number in many traditions. Al-Fatiha's 7 verses reflect the 7 heavens mentioned in the Quran, the 7 days of creation, and many other instances where this number appears.</p>
      
      <p>The middle verse (verse 4) of Al-Fatiha is "Maliki Yawm id-Din" (Master of the Day of Judgment). This central position highlights the importance of divine judgment in Islamic theology.</p>
      
      <p>When we examine the letter count of each verse, we discover a fascinating pattern: 19, 17, 12, 11, 19, 18, 43. The first and fifth verses both contain exactly 19 letters, a number that appears as a key mathematical code throughout the Quran.</p>
      
      <p>The total letter count (139) is a prime number, and when we add the digits (1+3+9), we get 13, which is also a prime number. Prime numbers are indivisible except by 1 and themselves, symbolizing the oneness and indivisibility of God (Tawhid).</p>
      
      <p>Furthermore, Al-Fatiha's position as the first surah, combined with its 7 verses, creates the mathematical expression 1:7, which approximates to 0.142857... This number has the unique property that when multiplied by 2, 3, 4, 5, or 6, it produces the same digits in a different order.</p>
    `,
    keyPoints: [
      "Al-Fatiha consists of exactly 7 verses, 29 words, and 139 letters",
      "The middle verse (verse 4) focuses on the Day of Judgment, highlighting its central importance",
      "Verses 1 and 5 both contain exactly 19 letters each",
      "The total letter count (139) is a prime number, symbolizing divine unity",
      "Al-Fatiha's position (1:7) creates a unique mathematical ratio with special properties",
    ],
    stats: [
      { label: "Verses", value: "7" },
      { label: "Words", value: "29" },
      { label: "Letters", value: "139" },
      { label: "Position in Quran", value: "1st Surah" },
      { label: "Verses with 19 letters", value: "2 (verses 1 & 5)" },
      { label: "Middle verse", value: "Verse 4" },
    ],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    bgPattern:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background",
  }

  const structuredData = generateStructuredData("miracle", miracleData)

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
              <Image
                src={miracleData.image || "/placeholder.svg"}
                alt={miracleData.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">7</div>
                      <div className="text-sm">Verses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary">29</div>
                      <div className="text-sm">Words</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">139</div>
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

            {/* Visualizations */}
            <Card>
              <CardHeader>
                <CardTitle>Letter Distribution</CardTitle>
                <CardDescription>Number of letters in each verse of Al-Fatiha</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full flex flex-col">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-end">
                      {[19, 17, 12, 11, 19, 18, 43].map((count, index) => (
                        <div key={index} className="flex-1 px-1 flex flex-col items-center">
                          <div className="text-sm mb-2">Verse {index + 1}</div>
                          <div
                            className={`w-full ${index === 0 || index === 4 ? "bg-primary/80" : "bg-secondary/80"} rounded-t-md`}
                            style={{ height: `${(count / 43) * 100}%` }}
                          >
                            <div className="text-white font-bold text-center pt-2">{count}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verse Structure Visualization</CardTitle>
                <CardDescription>The symmetrical structure of Al-Fatiha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[500px] border rounded-lg p-4">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-full max-w-md">
                      {/* Verse 1 */}
                      <div className="p-3 mb-2 bg-primary/10 rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Verse 1</div>
                        <div className="font-arabic text-lg">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                        <div className="text-xs mt-1">19 letters - Beginning with Allah's name</div>
                      </div>

                      {/* Verses 2-3 */}
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="p-3 bg-secondary/10 rounded-lg text-center">
                          <div className="text-sm text-muted-foreground">Verse 2</div>
                          <div className="font-arabic text-lg">ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ</div>
                          <div className="text-xs mt-1">17 letters</div>
                        </div>
                        <div className="p-3 bg-secondary/10 rounded-lg text-center">
                          <div className="text-sm text-muted-foreground">Verse 3</div>
                          <div className="font-arabic text-lg">ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                          <div className="text-xs mt-1">12 letters</div>
                        </div>
                      </div>

                      {/* Verse 4 - Central */}
                      <div className="p-3 mb-2 bg-primary/20 rounded-lg text-center border-2 border-primary/30">
                        <div className="text-sm text-muted-foreground">Verse 4 (Central)</div>
                        <div className="font-arabic text-lg">مَٰلِكِ يَوْمِ ٱلدِّينِ</div>
                        <div className="text-xs mt-1">11 letters - Day of Judgment</div>
                      </div>

                      {/* Verses 5-6 */}
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="p-3 bg-secondary/10 rounded-lg text-center">
                          <div className="text-sm text-muted-foreground">Verse 5</div>
                          <div className="font-arabic text-lg">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</div>
                          <div className="text-xs mt-1">19 letters</div>
                        </div>
                        <div className="p-3 bg-secondary/10 rounded-lg text-center">
                          <div className="text-sm text-muted-foreground">Verse 6</div>
                          <div className="font-arabic text-lg">ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ</div>
                          <div className="text-xs mt-1">18 letters</div>
                        </div>
                      </div>

                      {/* Verse 7 */}
                      <div className="p-3 bg-primary/10 rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Verse 7</div>
                        <div className="font-arabic text-lg">صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ</div>
                        <div className="text-xs mt-1">43 letters - Conclusion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prime Number Significance</CardTitle>
                <CardDescription>The significance of prime numbers in Al-Fatiha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md text-center">
                      <div className="text-4xl font-bold text-primary">7</div>
                      <div className="text-sm text-muted-foreground mt-2">Number of verses</div>
                      <div className="text-xs mt-1">7 is a prime number</div>
                    </div>
                    <div className="p-4 border rounded-md text-center">
                      <div className="text-4xl font-bold text-primary">29</div>
                      <div className="text-sm text-muted-foreground mt-2">Number of words</div>
                      <div className="text-xs mt-1">29 is a prime number</div>
                    </div>
                    <div className="p-4 border rounded-md text-center">
                      <div className="text-4xl font-bold text-primary">139</div>
                      <div className="text-sm text-muted-foreground mt-2">Number of letters</div>
                      <div className="text-xs mt-1">139 is a prime number</div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm">
                      Prime numbers are numbers that can only be divided by 1 and themselves. In Islamic numerology,
                      prime numbers symbolize the concept of Tawhid (Divine Unity), as they cannot be divided further,
                      reflecting the indivisible nature of God.
                    </p>
                    <p className="text-sm mt-2">
                      The fact that Al-Fatiha contains prime numbers in its structure (7 verses, 29 words, 139 letters)
                      reinforces its special status as the "Mother of the Book" (Umm al-Kitab).
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
                <CardTitle>Numerical Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">The Number 7</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Appears throughout the Quran and in nature: 7 heavens, 7 earths, 7 days of the week
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">The Number 19</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      First and fifth verses both contain 19 letters, connecting to the Quran's 19-based mathematical
                      code
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Prime Numbers</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      7, 29, and 139 are all prime numbers, symbolizing divine unity
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Central Position</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      The middle verse focuses on the Day of Judgment, highlighting its importance
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
                  <Link href="/miracles/114-surahs">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Miracle of 114 Surahs</div>
                  </Link>
                  <Link href="/miracles/number-19">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">The Number 19 Pattern</div>
                  </Link>
                  <Link href="/miracles/word-count">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Word Count Symmetry</div>
                  </Link>
                  <Link href="/miracles/golden-ratio">
                    <div className="p-3 border rounded-md hover:bg-muted cursor-pointer">Golden Ratio in the Quran</div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Art Element */}
            <div className="relative h-[200px] rounded-lg overflow-hidden border">
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-primary/10">7</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">Al-Fatiha</div>
                      <div className="text-sm">The Opening</div>
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

