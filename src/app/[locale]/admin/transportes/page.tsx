'use client'

import { useEffect, useState } from 'react'

type Partner = { id: string; nome: string; tipo: string; ativo?: boolean }
type Tarifa = { id: string; cidade: string; moeda: string; tipo: string; custoFixo: number; custoPorKm: number; custoPorMin: number }

export default function AdminTransportesPage() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [tarifas, setTarifas] = useState<Tarifa[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    const [p, t] = await Promise.all([
      fetch('/api/transportes/partners').then(r => r.json()),
      fetch('/api/transportes/tarifas').then(r => r.json())
    ])
    setPartners(p)
    setTarifas(t)
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const savePartner = async (partner: Partial<Partner> & { id?: string }) => {
    const method = partner.id ? 'PUT' : 'POST'
    const res = await fetch('/api/transportes/partners', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(partner) })
    if (!res.ok) alert('Falha ao salvar parceiro')
    await load()
  }
  const deletePartner = async (id: string) => {
    const res = await fetch(`/api/transportes/partners?id=${id}`, { method: 'DELETE' })
    if (!res.ok) alert('Falha ao deletar parceiro')
    await load()
  }

  const saveTarifa = async (tarifa: Partial<Tarifa> & { id?: string }) => {
    const method = tarifa.id ? 'PUT' : 'POST'
    const res = await fetch('/api/transportes/tarifas', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(tarifa) })
    if (!res.ok) alert('Falha ao salvar tarifa')
    await load()
  }
  const deleteTarifa = async (id: string) => {
    const res = await fetch(`/api/transportes/tarifas?id=${id}`, { method: 'DELETE' })
    if (!res.ok) alert('Falha ao deletar tarifa')
    await load()
  }

  if (loading) return <div className="p-4">Carregando...</div>

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Transportes</h1>

      <div className="bg-white border rounded p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">Parceiros</h2>
          <button className="text-sm text-blue-600" onClick={() => savePartner({ nome: 'Novo parceiro', tipo: 'UBER', ativo: true })}>+ Adicionar</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-2">Nome</th>
                <th className="p-2">Tipo</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {partners.map(p => (
                <tr key={p.id} className="border-t">
                  <td className="p-2">{p.nome}</td>
                  <td className="p-2">{p.tipo}</td>
                  <td className="p-2 space-x-3">
                    <button className="text-blue-600" onClick={() => savePartner({ id: p.id, nome: p.nome + ' *' })}>Editar</button>
                    <button className="text-red-600" onClick={() => deletePartner(p.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border rounded p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">Tarifas Manuais</h2>
          <button className="text-sm text-blue-600" onClick={() => saveTarifa({ cidade: 'Cidade', moeda: 'BRL', tipo: 'ONIBUS', custoFixo: 0, custoPorKm: 0.5, custoPorMin: 0 })}>+ Adicionar</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-2">Cidade</th>
                <th className="p-2">Tipo</th>
                <th className="p-2">Custos</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {tarifas.map(t => (
                <tr key={t.id} className="border-t">
                  <td className="p-2">{t.cidade}</td>
                  <td className="p-2">{t.tipo}</td>
                  <td className="p-2">Fixo {t.custoFixo} | Km {t.custoPorKm} | Min {t.custoPorMin}</td>
                  <td className="p-2 space-x-3">
                    <button className="text-blue-600" onClick={() => saveTarifa({ id: t.id, custoPorKm: t.custoPorKm + 0.1 })}>Editar</button>
                    <button className="text-red-600" onClick={() => deleteTarifa(t.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

