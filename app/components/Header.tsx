"use client";

import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="h-8 w-8 text-black" />
          <span className="text-2xl font-bold text-black">Catálogo Quadros</span>
        </div>
        
        {/* Botão de menu hamburguer para mobile */}
        <button 
          className="lg:hidden text-black" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
        
        {/* Navegação para desktop */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#catalog" className="text-black hover:text-gray-600">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#order" className="text-black hover:text-gray-600">
                Encomendar
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-black hover:text-gray-600">
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-black hover:text-gray-600">
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
              <a href="#catalog" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Catálogo
              </a>
            </li>
            <li>
              <a href="#order" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Encomendar
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Depoimentos
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
