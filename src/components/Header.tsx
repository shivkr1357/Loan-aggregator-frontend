'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useUserAuth } from '@/contexts/UserAuthContext';
import logoPng from '@/assets/Logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { user, signInWithGoogle, logout: userLogout } = useUserAuth();

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
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="hover:text-primary-400 transition text-lg">
              Home
            </Link>
            <Link href="/loans" className="hover:text-primary-400 transition text-lg">
              Compare Loans
            </Link>
            <Link href="/apply" className="hover:text-primary-400 transition text-lg">
              Apply Now
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={userLogout}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Sign in with Google
              </button>
            )}
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
            {user ? (
              <>
                <div className="py-2 border-b">
                  <p className="text-sm text-gray-600">
                    {user.displayName || user.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    userLogout();
                    closeMenu();
                  }}
                  className="text-lg hover:text-primary-400 transition py-2 border-b text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  signInWithGoogle();
                  closeMenu();
                }}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm text-center"
              >
                Sign in with Google
              </button>
            )}
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
