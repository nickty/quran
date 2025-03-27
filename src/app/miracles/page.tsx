import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  Ruler,
  Hash,
  BarChart2,
  PieChart,
  Binary,
  Globe,
  Cpu,
  BookOpen,
  Languages,
  Heart,
  FileText,
  Microscope,
  History,
  Clock,
} from "lucide-react"

export default function MiraclesPage() {
  const miracles = [
    {
      id: "mathematical-structure",
      title: "Mathematical Structure of Surah Al-Fatiha",
      description: "Exploring the intricate numerical patterns in the opening chapter of the Quran.",
      icon: <Calculator className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800/30",
    },
    {
      id: "golden-ratio",
      title: "Golden Ratio in Verse Distribution",
      description: "Examining how the distribution of verses in the Quran exhibits the divine proportion.",
      icon: <Ruler className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-amber-100 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800/30",
    },
    {
      id: "number-7-pattern",
      title: "Number 7 Pattern",
      description: "Investigating the significance and recurrence of the number 7 throughout the Quran.",
      icon: <Hash className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800/30",
    },
    {
      id: "word-pair-symmetry",
      title: "Word Pair Symmetry",
      description: "Analyzing the balanced occurrence of word pairs and opposites in the Quranic text.",
      icon: <BarChart2 className="h-5 w-5" />,
      category: "Linguistics",
      color: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800/30",
    },
    {
      id: "prime-number-patterns",
      title: "Prime Number Patterns",
      description: "Discovering the relationship between prime numbers and Quranic structure.",
      icon: <PieChart className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-red-100 dark:bg-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      borderColor: "border-red-200 dark:border-red-800/30",
    },
    {
      id: "19-based-structure",
      title: "19-Based Mathematical Structure",
      description: "Exploring the mathematical miracle based on the number 19 found throughout the Quran.",
      icon: <Binary className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-indigo-100 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-200 dark:border-indigo-800/30",
    },
    {
      id: "astronomical-connections",
      title: "Astronomical Connections",
      description: "Examining references to celestial bodies and astronomical phenomena in the Quran.",
      icon: <Globe className="h-5 w-5" />,
      category: "Science",
      color: "bg-sky-100 dark:bg-sky-900/20",
      iconColor: "text-sky-600 dark:text-sky-400",
      borderColor: "border-sky-200 dark:border-sky-800/30",
    },
    {
      id: "computational-analysis",
      title: "Numerical Patterns: A Computational Analysis",
      description: "Using modern computational methods to analyze numerical patterns in the Quran.",
      icon: <Cpu className="h-5 w-5" />,
      category: "Computer Science",
      color: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800/30",
    },
    {
      id: "comparative-study",
      title: "The Golden Ratio in Sacred Texts",
      description: "A comparative study of mathematical patterns across different religious texts.",
      icon: <BookOpen className="h-5 w-5" />,
      category: "Comparative Religion",
      color: "bg-emerald-100 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-800/30",
    },
    {
      id: "linguistic-symmetry",
      title: "Linguistic Symmetry and Rhetorical Patterns",
      description: "Analyzing the linguistic balance and rhetorical structures in the Quranic discourse.",
      icon: <Languages className="h-5 w-5" />,
      category: "Linguistics",
      color: "bg-violet-100 dark:bg-violet-900/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      borderColor: "border-violet-200 dark:border-violet-800/30",
    },
    {
      id: "surah-rahman-pattern",
      title: "Surah Ar-Rahman Pattern",
      description: "Exploring the unique structural and rhetorical patterns in Surah Ar-Rahman.",
      icon: <Heart className="h-5 w-5" />,
      category: "Linguistics",
      color: "bg-pink-100 dark:bg-pink-900/20",
      iconColor: "text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-200 dark:border-pink-800/30",
    },
    {
      id: "surah-ikhlas-structure",
      title: "Surah Al-Ikhlas Structure",
      description: "Examining the mathematical and linguistic perfection in one of the shortest chapters.",
      icon: <FileText className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-teal-100 dark:bg-teal-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "border-teal-200 dark:border-teal-800/30",
    },
    {
      id: "scientific-references",
      title: "Scientific References in the Quran",
      description: "Exploring verses that appear to describe scientific phenomena centuries before their discovery.",
      icon: <Microscope className="h-5 w-5" />,
      category: "Science",
      color: "bg-cyan-100 dark:bg-cyan-900/20",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-200 dark:border-cyan-800/30",
    },
    {
      id: "historical-prophecies",
      title: "Historical Prophecies in the Quran",
      description: "Examining predictions mentioned in the Quran that were later fulfilled in history.",
      icon: <History className="h-5 w-5" />,
      category: "History",
      color: "bg-amber-100 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800/30",
    },
    {
      id: "chronological-order",
      title: "Chronological Order of Revelation",
      description: "Analyzing how the Quran's message developed over time throughout the revelation period.",
      icon: <Clock className="h-5 w-5" />,
      category: "History",
      color: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800/30",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Quranic Miracles</h1>
        <p className="text-center text-muted-foreground mb-8">
          Explore the mathematical, linguistic, and scientific miracles of the Quran
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {miracles.map((miracle) => (
            <Link href={`/miracles/${miracle.id}`} key={miracle.id}>
              <Card className={`h-full transition-all hover:shadow-md ${miracle.borderColor} border`}>
                <CardHeader className={`${miracle.color} rounded-t-lg`}>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{miracle.title}</CardTitle>
                    <div className={`p-2 rounded-full ${miracle.color} ${miracle.iconColor}`}>{miracle.icon}</div>
                  </div>
                  <CardDescription>{miracle.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-4 pb-6">
                  <Badge variant="outline" className={miracle.iconColor}>
                    {miracle.category}
                  </Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
          <Card className="group hover:shadow-lg transition-all">
            <Link href="/miracles/fractal-patterns">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Fractal Patterns in Quranic Structure
                </CardTitle>
                <CardDescription>
                  Exploring self-similar mathematical patterns across different scales in the Quranic text structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Discover how the Quran exhibits fractal-like properties with self-similarity across different scales
                  of organization, from letters and words to verses and chapters.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Explore Research
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}

