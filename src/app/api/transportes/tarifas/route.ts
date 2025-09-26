import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createTransportTariffManualSchema, updateTransportTariffManualSchema } from '@/lib/schemas'

export async function GET() {
  const data = await prisma.transportTariffManual.findMany()
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = createTransportTariffManualSchema.parse(body)
    const created = await prisma.transportTariffManual.create({ data: parsed })
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
    const parsed = updateTransportTariffManualSchema.parse(rest)
    const updated = await prisma.transportTariffManual.update({ where: { id }, data: parsed })
    return NextResponse.json(updated)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id é obrigatório' }, { status: 400 })
  await prisma.transportTariffManual.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

