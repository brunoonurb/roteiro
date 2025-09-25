import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es', 'fr', 'de', 'it'],

  // Used when no locale matches
  defaultLocale: 'pt',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be provided to `pathnames`
    '/': '/',
    '/roteiros': {
      pt: '/roteiros',
      en: '/itineraries',
      es: '/itinerarios',
      fr: '/itineraires',
      de: '/reiserouten',
      it: '/itinerari'
    },
    '/atracoes': {
      pt: '/atracoes',
      en: '/attractions',
      es: '/atracciones',
      fr: '/attractions',
      de: '/attraktionen',
      it: '/attrazioni'
    },
    '/consultoria': {
      pt: '/consultoria',
      en: '/consulting',
      es: '/consultoria',
      fr: '/conseil',
      de: '/beratung',
      it: '/consulenza'
    },
    '/dashboard': '/dashboard'
  }
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing)