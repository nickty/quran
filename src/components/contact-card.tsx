"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="overflow-hidden transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">About the Researcher</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
        <CardDescription>The mind behind this Quran Science Application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/mizan.jpg?height=100&width=100"
              alt="Mizanur Rahman"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">Mizanur Rahman</h3>
            <p className="text-sm text-muted-foreground">Quran Researcher & Developer</p>
            <div className="text-sm mt-1">
              <a href="mailto:nurmizanrah@gmail.com" className="text-primary hover:underline">
                nurmizanrah@gmail.com
              </a>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="pt-2 space-y-3 animate-in fade-in-50 duration-300">
            <p className="text-sm">
              I am a dedicated researcher focused on exploring the mathematical and scientific aspects of the Holy
              Quran. With a background in computer science, I have been studying the numerical patterns and mathematical
              structure of the Quran since 2009.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" className="gap-1" asChild>
                <Link href="/about">
                  <User className="h-3 w-3" />
                  Full Profile
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="gap-1" asChild>
                <a href="mailto:nurmizanrah@gmail.com">
                  <Mail className="h-3 w-3" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      {!expanded && (
        <CardFooter className="pt-0 flex justify-end">
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <Link href="/about">
              <User className="h-3 w-3" />
              View Full Profile
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

