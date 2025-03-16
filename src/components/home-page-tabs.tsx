import { Suspense } from "react"
import HomePageTabsClient from "./home-page-tabs-client"

export default function HomePageTabs() {
  return (
    <Suspense fallback={<div className="py-12 text-center">Loading tabs...</div>}>
      <HomePageTabsClient />
    </Suspense>
  )
}

