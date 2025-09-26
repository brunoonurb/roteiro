'use client'

import { useState } from 'react'

type Entidade = { tipo: 'ROTEIRO' | 'ATRACAO' | 'CUSTOM'; id?: string; dados?: any; rotas?: { tipoTransporte?: 'walking' | 'driving' | 'transit' | 'taxi' } }

export default function Comparador() {
  const [itens, setItens] = useState<Entidade[]>([{ tipo: 'ROTEIRO' }, { tipo: 'ROTEIRO' }])
  const [pontos, setPontos] = useState<Array<{ nome: string; latitude: number; longitude: number }>>([])
  const [resultado, setResultado] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const atualizarItem = (index: number, campo: keyof Entidade, valor: any) => {
    setItens(prev => prev.map((it, i) => (i === index ? { ...it, [campo]: valor } : it)))
  }

  const comparar = async () => {
    setLoading(true)
    setErro(null)
    setResultado(null)
    try {
      const resp = await fetch('/api/comparacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entidades: itens, pontosTuristicos: pontos })
      })
      if (!resp.ok) throw new Error('Falha ao comparar')
      setResultado(await resp.json())
    } catch (e: any) {
      setErro(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Entidades para comparar (até 3)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {itens.map((item, idx) => (
            <div key={idx} className="border rounded-md p-3 space-y-2">
              <div>
                <label className="text-sm text-gray-600">Tipo</label>
                <select value={item.tipo} onChange={e => atualizarItem(idx, 'tipo', e.target.value as any)} className="w-full border rounded px-2 py-1">
                  <option value="ROTEIRO">Roteiro</option>
                  <option value="ATRACAO">Atração</option>
                  <option value="CUSTOM">Custom</option>
                </select>
              </div>
              {item.tipo !== 'CUSTOM' ? (
                <div>
                  <label className="text-sm text-gray-600">ID</label>
                  <input value={item.id || ''} onChange={e => atualizarItem(idx, 'id', e.target.value)} className="w-full border rounded px-2 py-1" placeholder="ID" />
                </div>
              ) : (
                <div>
                  <label className="text-sm text-gray-600">Nome (custom)</label>
                  <input value={item.dados?.nome || ''} onChange={e => atualizarItem(idx, 'dados', { ...(item.dados || {}), nome: e.target.value })} className="w-full border rounded px-2 py-1" />
                </div>
              )}
              <div>
                <label className="text-sm text-gray-600">Transporte</label>
                <select value={item.rotas?.tipoTransporte || 'walking'} onChange={e => atualizarItem(idx, 'rotas', { ...(item.rotas || {}), tipoTransporte: e.target.value })} className="w-full border rounded px-2 py-1">
                  <option value="walking">A pé</option>
                  <option value="driving">Carro</option>
                  <option value="transit">Transp. público</option>
                  <option value="taxi">Táxi/Uber</option>
                </select>
              </div>
            </div>
          ))}
          {itens.length < 3 && (
            <button onClick={() => setItens(prev => [...prev, { tipo: 'ATRACAO' }])} className="border-dashed border-2 rounded-md p-3 text-gray-600 hover:bg-gray-50">
              + Adicionar entidade
            </button>
          )}
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Pontos turísticos de referência (opcional)</h3>
        <div className="space-y-2">
          {pontos.map((p, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <input className="border rounded px-2 py-1" value={p.nome} onChange={e => setPontos(prev => prev.map((pp, idx) => idx === i ? { ...pp, nome: e.target.value } : pp))} placeholder="Nome" />
              <input className="border rounded px-2 py-1" value={p.latitude} onChange={e => setPontos(prev => prev.map((pp, idx) => idx === i ? { ...pp, latitude: Number(e.target.value) } : pp))} placeholder="Latitude" />
              <input className="border rounded px-2 py-1" value={p.longitude} onChange={e => setPontos(prev => prev.map((pp, idx) => idx === i ? { ...pp, longitude: Number(e.target.value) } : pp))} placeholder="Longitude" />
            </div>
          ))}
          <button className="text-sm text-blue-600" onClick={() => setPontos(prev => [...prev, { nome: '', latitude: 0, longitude: 0 }])}>+ Adicionar ponto</button>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={comparar} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">{loading ? 'Comparando...' : 'Comparar'}</button>
        {erro && <span className="text-red-600 text-sm">{erro}</span>}
      </div>

      {resultado && (
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Resultados</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2">Entidade</th>
                  <th className="p-2">Custo total</th>
                  <th className="p-2">Tempo total (min)</th>
                  <th className="p-2">Distância média p/ pontos (km)</th>
                </tr>
              </thead>
              <tbody>
                {resultado.resultados.map((r: any, idx: number) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">
                      {r.tipo === 'ROTEIRO' ? r.titulo : r.tipo === 'ATRACAO' ? r.nome : (r.nome || 'Custom')}
                    </td>
                    <td className="p-2">{r.custo?.total ?? r.preco ?? 0}</td>
                    <td className="p-2">{r.tempo?.total ?? '-'}</td>
                    <td className="p-2">{r.distanciaMediaPontosTuristicosKm?.toFixed?.(2) ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

