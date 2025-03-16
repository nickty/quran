"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calculator, ChevronDown, Home, Menu, Search, BarChart, Star, User, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export function AppNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      name: "Miracles",
      path: "/miracles",
      icon: <Star className="h-4 w-4 mr-2" />,
      submenu: [
        { name: "All Miracles", path: "/miracles" },
        { name: "114 Surahs", path: "/miracles/114-surahs" },
        { name: "Number 19", path: "/miracles/number-19" },
        { name: "Word Count", path: "/miracles/word-count" },
        { name: "Golden Ratio", path: "/miracles/golden-ratio" },
        { name: "Al Fatiha", path: "/miracles/al-fatiha" },
      ],
    },
    {
      name: "Dashboard",
      path: "/?tab=dashboard",
      icon: <BarChart className="h-4 w-4 mr-2" />,
    },
    {
      name: "Analytics",
      path: "/?tab=analytics",
      icon: <Calculator className="h-4 w-4 mr-2" />,
    },
    {
      name: "Search",
      path: "/?tab=search",
      icon: <Search className="h-4 w-4 mr-2" />,
    },
    {
      name: "About/Contact",
      path: "/about",
      icon: <User className="h-4 w-4 mr-2" />,
    },
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between bg-background border-b px-6 py-3 sticky top-0 z-10">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl mr-8">
            Quran Science
          </Link>
          <nav className="flex items-center space-x-1">
            {routes.map((route) =>
              route.submenu ? (
                <DropdownMenu key={route.path}>
                  <DropdownMenuTrigger asChild>
                    <Button variant={isActive(route.path) ? "default" : "ghost"} className="flex items-center">
                      {route.icon}
                      {route.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {route.submenu.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link href={item.path}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={route.path} variant={isActive(route.path) ? "default" : "ghost"} asChild>
                  <Link href={route.path} className="flex items-center">
                    {route.icon}
                    {route.name}
                  </Link>
                </Button>
              ),
            )}
          </nav>
        </div>
        <ModeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between bg-background border-b px-4 py-3 sticky top-0 z-10">
        <Link href="/" className="font-bold text-xl">
          Quran Science
        </Link>
        <div className="flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Link href="/" className="font-bold text-xl">
                Quran Science
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-4 px-4">
              <nav className="flex flex-col space-y-2">
                {routes.map((route) =>
                  route.submenu ? (
                    <div key={route.path} className="space-y-2">
                      <div className="font-medium flex items-center px-2 py-1">
                        {route.icon}
                        {route.name}
                      </div>
                      <div className="pl-6 space-y-1 border-l ml-2">
                        {route.submenu.map((item) => (
                          <Button
                            key={item.path}
                            variant="ghost"
                            className={cn("justify-start w-full", pathname === item.path && "bg-muted")}
                            onClick={() => {
                              setMobileMenuOpen(false)
                            }}
                            asChild
                          >
                            <Link href={item.path}>{item.name}</Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Button
                      key={route.path}
                      variant={isActive(route.path) ? "default" : "ghost"}
                      className="justify-start w-full"
                      onClick={() => setMobileMenuOpen(false)}
                      asChild
                    >
                      <Link href={route.path} className="flex items-center">
                        {route.icon}
                        {route.name}
                      </Link>
                    </Button>
                  ),
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

