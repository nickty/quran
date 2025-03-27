"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, BookText, Scroll, History, ArrowRight, ExternalLink } from "lucide-react"

export default function IntertextualityClientPage() {
  const [selectedStory, setSelectedStory] = useState("noah")

  const scriptureReferences = [
    { id: "noah", name: "Noah", quran: "Surah Nuh (71)", bible: "Genesis 6-9", torah: "Genesis 6-9" },
    { id: "abraham", name: "Abraham", quran: "Multiple Surahs", bible: "Genesis 12-25", torah: "Genesis 12-25" },
    {
      id: "moses",
      name: "Moses",
      quran: "Multiple Surahs",
      bible: "Exodus, Numbers",
      torah: "Exodus, Numbers, Deuteronomy",
    },
    { id: "jesus", name: "Jesus", quran: "Surah Maryam (19)", bible: "Matthew, Mark, Luke, John", torah: "N/A" },
    { id: "joseph", name: "Joseph", quran: "Surah Yusuf (12)", bible: "Genesis 37-50", torah: "Genesis 37-50" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Intertextuality in the Quran</h1>
          <p className="text-lg text-muted-foreground">
            Exploring how the Quran references, reinterprets, and dialogues with earlier scriptures and traditions
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scriptural">Scriptural References</TabsTrigger>
            <TabsTrigger value="comparative">Comparative Analysis</TabsTrigger>
            <TabsTrigger value="research">Research Findings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Intertextuality in the Quran</CardTitle>
                <CardDescription>How the Quran engages with previous scriptures and traditions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Intertextuality refers to the ways in which texts reference, respond to, or build upon other texts.
                  The Quran explicitly positions itself in relation to earlier revelations, particularly the Torah
                  (Tawrat) and the Gospel (Injil), creating a rich network of textual relationships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-blue-700 dark:text-blue-400 flex items-center text-lg">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Confirmation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The Quran affirms the divine origin of previous scriptures and confirms many of their core
                        teachings.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center text-lg">
                        <BookText className="h-5 w-5 mr-2" />
                        Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The Quran offers corrections to what it views as misinterpretations or alterations in previous
                        traditions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-green-700 dark:text-green-400 flex items-center text-lg">
                        <Scroll className="h-5 w-5 mr-2" />
                        Completion
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The Quran presents itself as the final revelation, completing the message of previous
                        scriptures.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Key Aspects of Quranic Intertextuality</h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Narrative Retelling:</span> The Quran retells stories of prophets and
                    communities from earlier traditions, often with different emphases.
                  </li>
                  <li>
                    <span className="font-medium">Theological Dialogue:</span> The Quran engages with theological
                    concepts from Judaism and Christianity, affirming some while reframing others.
                  </li>
                  <li>
                    <span className="font-medium">Linguistic Borrowing:</span> The Quran incorporates terms from
                    Aramaic, Hebrew, Syriac, and other languages, reflecting its engagement with diverse traditions.
                  </li>
                  <li>
                    <span className="font-medium">Cultural Context:</span> The Quran responds to the cultural and
                    religious environment of 7th century Arabia, including Jewish, Christian, and pagan traditions.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scriptural" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scriptural References and Parallels</CardTitle>
                <CardDescription>
                  Exploring how the Quran references and reinterprets stories from earlier scriptures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Prophetic Narratives Across Scriptures</h3>
                  <p className="mb-4">
                    Select a prophetic figure to see how their story appears across different scriptural traditions:
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {scriptureReferences.map((ref) => (
                      <Button
                        key={ref.id}
                        variant={selectedStory === ref.id ? "default" : "outline"}
                        onClick={() => setSelectedStory(ref.id)}
                        className="mb-2"
                      >
                        {ref.name}
                      </Button>
                    ))}
                  </div>

                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle>
                        {scriptureReferences.find((ref) => ref.id === selectedStory)?.name} Across Scriptures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">
                            Quran
                          </Badge>
                          <p>{scriptureReferences.find((ref) => ref.id === selectedStory)?.quran}</p>
                          {selectedStory === "noah" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Focuses on Noah's preaching and his people's rejection</li>
                              <li>Emphasizes monotheism vs. idol worship</li>
                              <li>Dedicated surah (chapter) named after Noah</li>
                            </ul>
                          )}
                          {selectedStory === "abraham" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Emphasizes Abraham's rejection of idolatry</li>
                              <li>Focuses on his building of the Kaaba</li>
                              <li>Highlights his willingness to sacrifice his son</li>
                            </ul>
                          )}
                          {selectedStory === "moses" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Detailed account of confrontation with Pharaoh</li>
                              <li>Emphasis on miracles as signs</li>
                              <li>Mentioned more than any other prophet</li>
                            </ul>
                          )}
                          {selectedStory === "jesus" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Born of virgin Mary through divine miracle</li>
                              <li>Performed miracles by God's permission</li>
                              <li>Not crucified according to Quranic account</li>
                            </ul>
                          )}
                          {selectedStory === "joseph" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Complete narrative in a single surah</li>
                              <li>Emphasis on patience and forgiveness</li>
                              <li>Called "the best of stories" in the Quran</li>
                            </ul>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
                            Bible
                          </Badge>
                          <p>{scriptureReferences.find((ref) => ref.id === selectedStory)?.bible}</p>
                          {selectedStory === "noah" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Detailed account of ark construction</li>
                              <li>Specific dimensions and materials provided</li>
                              <li>Focus on the flood and its aftermath</li>
                            </ul>
                          )}
                          {selectedStory === "abraham" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Detailed genealogy and family relationships</li>
                              <li>Covenant with God emphasized</li>
                              <li>Journey from Ur to Canaan detailed</li>
                            </ul>
                          )}
                          {selectedStory === "moses" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Extensive details of Israelite laws</li>
                              <li>40 years of wandering in the wilderness</li>
                              <li>Detailed tabernacle construction</li>
                            </ul>
                          )}
                          {selectedStory === "jesus" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Four gospel accounts with different emphases</li>
                              <li>Crucifixion central to narrative</li>
                              <li>Resurrection and divine nature emphasized</li>
                            </ul>
                          )}
                          {selectedStory === "joseph" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>More details about family dynamics</li>
                              <li>Administrative role in Egypt emphasized</li>
                              <li>Connection to Israelite settlement in Egypt</li>
                            </ul>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400">
                            Torah
                          </Badge>
                          <p>{scriptureReferences.find((ref) => ref.id === selectedStory)?.torah}</p>
                          {selectedStory === "noah" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Same as Bible Genesis account</li>
                              <li>Includes Noahide laws for all humanity</li>
                              <li>Rainbow as covenant sign</li>
                            </ul>
                          )}
                          {selectedStory === "abraham" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Same as Bible Genesis account</li>
                              <li>Emphasis on circumcision covenant</li>
                              <li>Detailed account of Sodom and Gomorrah</li>
                            </ul>
                          )}
                          {selectedStory === "moses" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Same as Bible account</li>
                              <li>Central figure of Jewish tradition</li>
                              <li>Detailed legal codes and rituals</li>
                            </ul>
                          )}
                          {selectedStory === "jesus" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Not present in Torah</li>
                              <li>Later Jewish traditions have different perspectives</li>
                              <li>N/A</li>
                            </ul>
                          )}
                          {selectedStory === "joseph" && (
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Same as Bible Genesis account</li>
                              <li>Important for Jewish identity in diaspora</li>
                              <li>Connection to tribal history of Israel</li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Unique Quranic Narrative Elements</h3>
                  <p className="mb-4">
                    The Quran often adds unique elements to prophetic narratives that aren't found in earlier
                    scriptures:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Dialogue Elements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          The Quran frequently includes detailed dialogues between prophets and their communities that
                          aren't present in biblical accounts, emphasizing theological arguments and moral lessons.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Moral Focus</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Quranic narratives often emphasize moral and theological lessons over historical or
                          genealogical details that are prominent in biblical accounts.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Additional Prophets</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          The Quran mentions prophets not found in the Bible, such as Hud, Salih, and Shu'ayb, who were
                          sent to Arabian communities.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Narrative Compression</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          The Quran often condenses lengthy biblical narratives, focusing on key moments and theological
                          significance rather than comprehensive storytelling.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparative" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparative Textual Analysis</CardTitle>
                <CardDescription>
                  Examining how the Quran engages with and transforms earlier textual traditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Theological Concepts Across Traditions</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Concept</th>
                          <th className="border p-2 text-left">Quranic Perspective</th>
                          <th className="border p-2 text-left">Biblical/Judaic Perspective</th>
                          <th className="border p-2 text-left">Christian Perspective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Divine Unity</td>
                          <td className="border p-2">Strict monotheism (Tawhid); rejection of Trinity</td>
                          <td className="border p-2">Monotheism with emphasis on God's oneness</td>
                          <td className="border p-2">Trinity; three persons in one God</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Sin & Salvation</td>
                          <td className="border p-2">Individual accountability; no original sin</td>
                          <td className="border p-2">Covenant relationship; atonement through sacrifice</td>
                          <td className="border p-2">Original sin; salvation through Christ's sacrifice</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Prophets</td>
                          <td className="border p-2">All prophets taught same essential message</td>
                          <td className="border p-2">Prophets as covenant mediators and reformers</td>
                          <td className="border p-2">Prophets as forerunners to Christ</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Scripture</td>
                          <td className="border p-2">Quran as final, perfect revelation</td>
                          <td className="border p-2">Torah as divine law and covenant</td>
                          <td className="border p-2">Bible as inspired word of God</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Jesus</td>
                          <td className="border p-2">Prophet and Messiah; not divine; not crucified</td>
                          <td className="border p-2">Various views; generally not accepted as Messiah</td>
                          <td className="border p-2">Son of God; divine; crucified and resurrected</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Linguistic Connections</h3>
                  <p className="mb-4">
                    The Quran contains numerous terms borrowed from or related to earlier Semitic languages, reflecting
                    its engagement with earlier religious traditions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Hebrew/Aramaic Loanwords</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Tawrat (توراة)</span>
                          <span className="text-muted-foreground">Torah (תּוֹרָה)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Injil (إنجيل)</span>
                          <span className="text-muted-foreground">Evangelion (εὐαγγέλιον)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Jibril (جبريل)</span>
                          <span className="text-muted-foreground">Gabriel (גַבְרִיאֵל)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Mika'il (ميكائيل)</span>
                          <span className="text-muted-foreground">Michael (מִיכָאֵל)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Iblis (إبليس)</span>
                          <span className="text-muted-foreground">Diabolos (διάβολος)</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Theological Terms</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Salat (صلاة)</span>
                          <span className="text-muted-foreground">Related to Hebrew tefillah (תְּפִלָּה)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Zakat (زكاة)</span>
                          <span className="text-muted-foreground">Similar to Hebrew tzedakah (צְדָקָה)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sakinah (سكينة)</span>
                          <span className="text-muted-foreground">From Hebrew Shekhinah (שְׁכִינָה)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Malakut (ملكوت)</span>
                          <span className="text-muted-foreground">From Hebrew Malkuth (מַלְכוּת)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Furqan (فرقان)</span>
                          <span className="text-muted-foreground">Related to Aramaic purqan (פורקן)</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Narrative Transformation</h3>
                  <p className="mb-4">
                    The Quran often transforms biblical narratives to emphasize different theological points:
                  </p>

                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Adam's Fall</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Badge className="mb-2">Biblical Account</Badge>
                            <p className="text-sm">
                              Eve tempted by serpent; introduces sin into human nature; results in expulsion and curse.
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              Quranic Account
                            </Badge>
                            <p className="text-sm">
                              Adam and Eve both tempted by Satan; they repent and are forgiven; no concept of original
                              sin.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Abraham's Sacrifice</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Badge className="mb-2">Biblical Account</Badge>
                            <p className="text-sm">
                              Isaac explicitly named as the son to be sacrificed; focus on covenant promise.
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              Quranic Account
                            </Badge>
                            <p className="text-sm">
                              Son not explicitly named (traditionally interpreted as Ishmael); focus on submission to
                              God.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Jesus's Crucifixion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Badge className="mb-2">Biblical Account</Badge>
                            <p className="text-sm">
                              Central to Christian theology; Jesus dies on cross and is resurrected.
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              Quranic Account
                            </Badge>
                            <p className="text-sm">
                              "It was made to appear so to them"; Jesus not crucified but raised to heaven.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research Findings and Scholarly Perspectives</CardTitle>
                <CardDescription>Contemporary academic approaches to intertextuality in the Quran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Academic Approaches</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <History className="h-5 w-5 mr-2" />
                          Historical-Critical Method
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Examines the Quran in its historical context, analyzing how it engaged with the religious and
                          cultural environment of 7th century Arabia. Scholars like Gabriel Said Reynolds and Angelika
                          Neuwirth have pioneered this approach.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <BookText className="h-5 w-5 mr-2" />
                          Literary Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Studies the Quran as a literary text, examining its narrative techniques, rhetorical
                          strategies, and intertextual references. Scholars like Mustansir Mir and Walid Saleh have
                          contributed significantly to this field.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Research Findings</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Quranic Engagement with Late Antique Religious Discourse</p>
                        <p className="text-sm text-muted-foreground">
                          Research by Angelika Neuwirth and Sidney Griffith shows that the Quran actively engages with
                          Jewish and Christian theological debates of Late Antiquity, positioning itself within existing
                          religious discourse rather than in isolation.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Shared Narrative Traditions</p>
                        <p className="text-sm text-muted-foreground">
                          Studies by Nicolai Sinai and Gabriel Said Reynolds demonstrate that the Quran assumes its
                          audience's familiarity with biblical narratives, often alluding to stories without providing
                          complete details, suggesting a shared narrative tradition.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Linguistic Connections</p>
                        <p className="text-sm text-muted-foreground">
                          Research by Michael Marx and Walid Saleh has identified numerous Aramaic, Syriac, and Hebrew
                          loanwords in the Quran, indicating its engagement with earlier Semitic religious vocabularies
                          and concepts.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Reinterpretation of Earlier Traditions</p>
                        <p className="text-sm text-muted-foreground">
                          Work by Jane Dammen McAuliffe shows how the Quran systematically reinterprets earlier
                          religious traditions, affirming their divine origin while offering corrections to what it
                          views as misunderstandings or alterations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Significance for Understanding the Quran</h3>
                  <p className="mb-4">Studying intertextuality in the Quran provides several important insights:</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Historical Context</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Helps situate the Quran within the religious landscape of Late Antiquity, showing how it
                          responded to and engaged with existing traditions.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Theological Dialogue</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Reveals how the Quran positions itself in relation to earlier revelations, affirming
                          continuity while asserting its distinctive theological vision.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Interpretive Framework</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Provides a framework for understanding the Quran's narrative strategies and rhetorical
                          techniques in relation to earlier scriptural traditions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Further Reading</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <p className="text-sm">
                        <span className="font-medium">The Qur'an in its Historical Context</span> - Gabriel Said
                        Reynolds (ed.)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <p className="text-sm">
                        <span className="font-medium">Scripture, Poetry and the Making of a Community</span> - Angelika
                        Neuwirth
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <p className="text-sm">
                        <span className="font-medium">
                          The Bible and the Qur'an: Biblical Figures in the Islamic Tradition
                        </span>{" "}
                        - John Kaltner and Younus Mirza
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <p className="text-sm">
                        <span className="font-medium">Qur'anic Studies Today</span> - Angelika Neuwirth and Michael
                        Sells (eds.)
                      </p>
                    </div>
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

