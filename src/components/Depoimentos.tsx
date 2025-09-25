'use client'

import { motion } from 'framer-motion'

const depoimentos = [
  {
    nome: 'Maria Silva',
    localizacao: 'São Paulo, SP',
    foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    texto: 'Economizei horas planejando minha viagem a Paris! O sistema de arrastar e soltar é incrível, e as avaliações me ajudaram muito a escolher as melhores atrações.',
    roteiro: 'Roteiro de 7 dias em Paris',
    avaliacao: 5
  },
  {
    nome: 'João Santos',
    localizacao: 'Rio de Janeiro, RJ',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    texto: 'A integração com os mapas é perfeita! Conseguimos otimizar nosso tempo e não perdemos nada durante nossa viagem de 10 dias pela Itália.',
    roteiro: 'Grande Tour da Itália',
    avaliacao: 5
  },
  {
    nome: 'Ana Costa',
    localizacao: 'Belo Horizonte, MG',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    texto: 'Adorei poder compartilhar meu roteiro com minha família! Todos conseguiram ver exatamente onde íamos e quando. A funcionalidade offline salvou nossa viagem várias vezes.',
    roteiro: 'Roteiro de 5 dias em Londres',
    avaliacao: 5
  }
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            O que nossos usuários dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Histórias reais de viajantes que transformaram suas experiências
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Avaliação com estrelas */}
              <div className="flex items-center mb-4">
                {[...Array(depoimento.avaliacao)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto do depoimento */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{depoimento.texto}"
              </blockquote>

              {/* Roteiro mencionado */}
              <div className="text-sm text-blue-600 font-medium mb-4">
                {depoimento.roteiro}
              </div>

              {/* Perfil do usuário */}
              <div className="flex items-center">
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{depoimento.nome}</div>
                  <div className="text-sm text-gray-600">{depoimento.localizacao}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}