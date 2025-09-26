import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { updateAtracaoSchema } from '@/lib/schemas'

interface RouteParams { params: { id: string } }

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const atracao = await prisma.atracao.findUnique({ where: { id: params.id } })
  if (!atracao) return NextResponse.json({ error: 'Não encontrado' }, { status: 404 })
  return NextResponse.json(atracao)
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
    }
    const body = await request.json()
    const data = updateAtracaoSchema.parse(body)
    const updated = await prisma.atracao.update({ where: { id: params.id }, data })
    return NextResponse.json(updated)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }
  await prisma.atracao.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
}

