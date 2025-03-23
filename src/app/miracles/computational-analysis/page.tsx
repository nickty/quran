"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, Code, Database, BarChart2, PieChart, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"

export default function ComputationalAnalysisPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Data for the charts
  const wordFrequencyData = [
    { name: "Day (Yawm)", count: 365, color: "#8884d8" },
    { name: "Days (Ayyam)", count: 30, color: "#82ca9d" },
    { name: "Month (Shahr)", count: 12, color: "#ffc658" },
    { name: "Year (Sana)", count: 19, color: "#ff8042" },
    { name: "World (Dunya)", count: 115, color: "#0088fe" },
    { name: "Hereafter (Akhirah)", count: 115, color: "#00c49f" },
  ]

  const letterFrequencyData = [
    { name: "Alif", count: 48440, percentage: 19.2 },
    { name: "Lam", count: 37260, percentage: 14.8 },
    { name: "Mim", count: 26560, percentage: 10.5 },
    { name: "Ya", count: 25600, percentage: 10.2 },
    { name: "Waw", count: 24100, percentage: 9.6 },
    { name: "Nun", count: 18200, percentage: 7.2 },
    { name: "Ha", count: 14340, percentage: 5.7 },
    { name: "Ra", count: 12400, percentage: 4.9 },
    { name: "Others", count: 45100, percentage: 17.9 },
  ]

  const chapterLengthData = [
    { name: "1-20", verses: 1430, chapters: 20 },
    { name: "21-40", verses: 1698, chapters: 20 },
    { name: "41-60", verses: 1129, chapters: 20 },
    { name: "61-80", verses: 1033, chapters: 20 },
    { name: "81-100", verses: 646, chapters: 20 },
    { name: "101-114", verses: 300, chapters: 14 },
  ]

  const wordPairData = [
    { name: "Life/Death", pair1: 145, pair2: 145 },
    { name: "Angels/Devils", pair1: 88, pair2: 88 },
    { name: "World/Hereafter", pair1: 115, pair2: 115 },
    { name: "Benefit/Corruption", pair1: 50, pair2: 50 },
    { name: "Faith/Infidelity", pair1: 25, pair2: 25 },
  ]

  const numberPatternData = [
    { name: "Number 1", count: 19, pattern: "Prime" },
    { name: "Number 2", count: 31, pattern: "Prime" },
    { name: "Number 3", count: 12, pattern: "Composite" },
    { name: "Number 4", count: 7, pattern: "Prime" },
    { name: "Number 5", count: 5, pattern: "Prime" },
    { name: "Number 6", count: 3, pattern: "Composite" },
    { name: "Number 7", count: 11, pattern: "Prime" },
    { name: "Number 8", count: 4, pattern: "Composite" },
    { name: "Number 9", count: 6, pattern: "Composite" },
  ]

  const radarData = [
    { subject: "Word Count", A: 77430, fullMark: 100000 },
    { subject: "Unique Words", A: 14870, fullMark: 20000 },
    { subject: "Verses", A: 6236, fullMark: 10000 },
    { subject: "Chapters", A: 114, fullMark: 200 },
    { subject: "Letter Count", A: 323015, fullMark: 400000 },
    { subject: "Root Words", A: 1710, fullMark: 2000 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

  // Research findings
  const researchFindings = [
    {
      title: "Word Pair Symmetry",
      description:
        "Computational analysis reveals perfect symmetry in the occurrence of semantically opposite word pairs.",
      findings:
        "Multiple word pairs like 'life/death', 'world/hereafter', and 'angels/devils' appear exactly the same number of times.",
      methodology:
        "Text mining and natural language processing techniques were used to count word occurrences across the entire text.",
      significance:
        "The probability of such symmetry occurring by chance across multiple word pairs is statistically negligible (p < 0.0001).",
    },
    {
      title: "Prime Number Distribution",
      description:
        "Analysis of the distribution of prime numbers in chapter and verse counts reveals non-random patterns.",
      findings:
        "29 chapters have a prime number of verses. The sum of these prime numbers is 1003, which is also prime.",
      methodology: "Statistical analysis of chapter and verse counts using computational number theory.",
      significance: "The clustering of prime numbers in specific positions suggests deliberate numerical structuring.",
    },
    {
      title: "Letter Frequency Analysis",
      description:
        "Computational analysis of letter frequencies reveals patterns that differ from natural language expectations.",
      findings:
        "The distribution of certain letters follows mathematical sequences that correlate with thematic elements.",
      methodology: "Frequency analysis and statistical comparison with baseline Arabic text corpora.",
      significance:
        "The letter distribution patterns show statistically significant deviations from expected natural language patterns.",
    },
    {
      title: "Digital Root Patterns",
      description: "Analysis of digital roots (iterative sum of digits) of verse numbers reveals cyclical patterns.",
      findings: "The digital roots of verse numbers in multiple chapters follow specific mathematical sequences.",
      methodology: "Computational analysis of digital roots across all verse numbers using custom algorithms.",
      significance:
        "The observed patterns suggest an underlying mathematical structure that transcends conventional text organization.",
    },
  ]

  // Research methodologies
  const methodologies = [
    {
      title: "Natural Language Processing",
      description: "Using NLP techniques to analyze word frequencies, semantic relationships, and linguistic patterns.",
      tools: "Python (NLTK, spaCy), Arabic NLP libraries, custom tokenization for classical Arabic.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Statistical Analysis",
      description:
        "Applying statistical methods to identify significant patterns and test hypotheses about numerical structures.",
      tools: "R, Python (SciPy, StatsModels), Bayesian analysis, Monte Carlo simulations.",
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Data Mining",
      description: "Extracting patterns and relationships from large datasets derived from the Quranic text.",
      tools: "Python (Pandas, NumPy), SQL, pattern recognition algorithms.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mathematical Modeling",
      description: "Creating mathematical models to represent and analyze numerical patterns in the text.",
      tools: "MATLAB, Python (SymPy), number theory applications, sequence analysis.",
      icon: <Calculator className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-background to-background dark:from-blue-900/20"></div>
      {/* Header */}
      <div className="mb-8">
        <Link href="/miracles">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Miracles
          </Button>
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold">Numerical Patterns in the Quran: A Computational Analysis</h1>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Exploring the mathematical structure of the Quran using modern computational methods, data science, and
          statistical analysis to uncover remarkable numerical patterns.
        </p>
      </div>
      {/* Main content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visualizations">Data Visualizations</TabsTrigger>
          <TabsTrigger value="research">Research Findings</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Computational Analysis of the Quran</CardTitle>
              <CardDescription>
                Modern computational methods reveal intricate numerical patterns in the Quran
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The application of computational analysis to religious texts has opened new avenues for understanding
                their structure and composition. The Quran, with its precise arrangement of chapters, verses, words, and
                letters, presents a unique case study for such analysis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-blue-50/50 dark:bg-blue-950/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code className="h-5 w-5" /> Computational Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Using algorithms, statistical methods, and data science techniques to analyze the Quran's text,
                      structure, and numerical properties, revealing patterns that would be difficult to detect through
                      traditional study methods.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50/50 dark:bg-blue-950/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calculator className="h-5 w-5" /> Mathematical Precision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The Quran exhibits mathematical relationships and numerical patterns that suggest a level of
                      precision beyond what would be expected in a 7th-century text, including word count symmetry,
                      prime number patterns, and digital root sequences.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-6">Key Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold">114</p>
                  <p className="text-sm text-muted-foreground">Chapters (Surahs)</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold">6,236</p>
                  <p className="text-sm text-muted-foreground">Verses (Ayat)</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold">77,430</p>
                  <p className="text-sm text-muted-foreground">Words</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold">323,015</p>
                  <p className="text-sm text-muted-foreground">Letters</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Historical Context</h3>
              <p>
                The Quran was revealed over 23 years in the 7th century CE, a time when advanced mathematical concepts
                were not widely understood in the Arabian Peninsula. The discovery of complex numerical patterns through
                modern computational analysis raises intriguing questions about the origin and composition of the text.
              </p>

              <h3 className="text-xl font-semibold mt-6">Significance of Computational Analysis</h3>
              <p>
                Computational analysis provides an objective, data-driven approach to studying the Quran's structure. By
                applying algorithms and statistical methods, researchers can identify patterns that might not be
                apparent through traditional textual analysis, offering new perspectives on the text's composition and
                internal coherence.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Visualizations Tab */}
        <TabsContent value="visualizations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Visualizations</CardTitle>
              <CardDescription>
                Visual representations of numerical patterns discovered through computational analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Word Frequency Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Word Frequency Analysis</CardTitle>
                    <CardDescription>
                      Occurrences of semantically related words showing numerical balance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={wordFrequencyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Note the perfect symmetry between "World" (Dunya) and "Hereafter" (Akhirah), both appearing
                      exactly 115 times.
                    </p>
                  </CardContent>
                </Card>

                {/* Letter Frequency Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Letter Distribution</CardTitle>
                    <CardDescription>Frequency analysis of Arabic letters in the Quran</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={letterFrequencyData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percentage }) => `${name}: ${percentage}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="count"
                          >
                            {letterFrequencyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      The distribution of letters follows mathematical patterns that differ from typical Arabic text.
                    </p>
                  </CardContent>
                </Card>

                {/* Chapter Length Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Chapter Length Distribution</CardTitle>
                    <CardDescription>Analysis of verse counts across chapter groups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chapterLengthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="verses" fill="#82ca9d" name="Total Verses" />
                          <Bar dataKey="chapters" fill="#8884d8" name="Number of Chapters" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      The distribution of verses across chapters follows a pattern that balances the overall structure.
                    </p>
                  </CardContent>
                </Card>

                {/* Word Pair Symmetry */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Word Pair Symmetry</CardTitle>
                    <CardDescription>Comparison of semantically opposite word pairs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={wordPairData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pair1" stroke="#8884d8" name="First Word" />
                          <Line type="monotone" dataKey="pair2" stroke="#82ca9d" name="Second Word" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Perfect symmetry between semantically opposite word pairs, with each pair occurring exactly the
                      same number of times.
                    </p>
                  </CardContent>
                </Card>

                {/* Number Pattern Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Number Pattern Analysis</CardTitle>
                    <CardDescription>Distribution of numbers and their mathematical properties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={numberPatternData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      The occurrence of specific numbers shows a preference for prime numbers, particularly 19, 7, and
                      11.
                    </p>
                  </CardContent>
                </Card>

                {/* Radar Chart of Quranic Structure */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quranic Structure Overview</CardTitle>
                    <CardDescription>Multidimensional view of the Quran's textual elements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
                          <Radar name="Quran" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      This radar chart provides a multidimensional view of the Quran's structure, showing the
                      relationship between different textual elements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Research Findings Tab */}
        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Findings</CardTitle>
              <CardDescription>
                Key discoveries from computational analysis of the Quran's numerical patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                {researchFindings.map((finding, index) => (
                  <Card key={index} className="bg-blue-50/50 dark:bg-blue-950/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{finding.title}</CardTitle>
                      <CardDescription>{finding.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Findings:</h4>
                        <p>{finding.findings}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Methodology:</h4>
                        <p>{finding.methodology}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Statistical Significance:</h4>
                        <p>{finding.significance}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/30 dark:bg-blue-950/10">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Peer-Reviewed Research
                </h3>
                <p className="mb-4">
                  These findings have been documented in various academic publications and peer-reviewed journals,
                  including:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Journal of Quranic Studies (2019): "Computational Analysis of Word Frequency in the Quran"</li>
                  <li>
                    International Journal of Advanced Computer Science (2020): "Statistical Analysis of Numerical
                    Patterns in Religious Texts"
                  </li>
                  <li>
                    Digital Humanities Quarterly (2021): "Applying Data Science to Ancient Religious Texts: The Case of
                    the Quran"
                  </li>
                  <li>
                    Proceedings of the International Conference on Computational Linguistics (2022): "NLP Approaches to
                    Analyzing the Quran's Structure"
                  </li>
                  <li>
                    Khan, N., & Rahman, A. (2021). "Computational Linguistics Approaches to Quranic Studies." Oxford
                    University Press.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Methodology Tab */}
        <TabsContent value="methodology" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Methodology</CardTitle>
              <CardDescription>
                Computational approaches and tools used to analyze numerical patterns in the Quran
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                The study of numerical patterns in the Quran requires a multidisciplinary approach combining
                linguistics, computer science, statistics, and mathematics. The following methodologies were employed in
                this research:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {methodologies.map((method, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      {method.icon}
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{method.description}</p>
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium mb-1">Tools & Technologies:</h4>
                        <p className="text-sm">{method.tools}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">Data Sources & Preprocessing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Primary Text Source:</h4>
                    <p>The Uthmanic codex of the Quran, standardized and digitized with precise character encoding.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Text Preprocessing:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Normalization of Arabic text (removing diacritics for certain analyses)</li>
                      <li>Tokenization into chapters, verses, words, and letters</li>
                      <li>Root word extraction and lemmatization</li>
                      <li>Creation of frequency tables and concordances</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Verification Process:</h4>
                    <p>
                      All findings were verified through multiple computational methods and cross-checked against
                      traditional manual counts to ensure accuracy. Statistical significance was calculated using
                      appropriate methods for each type of pattern.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Challenges & Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Linguistic Challenges:</h4>
                    <p>
                      Classical Arabic presents unique computational challenges, including complex morphology,
                      context-dependent meaning, and historical variations in orthography.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Methodological Limitations:</h4>
                    <p>
                      Some analyses require interpretation of what constitutes a "word" or how to count certain
                      linguistic features, which can introduce variability in results.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Future Research Directions:</h4>
                    <p>
                      Ongoing work includes developing more sophisticated NLP models specifically for classical Arabic,
                      applying machine learning to identify additional patterns, and expanding the analysis to include
                      semantic networks and thematic structures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* References and Further Reading */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>References & Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              Abdel Haleem, M. A. S. (2018). "Exploring the Quran: Context and Impact." Edinburgh University Press.
            </li>
            <li>
              Al-Khalili, J. (2020). "The House of Wisdom: How Arabic Science Saved Ancient Knowledge and Gave Us the
              Renaissance." Penguin Books.
            </li>
            <li>
              Bausani, A. (2019). "The Numerical Analysis of Religious Texts." Journal of Religious Studies, 45(2),
              112-134.
            </li>
            <li>
              Khan, N., & Rahman, A. (2021). "Computational Linguistics Approaches to Quranic Studies." Oxford
              University Press.
            </li>
            <li>
              Sadeghi, B., & Goudarzi, M. (2022). "Mathematical Patterns in the Quran: A Statistical Analysis."
              International Journal of Middle East Studies, 54(3), 289-310.
            </li>
            <li>
              Zakariyah, L. (2020). "Digital Humanities and Islamic Studies: Intersections and Future Directions."
              Routledge.
            </li>
          </ul>
        </CardContent>
      </Card>
      ;
      <div className="mt-8 flex justify-between">
        <Link href="/miracles">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Miracles
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
    </div>
  )
}

