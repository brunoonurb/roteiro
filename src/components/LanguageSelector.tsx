'use client'

import { useState, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/request'

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() as Locale

  const handleLocaleChange = (newLocale: Locale) => {
    startTransition(() => {
      // Replace the locale in the current pathname
      const segments = pathname.split('/')
      if (locales.includes(segments[1] as Locale)) {
        segments[1] = newLocale
      } else {
        segments.unshift('', newLocale)
      }
      
      const newPathname = segments.join('/')
      router.replace(newPathname)
      setIsOpen(false)
    })
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        disabled={isPending}
      >
        <GlobeAltIcon className="w-4 h-4" />
        <span className="hidden sm:inline">
          {localeFlags[locale]} {localeNames[locale]}
        </span>
        <span className="sm:hidden">
          {localeFlags[locale]}
        </span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 z-20 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                    locale === loc ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                  disabled={isPending}
                >
                  <span className="text-lg">{localeFlags[loc]}</span>
                  <span>{localeNames[loc]}</span>
                  {locale === loc && (
                    <span className="ml-auto">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}