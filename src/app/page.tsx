import HomePageTabs from "@/components/home-page-tabs"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Quran Science Application</h1>
      <p className="text-center text-muted-foreground mb-8">Exploring the Mathematical Miracles of the Holy Quran</p>

      <HomePageTabs />
    </main>
  )
}

