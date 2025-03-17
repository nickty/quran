import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Code, Calculator } from "lucide-react"
import Link from "next/link"

export default function MiraclesPage() {
  // List of miracles
  const miracles = [
    {
      id: "114-surahs",
      title: "The Miracle of 114 Surahs",
      description: "Perfect balance in the structure of the Quran with even and odd numbers.",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background",
      stats: [
        { label: "Odd Numbers", value: "57" },
        { label: "Even Numbers", value: "57" },
        { label: "Sum of Odd", value: "6555" },
        { label: "Sum of Even", value: "6236" },
      ],
    },
    {
      id: "computational-analysis",
      title: "Computational Analysis",
      description: "Exploring numerical patterns using modern computational methods and data analysis.",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-background to-background dark:from-blue-900/20",
      stats: [
        { label: "Word Pairs", value: "15+" },
        { label: "Statistical Significance", value: "p < 0.001" },
        { label: "Methods", value: "NLP, Statistics" },
        { label: "Data Points", value: "77,430+" },
      ],
    },
    {
      id: "number-19",
      title: "The Number 19 Pattern",
      description: "The mathematical code based on the number 19 throughout the Quran.",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background",
      stats: [
        { label: "Basmalah Letters", value: "19" },
        { label: "Occurrences", value: "Multiple" },
      ],
    },
    {
      id: "word-count",
      title: "Word Count Symmetry",
      description: "Symmetrical patterns in the count of specific words in the Quran.",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background",
      stats: [
        { label: "Word Pairs", value: "Several" },
        { label: "Symmetry", value: "Perfect" },
      ],
    },
    {
      id: "golden-ratio",
      title: "Golden Ratio in the Quran",
      description: "The presence of the divine proportion (1.618) in the Quran's structure.",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-background to-background dark:from-amber-900/20",
      stats: [
        { label: "Golden Ratio", value: "1.618" },
        { label: "Occurrences", value: "Multiple" },
      ],
    },
    {
      id: "al-fatiha",
      title: "Mathematical Structure of Al-Fatiha",
      description: "Discover the numerical patterns in the opening chapter of the Quran.",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
      bgPattern:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background",
      stats: [
        { label: "Verses", value: "7" },
        { label: "Words", value: "29" },
        { label: "Letters", value: "139" },
        { label: "Prime Numbers", value: "3" },
      ],
    },
  ]

  return (
    <>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Numerical Miracles in the Quran</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the remarkable mathematical patterns and numerical precision found in the structure and content of
            the Holy Quran
          </p>
        </div>

        {/* Hero Banner with Art */}
        <div className="relative rounded-lg overflow-hidden mb-12 h-[200px] md:h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg max-w-xl">
              <h2 className="text-2xl font-bold mb-2">Mathematical Precision</h2>
              <p className="mb-4">Discover the hidden numerical patterns that reveal the divine nature of the Quran</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">114</div>
                  <div className="text-sm">Surahs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">6236</div>
                  <div className="text-sm">Verses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">19</div>
                  <div className="text-sm">Key Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {miracles.map((miracle) => (
            <Link href={`/miracles/${miracle.id}`} key={miracle.id}>
              <Card
                className={`h-full overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${miracle.bgPattern}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  {/* Replace this Image component */}
                  {/* <Image
                    src={miracle.image || "/placeholder.svg"}
                    alt={miracle.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  /> */}

                  {/* With this colored background div */}
                  <div
                    className={`aspect-video w-full ${miracle.bgPattern || "bg-primary/5"} flex items-center justify-center`}
                  >
                    {/* Keep the decorative elements based on the miracle type */}
                    {miracle.id === "114-surahs" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-2xl font-bold">57 + 57 = 114</div>
                      </div>
                    )}

                    {miracle.id === "computational-analysis" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Code className="h-6 w-6 text-blue-600" />
                          <Calculator className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    )}

                    {miracle.id === "number-19" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-4xl font-bold text-primary">19</div>
                      </div>
                    )}

                    {miracle.id === "word-count" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-xl font-bold">Day = 365</div>
                      </div>
                    )}

                    {miracle.id === "golden-ratio" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">φ = 1.618</div>
                      </div>
                    )}

                    {miracle.id === "al-fatiha" && (
                      <div className="bg-background/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-2xl font-bold">7 Verses</div>
                      </div>
                    )}
                  </div>
                  {miracle.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Decorative elements based on the miracle type */}
                </div>
                <CardHeader>
                  <CardTitle>{miracle.title}</CardTitle>
                  <CardDescription>{miracle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {miracle.stats.map((stat, index) => (
                      <div key={index} className="text-center p-2 bg-muted rounded-md">
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <div className="font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">More numerical miracles will be added as research continues</p>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

