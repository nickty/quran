"use client"

import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QuranDashboard from "@/components/quran-dashboard"
import QuranAnalytics from "@/components/quran-analytics"
import QuranSearch from "@/components/quran-search"
import QuranWordAnalysis from "@/components/quran-word-analysis"
import QuranHomepage from "@/components/quran-homepage"

export default function HomePageTabs() {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")

  // Default to home, but use the tab from URL if available
  const defaultTab = tab || "home"

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="word-analysis">Word Analysis</TabsTrigger>
        <TabsTrigger value="search">Search</TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="mt-6">
        <QuranHomepage />
      </TabsContent>
      <TabsContent value="dashboard" className="mt-6">
        <QuranDashboard />
      </TabsContent>
      <TabsContent value="analytics" className="mt-6">
        <QuranAnalytics />
      </TabsContent>
      <TabsContent value="word-analysis" className="mt-6">
        <QuranWordAnalysis />
      </TabsContent>
      <TabsContent value="search" className="mt-6">
        <QuranSearch />
      </TabsContent>
    </Tabs>
  )
}

