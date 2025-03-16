"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show the consent banner if no consent has been given
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    // Save consent to localStorage
    localStorage.setItem("cookie-consent", "true")
    setShowConsent(false)

    // If you're using Google Analytics, you can initialize it here
    // or set a flag that allows analytics to run
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "cookie_consent_given",
    })
  }

  const declineCookies = () => {
    // Save the decline to localStorage
    localStorage.setItem("cookie-consent", "false")
    setShowConsent(false)

    // You might want to disable analytics here
    // or set a flag that prevents analytics from running
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl shadow-lg border-primary/20">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Cookie Consent</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setShowConsent(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>We use cookies to enhance your browsing experience and analyze our traffic.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This website uses cookies to improve your experience while you navigate through the website. The cookies
            that are categorized as necessary are stored on your browser as they are essential for the basic
            functionalities of the website. We also use third-party cookies that help us analyze and understand how you
            use this website, such as Google Analytics.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={declineCookies}>
            Decline
          </Button>
          <Button onClick={acceptCookies}>Accept</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

