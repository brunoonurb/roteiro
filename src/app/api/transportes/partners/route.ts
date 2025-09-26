import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createTransportPartnerSchema, updateTransportPartnerSchema } from '@/lib/schemas'

export async function GET() {
  const data = await prisma.transportPartner.findMany()
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = createTransportPartnerSchema.parse(body)
    const created = await prisma.transportPartner.create({ data })
    return NextResponse.json(created, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...rest } = body
    if (!id) return NextResponse.json({ error: 'id é obrigatório' }, { status: 400 })
    const data = updateTransportPartnerSchema.parse(rest)
    const updated = await prisma.transportPartner.update({ where: { id }, data })
    return NextResponse.json(updated)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id é obrigatório' }, { status: 400 })
  await prisma.transportPartner.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

