import type { QuranVerse } from "@/types/quran"

export interface QuranStats {
  totalVerses: number
  totalSuras: number
  totalPages: number
  totalWords: number
  totalCharacters: number
  versesPerSura: {
    suraNo: number
    suraName: string
    suraNameAr: string
    verseCount: number
    wordCount: number
    charCount: number
  }[]
  longestVerse: QuranVerse | null
  shortestVerse: QuranVerse | null
  juzCount: number
  verseLengthDistribution: { name: string; value: number }[]
  versesPerSuraDistribution: { name: string; value: number }[]
  wordsPerSuraDistribution: { name: string; value: number }[]
  charsPerSuraDistribution: { name: string; value: number }[]
}

export interface WordFrequency {
  word: string
  count: number
}

export interface SuraStats {
  suraInfo: QuranVerse
  verseCount: number
  totalWords: number
  totalCharacters: number
  pageRange: { start: number; end: number }
  juzRange: { start: number; end: number }
  verseLengths: {
    ayaNo: number
    length: number
    words: number
  }[]
  longestVerse: QuranVerse
  shortestVerse: QuranVerse
  wordFrequency: [string, number][]
}

export interface WordAnalysis {
  word: string
  totalOccurrences: number
  occurrenceCount: number
  occurrencesBySurah: [string, number][]
  verses: QuranVerse[]
}

