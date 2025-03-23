"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, History, Award, Globe, Mountain, Building, Shield, Scroll, Users, Zap } from "lucide-react"

export default function HistoricalPropheciesPage() {
  const [activeTab, setActiveTab] = useState("political")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-background to-background dark:from-amber-900/20"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
          Historical Prophecies in the Quran
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Exploring predictions mentioned in the Quran that were later fulfilled in history
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <History className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <span className="text-sm text-muted-foreground">Quranic Revelation: 610-632 CE</span>
        </div>

        <Tabs defaultValue="political" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="political" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Political</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Social</span>
            </TabsTrigger>
            <TabsTrigger value="natural" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span>Natural</span>
            </TabsTrigger>
            <TabsTrigger value="future" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Future</span>
            </TabsTrigger>
          </TabsList>

          {/* Political Prophecies */}
          <TabsContent value="political" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Byzantine Victory
                </CardTitle>
                <CardDescription>
                  Surah Ar-Rum (30:2-4) - "The Romans have been defeated in the nearest land. But after their defeat,
                  they will overcome within a few years."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Byzantine-Persian War SVG Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Timeline */}
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-200 dark:bg-amber-800"></div>

                      {/* 614 CE - Persian Victory */}
                      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-4 h-4 rounded-full bg-red-500 mb-1"></div>
                        <div className="text-xs font-semibold">614 CE</div>
                        <div className="text-xs">Persian Victory</div>
                      </div>

                      {/* 615-616 CE - Quranic Revelation */}
                      <div className="absolute top-1/2 left-2/5 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-4 h-4 rounded-full bg-amber-600 mb-1 animate-pulse"></div>
                        <div className="text-xs font-semibold">615-616 CE</div>
                        <div className="text-xs">Quranic Prophecy</div>
                      </div>

                      {/* 622 CE - Byzantine Victory */}
                      <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-4 h-4 rounded-full bg-green-500 mb-1"></div>
                        <div className="text-xs font-semibold">622 CE</div>
                        <div className="text-xs">Byzantine Victory</div>
                      </div>

                      {/* Byzantine Symbol */}
                      <div className="absolute top-1/4 right-1/4 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full border-4 border-amber-600 dark:border-amber-400 flex items-center justify-center">
                          <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">☧</div>
                        </div>
                      </div>

                      {/* Persian Symbol */}
                      <div className="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full border-4 border-red-600 flex items-center justify-center">
                          <div className="text-2xl font-bold text-red-600">🔥</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    In 614 CE, the Persian Empire defeated the Byzantine Empire and captured Jerusalem. The Quran
                    prophesied that despite this defeat, the Byzantines would be victorious again within a few years
                    (3-9 years in Arabic). This prophecy was fulfilled in 622 CE when Emperor Heraclius defeated the
                    Persians in the Battle of Issus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>615-616 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment Date:</p>
                      <p>622 CE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Conquest of Mecca
                </CardTitle>
                <CardDescription>
                  Surah Al-Fath (48:27) - "You will surely enter the Sacred Mosque, if Allah wills, in safety, with
                  heads shaved and hair shortened, not fearing."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Kaaba Conquest Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Stylized Kaaba */}
                      <div className="w-32 h-32 bg-gray-900 border-2 border-amber-600 dark:border-amber-400 relative">
                        {/* Black Stone */}
                        <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-gray-700 border-2 border-amber-600 dark:border-amber-400"></div>
                      </div>

                      {/* Victory Flags */}
                      <div className="absolute -top-8 -left-4 transform -rotate-12">
                        <div className="w-2 h-20 bg-amber-800 dark:bg-amber-600"></div>
                        <div className="w-12 h-8 bg-green-600 animate-wave origin-left"></div>
                      </div>

                      <div className="absolute -top-10 right-0 transform rotate-12">
                        <div className="w-2 h-20 bg-amber-800 dark:bg-amber-600"></div>
                        <div className="w-12 h-8 bg-green-600 animate-wave origin-left delay-100"></div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        {/* 628 CE - Treaty of Hudaybiyyah */}
                        <div className="absolute top-0 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">628 CE</div>
                          <div className="text-xs">Prophecy</div>
                        </div>

                        {/* 630 CE - Conquest of Mecca */}
                        <div className="absolute top-0 right-1/4 transform -translate-y-1/2 -translate-x-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">630 CE</div>
                          <div className="text-xs">Fulfillment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    This verse was revealed after the Treaty of Hudaybiyyah in 628 CE when Muslims were prevented from
                    entering Mecca. The prophecy stated that Muslims would enter the Sacred Mosque (in Mecca) safely
                    with shaved heads (a ritual of pilgrimage). This was fulfilled in 630 CE when Muslims peacefully
                    conquered Mecca and performed the rituals of pilgrimage.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>628 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment Date:</p>
                      <p>630 CE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Preservation of the Quran
                </CardTitle>
                <CardDescription>
                  Surah Al-Hijr (15:9) - "Indeed, it is We who sent down the Quran and indeed, We will be its guardian."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Quran Preservation Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      {/* Stylized Quran */}
                      <div className="w-48 h-64 mx-auto bg-amber-100 dark:bg-amber-900 border-2 border-amber-600 dark:border-amber-400 rounded-lg shadow-lg relative overflow-hidden">
                        {/* Arabic Text Lines */}
                        <div className="absolute inset-x-4 top-8 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>
                        <div className="absolute inset-x-4 top-16 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>
                        <div className="absolute inset-x-4 top-24 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>
                        <div className="absolute inset-x-4 top-32 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>
                        <div className="absolute inset-x-4 top-40 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>
                        <div className="absolute inset-x-4 top-48 h-4 bg-amber-800/20 dark:bg-amber-400/20 rounded"></div>

                        {/* Protective Shield Animation */}
                        <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-400/10 animate-pulse rounded-lg"></div>
                        <div
                          className="absolute inset-0 border-4 border-amber-500/30 dark:border-amber-400/30 rounded-lg animate-ping"
                          style={{ animationDuration: "3s" }}
                        ></div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute -bottom-12 left-0 right-0">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">610 CE</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">Present</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    This verse promised the preservation of the Quranic text from corruption or loss. Unlike many
                    ancient texts that have been lost or significantly altered over time, the Quran has been preserved
                    in its original form for over 1400 years. Historical manuscripts like the Birmingham Quran
                    Manuscript (dated to 568-645 CE) confirm the text's remarkable preservation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>Early Meccan Period (610-622 CE)</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment:</p>
                      <p>Ongoing for 1400+ years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Prophecies */}
          <TabsContent value="social" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Spread of Islam
                </CardTitle>
                <CardDescription>
                  Surah At-Tawbah (9:33) - "It is He who has sent His Messenger with guidance and the religion of truth
                  to manifest it over all religion, even if the polytheists dislike it."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Spread of Islam Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Mecca Center */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                      </div>

                      {/* Expanding Circles */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="w-12 h-12 rounded-full border-2 border-amber-600/70 dark:border-amber-400/70 animate-ping"
                          style={{ animationDuration: "2s" }}
                        ></div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="w-24 h-24 rounded-full border-2 border-amber-600/60 dark:border-amber-400/60 animate-ping"
                          style={{ animationDuration: "3s" }}
                        ></div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="w-48 h-48 rounded-full border-2 border-amber-600/50 dark:border-amber-400/50 animate-ping"
                          style={{ animationDuration: "4s" }}
                        ></div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="w-80 h-80 rounded-full border-2 border-amber-600/40 dark:border-amber-400/40 animate-ping"
                          style={{ animationDuration: "5s" }}
                        ></div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">630 CE</div>
                        </div>

                        <div className="absolute top-0 left-1/4 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">750 CE</div>
                        </div>

                        <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">1000 CE</div>
                        </div>

                        <div className="absolute top-0 left-3/4 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">1500 CE</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">Present</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    This verse prophesied the spread of Islam throughout the world. At the time of revelation, Muslims
                    were a small, persecuted minority in Mecca. Today, Islam has spread to every continent and is
                    practiced by nearly 2 billion people worldwide, making it the second-largest and fastest-growing
                    religion globally.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>630 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment:</p>
                      <p>Ongoing (7th century to present)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scroll className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Preservation of Pharaoh's Body
                </CardTitle>
                <CardDescription>
                  Surah Yunus (10:90-92) - "Today We will preserve your body so you may be a sign to those who come
                  after you."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Pharaoh's Body Preservation Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Stylized Sarcophagus */}
                      <div className="w-32 h-64 bg-amber-200 dark:bg-amber-800 border-2 border-amber-600 dark:border-amber-400 relative rounded-t-lg">
                        {/* Face Area */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-amber-300 dark:bg-amber-700 rounded-lg"></div>

                        {/* Body Decorations */}
                        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-amber-600/50 dark:bg-amber-400/50"></div>
                        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-amber-600/50 dark:bg-amber-400/50"></div>
                        <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-amber-600/50 dark:bg-amber-400/50"></div>

                        {/* Preservation Glow */}
                        <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-400/10 animate-pulse rounded-t-lg"></div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">~1200 BCE</div>
                          <div className="text-xs">Pharaoh's Death</div>
                        </div>

                        <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">~610-632 CE</div>
                          <div className="text-xs">Quranic Revelation</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">1881 CE</div>
                          <div className="text-xs">Mummy Discovered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    The Quran mentions that the body of the Pharaoh who pursued Moses would be preserved as a sign for
                    future generations. In 1881, archaeologists discovered the mummified body of Ramesses II, who is
                    believed by many scholars to be the Pharaoh of the Exodus. The body is remarkably well-preserved and
                    is now on display at the Egyptian Museum in Cairo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>Early Meccan Period (610-622 CE)</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment Date:</p>
                      <p>1881 CE (Discovery)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Natural Phenomena */}
          <TabsContent value="natural" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Lowest Land on Earth
                </CardTitle>
                <CardDescription>
                  Surah Ar-Rum (30:1-3) - "The Romans have been defeated in the lowest land (adna al-ard)."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Dead Sea Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Topographical Map */}
                      <div className="absolute inset-x-8 top-8 bottom-16 bg-gradient-to-b from-amber-200 to-amber-100 dark:from-amber-800 dark:to-amber-900 rounded-lg overflow-hidden">
                        {/* Land Masses */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-300 dark:bg-amber-700 rounded-lg transform -rotate-12"></div>
                        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-amber-300 dark:bg-amber-700 rounded-lg transform rotate-6"></div>

                        {/* Dead Sea Depression */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/4 bg-blue-500/70 dark:bg-blue-600/70 rounded-lg">
                          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                            -430m
                          </div>
                        </div>

                        {/* Elevation Markers */}
                        <div className="absolute top-1/4 left-1/4 text-xs font-semibold">+200m</div>
                        <div className="absolute top-1/3 right-1/4 text-xs font-semibold">+300m</div>
                        <div className="absolute bottom-1/4 left-1/3 text-xs font-semibold">+100m</div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">615 CE</div>
                          <div className="text-xs">Quranic Revelation</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">1800s+</div>
                          <div className="text-xs">Scientific Confirmation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    The phrase "adna al-ard" in this verse has been translated as both "the nearest land" and "the
                    lowest land." Modern geographical surveys have confirmed that the area around the Dead Sea, where
                    the Byzantine-Persian battle took place, is indeed the lowest land elevation on Earth at
                    approximately 430 meters below sea level. This geographical fact was unknown in the 7th century.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>615-616 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Scientific Confirmation:</p>
                      <p>19th-20th century</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Drought in Mecca
                </CardTitle>
                <CardDescription>
                  Surah Ad-Dukhan (44:10-11) - "Then watch for the day when the sky will bring a visible smoke, covering
                  the people; this is a painful torment."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Drought Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Cracked Earth */}
                      <div className="absolute inset-x-8 bottom-8 h-1/2 bg-amber-300 dark:bg-amber-700 rounded-lg overflow-hidden">
                        {/* Cracks */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-amber-800/70 dark:bg-amber-950/70 transform rotate-45"></div>
                        <div className="absolute top-1/3 left-1/3 w-1/3 h-1 bg-amber-800/70 dark:bg-amber-950/70 transform -rotate-30"></div>
                        <div className="absolute top-1/2 left-1/5 w-2/5 h-1 bg-amber-800/70 dark:bg-amber-950/70 transform rotate-15"></div>
                        <div className="absolute top-2/3 left-2/5 w-2/5 h-1 bg-amber-800/70 dark:bg-amber-950/70 transform -rotate-20"></div>
                      </div>

                      {/* Smoke/Haze */}
                      <div className="absolute inset-x-8 top-8 h-1/3 bg-gray-400/30 dark:bg-gray-600/30 rounded-lg">
                        <div className="absolute inset-0 animate-pulse" style={{ animationDuration: "4s" }}></div>
                      </div>

                      {/* Sun */}
                      <div className="absolute top-12 right-12 w-12 h-12 bg-amber-500 dark:bg-amber-400 rounded-full"></div>

                      {/* Timeline */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">~616 CE</div>
                          <div className="text-xs">Prophecy</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">~618 CE</div>
                          <div className="text-xs">Fulfillment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    According to historical accounts, shortly after this verse was revealed, Mecca experienced a severe
                    drought and famine. The drought was so severe that people reported seeing a haze or "smoke" in the
                    sky due to the extreme heat and dust. The Meccans asked Prophet Muhammad to pray for rain, which
                    eventually came, ending the drought as prophesied.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>~616 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment Date:</p>
                      <p>~618 CE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Future Events */}
          <TabsContent value="future" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Competition in Building Tall Structures
                </CardTitle>
                <CardDescription>
                  Surah Al-Anbiya (21:96) - "When the people of Gog and Magog are let loose and they rush down from
                  every elevation. And the true promise draws near..."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Skyscrapers Visualization */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative w-full h-full flex items-end justify-center">
                      {/* Skyscrapers */}
                      <div className="h-1/4 w-8 bg-gray-300 dark:bg-gray-700 mx-1"></div>
                      <div className="h-1/3 w-8 bg-gray-400 dark:bg-gray-600 mx-1"></div>
                      <div className="h-2/5 w-8 bg-gray-500 dark:bg-gray-500 mx-1"></div>
                      <div className="h-1/2 w-8 bg-gray-600 dark:bg-gray-400 mx-1"></div>
                      <div className="h-3/5 w-8 bg-gray-700 dark:bg-gray-300 mx-1 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-red-500"></div>
                      </div>
                      <div className="h-7/10 w-8 bg-gray-800 dark:bg-gray-200 mx-1 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-red-500"></div>
                      </div>
                      <div className="h-4/5 w-8 bg-gray-900 dark:bg-gray-100 mx-1 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-red-500"></div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">~620 CE</div>
                          <div className="text-xs">Prophecy</div>
                        </div>

                        <div className="absolute top-0 left-1/3 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">1930s</div>
                          <div className="text-xs">Early Skyscrapers</div>
                        </div>

                        <div className="absolute top-0 left-2/3 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mb-1"></div>
                          <div className="text-xs font-semibold">1990s</div>
                          <div className="text-xs">Global Competition</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">Present</div>
                          <div className="text-xs">Ongoing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    In a hadith (saying) explaining this verse, Prophet Muhammad mentioned that one of the signs of the
                    end times would be that "barefoot, naked, destitute shepherds compete in constructing tall
                    buildings." This prophecy is remarkable considering it was made in the 7th century when multi-story
                    buildings were rare. Today, nations around the world compete to build the tallest skyscrapers, with
                    the current record held by the Burj Khalifa at 828 meters.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>~620 CE</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment:</p>
                      <p>20th-21st century</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Technological Advancements
                </CardTitle>
                <CardDescription>
                  Surah At-Takwir (81:1-6) - "When the sun is wrapped up [in darkness], and when the stars fall, and
                  when the mountains are made to vanish..."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-lg overflow-hidden">
                  {/* Technology Evolution Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-evenly">
                      {/* Technology Evolution */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center mb-2">
                          <div className="text-lg">🔥</div>
                        </div>
                        <div className="text-xs font-semibold">Fire</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-300 dark:bg-amber-700 flex items-center justify-center mb-2">
                          <div className="text-lg">⚙️</div>
                        </div>
                        <div className="text-xs font-semibold">Wheel</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center mb-2">
                          <div className="text-lg">🔌</div>
                        </div>
                        <div className="text-xs font-semibold">Electricity</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500 dark:bg-amber-500 flex items-center justify-center mb-2">
                          <div className="text-lg">💻</div>
                        </div>
                        <div className="text-xs font-semibold">Computers</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-600 dark:bg-amber-400 flex items-center justify-center mb-2 animate-pulse">
                          <div className="text-lg">🤖</div>
                        </div>
                        <div className="text-xs font-semibold">AI</div>
                      </div>

                      {/* Timeline */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 bg-amber-200 dark:bg-amber-800 w-full"></div>

                        <div className="absolute top-0 left-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-amber-600 mb-1"></div>
                          <div className="text-xs font-semibold">~610 CE</div>
                          <div className="text-xs">Prophecy</div>
                        </div>

                        <div className="absolute top-0 right-0 transform -translate-y-1/2">
                          <div className="w-3 h-3 rounded-full bg-green-500 mb-1"></div>
                          <div className="text-xs font-semibold">Present</div>
                          <div className="text-xs">Ongoing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                  <p className="text-muted-foreground mb-4">
                    Many scholars interpret these verses as describing not only the end times but also technological
                    advancements that would precede them. The "wrapping up of the sun" has been interpreted as
                    artificial lighting that makes night like day. "Stars falling" has been linked to space exploration
                    and satellite technology. "Mountains vanishing" has been connected to modern mining, tunneling, and
                    construction capabilities that can literally move mountains.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Prophecy Date:</p>
                      <p>Early Meccan Period (610-622 CE)</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/50 p-3 rounded-lg">
                      <p className="font-semibold">Fulfillment:</p>
                      <p>19th-21st century</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">Research Methodology</h2>
          <p className="text-muted-foreground">
            The historical prophecies presented on this page are based on careful analysis of Quranic verses and their
            historical context. Each prophecy is evaluated based on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>The clarity and specificity of the prophecy in the original Arabic text</li>
            <li>The historical documentation of the prophecy's fulfillment from multiple sources</li>
            <li>The time gap between the prophecy and its fulfillment</li>
            <li>The unlikelihood of the prophecy being fulfilled by chance or human calculation</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">References</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Ibn Kathir. (1999). <em>Tafsir Ibn Kathir</em>. Darussalam Publishers.
            </li>
            <li>
              Al-Tabari. (1989). <em>The History of al-Tabari</em>. SUNY Press.
            </li>
            <li>
              Bucaille, M. (2003). <em>The Bible, the Quran and Science</em>. Kazi Publications.
            </li>
            <li>
              Nasr, S.H. (2015). <em>The Study Quran: A New Translation and Commentary</em>. HarperOne.
            </li>
            <li>
              Philips, B. (1997). <em>Usool at-Tafseer: The Methodology of Quranic Interpretation</em>. International
              Islamic Publishing House.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

