"use client";

import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-purple-600">Catálogo Quadros</span>
        </div>
        
        {/* Botão de menu hamburguer para mobile */}
        <button 
          className="lg:hidden text-purple-600" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
        
        {/* Navegação para desktop */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#catalog" className="text-purple-600 hover:text-purple-800">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#order" className="text-purple-600 hover:text-purple-800">
                Encomendar
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-purple-600 hover:text-purple-800">
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-purple-600 hover:text-purple-800">
                Depoimentos
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Menu mobile */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#catalog" className="text-purple-600 hover:text-purple-800" onClick={() => setIsOpen(false)}>
                Catálogo
              </a>
            </li>
            <li>
              <a href="#order" className="text-purple-600 hover:text-purple-800" onClick={() => setIsOpen(false)}>
                Encomendar
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-purple-600 hover:text-purple-800" onClick={() => setIsOpen(false)}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-purple-600 hover:text-purple-800" onClick={() => setIsOpen(false)}>
                Depoimentos
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
