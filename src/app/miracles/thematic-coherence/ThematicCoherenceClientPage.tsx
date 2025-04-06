"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Compass, Layers, Search, BarChart2 } from "lucide-react"

export default function ThematicCoherenceClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for thematic connections
  const thematicConnections = [
    {
      theme: "Tawhid (Oneness of God)",
      description: "The central theme of the Quran, emphasizing the absolute unity and uniqueness of God.",
      relatedThemes: ["Prophethood", "Worship", "Justice"],
      icon: <Book />,
    },
    {
      theme: "Prophethood",
      description: "The role of prophets as messengers of God and examples for humanity.",
      relatedThemes: ["Tawhid", "Revelation", "Moral Guidance"],
      icon: <Compass />,
    },
    {
      theme: "Justice and Fairness",
      description: "The importance of justice, fairness, and ethical conduct in all aspects of life.",
      relatedThemes: ["Social Responsibility", "Moral Guidance", "Day of Judgment"],
      icon: <Layers />,
    },
    {
      theme: "Day of Judgment",
      description: "The belief in the afterlife, accountability, and divine judgment.",
      relatedThemes: ["Tawhid", "Prophethood", "Justice and Fairness"],
      icon: <Search />,
    },
    {
      theme: "Worship and Submission",
      description: "The practice of worship and submission to God's will.",
      relatedThemes: ["Tawhid", "Moral Guidance", "Spiritual Practice"],
      icon: <BarChart2 />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Book className="h-8 w-8 mr-2 text-green-600" />
          <h1 className="text-3xl font-bold text-center">Thematic Coherence in the Quran</h1>
        </div>

        <p className="text-center text-muted-foreground mb-8">
          Exploring the interconnectedness of themes and ideas throughout the Quran
        </p>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="connections">Thematic Connections</TabsTrigger>
            <TabsTrigger value="examples">Illustrative Verses</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Thematic Coherence</CardTitle>
                <CardDescription>The Quran's unified message through interconnected themes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Quran is not a collection of disconnected verses but a unified text with a coherent set of themes
                  that are interwoven throughout its chapters. This thematic coherence is a key aspect of the Quran's
                  literary and spiritual power.
                </p>

                <p className="mt-4">
                  Thematic coherence refers to the way in which the Quran's central ideas are interconnected, creating a
                  unified and consistent message. This page explores the key themes and how they relate to each other.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Themes</CardTitle>
                <CardDescription>The core concepts that form the foundation of the Quran's message</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Tawhid (Oneness of God):</strong> The absolute unity and uniqueness of God.
                  </li>
                  <li>
                    <strong>Prophethood:</strong> The role of prophets as messengers of God.
                  </li>
                  <li>
                    <strong>Revelation:</strong> The divine communication through the Quran.
                  </li>
                  <li>
                    <strong>Day of Judgment:</strong> The belief in the afterlife and divine justice.
                  </li>
                  <li>
                    <strong>Moral Guidance:</strong> Ethical principles and righteous conduct.
                  </li>
                  <li>
                    <strong>Social Responsibility:</strong> The importance of justice, fairness, and community.
                  </li>
                  <li>
                    <strong>Worship and Submission:</strong> The practice of worship and submission to God's will.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thematic Relationships</CardTitle>
                <CardDescription>Visualizing the interconnectedness of the Quran's core themes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Quran's themes are not isolated but are intricately connected. The following diagram illustrates
                  how these themes relate to each other.
                </p>

                <div className="relative h-64">
                  {/* Thematic Connection Diagram (Simplified) */}
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    {/* Central Circle - Tawhid */}
                    <circle cx="150" cy="150" r="40" fill="hsl(var(--green))" />
                    <text x="150" y="150" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12">
                      Tawhid
                    </text>

                    {/* Connecting Lines and Circles */}
                    {thematicConnections.map((theme, index) => {
                      const angle = (index * 360) / thematicConnections.length
                      const radians = (angle * Math.PI) / 180
                      const x = 150 + 80 * Math.cos(radians)
                      const y = 150 + 80 * Math.sin(radians)

                      return (
                        <g key={theme.theme}>
                          <line
                            x1="150"
                            y1="150"
                            x2={x}
                            y2={y}
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="3,3"
                          />
                          <circle cx={x} cy={y} r="20" fill="hsl(var(--blue))" />
                          <text
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="currentColor"
                            fontSize="10"
                          >
                            {theme.theme}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Illustrative Verses</CardTitle>
                <CardDescription>Examples of verses that demonstrate thematic coherence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Tawhid and Prophethood</h3>
                    <p className="text-sm text-muted-foreground">
                      "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is
                      there to Him any equivalent.'" (Quran 112:1-4)
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      This surah emphasizes the oneness of God (Tawhid) and is a central theme.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Justice and Social Responsibility</h3>
                    <p className="text-sm text-muted-foreground">
                      "Indeed, Allah orders justice and good conduct and giving [help] to relatives and forbids
                      immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded."
                      (Quran 16:90)
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      This verse connects justice, good conduct, and social responsibility.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Worship and Submission</h3>
                    <p className="text-sm text-muted-foreground">
                      "And I did not create the jinn and mankind except to worship Me." (Quran 51:56)
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      This verse highlights the purpose of creation as worship and submission to God.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scholarly Analysis</CardTitle>
                <CardDescription>Insights from scholars on the interconnectedness of Quranic themes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Scholars have long recognized the thematic coherence of the Quran. The following points summarize key
                  aspects of this analysis:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Thematic Unity</h3>
                    <p>
                      The Quran's themes are not presented in isolation but are interwoven to create a unified message.
                      The concept of Tawhid (Oneness of God) is the central theme, and all other themes are related to
                      it.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Recurring Patterns</h3>
                    <p>
                      Key themes recur throughout the Quran, often in different contexts, reinforcing the message and
                      providing multiple perspectives on the same core ideas.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Linguistic Cohesion</h3>
                    <p>
                      The Quran's language and style contribute to its thematic coherence. The use of recurring phrases,
                      rhetorical devices, and narrative structures reinforces the interconnectedness of the themes.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Spiritual Impact</h3>
                    <p>
                      Thematic coherence enhances the Quran's spiritual impact by creating a sense of unity and
                      completeness. It helps readers understand the message in its entirety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

