import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { trackAfiliadoSchema } from '@/lib/schemas'
import crypto from 'crypto'

// Track affiliate clicks
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validar parâmetros obrigatórios
    const trackData = {
      provider: searchParams.get('provider'),
      productRef: searchParams.get('productRef'),
      roteiroId: searchParams.get('roteiroId') || undefined,
      itemId: searchParams.get('itemId') || undefined,
      utmSource: searchParams.get('utm_source') || undefined,
      utmMedium: searchParams.get('utm_medium') || undefined,
      utmCampaign: searchParams.get('utm_campaign') || undefined
    }

    const validatedData = trackAfiliadoSchema.parse(trackData)

    const session = await getServerSession(authOptions)
    
    // Hash do IP e User Agent para privacidade
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    const ipHash = crypto.createHash('sha256').update(ip).digest('hex')
    const userAgentHash = crypto.createHash('sha256').update(userAgent).digest('hex')

    // Registrar clique
    await prisma.cliqueAfiliado.create({
      data: {
        usuarioId: session?.user?.id || null,
        provider: validatedData.provider,
        productRef: validatedData.productRef,
        roteiroId: validatedData.roteiroId,
        itemId: validatedData.itemId,
        utmSource: validatedData.utmSource,
        utmMedium: validatedData.utmMedium,
        utmCampaign: validatedData.utmCampaign,
        ipHash,
        userAgentHash
      }
    })

    // Gerar link de afiliado baseado no provider
    const affiliateUrl = generateAffiliateUrl(validatedData.provider, validatedData.productRef, {
      utm_source: validatedData.utmSource || 'roteiros-app',
      utm_medium: validatedData.utmMedium || 'app',
      utm_campaign: validatedData.utmCampaign || 'affiliate'
    })

    // Redirect para o link de afiliado
    return NextResponse.redirect(affiliateUrl)
  } catch (error: any) {
    console.error('Erro ao trackear afiliado:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Parâmetros inválidos', details: error.errors },
        { status: 400 }
      )
    }

    // Fallback para página de erro ou home
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// Função para gerar URLs de afiliado baseado no provider
function generateAffiliateUrl(provider: string, productRef: string, utmParams: any): string {
  const baseUrls: Record<string, string> = {
    'CIVITATIS': 'https://www.civitatis.com',
    'GETYOURGUIDE': 'https://www.getyourguide.com',
    'VIATOR': 'https://www.viator.com',
    'TIQETS': 'https://www.tiqets.com',
    'BOOKING': 'https://www.booking.com',
    'AIRBNB': 'https://www.airbnb.com'
  }

  const baseUrl = baseUrls[provider] || baseUrls['CIVITATIS']
  
  // Adicionar parâmetros UTM
  const urlParams = new URLSearchParams(utmParams)
  
  // Provider específico URL construction
  switch (provider) {
    case 'CIVITATIS':
      return `${baseUrl}/activity/${productRef}?${urlParams.toString()}`
    
    case 'GETYOURGUIDE':
      return `${baseUrl}/activity/${productRef}?${urlParams.toString()}`
    
    case 'VIATOR':
      return `${baseUrl}/tour/${productRef}?${urlParams.toString()}`
    
    case 'TIQETS':
      return `${baseUrl}/en/tickets/${productRef}?${urlParams.toString()}`
    
    case 'BOOKING':
      return `${baseUrl}/hotel/${productRef}?${urlParams.toString()}`
    
    case 'AIRBNB':
      return `${baseUrl}/rooms/${productRef}?${urlParams.toString()}`
    
    default:
      return `${baseUrl}?ref=${productRef}&${urlParams.toString()}`
  }
}