import QuranSearch from "@/components/quran-search"
import QuranDisplay from "@/components/quran-display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Quran Research Application</h1>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="browse">Browse</TabsTrigger>
        </TabsList>
        <TabsContent value="search" className="mt-6">
          <QuranSearch />
        </TabsContent>
        <TabsContent value="browse" className="mt-6">
          <QuranDisplay />
        </TabsContent>
      </Tabs>
    </main>
  )
}

