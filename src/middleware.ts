import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/request'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Strategy for locale detection
  localeDetection: true,

  // Prefix for locale in URL
  localePrefix: 'as-needed',

  // Domains configuration for multi-domain setup (optional)
  // domains: [
  //   {
  //     domain: 'roteiros.com.br',
  //     defaultLocale: 'pt'
  //   },
  //   {
  //     domain: 'roteiros.com',
  //     defaultLocale: 'en'
  //   }
  // ]
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(pt|en|es|fr|de|it)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
}