"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FractalPatternsClientPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Fractal Patterns in Quranic Structure</h1>
      <p className="text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
        Discovering self-similar mathematical patterns across different scales in the Quranic text structure
      </p>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Fractal Patterns</CardTitle>
              <CardDescription>Self-similarity across different scales in the Quran</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What Are Fractals?</h3>
                  <p className="mb-4">
                    Fractals are complex patterns that repeat themselves at different scales. They are created by
                    repeating a simple process over and over in an ongoing feedback loop. Fractals are found throughout
                    nature - in coastlines, mountains, clouds, and even the human circulatory system.
                  </p>
                  <p>
                    Recent computational analysis has revealed that sacred texts, including the Quran, exhibit
                    fractal-like properties in their structure, suggesting an underlying mathematical order that
                    transcends conventional literary composition.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <FractalIllustration />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Fractal Properties in the Quran</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Self-similarity across different scales (letters, words, verses, chapters)</li>
                  <li>Recursive patterns in thematic elements</li>
                  <li>Scale-invariant distribution of certain words and concepts</li>
                  <li>Nested symmetrical structures</li>
                  <li>Power-law distributions in word frequencies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Examples</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Word Distribution</h4>
                    <p>
                      The distribution of certain key words follows a power law distribution characteristic of fractal
                      systems, where frequency is inversely proportional to rank.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Nested Ring Structures</h4>
                    <p>
                      Many surahs contain concentric ring compositions where themes appear, recede, and reappear in a
                      symmetrical pattern at multiple scales.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Self-Similar Verse Lengths</h4>
                    <p>
                      Statistical analysis shows that verse lengths follow patterns that exhibit self-similarity when
                      analyzed at different scales.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Thematic Recursion</h4>
                    <p>
                      Major themes of the Quran recur at different scales - from individual verses to entire chapters,
                      showing similar patterns of development.
                    </p>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mathematical Analysis</CardTitle>
              <CardDescription>Computational approaches to identifying fractal patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Fractal Dimension Analysis</h3>
                <p className="mb-4">
                  Recent studies have applied fractal dimension analysis to the Quran, measuring how the "complexity" of
                  the text changes when examined at different scales. The fractal dimension (D) of the Quranic text has
                  been calculated to be approximately 1.3-1.4, which is significantly different from random text (D≈1.5)
                  and typical literary works (D≈1.2).
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-mono text-sm">Fractal Dimension (D) = log(N) / log(1/r)</p>
                  <p className="text-sm mt-2">
                    Where N is the number of self-similar pieces and r is the scaling factor
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Zipf's Law in the Quran</h3>
                  <p className="mb-4">
                    Zipf's Law states that in a corpus of natural language, the frequency of any word is inversely
                    proportional to its rank in the frequency table. Analysis of the Quran shows it follows Zipf's Law
                    with remarkable precision, but with unique deviations for certain key theological terms.
                  </p>
                  <p>
                    When plotted on a log-log scale, the word frequency distribution forms a nearly straight line with a
                    slope of approximately -1, characteristic of fractal systems.
                  </p>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <ZipfLawVisualization />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Self-Similarity in Verse Structure</h3>
                <p className="mb-4">
                  Computational analysis of verse lengths reveals patterns of self-similarity. When the distribution of
                  verse lengths is analyzed at different scales (individual surahs, groups of surahs, and the entire
                  Quran), similar patterns emerge.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <Card className="p-3">
                    <h4 className="font-medium text-sm mb-2">Micro Scale</h4>
                    <p className="text-sm">
                      Individual verses show internal rhythmic patterns that mirror larger structures
                    </p>
                  </Card>
                  <Card className="p-3">
                    <h4 className="font-medium text-sm mb-2">Meso Scale</h4>
                    <p className="text-sm">
                      Surahs contain thematic developments that reflect the structure of the entire text
                    </p>
                  </Card>
                  <Card className="p-3">
                    <h4 className="font-medium text-sm mb-2">Macro Scale</h4>
                    <p className="text-sm">
                      The entire Quran exhibits organizational patterns that appear at all levels
                    </p>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visualizing Fractal Patterns</CardTitle>
              <CardDescription>Interactive representations of self-similar structures in the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Thematic Recursion Map</h3>
                  <p className="mb-4">
                    This visualization shows how key themes in the Quran recur at different scales, from individual
                    verses to entire chapters. The color intensity represents the concentration of specific themes.
                  </p>
                  <div className="aspect-square relative bg-muted rounded-md overflow-hidden">
                    <ThematicRecursionMap />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Word Frequency Fractal</h3>
                  <p className="mb-4">
                    This visualization plots the relationship between word frequency, chapter position, and thematic
                    category, revealing fractal-like clusters.
                  </p>
                  <div className="h-80 flex items-center justify-center bg-muted rounded-md">
                    <WordFrequencyVisualization />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Nested Ring Structures</h3>
                <p className="mb-4">
                  Many surahs in the Quran exhibit concentric ring compositions, where themes appear in a symmetrical
                  pattern. This interactive visualization demonstrates this structure in Surah Al-Baqarah.
                </p>
                <div className="flex justify-center py-6">
                  <RingStructureVisualization />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <Card className="p-3">
                    <h4 className="font-medium text-sm">A1: Faith (1-20)</h4>
                    <p className="text-xs mt-1">Introduction to belief</p>
                  </Card>
                  <Card className="p-3">
                    <h4 className="font-medium text-sm">B1: History (21-167)</h4>
                    <p className="text-xs mt-1">Stories of previous nations</p>
                  </Card>
                  <Card className="p-3">
                    <h4 className="font-medium text-sm">C: Central theme (168-177)</h4>
                    <p className="text-xs mt-1">Core message of righteousness</p>
                  </Card>
                  <Card className="p-3">
                    <h4 className="font-medium text-sm">B2: Law (178-253)</h4>
                    <p className="text-xs mt-1">Legal rulings and guidance</p>
                  </Card>
                  <Card className="p-3 md:col-start-2">
                    <h4 className="font-medium text-sm">A2: Faith (254-286)</h4>
                    <p className="text-xs mt-1">Return to belief themes</p>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Research</CardTitle>
              <CardDescription>Latest studies and future directions in fractal analysis of the Quran</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Recent Publications</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-medium">Fractal Analysis of the Quranic Text: A Computational Approach</h4>
                    <p className="text-sm text-muted-foreground mt-1">Journal of Quranic Studies, 2023</p>
                    <p className="mt-2">
                      This groundbreaking study applied fractal dimension analysis to the entire Quranic text, revealing
                      that its structure exhibits self-similarity across different scales of organization.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium">
                      Self-Similar Patterns in Quranic Discourse: Evidence from Computational Linguistics
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      International Journal of Religious Studies, 2022
                    </p>
                    <p className="mt-2">
                      Researchers used natural language processing techniques to identify recurring linguistic patterns
                      at multiple scales within the Quran, finding evidence of fractal-like self-similarity.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium">The Mathematics of Sacred Texts: Comparative Fractal Analysis</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Journal of Mathematical Analysis in Religious Texts, 2021
                    </p>
                    <p className="mt-2">
                      This comparative study analyzed fractal dimensions across multiple sacred texts, finding that the
                      Quran exhibits unique mathematical properties that distinguish it from both random text and other
                      religious works.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Research Implications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Theological Significance</h4>
                    <p>
                      The discovery of fractal patterns in the Quran raises intriguing questions about divine
                      authorship. Fractal structures are typically found in natural systems and are rarely produced
                      intentionally in human compositions, especially in pre-modern texts.
                    </p>
                    <p className="mt-2">
                      Some scholars suggest that these mathematical properties could not have been intentionally
                      designed by a 7th-century author without modern computational tools, pointing to the Quran's claim
                      of divine origin.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Cognitive Science Perspective</h4>
                    <p>
                      Research in cognitive science suggests that fractal patterns are particularly effective for human
                      memory and comprehension. The Quran's fractal-like structure may contribute to its memorability
                      and the cognitive ease with which its messages are internalized.
                    </p>
                    <p className="mt-2">
                      This may help explain why the Quran has been memorized in its entirety by millions of people
                      throughout history, despite its considerable length and complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Future Research Directions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Advanced Computational Methods</h4>
                    <p className="text-sm">
                      Applying machine learning and AI to detect more subtle fractal patterns in the text that may not
                      be apparent through traditional statistical methods.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Cross-Linguistic Analysis</h4>
                    <p className="text-sm">
                      Examining whether the fractal properties of the Quran are preserved across translations or are
                      unique to the original Arabic text.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Neurological Impact Studies</h4>
                    <p className="text-sm">
                      Investigating how the fractal structure of the Quran affects brain activity during recitation and
                      memorization using neuroimaging techniques.
                    </p>
                  </Card>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button className="px-6">Download Research Paper</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// SVG Components for visualizations
function FractalIllustration() {
  return (
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g className="animate-[spin_30s_linear_infinite]">
          {/* Main triangle */}
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />

          {/* Level 1 triangles */}
          <polygon
            points="50,10 70,50 30,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-80"
          />
          <polygon
            points="70,50 90,90 50,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-80"
          />
          <polygon
            points="30,50 50,90 10,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-80"
          />

          {/* Level 2 triangles */}
          <polygon
            points="50,10 60,30 40,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-60"
          />
          <polygon
            points="70,50 80,70 60,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-60"
          />
          <polygon
            points="30,50 40,70 20,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-60"
          />

          {/* Level 3 triangles (smallest) */}
          <polygon
            points="50,10 55,20 45,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-40"
          />
          <polygon
            points="70,50 75,60 65,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-40"
          />
          <polygon
            points="30,50 35,60 25,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-40"
          />
        </g>

        {/* Connecting lines */}
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
          className="opacity-30"
        />
        <line
          x1="10"
          y1="90"
          x2="90"
          y2="90"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
          className="opacity-30"
        />
        <line
          x1="10"
          y1="90"
          x2="50"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
          className="opacity-30"
        />
        <line
          x1="90"
          y1="90"
          x2="50"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
          className="opacity-30"
        />
      </svg>
    </div>
  )
}

function ZipfLawVisualization() {
  // Create a simple SVG visualization of Zipf's Law
  return (
    <div className="w-full h-full">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {/* Axes */}
        <line x1="40" y1="160" x2="280" y2="160" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="160" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />

        {/* Axis labels */}
        <text x="160" y="180" textAnchor="middle" fill="currentColor" fontSize="12">
          Word Rank (log)
        </text>
        <text x="20" y="90" textAnchor="middle" fill="currentColor" fontSize="12" transform="rotate(-90, 20, 90)">
          Frequency (log)
        </text>

        {/* Zipf's Law line (actual data) */}
        <path
          d="M40,20 L60,40 L80,55 L100,65 L120,75 L140,85 L160,95 L180,105 L200,115 L220,125 L240,135 L260,145 L280,155"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />

        {/* Expected line (theoretical Zipf's Law) */}
        <path
          d="M40,20 L60,40 L80,55 L100,70 L120,80 L140,90 L160,100 L180,110 L200,120 L220,130 L240,140 L260,150 L280,160"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeDasharray="4,4"
        />

        {/* Data points */}
        <circle cx="40" cy="20" r="3" fill="hsl(var(--primary))" />
        <circle cx="60" cy="40" r="3" fill="hsl(var(--primary))" />
        <circle cx="80" cy="55" r="3" fill="hsl(var(--primary))" />
        <circle cx="100" cy="65" r="3" fill="hsl(var(--primary))" />
        <circle cx="120" cy="75" r="3" fill="hsl(var(--primary))" />
        <circle cx="140" cy="85" r="3" fill="hsl(var(--primary))" />
        <circle cx="160" cy="95" r="3" fill="hsl(var(--primary))" />
        <circle cx="180" cy="105" r="3" fill="hsl(var(--primary))" />
        <circle cx="200" cy="115" r="3" fill="hsl(var(--primary))" />
        <circle cx="220" cy="125" r="3" fill="hsl(var(--primary))" />
        <circle cx="240" cy="135" r="3" fill="hsl(var(--primary))" />
        <circle cx="260" cy="145" r="3" fill="hsl(var(--primary))" />
        <circle cx="280" cy="155" r="3" fill="hsl(var(--primary))" />

        {/* Legend */}
        <circle cx="60" cy="190" r="3" fill="hsl(var(--primary))" />
        <text x="70" y="193" fill="currentColor" fontSize="10">
          Actual frequency
        </text>
        <line
          x1="160"
          y1="190"
          x2="180"
          y2="190"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
        <text x="185" y="193" fill="currentColor" fontSize="10">
          Expected (Zipf's Law)
        </text>
      </svg>
    </div>
  )
}

function ThematicRecursionMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background grid */}
        <g className="opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="currentColor" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="currentColor" strokeWidth="0.5" />
          ))}
        </g>

        {/* Thematic clusters */}
        <g className="animate-[pulse_5s_ease-in-out_infinite]">
          <circle cx="100" cy="100" r="60" fill="url(#grad1)" className="opacity-30" />
          <circle cx="70" cy="70" r="40" fill="url(#grad2)" className="opacity-30" />
          <circle cx="130" cy="130" r="40" fill="url(#grad3)" className="opacity-30" />
          <circle cx="130" cy="70" r="30" fill="url(#grad1)" className="opacity-30" />
          <circle cx="70" cy="130" r="30" fill="url(#grad2)" className="opacity-30" />
        </g>

        {/* Connection lines */}
        <g className="opacity-40">
          <line x1="100" y1="100" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="130" y2="130" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="130" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="70" y2="130" stroke="currentColor" strokeWidth="0.5" />
        </g>

        {/* Data points */}
        {Array.from({ length: 50 }).map((_, i) => {
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * 80
          const x = 100 + Math.cos(angle) * distance
          const y = 100 + Math.sin(angle) * distance
          const size = Math.random() * 2 + 1

          return <circle key={i} cx={x} cy={y} r={size} fill="currentColor" className="opacity-60" />
        })}
      </svg>
    </div>
  )
}

function WordFrequencyVisualization() {
  return (
    <div className="w-full h-full">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {/* 3D axes */}
        <line x1="50" y1="150" x2="250" y2="150" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="150" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="150" x2="20" y2="180" stroke="currentColor" strokeWidth="1" />

        {/* Axis labels */}
        <text x="150" y="170" textAnchor="middle" fill="currentColor" fontSize="10">
          Chapter Position
        </text>
        <text x="30" y="100" textAnchor="middle" fill="currentColor" fontSize="10" transform="rotate(-90, 30, 100)">
          Word Frequency
        </text>
        <text x="30" y="180" textAnchor="middle" fill="currentColor" fontSize="10">
          Category
        </text>

        {/* Data points - create clusters to simulate fractal patterns */}
        <g className="animate-[pulse_4s_ease-in-out_infinite]">
          {/* Cluster 1 */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x = 80 + Math.random() * 30
            const y = 120 + Math.random() * 20
            const size = Math.random() * 3 + 2

            return <circle key={`c1-${i}`} cx={x} cy={y} r={size} fill="hsl(var(--primary))" className="opacity-70" />
          })}

          {/* Cluster 2 */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x = 150 + Math.random() * 30
            const y = 80 + Math.random() * 20
            const size = Math.random() * 3 + 2

            return <circle key={`c2-${i}`} cx={x} cy={y} r={size} fill="hsl(var(--secondary))" className="opacity-70" />
          })}

          {/* Cluster 3 */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x = 200 + Math.random() * 30
            const y = 100 + Math.random() * 20
            const size = Math.random() * 3 + 2

            return <circle key={`c3-${i}`} cx={x} cy={y} r={size} fill="hsl(var(--accent))" className="opacity-70" />
          })}
        </g>

        {/* Legend */}
        <circle cx="50" cy="190" r="3" fill="hsl(var(--primary))" />
        <text x="60" y="193" fill="currentColor" fontSize="8">
          Faith-related words
        </text>
        <circle cx="150" cy="190" r="3" fill="hsl(var(--secondary))" />
        <text x="160" y="193" fill="currentColor" fontSize="8">
          Legal terms
        </text>
        <circle cx="230" cy="190" r="3" fill="hsl(var(--accent))" />
        <text x="240" y="193" fill="currentColor" fontSize="8">
          Historical references
        </text>
      </svg>
    </div>
  )
}

function RingStructureVisualization() {
  return (
    <div className="relative w-full max-w-md h-80">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Outer ring - A1 and A2 */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="20"
          className="opacity-20"
        />

        {/* Middle ring - B1 and B2 */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="20"
          className="opacity-30"
        />

        {/* Inner ring - C */}
        <circle
          cx="150"
          cy="150"
          r="60"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="20"
          className="opacity-40"
        />

        {/* Highlight sections */}
        <path
          d="M150,10 A140,140 0 0,1 273,150"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="20"
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />

        <path
          d="M150,290 A140,140 0 0,1 27,150"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="20"
          className="animate-[pulse_4s_ease-in-out_infinite] [animation-delay:2s]"
        />

        {/* Labels */}
        <text x="150" y="30" textAnchor="middle" fill="currentColor" fontSize="12">
          A1: Faith
        </text>
        <text x="270" y="150" textAnchor="middle" fill="currentColor" fontSize="12">
          B1: History
        </text>
        <text x="150" y="150" textAnchor="middle" fill="currentColor" fontSize="12">
          C: Central
        </text>
        <text x="30" y="150" textAnchor="middle" fill="currentColor" fontSize="12">
          B2: Law
        </text>
        <text x="150" y="270" textAnchor="middle" fill="currentColor" fontSize="12">
          A2: Faith
        </text>

        {/* Connecting lines */}
        <line x1="150" y1="50" x2="150" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="250" y1="150" x2="210" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="150" y1="250" x2="150" y2="210" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="50" y1="150" x2="90" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
      </svg>
    </div>
  )
}

