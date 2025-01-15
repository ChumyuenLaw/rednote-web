'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                RED Note
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/guides"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600"
              >
                Guides
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600"
              >
                Tutorials
              </Link>
              <Link
                href="/tips"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600"
              >
                Tips
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 