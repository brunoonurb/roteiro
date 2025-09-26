'use client'

import { useEffect, useState } from 'react'

type Atracao = {
  id: string
  nome: string
  descricao?: string
  categoria: string
  preco?: number
  moeda?: string
  endereco?: string
  parceiro: string
  ativo: boolean
}

export default function AdminAtracoesPage() {
  const [items, setItems] = useState<Atracao[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [edit, setEdit] = useState<Atracao | null>(null)

  const load = async () => {
    setLoading(true)
    setErro(null)
    try {
      const res = await fetch('/api/atracoes?limit=100')
      const data = await res.json()
      setItems(data.atracoes || [])
    } catch (e: any) {
      setErro(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const salvar = async () => {
    if (!edit) return
    const { id, ...payload } = edit
    const res = await fetch(`/api/atracoes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) alert('Falha ao salvar')
    setEdit(null)
    await load()
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Atrações</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p className="text-red-600">{erro}</p>
      ) : (
        <div className="overflow-x-auto bg-white border rounded">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-2">Nome</th>
                <th className="p-2">Categoria</th>
                <th className="p-2">Parceiro</th>
                <th className="p-2">Preço</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map(a => (
                <tr key={a.id} className="border-t">
                  <td className="p-2">{a.nome}</td>
                  <td className="p-2">{a.categoria}</td>
                  <td className="p-2">{a.parceiro}</td>
                  <td className="p-2">{a.preco ?? '-'}</td>
                  <td className="p-2">
                    <button className="text-blue-600" onClick={() => setEdit(a)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {edit && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded p-4 w-full max-w-lg space-y-3">
            <h2 className="text-lg font-semibold">Editar atração</h2>
            <input className="w-full border rounded px-2 py-1" value={edit.nome} onChange={e => setEdit({ ...edit, nome: e.target.value })} />
            <input className="w-full border rounded px-2 py-1" value={edit.descricao || ''} onChange={e => setEdit({ ...edit, descricao: e.target.value })} placeholder="Descrição" />
            <div className="grid grid-cols-2 gap-2">
              <input className="border rounded px-2 py-1" value={edit.categoria} onChange={e => setEdit({ ...edit, categoria: e.target.value })} />
              <input className="border rounded px-2 py-1" value={edit.parceiro} onChange={e => setEdit({ ...edit, parceiro: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input className="border rounded px-2 py-1" type="number" value={edit.preco || 0} onChange={e => setEdit({ ...edit, preco: Number(e.target.value) })} />
              <input className="border rounded px-2 py-1" value={edit.moeda || 'BRL'} onChange={e => setEdit({ ...edit, moeda: e.target.value })} />
            </div>
            <div className="flex gap-2 justify-end">
              <button className="px-3 py-1" onClick={() => setEdit(null)}>Cancelar</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={salvar}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

