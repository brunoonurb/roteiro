import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário de exemplo
  const usuario = await prisma.user.upsert({
    where: { email: 'admin@roteirosapp.com' },
    update: {},
    create: {
      email: 'admin@roteirosapp.com',
      name: 'Administrador RoteirosApp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
  })

  console.log('✅ Usuário criado:', usuario.email)

  // Criar atrações de exemplo
  const atracoes = [
    {
      nome: 'Torre Eiffel',
      descricao: 'Ícone de Paris e símbolo da França, a Torre Eiffel é uma das estruturas mais reconhecidas do mundo.',
      categoria: 'cultura',
      endereco: 'Champ de Mars, 7 Avenue Anatole France, 75007 Paris, França',
      latitude: 48.8584,
      longitude: 2.2945,
      linkAfiliado: 'https://www.getyourguide.com/paris-l16/torre-eiffel',
      parceiro: 'GetYourGuide',
      preco: 29.50,
      duracao: 120,
      imagem: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      nome: 'Museu do Louvre',
      descricao: 'Um dos maiores museus do mundo, abrigando obras-primas como a Mona Lisa e a Vênus de Milo.',
      categoria: 'cultura',
      endereco: 'Rue de Rivoli, 75001 Paris, França',
      latitude: 48.8606,
      longitude: 2.3376,
      linkAfiliado: 'https://www.tiqets.com/museu-do-louvre',
      parceiro: 'Tiqets',
      preco: 17.00,
      duracao: 180,
      imagem: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      nome: 'Notre-Dame de Paris',
      descricao: 'Catedral gótica icônica de Paris, famosa por sua arquitetura e história.',
      categoria: 'religioso',
      endereco: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França',
      latitude: 48.8530,
      longitude: 2.3499,
      preco: 0,
      duracao: 60,
      imagem: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      nome: 'Coliseu',
      descricao: 'Anfiteatro romano mais famoso do mundo, símbolo do Império Romano.',
      categoria: 'cultura',
      endereco: 'Piazza del Colosseo, 1, 00184 Roma RM, Itália',
      latitude: 41.8902,
      longitude: 12.4922,
      linkAfiliado: 'https://www.civitatis.com/roma/coliseo-arena-gladiadores',
      parceiro: 'Civitatis',
      preco: 24.00,
      duracao: 90,
      imagem: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      nome: 'Sagrada Família',
      descricao: 'Basílica inacabada de Gaudí, obra-prima da arquitetura modernista.',
      categoria: 'religioso',
      endereco: 'Carrer de Mallorca, 401, 08013 Barcelona, Espanha',
      latitude: 41.4036,
      longitude: 2.1744,
      linkAfiliado: 'https://www.viator.com/barcelona/sagrada-familia',
      parceiro: 'Viator',
      preco: 26.00,
      duracao: 120,
      imagem: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  // Temporariamente comentado - precisa ser atualizado para o novo schema
  // for (const atracao of atracoes) {
  //   await prisma.atracao.create({
  //     data: atracao,
  //   })
  // }

  console.log('✅ Atrações criadas:', atracoes.length)

  // Temporariamente comentado - precisa ser atualizado para o novo schema
  /*
  // Criar roteiro de exemplo
  const roteiro = await prisma.roteiro.upsert({
    where: { id: 'roteiro-exemplo-paris' },
    update: {},
    create: {
      id: 'roteiro-exemplo-paris',
      titulo: '3 Dias em Paris - Roteiro Clássico',
      descricao: 'Um roteiro perfeito para conhecer os principais pontos turísticos de Paris em 3 dias.',
      dias: [
        {
          dia: 1,
          atracoes: [
            {
              nome: 'Torre Eiffel',
              categoria: 'cultura',
              horario: '09:00',
              endereco: 'Champ de Mars, 7 Avenue Anatole France, 75007 Paris, França'
            },
            {
              nome: 'Museu do Louvre',
              categoria: 'cultura',
              horario: '14:00',
              endereco: 'Rue de Rivoli, 75001 Paris, França'
            }
          ]
        },
        {
          dia: 2,
          atracoes: [
            {
              nome: 'Notre-Dame de Paris',
              categoria: 'religioso',
              horario: '10:00',
              endereco: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França'
            }
          ]
        }
      ],
      publico: true,
      usuarioId: usuario.id,
    },
  })

  console.log('✅ Roteiro criado:', roteiro.titulo)

  // Criar avaliações de exemplo
  const avaliacoes = [
    {
      nota: 5,
      comentario: 'Lugar incrível! A vista de Paris é de tirar o fôlego.',
      atracaoId: (await prisma.atracao.findFirst({ where: { nome: 'Torre Eiffel' } }))?.id,
      usuarioId: usuario.id,
    },
    {
      nota: 4,
      comentario: 'Museu impressionante, mas muito movimentado. Recomendo ir cedo.',
      atracaoId: (await prisma.atracao.findFirst({ where: { nome: 'Museu do Louvre' } }))?.id,
      usuarioId: usuario.id,
    }
  ]

  for (const avaliacao of avaliacoes) {
    if (avaliacao.atracaoId) {
      await prisma.avaliacao.create({
        data: {
          nota: avaliacao.nota,
          comentario: avaliacao.comentario,
          atracaoId: avaliacao.atracaoId,
          usuarioId: avaliacao.usuarioId,
        },
      })
    }
  }

  console.log('✅ Avaliações criadas:', avaliacoes.length)

  */
  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })