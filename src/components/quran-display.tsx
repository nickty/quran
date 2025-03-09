"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import quranData from "@/data/quran.json"
import type { QuranVerse } from "@/types/quran"

export default function QuranDisplay() {
  const [selectedSura, setSelectedSura] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [suraList, setSuraList] = useState<{ no: number; name: string; arabic: string }[]>([])
  const [verses, setVerses] = useState<QuranVerse[]>([])
  const versesPerPage = 10

  useEffect(() => {
    // Extract unique suras for the dropdown
    const uniqueSuras = Array.from(new Set(quranData.map((verse) => verse.sura_no)))
      .map((suraNo) => {
        const sura = quranData.find((verse) => verse.sura_no === suraNo)
        return {
          no: suraNo,
          name: sura?.sura_name_en || "",
          arabic: sura?.sura_name_ar || "",
        }
      })
      .sort((a, b) => a.no - b.no)

    setSuraList(uniqueSuras)
  }, [])

  useEffect(() => {
    // Filter verses by selected sura
    const filteredVerses = quranData.filter((verse) => verse.sura_no === selectedSura)
    setVerses(filteredVerses)
    setCurrentPage(1)
  }, [selectedSura])

  // Calculate pagination
  const totalPages = Math.ceil(verses.length / versesPerPage)
  const currentVerses = verses.slice((currentPage - 1) * versesPerPage, currentPage * versesPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-[300px]">
          <Select value={selectedSura.toString()} onValueChange={(value) => setSelectedSura(Number.parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Surah" />
            </SelectTrigger>
            <SelectContent>
              {suraList.map((sura) => (
                <SelectItem key={sura.no} value={sura.no.toString()}>
                  {sura.no}. {sura.name} ({sura.arabic})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {verses.length > 0 && (
          <div className="text-sm text-muted-foreground">
            Showing {currentVerses.length} of {verses.length} verses
          </div>
        )}
      </div>

      {currentVerses.length > 0 ? (
        <div className="space-y-4">
          {currentVerses.map((verse) => (
            <Card key={`${verse.sura_no}-${verse.aya_no}`}>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    Surah {verse.sura_no}: {verse.sura_name_en} ({verse.sura_name_ar})
                  </span>
                  <span>Ayah {verse.aya_no}</span>
                </div>

                <div className="text-right mb-2 text-xl font-arabic">{verse.aya_text || verse.aya_text_emlaey}</div>

                <div>{verse.aya_text_emlaey}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-muted-foreground">No verses found</p>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) setCurrentPage(currentPage - 1)
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show pages around current page
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(pageNum)
                    }}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              )
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

