"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 mx-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 flex items-center gap-4 p-2"
          >
            <Image
              src="/image-cropped.png"
              alt="Jexsie"
              width={40}
              height={40}
              className="border border-gray-100 rounded-full"
            />
            <span>Jesxie</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
