"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Book, Microscope, Mountain, Cloud, Star, Heart, Brain, Droplets } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ScientificReferencesPage() {
  // Add this useEffect to inject the required CSS animations
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes orbit {
        from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
      }
      @keyframes fall {
        0% { transform: translateY(-20px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(50px); opacity: 0; }
      }
      @keyframes rise {
        0% { transform: translateY(20px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-30px); opacity: 0; }
      }
      @keyframes meteor {
        0% { transform: translateY(-50px) rotate(45deg); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100px) rotate(45deg); opacity: 0; }
      }
      @keyframes flash {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
      .clip-triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Scientific references data
  const scientificCategories = [
    {
      id: "astronomy",
      title: "Astronomy & Cosmology",
      icon: <Star className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-950/30",
      references: [
        {
          id: "expanding-universe",
          title: "Expanding Universe",
          verse: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
          reference: "Quran 51:47",
          description:
            "This verse appears to reference the expansion of the universe, a concept that wasn't scientifically established until the 1920s when Edwin Hubble discovered that galaxies are moving away from each other.",
          year_discovered: 1929,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "big-bang",
          title: "Origin of the Universe",
          verse:
            "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing? Then will they not believe?",
          reference: "Quran 21:30",
          description:
            "This verse describes the heavens and earth as once being a single entity before being separated, which some interpret as a reference to the Big Bang theory.",
          year_discovered: 1931,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "celestial-orbits",
          title: "Celestial Orbits",
          verse:
            "And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming.",
          reference: "Quran 21:33",
          description:
            "This verse describes celestial bodies moving in orbits, a concept that wasn't fully understood in the 7th century.",
          year_discovered: 1609,
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    {
      id: "geology",
      title: "Geology & Earth Sciences",
      icon: <Mountain className="h-5 w-5" />,
      color: "text-amber-600",
      bgColor: "bg-amber-100 dark:bg-amber-950/30",
      references: [
        {
          id: "mountains-as-pegs",
          title: "Mountains as Stabilizers",
          verse:
            "And He has cast into the earth firmly set mountains, lest it shift with you, and [made] rivers and roads, that you may be guided.",
          reference: "Quran 16:15",
          description:
            "This verse describes mountains as stabilizers for the earth, similar to how modern geology understands the role of mountains in stabilizing the earth's crust.",
          year_discovered: 1960,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "iron-sent-down",
          title: "Iron from Space",
          verse: "And We sent down iron, wherein is great military might and benefits for the people.",
          reference: "Quran 57:25",
          description:
            "The verse mentions iron being 'sent down', which aligns with the modern understanding that iron on Earth originated from outer space through meteorites.",
          year_discovered: 1920,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "barrier-between-waters",
          title: "Barrier Between Waters",
          verse:
            "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses.",
          reference: "Quran 55:19-20",
          description:
            "This verse describes a barrier between two bodies of water, which corresponds to the phenomenon of water bodies meeting but not mixing due to differences in density, temperature, and salinity.",
          year_discovered: 1873,
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    {
      id: "biology",
      title: "Biology & Human Development",
      icon: <Heart className="h-5 w-5" />,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-950/30",
      references: [
        {
          id: "embryonic-development",
          title: "Embryonic Development",
          verse:
            "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh; then We developed him into another creation. So blessed is Allah, the best of creators.",
          reference: "Quran 23:12-14",
          description:
            "These verses describe the stages of embryonic development in a sequence that corresponds to modern embryological understanding.",
          year_discovered: 1888,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "fingerprints",
          title: "Uniqueness of Fingerprints",
          verse:
            "Does man think that We will not assemble his bones? Yes. [We are] Able [even] to proportion his fingertips.",
          reference: "Quran 75:3-4",
          description:
            "The reference to reconstructing fingertips is notable as fingerprints are unique to each individual, a fact not scientifically established until the late 19th century.",
          year_discovered: 1880,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "brain-function",
          title: "Frontal Lobe Function",
          verse: "No! If he does not desist, We will surely drag him by the forelock - A lying, sinning forelock.",
          reference: "Quran 96:15-16",
          description:
            "The verse associates the forelock (frontal area of the brain) with lying and sin, which aligns with modern neuroscience's understanding that the prefrontal cortex is responsible for moral behavior and decision-making.",
          year_discovered: 1848,
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    {
      id: "meteorology",
      title: "Meteorology & Water Cycle",
      icon: <Cloud className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950/30",
      references: [
        {
          id: "water-cycle",
          title: "The Water Cycle",
          verse:
            "And We send the fecundating winds, then cause the rain to descend from the sky, therewith providing you with water (in abundance).",
          reference: "Quran 15:22",
          description:
            "This verse describes winds as 'fecundating' or fertilizing, which corresponds to the role of winds in carrying water vapor and forming clouds in the water cycle.",
          year_discovered: 1580,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "cloud-formation",
          title: "Cloud Formation",
          verse:
            "Do you not see that Allah drives clouds? Then He brings them together, then He makes them into a mass, and you see the rain emerge from within it.",
          reference: "Quran 24:43",
          description:
            "This verse describes the process of cloud formation and precipitation in a way that aligns with modern meteorological understanding.",
          year_discovered: 1803,
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "lightning-thunder",
          title: "Lightning and Thunder",
          verse: "It is He who shows you lightning, [causing] fear and aspiration, and generates the heavy clouds.",
          reference: "Quran 13:12",
          description:
            "The verse connects lightning with the formation of heavy clouds, which aligns with our understanding of electrical discharge in storm clouds.",
          year_discovered: 1752,
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-background to-background dark:from-blue-900/20"></div>

      <div className="mb-8">
        <Link href="/miracles">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Miracles
          </Button>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Scientific References in the Quran</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Exploring verses that appear to describe scientific phenomena that weren't widely understood at the time of
          revelation
        </p>
      </div>

      {/* Introduction Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Introduction
          </CardTitle>
          <CardDescription>
            Understanding the relationship between Quranic verses and scientific discoveries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                The Quran, revealed over 1400 years ago, contains numerous verses that appear to describe natural
                phenomena in ways that align with modern scientific understanding. These references span various fields
                including astronomy, geology, biology, and meteorology.
              </p>
              <p className="mb-4">
                What makes these references remarkable is that many describe concepts that weren't scientifically
                established until centuries after the Quran's revelation. This page explores some of these references
                and their correlation with scientific discoveries.
              </p>
              <p>
                It's important to note that the Quran is primarily a book of guidance rather than a scientific textbook.
                These scientific references serve as signs that invite contemplation about the divine origin of the
                text.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Timeline Perspective</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground w-16 text-center py-1 rounded text-sm">
                    610-632 CE
                  </div>
                  <div>Quranic Revelation Period</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 w-16 text-center py-1 rounded text-sm">7th-19th C</div>
                  <div>Medieval Scientific Understanding</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 w-16 text-center py-1 rounded text-sm">19th-21st C</div>
                  <div>Modern Scientific Discoveries</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Many scientific concepts mentioned in the Quran weren't discovered or widely understood until
                  centuries or even millennia after its revelation.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content with Tabs */}
      <Tabs defaultValue="astronomy" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {scientificCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              <span className={`${category.color}`}>{category.icon}</span>
              <span className="hidden md:inline">{category.title}</span>
              <span className="md:hidden">{category.title.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {scientificCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-8">
              <div className={`p-6 rounded-lg ${category.bgColor}`}>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <span className={category.color}>{category.icon}</span>
                  {category.title}
                </h2>
                <p className="text-muted-foreground">
                  Quranic verses that appear to reference concepts in {category.title.toLowerCase()}
                </p>
              </div>

              {category.references.map((reference) => (
                <Card key={reference.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{reference.title}</h3>
                      <div className="bg-muted p-4 rounded-lg mb-4 italic">
                        "{reference.verse}"
                        <div className="text-right font-semibold mt-2 text-sm">{reference.reference}</div>
                      </div>
                      <p className="mb-4">{reference.description}</p>
                      <div className="text-sm text-muted-foreground">
                        Scientific discovery: circa {reference.year_discovered}
                      </div>
                    </div>
                    <div className="bg-muted flex items-center justify-center p-6">
                      <div className="w-full h-[200px] flex items-center justify-center">
                        {reference.id === "expanding-universe" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute w-20 h-20 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
                            <div className="absolute w-44 h-44 bg-purple-400 rounded-full opacity-5 animate-pulse"></div>
                            <div className="absolute w-56 h-56 bg-purple-300 rounded-full opacity-5 animate-pulse"></div>
                            <div className="z-10 text-purple-700 dark:text-purple-300">
                              <Star className="h-8 w-8" />
                            </div>
                          </div>
                        )}

                        {reference.id === "big-bang" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-amber-500 rounded-full"></div>
                            </div>
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                style={{
                                  left: `${50 + Math.cos((i * Math.PI) / 6) * 40}%`,
                                  top: `${50 + Math.sin((i * Math.PI) / 6) * 40}%`,
                                  animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}

                        {reference.id === "celestial-orbits" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full z-10"></div>
                            <div
                              className="absolute w-40 h-40 rounded-full border border-dashed border-blue-300 animate-spin"
                              style={{ animationDuration: "20s" }}
                            ></div>
                            <div
                              className="absolute w-60 h-60 rounded-full border border-dashed border-red-300 animate-spin"
                              style={{ animationDuration: "30s" }}
                            ></div>
                            <div
                              className="absolute w-4 h-4 bg-blue-400 rounded-full"
                              style={{
                                left: "calc(50% + 20px)",
                                top: "calc(50%)",
                                animation: "orbit 20s linear infinite",
                              }}
                            ></div>
                            <div
                              className="absolute w-3 h-3 bg-red-400 rounded-full"
                              style={{
                                left: "calc(50% + 30px)",
                                top: "calc(50%)",
                                animation: "orbit 30s linear infinite",
                              }}
                            ></div>
                          </div>
                        )}

                        {reference.id === "mountains-as-pegs" && (
                          <div className="relative w-full h-full flex items-end justify-center">
                            <div className="h-16 w-full bg-amber-800 rounded-t-lg relative">
                              <div className="absolute -top-12 left-10 w-16 h-12 bg-amber-700 clip-triangle"></div>
                              <div className="absolute -top-20 left-32 w-20 h-20 bg-amber-600 clip-triangle"></div>
                              <div className="absolute -top-16 right-20 w-16 h-16 bg-amber-700 clip-triangle"></div>
                              <div className="absolute -bottom-8 left-0 w-full h-8 bg-amber-900 opacity-50"></div>
                            </div>
                          </div>
                        )}

                        {reference.id === "iron-sent-down" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-white font-mono">
                              Fe
                            </div>
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-6 bg-amber-500"
                                style={{
                                  transform: `rotate(${i * 36}deg)`,
                                  transformOrigin: "bottom",
                                  animation: "meteor 3s ease-in infinite",
                                  animationDelay: `${i * 0.5}s`,
                                  top: "20%",
                                  left: `${40 + i * 5}%`,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}

                        {reference.id === "barrier-between-waters" && (
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 flex">
                              <div className="w-1/2 h-full bg-blue-300 flex items-center justify-center">
                                <Droplets className="h-8 w-8 text-blue-600" />
                              </div>
                              <div className="w-1/2 h-full bg-blue-600 flex items-center justify-center">
                                <Droplets className="h-8 w-8 text-blue-200" />
                              </div>
                            </div>
                            <div className="absolute h-full w-4 bg-gradient-to-r from-blue-300 to-blue-600 z-10"></div>
                          </div>
                        )}

                        {reference.id === "embryonic-development" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="flex space-x-8">
                              <div className="w-12 h-12 rounded-full border-2 border-red-300 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-200"></div>
                              </div>
                              <div className="w-12 h-16 rounded-full bg-red-300"></div>
                              <div className="w-16 h-16 rounded-lg bg-red-400"></div>
                              <div className="w-12 h-20 rounded-lg bg-red-500 flex flex-col justify-center items-center">
                                <div className="w-8 h-1 bg-white mb-1"></div>
                                <div className="w-8 h-1 bg-white mb-1"></div>
                                <div className="w-8 h-1 bg-white"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {reference.id === "fingerprints" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-40 h-56 bg-amber-100 rounded-lg flex items-center justify-center">
                              <div className="w-32 h-48 relative">
                                {[...Array(15)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-full h-3 border border-amber-400 rounded-full"
                                    style={{
                                      top: `${i * 3}px`,
                                      borderRadius: `${100 - i * 5}% ${100 - i * 5}% ${i * 5}% ${i * 5}%`,
                                      transform: `scaleX(${0.8 + i * 0.01})`,
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {reference.id === "brain-function" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-48 h-48 bg-pink-200 rounded-t-full flex items-start justify-center p-4">
                              <div className="w-16 h-16 bg-pink-400 rounded-lg animate-pulse"></div>
                            </div>
                          </div>
                        )}

                        {reference.id === "water-cycle" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute top-10 left-1/4 transform -translate-x-1/2">
                              <Cloud className="h-16 w-16 text-blue-300" />
                            </div>
                            <div className="absolute top-10 right-1/4 transform translate-x-1/2">
                              <Cloud className="h-16 w-16 text-blue-400" />
                            </div>
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-4 bg-blue-400 rounded-full"
                                style={{
                                  left: `${30 + i * 5}%`,
                                  top: "40%",
                                  animation: "fall 2s linear infinite",
                                  animationDelay: `${i * 0.2}s`,
                                }}
                              ></div>
                            ))}
                            <div className="absolute bottom-10 w-3/4 h-8 bg-blue-500 rounded-lg"></div>
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-8 bg-blue-200"
                                style={{
                                  left: `${30 + i * 10}%`,
                                  bottom: "30%",
                                  animation: "rise 3s linear infinite",
                                  animationDelay: `${i * 0.5}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}

                        {reference.id === "cloud-formation" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute top-10 left-1/4">
                              <Cloud className="h-10 w-10 text-gray-300" />
                            </div>
                            <div className="absolute top-20 left-1/3">
                              <Cloud className="h-12 w-12 text-gray-400" />
                            </div>
                            <div className="absolute top-10 right-1/4">
                              <Cloud className="h-10 w-10 text-gray-300" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <Cloud className="h-24 w-24 text-gray-500" />
                            </div>
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-4 bg-blue-400 rounded-full"
                                style={{
                                  left: `${45 + (i - 4) * 2}%`,
                                  top: "60%",
                                  animation: "fall 1.5s linear infinite",
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}

                        {reference.id === "lightning-thunder" && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Cloud className="h-32 w-32 text-gray-600" />
                            </div>
                            <div
                              className="absolute h-40 w-2 bg-yellow-300 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                              style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 50% 20%, 100% 40%, 50% 60%, 100% 80%, 50% 100%)",
                                animation: "flash 3s infinite",
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Research Methodology */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Microscope className="h-5 w-5 text-primary" />
            Research Methodology
          </CardTitle>
          <CardDescription>Approaches to studying scientific references in the Quran</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Textual Analysis</h3>
              <p className="text-sm">
                Careful examination of the original Arabic text, its linguistic nuances, and the context of revelation
                to understand the intended meaning.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Historical Context</h3>
              <p className="text-sm">
                Consideration of the scientific understanding available at the time of revelation to identify concepts
                that weren't commonly known.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Comparative Analysis</h3>
              <p className="text-sm">
                Comparison with modern scientific discoveries to identify correlations while avoiding overinterpretation
                or forcing alignment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scholarly Perspectives */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Scholarly Perspectives
          </CardTitle>
          <CardDescription>Different viewpoints on scientific references in the Quran</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Traditional Interpretation</h3>
              <p>
                Many traditional scholars view these verses as signs (ayat) that demonstrate the divine origin of the
                Quran, while emphasizing that the Quran's primary purpose is spiritual guidance rather than scientific
                instruction.
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Modern Scientific Approach</h3>
              <p>
                Some contemporary scholars and scientists have conducted detailed studies comparing Quranic verses with
                modern scientific knowledge, highlighting the remarkable accuracy of descriptions that predate
                scientific discoveries by centuries.
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Cautionary Perspective</h3>
              <p>
                Other scholars caution against "scientific exegesis" that might force modern scientific concepts onto
                Quranic verses, noting that scientific theories evolve while the Quran's message is timeless.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* References Section */}
      <Card>
        <CardHeader>
          <CardTitle>References & Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bucaille, M. (1976). The Bible, the Qur'an and Science. North American Trust Publications.</li>
            <li>
              Naik, Z. (2000). The Qur'an and Modern Science: Compatible or Incompatible? Islamic Research Foundation.
            </li>
            <li>Ibrahim, I. A. (1997). A Brief Illustrated Guide to Understanding Islam. Darussalam.</li>
            <li>
              Moore, K. L. (1982). The Developing Human: Clinically Oriented Embryology with Islamic Additions.
              Saunders.
            </li>
            <li>
              El-Naggar, Z. R. (1991). The Geological Concept of Mountains in the Qur'an. International Commission on
              Scientific Signs in Qur'an and Sunnah.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

