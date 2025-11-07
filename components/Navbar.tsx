"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Mountain } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/journey", label: "Journey" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
            <Mountain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <span>Piyush Napit</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  isActive(link.href) ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 transform"
              aria-label="Toggle theme"
            >
              {mounted && (
                <div className="animate-fade-in">
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </div>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 transform"
              aria-label="Toggle menu"
            >
              <div className="animate-fade-in">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 pt-20">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg font-medium transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 transform hover:translate-x-2 ${
                  isActive(link.href) ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-300"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
