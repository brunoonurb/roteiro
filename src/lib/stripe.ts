import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

export interface ConsultoriaData {
  destino: string
  datas: string
  preferencias: string
  orcamento?: number
  duracao: number // em dias
  tipo: 'basica' | 'premium' | 'vip'
}

export interface ConsultoriaPricing {
  basica: {
    price: number
    name: string
    description: string
    features: string[]
    duration: string
  }
  premium: {
    price: number
    name: string
    description: string
    features: string[]
    duration: string
  }
  vip: {
    price: number
    name: string
    description: string
    features: string[]
    duration: string
  }
}

export const consultoriaPricing: ConsultoriaPricing = {
  basica: {
    price: 300,
    name: 'Consultoria Básica',
    description: 'Roteiro personalizado com dicas essenciais',
    features: [
      'Roteiro de 3-5 dias personalizado',
      'Lista de atrações principais',
      'Dicas de transporte',
      'Sugestões de restaurantes',
      'Suporte por email',
    ],
    duration: '3-5 dias úteis',
  },
  premium: {
    price: 500,
    name: 'Consultoria Premium',
    description: 'Roteiro completo com reservas e suporte prioritário',
    features: [
      'Roteiro de 5-10 dias personalizado',
      'Reservas de hotéis e restaurantes',
      'Ingressos para atrações',
      'Guia de transporte detalhado',
      'Suporte prioritário por WhatsApp',
      'Revisão e ajustes ilimitados',
    ],
    duration: '2-3 dias úteis',
  },
  vip: {
    price: 800,
    name: 'Consultoria VIP',
    description: 'Experiência completa com consultor dedicado',
    features: [
      'Roteiro de 7-15 dias personalizado',
      'Consultor dedicado',
      'Todas as reservas incluídas',
      'Suporte 24/7 durante a viagem',
      'Ajustes em tempo real',
      'Relatório pós-viagem',
      'Desconto em futuras consultorias',
    ],
    duration: '1-2 dias úteis',
  },
}

export async function createCheckoutSession(
  consultoriaData: ConsultoriaData,
  userId: string
): Promise<{ url: string }> {
  try {
    const priceId = getPriceId(consultoriaData.tipo)
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL}/consultoria/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/consultoria`,
      metadata: {
        userId,
        destino: consultoriaData.destino,
        datas: consultoriaData.datas,
        preferencias: consultoriaData.preferencias,
        orcamento: consultoriaData.orcamento?.toString() || '',
        duracao: consultoriaData.duracao.toString(),
        tipo: consultoriaData.tipo,
      },
    })

    return { url: session.url! }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw new Error('Erro ao criar sessão de pagamento')
  }
}

function getPriceId(tipo: string): string {
  const priceIds = {
    basica: process.env.STRIPE_PRICE_ID_BASICA!,
    premium: process.env.STRIPE_PRICE_ID_PREMIUM!,
    vip: process.env.STRIPE_PRICE_ID_VIP!,
  }
  
  return priceIds[tipo as keyof typeof priceIds]
}

export async function retrieveCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    throw new Error('Erro ao recuperar sessão de pagamento')
  }
}

export async function createCustomerPortalSession(customerId: string) {
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXTAUTH_URL}/consultoria`,
    })
    
    return { url: session.url }
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    throw new Error('Erro ao criar portal do cliente')
  }
}