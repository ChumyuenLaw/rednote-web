'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar({ className = "" }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // 快捷键监听
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Command/Ctrl + K 触发搜索框聚焦
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      // ESC 键失焦
      if (e.key === 'Escape') {
        inputRef.current?.blur()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <form 
        onSubmit={handleSearch} 
        className={`relative transition-all duration-300 ${
          isFocused ? 'scale-102' : ''
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          className="w-full px-3 py-2 pl-9 pr-16 text-sm text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2.5">
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${
              isFocused ? 'text-blue-500' : 'text-gray-400'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <kbd 
            className={`hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs font-mono font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded transition-colors duration-200 ${
              isFocused ? 'bg-gray-200' : ''
            }`}
          >
            ⌘K
          </kbd>
          <button
            type="submit"
            className="ml-1 p-1.5 text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </form>

      {/* 搜索提示 */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-1.5 p-1.5 bg-white rounded-lg shadow-lg border border-gray-100 z-50 text-sm">
          <div className="text-xs text-gray-500 px-2 pb-1.5 border-b border-gray-100">
            Press Enter to search
          </div>
          <div className="mt-1.5 text-sm text-gray-600">
            <div className="px-2 py-0.5">Try searching for:</div>
            <div className="px-2 py-0.5 text-gray-500 text-xs">
              • How to create account
              <br />
              • English language settings
              <br />
              • Shopping tips
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 