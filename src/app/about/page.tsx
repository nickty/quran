import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">About Me</h1>
        <p className="text-center text-muted-foreground mb-8">The researcher behind the Quran Science Application</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/mizan.jpg?height=400&width=400"
                  alt="Mizanur Rahman"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Mizanur Rahman</CardTitle>
                <CardDescription>Quran Researcher & Developer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:nurmizanrah@gmail.com" className="hover:underline">
                    nurmizanrah@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center">
                  <span className="text-primary font-medium">Phone:</span>
                  <span className="ml-2">+1 (234) 567-8901</span>
                </div> */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/nickty" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://www.linkedin.com/in/mizanur-rahman-a808082a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://twitter.com/nickty008" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio and Research Section */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>My background and research interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I am a dedicated researcher focused on exploring the mathematical and scientific aspects of the Holy
                  Quran. With a background in computer science, I have been studying the numerical patterns and
                  mathematical structure of the Quran since 2016.
                </p>
                <p>
                  My research interests include numerical miracles in religious texts, computational linguistics applied
                  to ancient scriptures, and the intersection of faith and science. I developed this application to make
                  my research accessible to a wider audience and to provide tools for others interested in similar
                  studies.
                </p>
                <p>
                  I am currently working on mathemetics miracles of Quran, and I welcome collaboration with other
                  researchers in this field.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Publications</CardTitle>
                <CardDescription>Selected works and publications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="p-3 border rounded-md hover:bg-muted/50 transition-colors">
                    <div className="font-medium">&ldquo;The Mathematical Structure of Surah Al-Fatiha&rdquo;</div>
                    <div className="text-sm text-muted-foreground">Journal of Quranic Studies, 2023</div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Read <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </li>
                  <li className="p-3 border rounded-md hover:bg-muted/50 transition-colors">
                    <div className="font-medium">
                      &ldquo;Numerical Patterns in the Quran: A Computational Analysis&rdquo;
                    </div>
                    <div className="text-sm text-muted-foreground">
                      International Conference on Religious Texts, 2022
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Read <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </li>
                  <li className="p-3 border rounded-md hover:bg-muted/50 transition-colors">
                    <div className="font-medium">
                      &ldquo;The Golden Ratio in Sacred Texts: A Comparative Study&rdquo;
                    </div>
                    <div className="text-sm text-muted-foreground">Journal of Religious Mathematics, 2021</div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Read <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>Get in touch for research collaboration or questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  I welcome inquiries about my research, collaboration opportunities, or questions about the Quran
                  Science Application. Feel free to reach out through any of the contact methods listed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="w-full gap-2" asChild>
                    <a href="mailto:nurmizanrah@gmail.com">
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href="/?tab=home">
                      <ExternalLink className="h-4 w-4" />
                      View My Research
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 text-sm text-muted-foreground">
                <p>Response time: Usually within 2-3 business days</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

