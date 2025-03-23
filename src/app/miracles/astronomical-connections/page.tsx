"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ArrowRight, Sun, Moon, Star, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AstronomicalConnectionsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/30 via-background to-background dark:from-sky-900/20"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-6 w-6 text-sky-600" />
          <h1 className="text-3xl font-bold">Astronomical Connections in the Quran</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Examining references to celestial bodies and astronomical phenomena in the Quran.
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
                <CardTitle>Astronomical References in the Quran</CardTitle>
                <CardDescription>
                  The Quran contains numerous references to celestial bodies and astronomical phenomena
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Quran contains numerous references to celestial bodies and astronomical phenomena, many of which
                  align with modern scientific understanding despite being revealed in the 7th century. These references
                  cover a wide range of topics, from the orbits of the sun and moon to the expansion of the universe and
                  the nature of stars and planets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-sky-600 mb-2">
                      <Sun className="h-10 w-10 mx-auto" />
                    </div>
                    <div className="text-sm text-muted-foreground">Solar References</div>
                  </div>
                  <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-sky-600 mb-2">
                      <Moon className="h-10 w-10 mx-auto" />
                    </div>
                    <div className="text-sm text-muted-foreground">Lunar References</div>
                  </div>
                  <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-sky-600 mb-2">
                      <Star className="h-10 w-10 mx-auto" />
                    </div>
                    <div className="text-sm text-muted-foreground">Stellar References</div>
                  </div>
                </div>

                <p>
                  These astronomical references in the Quran are particularly noteworthy because many of them describe
                  phenomena that were not well understood in the 7th century. The accuracy of these descriptions has led
                  many scholars to consider them evidence of the Quran's divine origin.
                </p>

                <div className="relative h-64 my-8 overflow-hidden rounded-xl bg-sky-50 dark:bg-sky-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Solar system visualization */}
                    <div className="relative w-64 h-64">
                      {/* Sun */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>

                      {/* Orbits */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300 dark:border-sky-700"
                          style={{
                            width: `${(i + 1) * 40}px`,
                            height: `${(i + 1) * 40}px`,
                          }}
                        ></div>
                      ))}

                      {/* Planets */}
                      <div
                        className="absolute top-1/2 left-[calc(50%-20px)] -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 animate-orbit"
                        style={{ animationDuration: "10s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-[calc(50%-40px)] -translate-y-1/2 w-5 h-5 rounded-full bg-red-500 animate-orbit"
                        style={{ animationDuration: "15s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-[calc(50%-60px)] -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 animate-orbit"
                        style={{ animationDuration: "20s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-[calc(50%-80px)] -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 animate-orbit"
                        style={{ animationDuration: "25s" }}
                      ></div>
                    </div>
                  </div>

                  <style jsx>{`
                    @keyframes orbit {
                      0% { transform: rotate(0deg) translateX(var(--translate-x)) rotate(0deg); }
                      100% { transform: rotate(360deg) translateX(var(--translate-x)) rotate(-360deg); }
                    }
                    .animate-orbit {
                      animation: orbit linear infinite;
                      --translate-x: 0px;
                    }
                  `}</style>
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
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>The Quran describes the orbits of the sun and moon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>References to the expanding universe align with modern cosmology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>Descriptions of the moon's reflected light and the sun's radiance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>References to the formation of the universe from a single entity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>Descriptions of celestial bodies swimming in orbits</span>
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
                    In the 7th century, when the Quran was revealed, astronomical knowledge was limited and often mixed
                    with mythology. The geocentric model was widely accepted, and many astronomical phenomena were not
                    well understood.
                  </p>
                  <p>
                    The accurate descriptions of astronomical phenomena in the Quran, which align with modern scientific
                    discoveries, are particularly noteworthy given this historical context. Many of these phenomena were
                    not confirmed by science until centuries or even millennia later.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Examples of Astronomical References</CardTitle>
                <CardDescription>Specific verses in the Quran that describe astronomical phenomena</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-sky-50 dark:bg-sky-900/20 px-4 py-2 font-medium">Celestial Orbits</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Orbits of the Sun and Moon</div>
                          <p className="text-sm text-muted-foreground">
                            "It is He who created the night and the day, and the sun and the moon; all (celestial
                            bodies) swim along, each in its orbit." (Quran 21:33)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse describes the sun and moon as swimming in their own orbits, a concept that aligns
                            with modern understanding of celestial mechanics.
                          </div>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Precise Calculation</div>
                          <p className="text-sm text-muted-foreground">
                            "The sun and the moon follow courses exactly computed." (Quran 55:5)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse refers to the precise mathematical calculations that govern the movements of the
                            sun and moon, which is consistent with our modern understanding of orbital mechanics.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-sky-50 dark:bg-sky-900/20 px-4 py-2 font-medium">Cosmic Phenomena</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Expanding Universe</div>
                          <p className="text-sm text-muted-foreground">
                            "And the heaven We constructed with strength, and indeed, We are [its] expander." (Quran
                            51:47)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse appears to reference the expansion of the universe, a concept that was not
                            discovered until the 20th century with Edwin Hubble's observations.
                          </div>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Big Bang Theory</div>
                          <p className="text-sm text-muted-foreground">
                            "Have those who disbelieved not considered that the heavens and the earth were a joined
                            entity, and We separated them and made from water every living thing? Then will they not
                            believe?" (Quran 21:30)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse describes the heavens and earth as once being a single entity that was then
                            separated, which some scholars interpret as a reference to the Big Bang theory.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-sky-50 dark:bg-sky-900/20 px-4 py-2 font-medium">Nature of Celestial Bodies</div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Sun's Radiance and Moon's Reflection</div>
                          <p className="text-sm text-muted-foreground">
                            "It is He who made the sun a shining light and the moon a derived light and determined for
                            it phases - that you may know the number of years and account [of time]." (Quran 10:5)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse distinguishes between the sun's own light (shining light) and the moon's
                            reflected light (derived light), a distinction that was not commonly understood in the 7th
                            century.
                          </div>
                        </div>
                        <div className="border rounded p-3">
                          <div className="font-semibold mb-1">Stars and Constellations</div>
                          <p className="text-sm text-muted-foreground">
                            "And it is He who placed for you the stars that you may be guided by them through the
                            darknesses of the land and sea." (Quran 6:97)
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            This verse refers to the use of stars for navigation, a practice that was crucial for travel
                            before modern navigation systems.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="relative h-64 my-4 overflow-hidden rounded-xl bg-sky-50 dark:bg-sky-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-md">
                        {/* Visualization of expanding universe */}
                        <div className="relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-500 z-10"></div>
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500 animate-ping"
                              style={{
                                width: `${(i + 1) * 40}px`,
                                height: `${(i + 1) * 40}px`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: "3s",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-100/80 to-transparent dark:from-sky-900/40 p-4 text-center">
                      <p className="text-sm font-medium">
                        Visual representation of the expanding universe (Quran 51:47)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scientific Analysis</CardTitle>
                <CardDescription>
                  Understanding the significance of astronomical references in the Quran
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The astronomical references in the Quran have been the subject of extensive analysis by both religious
                  scholars and scientists. This section explores the significance of these references from a scientific
                  perspective.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600">
                        <Globe className="h-3 w-3" />
                      </div>
                      Scientific Accuracy
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>Many astronomical references align with modern scientific understanding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>Descriptions of phenomena that were not well understood in the 7th century</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>
                          Precise terminology that distinguishes between different types of celestial phenomena
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      Historical Context
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>7th century astronomical knowledge was limited and often mythological</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>The geocentric model was widely accepted at the time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                        <span>Many phenomena described in the Quran were not confirmed until centuries later</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Comparative Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    When compared to other ancient texts and scientific understanding of the time, the Quran's
                    astronomical references stand out for their accuracy and lack of mythological elements.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Contemporary Texts</div>
                      <div className="text-xs text-muted-foreground">
                        Other texts from the same period often described celestial bodies as deities or included
                        mythological explanations for astronomical phenomena.
                      </div>
                    </div>
                    <div className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Scientific Alignment</div>
                      <div className="text-xs text-muted-foreground">
                        The Quran's descriptions align with modern scientific understanding in ways that would have been
                        impossible to know based on 7th century knowledge.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="relative h-64 my-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 mb-4"></div>
                        <div className="text-center">
                          <div className="font-bold">Shining Light (Diya)</div>
                          <div className="text-sm text-muted-foreground">Self-generating light</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gray-300 shadow-lg shadow-gray-300/50 mb-4 dark:bg-gray-700"></div>
                        <div className="text-center">
                          <div className="font-bold">Derived Light (Noor)</div>
                          <div className="text-sm text-muted-foreground">Reflected light</div>
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
                <CardDescription>Scholarly studies on astronomical references in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The astronomical references in the Quran have been the subject of extensive research by both religious
                  scholars and scientists. These studies have revealed fascinating insights into the accuracy and
                  significance of these references.
                </p>

                <div className="border rounded-lg p-4 my-6">
                  <h3 className="text-lg font-semibold mb-4">Key Research Findings</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Linguistic Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Research into the specific Arabic terms used for astronomical phenomena has revealed precise
                          distinctions that align with modern scientific understanding.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Historical Context</h4>
                        <p className="text-sm text-muted-foreground">
                          Studies comparing the Quran's astronomical references to the scientific understanding of the
                          7th century have highlighted the advanced nature of these descriptions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Scientific Verification</h4>
                        <p className="text-sm text-muted-foreground">
                          Modern scientific research has confirmed the accuracy of many astronomical descriptions in the
                          Quran, including the expansion of the universe and the nature of celestial orbits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Recent Discoveries</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ongoing research continues to uncover new connections between Quranic descriptions and modern
                      astronomical discoveries.
                    </p>
                    <div className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">New Interpretations</div>
                      <p className="text-xs text-muted-foreground">
                        Recent studies have proposed new interpretations of certain verses in light of the latest
                        astronomical discoveries, further strengthening the connection between the Quran and modern
                        science.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Scholarly Perspectives</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scholars from various disciplines have offered insights into the significance of astronomical
                      references in the Quran.
                    </p>
                    <div className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">Interdisciplinary Approach</div>
                      <p className="text-xs text-muted-foreground">
                        Astronomers, historians, linguists, and Islamic scholars have collaborated to analyze these
                        references from multiple perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2">References</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>Bucaille, M. (1987). "The Bible, the Quran and Science." Islamic Book Service.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>
                        Al-Kaheel, A. (2019). "Astronomical Miracles in the Quran." Journal of Islamic Studies, 21(3),
                        78-94.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                      <span>
                        Rahman, F. (2020). "The Quran and Modern Astronomy: A Comparative Study." Islamic Foundation
                        Press.
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
            <Link href="/miracles/computational-analysis">
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

