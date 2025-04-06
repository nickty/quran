import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Ruler, Hash, BarChart2, BookOpen, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Quranic Miracles | Quran Research App",
  description: "Explore the various numerical, linguistic, and scientific miracles in the Quran.",
}

interface MiracleCard {
  id: string // Add the id property
  title: string
  description: string
  category: string
  link: string
  isNew?: boolean
  isComingSoon?: boolean
  icon?: React.ReactNode
  color?: string
  iconColor?: string
  borderColor?: string
}

export default function MiraclesPage() {
  const miraclesList: MiracleCard[] = [
    {
      id: "mathematical-structure",
      title: "Mathematical Structure of Surah Al-Fatiha",
      description: "Exploring the intricate numerical patterns in the opening chapter of the Quran.",
      icon: <Calculator className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800/30",
      link: "/miracles/mathematical-structure",
    },
    {
      id: "golden-ratio",
      title: "Golden Ratio in Verse Distribution",
      description: "Examining how the distribution of verses in the Quran exhibits the divine proportion.",
      icon: <Ruler className="h-5 w-5" />,
      category: "Mathematics",
      link: "/miracles/golden-ratio",
      id: "golden-ratio",
    },
    {
      id: "number-7-pattern",
      title: "Number 7 Pattern",
      description: "Investigating the significance and recurrence of the number 7 throughout the Quran.",
      icon: <Hash className="h-5 w-5" />,
      category: "Mathematics",
      link: "/miracles/number-7-pattern",
      id: "number-7-pattern",
    },
    {
      id: "word-pair-symmetry",
      title: "Word Pair Symmetry",
      description: "Analyzing the balanced occurrence of word pairs and opposites in the Quranic text.",
      icon: <BarChart2 className="h-5 w-5" />,
      category: "Linguistics",
      link: "/miracles/word-pair-symmetry",
      id: "word-pair-symmetry",
    },
    {
      id: "prime-number-patterns",
      title: "Prime Number Patterns",
      description: "Study the relationship between prime numbers and Quranic structure.",
      category: "Mathematics",
      link: "/miracles/prime-number-patterns",
      id: "prime-number-patterns",
    },
    {
      id: "19-based-structure",
      title: "19-Based Mathematical Structure",
      description: "Exploring the comprehensive mathematical system based on the number 19 in the Quran.",
      category: "Mathematics",
      link: "/miracles/19-based-structure",
      id: "19-based-structure",
    },
    {
      id: "astronomical-connections",
      title: "Astronomical Connections",
      description: "Examining references to celestial bodies and astronomical phenomena in the Quran.",
      category: "Science",
      link: "/miracles/astronomical-connections",
      id: "astronomical-connections",
    },
    {
      id: "computational-analysis",
      title: "Numerical Patterns: A Computational Analysis",
      description: "Using modern computational methods to analyze numerical patterns in the Quran.",
      category: "Numerical",
      link: "/miracles/numerical-patterns-computational",
      isComingSoon: true,
      id: "computational-analysis",
    },
    {
      title: "The Golden Ratio in Sacred Texts",
      description: "A comparative study of mathematical patterns across different religious texts.",
      category: "Comparative Religion",
      link: "/miracles/golden-ratio-comparative",
      isComingSoon: true,
      id: "golden-ratio-comparative",
    },
    {
      title: "Linguistic Symmetry and Rhetorical Patterns",
      description: "Analyzing the linguistic balance and rhetorical structures in the Quranic discourse.",
      category: "Linguistics",
      link: "/miracles/linguistic-symmetry",
      isComingSoon: true,
      id: "linguistic-symmetry",
    },
    {
      title: "Surah Ar-Rahman Pattern",
      description: "Exploring the unique structural and thematic patterns in Surah Ar-Rahman.",
      category: "Structural",
      link: "/miracles/surah-ar-rahman",
      id: "surah-rahman-pattern",
    },
    {
      title: "Surah Al-Ikhlas Structure",
      description: "Examining the mathematical and linguistic perfection in one of the shortest chapters.",
      icon: <FileText className="h-5 w-5" />,
      category: "Mathematics",
      color: "bg-teal-100 dark:bg-teal-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "border-teal-200 dark:border-teal-800/30",
      link: "/miracles/surah-ikhlas-structure",
      id: "surah-ikhlas-structure",
    },
    {
      title: "Scientific References in the Quran",
      description: "Discover scientific facts mentioned in the Quran centuries before their discovery.",
      category: "Science",
      link: "/miracles/scientific-references",
      id: "scientific-references",
    },
    {
      title: "Historical Prophecies in the Quran",
      description: "Examining predictions mentioned in the Quran that were later fulfilled in history.",
      category: "History",
      link: "/miracles/historical-prophecies",
      id: "historical-prophecies",
    },
    {
      title: "Fractal Patterns in Quranic Structure",
      description: "Investigate self-similar mathematical patterns across different scales in the Quranic text.",
      category: "Structural",
      link: "/miracles/fractal-patterns",
      id: "fractal-patterns", // Add the id here
    },
    {
      title: "Chronological Order of Revelation",
      description: "Analyzing how the Quran's message developed over time throughout the revelation period.",
      category: "Historical",
      link: "/miracles/chronological-order",
      isNew: true,
      id: "chronological-order",
    },
    {
      title: "Intertextuality in the Quran",
      description: "Exploring how the Quran references, reinterprets, and dialogues with earlier scriptures.",
      category: "Comparative Religion",
      link: "/miracles/intertextuality",
      id: "intertextuality",
    },
    {
      title: "Thematic Coherence in the Quran",
      description: "Exploring the interconnectedness of themes and ideas throughout the Quran",
      icon: <BookOpen className="h-5 w-5" />,
      category: "Theology",
      color: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800/30",
      link: "/miracles/thematic-coherence",
      id: "thematic-coherence",
    },
  ]

  // Group miracles by category
  const categories = miraclesList.reduce(
    (acc, miracle) => {
      if (!acc[miracle.category]) {
        acc[miracle.category] = []
      }
      acc[miracle.category].push(miracle)
      return acc
    },
    {} as Record<string, MiracleCard[]>,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Quranic Miracles</h1>
        <p className="text-center text-muted-foreground mb-8">
          Explore the mathematical, linguistic, and scientific miracles of the Quran
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {miraclesList.map((miracle) => (
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
        </div>
      </div>
    </div>
  )
}

