'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoPng from '@/assets/Logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-black shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logoPng}
              alt="LoanPilot"
              width={270}
              height={90}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary-400 transition text-lg">
              Home
            </Link>
            <Link href="/loans" className="hover:text-primary-400 transition text-lg">
              Compare Loans
            </Link>
            <Link href="/apply" className="hover:text-primary-400 transition text-lg">
              Apply Now
            </Link>
            <Link href="/admin" className="hover:text-primary-400 transition text-lg">
              Admin
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-lg hover:text-primary-400 transition py-2 border-b"
            >
              Home
            </Link>
            <Link
              href="/loans"
              onClick={closeMenu}
              className="text-lg hover:text-primary-400 transition py-2 border-b"
            >
              Compare Loans
            </Link>
            <Link
              href="/apply"
              onClick={closeMenu}
              className="text-lg hover:text-primary-400 transition py-2 border-b"
            >
              Apply Now
            </Link>
            <Link
              href="/admin"
              onClick={closeMenu}
              className="text-lg hover:text-primary-400 transition py-2 border-b"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
