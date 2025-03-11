import QuranDashboard from "@/components/quran-dashboard"
import QuranAnalytics from "@/components/quran-analytics"
import QuranSearch from "@/components/quran-search"
import QuranWordAnalysis from "@/components/quran-word-analysis"
import QuranNumericalMiracles from "@/components/quran-numerical-miracles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Quran Science Application</h1>
      <p className="text-center text-muted-foreground mb-8">
        Explore the statistical and structural analysis of the Holy Quran
      </p>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="word-analysis">Word Analysis</TabsTrigger>
          <TabsTrigger value="numerical-miracles">Numerical Miracles</TabsTrigger>
          <TabsTrigger value="search">Search</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="mt-6">
          <QuranDashboard />
        </TabsContent>
        <TabsContent value="analytics" className="mt-6">
          <QuranAnalytics />
        </TabsContent>
        <TabsContent value="word-analysis" className="mt-6">
          <QuranWordAnalysis />
        </TabsContent>
        <TabsContent value="numerical-miracles" className="mt-6">
          <QuranNumericalMiracles />
        </TabsContent>
        <TabsContent value="search" className="mt-6">
          <QuranSearch />
        </TabsContent>
      </Tabs>
    </main>
  )
}

