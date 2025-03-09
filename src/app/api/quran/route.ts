import { NextResponse } from "next/server"
import quranData from "@/data/quran.json"
import type { QuranVerse } from "@/types/quran"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sura = searchParams.get("sura")
  const aya = searchParams.get("aya")
  const query = searchParams.get("query")

  let results: QuranVerse[] = []

  if (sura) {
    const suraNumber = Number.parseInt(sura)
    if (!isNaN(suraNumber)) {
      results = quranData.filter((verse) => verse.sura_no === suraNumber)
    }
  } else if (aya) {
    const ayaNumber = Number.parseInt(aya)
    if (!isNaN(ayaNumber)) {
      results = quranData.filter((verse) => verse.aya_no === ayaNumber)
    }
  } else if (query) {
    results = quranData.filter((verse) => verse.aya_text_emlaey.toLowerCase().includes(query.toLowerCase()))
  } else {
    // Return first 10 verses if no parameters
    results = quranData.slice(0, 10)
  }

  return NextResponse.json(results)
}

