import { NextAuthOptions, DefaultSession } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import AppleProvider from 'next-auth/providers/apple'
import { prisma } from './prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: 'USER' | 'ADMIN'
      plano: 'GRATUITO' | 'PREMIUM'
      preferenciasIdioma: string
    } & DefaultSession['user']
  }

  interface User {
    role: 'USER' | 'ADMIN'
    plano: 'GRATUITO' | 'PREMIUM'
    preferenciasIdioma: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'USER' | 'ADMIN'
    plano: 'GRATUITO' | 'PREMIUM'
    preferenciasIdioma: string
  }
}

export const authOptions: NextAuthOptions = {
  // Temporariamente sem adapter para usar JWT
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
    // Apple Provider comentado temporariamente para build
    // ...(process.env.APPLE_ID && process.env.APPLE_TEAM_ID && process.env.APPLE_PRIVATE_KEY && process.env.APPLE_KEY_ID
    //   ? [
    //       AppleProvider({
    //         clientId: process.env.APPLE_ID!,
    //         clientSecret: process.env.APPLE_CLIENT_SECRET!,
    //       }),
    //     ]
    //   : []
    // ),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Temporariamente simplificado para JWT (sem banco)
      return true
    },
    
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
        // Valores padrão temporários para JWT
        session.user.role = 'USER'
        session.user.plano = 'GRATUITO'
        session.user.preferenciasIdioma = 'pt'
      }
      return session
    },
    
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role || 'USER'
        token.plano = user.plano || 'GRATUITO'
        token.preferenciasIdioma = user.preferenciasIdioma || 'pt'
      }

      // Atualizar token quando session for atualizada
      if (trigger === 'update' && session) {
        token.role = session.role || token.role
        token.plano = session.plano || token.plano
        token.preferenciasIdioma = session.preferenciasIdioma || token.preferenciasIdioma
      }

      return token
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  events: {
    async createUser({ user }) {
      console.log('Novo usuário criado:', user.email)
      // Aqui podemos adicionar lógica para enviar email de boas-vindas
    },
    async signIn({ user, account, isNewUser }) {
      console.log('Login realizado:', user.email, 'Provider:', account?.provider, 'Novo usuário:', isNewUser)
    },
  },
  debug: process.env.NODE_ENV === 'development',
}