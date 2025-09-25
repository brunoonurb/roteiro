'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MapaRoteiro from './MapaRoteiro'

interface Atracao {
  nome: string
  descricao?: string
  categoria: string
  endereco?: string
  latitude?: number
  longitude?: number
  linkAfiliado?: string
  parceiro?: string
  preco?: number
  duracao?: number
  horario?: string
}

interface Dia {
  dia: number
  atracoes: Atracao[]
}

interface VisualizacaoRoteiroProps {
  dias: Dia[]
  titulo: string
}

export default function VisualizacaoRoteiro({ dias, titulo }: VisualizacaoRoteiroProps) {
  const [visualizacao, setVisualizacao] = useState<'lista' | 'mapa'>('lista')

  const getCategoriaColor = (categoria: string) => {
    const colors: { [key: string]: string } = {
      cultura: 'bg-blue-100 text-blue-800',
      gastronomia: 'bg-red-100 text-red-800',
      parques: 'bg-green-100 text-green-800',
      compras: 'bg-yellow-100 text-yellow-800',
      entretenimento: 'bg-purple-100 text-purple-800',
      religioso: 'bg-gray-100 text-gray-800'
    }
    return colors[categoria] || 'bg-gray-100 text-gray-800'
  }

  const getCategoriaIcon = (categoria: string) => {
    const icons: { [key: string]: JSX.Element } = {
      cultura: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gastronomia: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      parques: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      compras: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      entretenimento: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v1.586a1 1 0 01-.293.707L6.293 14.414A1 1 0 006 15v1" />
        </svg>
      ),
      religioso: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
    return icons[categoria] || (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }

  return (
    <div className="space-y-6">
      {/* Controles de visualização */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">{titulo}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setVisualizacao('lista')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              visualizacao === 'lista'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Lista
          </button>
          <button
            onClick={() => setVisualizacao('mapa')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              visualizacao === 'mapa'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Mapa
          </button>
        </div>
      </div>

      {visualizacao === 'lista' ? (
        /* Visualização em lista */
        <div className="space-y-6">
          {dias.map((dia, diaIndex) => (
            <motion.div
              key={diaIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: diaIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {dia.dia}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Dia {dia.dia}
                </h3>
                <span className="text-sm text-gray-500">
                  {dia.atracoes.length} atração{dia.atracoes.length !== 1 ? 'ões' : ''}
                </span>
              </div>

              {dia.atracoes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Nenhuma atração adicionada</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {dia.atracoes.map((atracao, atracaoIndex) => (
                    <div
                      key={atracaoIndex}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getCategoriaColor(atracao.categoria)}`}>
                              {getCategoriaIcon(atracao.categoria)}
                              <span className="capitalize">{atracao.categoria}</span>
                            </div>
                            {atracao.preco && (
                              <span className="text-sm font-medium text-green-600">
                                €{atracao.preco}
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {atracao.nome}
                          </h4>
                          
                          {atracao.descricao && (
                            <p className="text-gray-600 mb-2">{atracao.descricao}</p>
                          )}
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            {atracao.horario && (
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {atracao.horario}
                              </span>
                            )}
                            {atracao.duracao && (
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {atracao.duracao} min
                              </span>
                            )}
                            {atracao.endereco && (
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {atracao.endereco}
                              </span>
                            )}
                          </div>
                        </div>

                        {atracao.linkAfiliado && (
                          <a
                            href={atracao.linkAfiliado}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                          >
                            <span>Reservar</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        /* Visualização em mapa */
        <MapaRoteiro dias={dias} />
      )}
    </div>
  )
}