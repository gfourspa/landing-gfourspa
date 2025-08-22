"use client"

import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-work-sans">GFOUR SPA</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Servicios
              </a>
              <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Nosotros
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
