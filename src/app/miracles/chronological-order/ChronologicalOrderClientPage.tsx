"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, LineChart, BarChart2, History } from "lucide-react"

export default function ChronologicalOrderClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Data for the timeline visualization
  const timelinePeriods = [
    {
      id: "early-meccan",
      name: "Early Meccan Period",
      years: "610-615 CE",
      description: "Short, rhythmic surahs focusing on monotheism, resurrection, and moral teachings",
      themes: ["Monotheism", "Day of Judgment", "Moral Conduct"],
      examples: ["Al-Alaq (96)", "Al-Muddaththir (74)", "Al-Fatiha (1)"],
    },
    {
      id: "middle-meccan",
      name: "Middle Meccan Period",
      years: "616-619 CE",
      description: "Longer surahs with stories of previous prophets and warnings to disbelievers",
      themes: ["Stories of Prophets", "Divine Justice", "Opposition to Polytheism"],
      examples: ["Maryam (19)", "Ta-Ha (20)", "Al-Furqan (25)"],
    },
    {
      id: "late-meccan",
      name: "Late Meccan Period",
      years: "620-622 CE",
      description: "Detailed arguments against polytheism and preparation for migration",
      themes: ["Logical Arguments", "Consolation to Prophet", "Universal Message"],
      examples: ["Yunus (10)", "Hud (11)", "Yusuf (12)"],
    },
    {
      id: "early-medinan",
      name: "Early Medinan Period",
      years: "623-625 CE",
      description: "Legislation for the new Muslim community and relations with other faiths",
      themes: ["Community Building", "Legal Rulings", "Interfaith Dialogue"],
      examples: ["Al-Baqarah (2)", "Al-Imran (3)", "Al-Nisa (4)"],
    },
    {
      id: "late-medinan",
      name: "Late Medinan Period",
      years: "626-632 CE",
      description: "Completion of legal framework and preparation for the spread of Islam",
      themes: ["Refined Legislation", "International Relations", "Completion of Religion"],
      examples: ["Al-Maidah (5)", "Al-Tawbah (9)", "Al-Nasr (110)"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Clock className="h-8 w-8 mr-2 text-orange-500" />
          <h1 className="text-4xl font-bold text-center">Chronological Order of Revelation</h1>
        </div>

        <p className="text-center text-muted-foreground mb-8">
          Exploring how the Quran's message and themes evolved throughout the 23-year revelation period
        </p>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="thematic">Thematic Development</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-orange-500" />
                  Understanding Chronological Revelation
                </CardTitle>
                <CardDescription>The significance of studying the Quran in its order of revelation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Quran was revealed to Prophet Muhammad over a period of approximately 23 years (610-632 CE). While
                  the standard Quran is arranged according to a specific divine order that is not chronological,
                  studying the chronological sequence of revelation provides valuable insights into:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>The gradual development of Islamic theology and law</li>
                  <li>The historical context of various revelations</li>
                  <li>The pedagogical wisdom in the progressive revelation of divine guidance</li>
                  <li>The responsive nature of revelation to historical circumstances</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Meccan vs. Medinan Surahs</h3>
                <p>Scholars traditionally divide the Quranic revelations into two main periods:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card className="border-orange-200 dark:border-orange-800/30">
                    <CardHeader className="bg-orange-50 dark:bg-orange-900/10">
                      <CardTitle className="text-lg">Meccan Period (610-622 CE)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Focus on monotheism (tawhid)</li>
                        <li>Shorter, more poetic surahs</li>
                        <li>Emphasis on the Day of Judgment</li>
                        <li>Stories of previous prophets</li>
                        <li>Moral and spiritual teachings</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800/30">
                    <CardHeader className="bg-blue-50 dark:bg-blue-900/10">
                      <CardTitle className="text-lg">Medinan Period (622-632 CE)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Focus on social legislation</li>
                        <li>Longer, more detailed surahs</li>
                        <li>Rules for the Muslim community</li>
                        <li>Interfaith dialogue</li>
                        <li>Political and military guidance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2 text-orange-500" />
                  Chronological Timeline
                </CardTitle>
                <CardDescription>The historical progression of Quranic revelation over 23 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline visualization */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-800/30"></div>

                  <div className="space-y-8 relative">
                    {timelinePeriods.map((period, index) => (
                      <div key={period.id} className="ml-12 relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full border-4 border-orange-500 bg-background"></div>

                        <Card className="border-orange-200 dark:border-orange-800/30">
                          <CardHeader className={`bg-orange-${50 + index * 50}/10`}>
                            <CardTitle>{period.name}</CardTitle>
                            <CardDescription>{period.years}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <p className="mb-3">{period.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div>
                                <h4 className="font-semibold mb-2">Key Themes:</h4>
                                <ul className="list-disc pl-6 space-y-1">
                                  {period.themes.map((theme) => (
                                    <li key={theme}>{theme}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Example Surahs:</h4>
                                <ul className="list-disc pl-6 space-y-1">
                                  {period.examples.map((example) => (
                                    <li key={example}>{example}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="thematic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="h-5 w-5 mr-2 text-orange-500" />
                  Thematic Development
                </CardTitle>
                <CardDescription>How key themes evolved throughout the revelation period</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The Quran's themes show a clear developmental trajectory that responded to the changing circumstances
                  of the early Muslim community. This visualization shows how the emphasis on different themes shifted
                  throughout the revelation period.
                </p>

                {/* Thematic Evolution Chart */}
                <div className="w-full h-80 relative mb-8">
                  <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                    {/* X and Y axes */}
                    <line x1="50" y1="250" x2="750" y2="250" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeWidth="2" />

                    {/* X-axis labels (Time periods) */}
                    <text x="150" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Early Meccan
                    </text>
                    <text x="300" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Middle Meccan
                    </text>
                    <text x="450" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Late Meccan
                    </text>
                    <text x="600" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Early Medinan
                    </text>
                    <text x="750" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Late Medinan
                    </text>

                    {/* Y-axis label */}
                    <text
                      x="30"
                      y="150"
                      textAnchor="middle"
                      fontSize="12"
                      fill="currentColor"
                      transform="rotate(-90, 30, 150)"
                    >
                      Emphasis
                    </text>

                    {/* Theme lines */}
                    {/* Monotheism */}
                    <path
                      d="M50,70 L150,90 L300,110 L450,130 L600,150 L750,170"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="70" r="4" fill="#f97316" />
                    <circle cx="150" cy="90" r="4" fill="#f97316" />
                    <circle cx="300" cy="110" r="4" fill="#f97316" />
                    <circle cx="450" cy="130" r="4" fill="#f97316" />
                    <circle cx="600" cy="150" r="4" fill="#f97316" />
                    <circle cx="750" cy="170" r="4" fill="#f97316" />

                    {/* Moral Teachings */}
                    <path
                      d="M50,100 L150,110 L300,120 L450,130 L600,120 L750,110"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="100" r="4" fill="#3b82f6" />
                    <circle cx="150" cy="110" r="4" fill="#3b82f6" />
                    <circle cx="300" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="450" cy="130" r="4" fill="#3b82f6" />
                    <circle cx="600" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="750" cy="110" r="4" fill="#3b82f6" />

                    {/* Legal Rulings */}
                    <path
                      d="M50,230 L150,220 L300,200 L450,170 L600,90 L750,70"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="230" r="4" fill="#10b981" />
                    <circle cx="150" cy="220" r="4" fill="#10b981" />
                    <circle cx="300" cy="200" r="4" fill="#10b981" />
                    <circle cx="450" cy="170" r="4" fill="#10b981" />
                    <circle cx="600" cy="90" r="4" fill="#10b981" />
                    <circle cx="750" cy="70" r="4" fill="#10b981" />

                    {/* Community Building */}
                    <path
                      d="M50,240 L150,230 L300,210 L450,160 L600,80 L750,60"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="240" r="4" fill="#a855f7" />
                    <circle cx="150" cy="230" r="4" fill="#a855f7" />
                    <circle cx="300" cy="210" r="4" fill="#a855f7" />
                    <circle cx="450" cy="160" r="4" fill="#a855f7" />
                    <circle cx="600" cy="80" r="4" fill="#a855f7" />
                    <circle cx="750" cy="60" r="4" fill="#a855f7" />

                    {/* Legend */}
                    <rect x="550" y="30" width="200" height="80" rx="5" fill="currentColor" fillOpacity="0.05" />
                    <text x="560" y="50" fontSize="12" fill="currentColor">
                      Legend:
                    </text>
                    <line x1="560" y1="65" x2="580" y2="65" stroke="#f97316" strokeWidth="3" />
                    <text x="590" y="68" fontSize="12" fill="currentColor">
                      Monotheism
                    </text>
                    <line x1="560" y1="85" x2="580" y2="85" stroke="#3b82f6" strokeWidth="3" />
                    <text x="590" y="88" fontSize="12" fill="currentColor">
                      Moral Teachings
                    </text>
                    <line x1="660" y1="65" x2="680" y2="65" stroke="#10b981" strokeWidth="3" />
                    <text x="690" y="68" fontSize="12" fill="currentColor">
                      Legal Rulings
                    </text>
                    <line x1="660" y1="85" x2="680" y2="85" stroke="#a855f7" strokeWidth="3" />
                    <text x="690" y="88" fontSize="12" fill="currentColor">
                      Community Building
                    </text>
                  </svg>
                </div>

                <h3 className="text-xl font-semibold mt-6">Key Observations</h3>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>
                    <span className="font-medium">Monotheism (Tawhid)</span>: Highly emphasized in early revelations,
                    remains important but becomes more integrated with other themes over time
                  </li>
                  <li>
                    <span className="font-medium">Moral Teachings</span>: Consistently important throughout the
                    revelation period, forming the ethical foundation of the message
                  </li>
                  <li>
                    <span className="font-medium">Legal Rulings</span>: Minimal in early revelations, becoming
                    increasingly prominent in the Medinan period as the Muslim community formed
                  </li>
                  <li>
                    <span className="font-medium">Community Building</span>: Almost absent in early Meccan revelations,
                    becoming a central focus in the Medinan period
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart2 className="h-5 w-5 mr-2 text-orange-500" />
                  Computational Analysis
                </CardTitle>
                <CardDescription>Quantitative insights into the chronological development of the Quran</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Modern computational methods allow us to analyze the Quran's chronological development in ways that
                  weren't possible for classical scholars. Here we present some key findings from computational
                  linguistic analysis of the chronological text.
                </p>

                {/* Computational Analysis Chart */}
                <div className="w-full h-80 relative mb-8">
                  <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                    {/* X and Y axes */}
                    <line x1="50" y1="250" x2="750" y2="250" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeWidth="2" />

                    {/* X-axis labels (Time periods) */}
                    <text x="150" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Early Meccan
                    </text>
                    <text x="300" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Middle Meccan
                    </text>
                    <text x="450" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Late Meccan
                    </text>
                    <text x="600" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Early Medinan
                    </text>
                    <text x="750" y="280" textAnchor="middle" fontSize="12" fill="currentColor">
                      Late Medinan
                    </text>

                    {/* Y-axis label */}
                    <text
                      x="30"
                      y="150"
                      textAnchor="middle"
                      fontSize="12"
                      fill="currentColor"
                      transform="rotate(-90, 30, 150)"
                    >
                      Value
                    </text>

                    {/* Bars for Average Verse Length */}
                    <rect x="80" y="200" width="40" height="50" fill="#f97316" fillOpacity="0.7" />
                    <rect x="230" y="180" width="40" height="70" fill="#f97316" fillOpacity="0.7" />
                    <rect x="380" y="150" width="40" height="100" fill="#f97316" fillOpacity="0.7" />
                    <rect x="530" y="100" width="40" height="150" fill="#f97316" fillOpacity="0.7" />
                    <rect x="680" y="90" width="40" height="160" fill="#f97316" fillOpacity="0.7" />

                    {/* Bars for Vocabulary Diversity */}
                    <rect x="130" y="220" width="40" height="30" fill="#3b82f6" fillOpacity="0.7" />
                    <rect x="280" y="200" width="40" height="50" fill="#3b82f6" fillOpacity="0.7" />
                    <rect x="430" y="170" width="40" height="80" fill="#3b82f6" fillOpacity="0.7" />
                    <rect x="580" y="130" width="40" height="120" fill="#3b82f6" fillOpacity="0.7" />
                    <rect x="730" y="110" width="40" height="140" fill="#3b82f6" fillOpacity="0.7" />

                    {/* Legend */}
                    <rect x="550" y="30" width="200" height="60" rx="5" fill="currentColor" fillOpacity="0.05" />
                    <text x="560" y="50" fontSize="12" fill="currentColor">
                      Legend:
                    </text>
                    <rect x="560" y="60" width="15" height="15" fill="#f97316" fillOpacity="0.7" />
                    <text x="580" y="72" fontSize="12" fill="currentColor">
                      Average Verse Length
                    </text>
                    <rect x="680" y="60" width="15" height="15" fill="#3b82f6" fillOpacity="0.7" />
                    <text x="700" y="72" fontSize="12" fill="currentColor">
                      Vocabulary Diversity
                    </text>
                  </svg>
                </div>

                <h3 className="text-xl font-semibold mt-6">Key Findings</h3>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>
                    <span className="font-medium">Verse Length</span>: Average verse length increases significantly from
                    early Meccan to late Medinan surahs, reflecting the shift from poetic proclamations to detailed
                    legislation
                  </li>
                  <li>
                    <span className="font-medium">Vocabulary Diversity</span>: The lexical variety expands throughout
                    the revelation period, with Medinan surahs introducing new terminology related to social
                    organization, law, and interfaith relations
                  </li>
                  <li>
                    <span className="font-medium">Rhetorical Devices</span>: Early surahs feature more oath-taking,
                    rhyme, and assonance, while later surahs employ more extended metaphors and logical argumentation
                  </li>
                  <li>
                    <span className="font-medium">Intertextuality</span>: References to previous prophets and scriptures
                    increase in the middle Meccan period and remain prominent throughout the later revelations
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Scholarly Perspectives</h3>
                <p className="mt-3">
                  Modern scholars have noted that the chronological development of the Quran demonstrates a remarkable
                  pedagogical wisdom, with complex theological and legal concepts introduced gradually after
                  establishing foundational beliefs. This progressive revelation allowed the early Muslim community to
                  internalize the message in stages, building a comprehensive worldview and legal system over time.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

