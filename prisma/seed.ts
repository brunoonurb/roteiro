import { PrismaClient, Categoria, Parceiro, StatusIngresso, RoleUsuario, TipoPlano } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // 1. USUÁRIOS DE EXEMPLO
  console.log('👥 Criando usuários...')
  
  const usuarios = [
    {
      email: 'admin@roteirosapp.com',
      name: 'Administrador RoteirosApp',
      role: RoleUsuario.ADMIN,
      plano: TipoPlano.PREMIUM,
      preferenciasIdioma: 'pt',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256'
    },
    {
      email: 'maria.silva@email.com',
      name: 'Maria Silva',
      role: RoleUsuario.USER,
      plano: TipoPlano.GRATUITO,
      preferenciasIdioma: 'pt',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=256'
    },
    {
      email: 'john.doe@email.com',
      name: 'John Doe',
      role: RoleUsuario.USER,
      plano: TipoPlano.PREMIUM,
      preferenciasIdioma: 'en',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256'
    },
    {
      email: 'carlos.rodriguez@email.com',
      name: 'Carlos Rodriguez',
      role: RoleUsuario.USER,
      plano: TipoPlano.GRATUITO,
      preferenciasIdioma: 'es',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256'
    }
  ]

  const usuariosCriados = []
  for (const userData of usuarios) {
    const usuario = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    })
    usuariosCriados.push(usuario)
    console.log(`✅ Usuário criado: ${usuario.email}`)
  }

  // 2. ATRAÇÕES DOS PARCEIROS
  console.log('🎯 Criando atrações dos parceiros...')

  const atracoes = [
    // PARIS - França
    {
      nome: 'Torre Eiffel - Acesso ao Topo',
      descricao: 'Suba até o topo da Torre Eiffel e desfrute de uma vista panorâmica única de Paris. Inclui acesso aos três andares e elevador até o topo.',
      categoria: Categoria.CULTURA,
      preco: 29.40,
      moeda: 'EUR',
      latitude: 48.8584,
      longitude: 2.2945,
      endereco: 'Champ de Mars, 7 Avenue Anatole France, 75007 Paris, França',
      parceiro: Parceiro.GETYOURGUIDE,
      linkAfiliado: 'https://www.getyourguide.com/paris-l16/paris-eiffel-tower-entry-ticket-with-optional-summit-access-t23383/',
      duracaoEstimada: 120,
      avaliacaoMedia: 4.6,
      totalAvaliacoes: 15420,
      ativo: true
    },
    {
      nome: 'Museu do Louvre - Ingresso com Audioguia',
      descricao: 'Explore o maior museu do mundo com audioguia incluído. Veja a Mona Lisa, Vênus de Milo e milhares de outras obras-primas.',
      categoria: Categoria.CULTURA,
      preco: 22.00,
      moeda: 'EUR',
      latitude: 48.8606,
      longitude: 2.3376,
      endereco: 'Rue de Rivoli, 75001 Paris, França',
      parceiro: Parceiro.TIQETS,
      linkAfiliado: 'https://www.tiqets.com/en/paris-attractions-c71684/louvre-museum-tickets-p974/',
      duracaoEstimada: 180,
      avaliacaoMedia: 4.4,
      totalAvaliacoes: 23150,
      ativo: true
    },
    {
      nome: 'Cruzeiro no Rio Sena com Jantar',
      descricao: 'Jantar romântico navegando pelo Sena com vista para os monumentos iluminados de Paris. Menu gourmet francês incluído.',
      categoria: Categoria.GASTRONOMIA,
      preco: 89.00,
      moeda: 'EUR',
      latitude: 48.8566,
      longitude: 2.3522,
      endereco: 'Port de la Bourdonnais, 75007 Paris, França',
      parceiro: Parceiro.VIATOR,
      linkAfiliado: 'https://www.viator.com/tours/Paris/Seine-River-Dinner-Cruise/d479-3017SEINE',
      duracaoEstimada: 150,
      avaliacaoMedia: 4.7,
      totalAvaliacoes: 8920,
      ativo: true
    },
    {
      nome: 'Passeio de Balão em Versalhes',
      descricao: 'Voo de balão sobre os jardins do Palácio de Versalhes. Experiência única com vista aérea dos jardins franceses.',
      categoria: Categoria.AVENTURA,
      preco: 25.00,
      moeda: 'EUR',
      latitude: 48.8049,
      longitude: 2.1204,
      endereco: 'Parc André Citroën, 75015 Paris, França',
      parceiro: Parceiro.CIVITATIS,
      linkAfiliado: 'https://www.civitatis.com/en/paris/versailles-balloon-flight/',
      duracaoEstimada: 30,
      avaliacaoMedia: 4.8,
      totalAvaliacoes: 2340,
      ativo: true
    },

    // ROMA - Itália
    {
      nome: 'Coliseu e Fórum Romano - Ingresso Prioritário',
      descricao: 'Evite as filas e explore o Coliseu, Fórum Romano e Monte Palatino com ingresso combinado e guia especializado.',
      categoria: Categoria.CULTURA,
      preco: 35.50,
      moeda: 'EUR',
      latitude: 41.8902,
      longitude: 12.4922,
      endereco: 'Piazza del Colosseo, 1, 00184 Roma RM, Itália',
      parceiro: Parceiro.GETYOURGUIDE,
      linkAfiliado: 'https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-skip-the-line-tour-t61982/',
      duracaoEstimada: 180,
      avaliacaoMedia: 4.5,
      totalAvaliacoes: 18760,
      ativo: true
    },
    {
      nome: 'Museus Vaticanos e Capela Sistina',
      descricao: 'Tour pelos Museus Vaticanos, Capela Sistina e Basílica de São Pedro. Ingresso sem fila e guia especializado.',
      categoria: Categoria.CULTURA,
      preco: 42.00,
      moeda: 'EUR',
      latitude: 41.9029,
      longitude: 12.4534,
      endereco: 'Viale Vaticano, 00165 Roma RM, Itália',
      parceiro: Parceiro.TIQETS,
      linkAfiliado: 'https://www.tiqets.com/en/rome-attractions-c71680/vatican-museums-sistine-chapel-tickets-p965/',
      duracaoEstimada: 240,
      avaliacaoMedia: 4.6,
      totalAvaliacoes: 25430,
      ativo: true
    },
    {
      nome: 'Aula de Culinária Italiana Tradicional',
      descricao: 'Aprenda a fazer pasta fresca, risotto e tiramisu com chef italiano. Inclui degustação e receitas para levar.',
      categoria: Categoria.GASTRONOMIA,
      preco: 95.00,
      moeda: 'EUR',
      latitude: 41.9028,
      longitude: 12.4964,
      endereco: 'Via dei Cappuccini, 15, 00187 Roma RM, Itália',
      parceiro: Parceiro.CIVITATIS,
      linkAfiliado: 'https://www.civitatis.com/en/rome/italian-cooking-class/',
      duracaoEstimada: 180,
      avaliacaoMedia: 4.9,
      totalAvaliacoes: 3450,
      ativo: true
    },

    // BARCELONA - Espanha
    {
      nome: 'Sagrada Família - Ingresso com Torres',
      descricao: 'Visite a obra-prima de Gaudí com acesso às torres e audioguia. Inclui ingresso para a basílica e uma das torres.',
      categoria: Categoria.CULTURA,
      preco: 33.00,
      moeda: 'EUR',
      latitude: 41.4036,
      longitude: 2.1744,
      endereco: 'Carrer de Mallorca, 401, 08013 Barcelona, Espanha',
      parceiro: Parceiro.VIATOR,
      linkAfiliado: 'https://www.viator.com/tours/Barcelona/Sagrada-Familia-Skip-the-Line-with-Tower-Access/d562-6155SAGRADA',
      duracaoEstimada: 90,
      avaliacaoMedia: 4.7,
      totalAvaliacoes: 12890,
      ativo: true
    },
    {
      nome: 'Park Güell - Ingresso e Visita Guiada',
      descricao: 'Explore o parque mais famoso de Gaudí com guia especializado. Inclui ingresso para a zona monumental.',
      categoria: Categoria.PARQUES,
      preco: 18.50,
      moeda: 'EUR',
      latitude: 41.4145,
      longitude: 2.1527,
      endereco: 'Carrer d\'Olot, s/n, 08024 Barcelona, Espanha',
      parceiro: Parceiro.GETYOURGUIDE,
      linkAfiliado: 'https://www.getyourguide.com/barcelona-l45/park-guell-guided-tour-with-skip-the-line-access-t54129/',
      duracaoEstimada: 75,
      avaliacaoMedia: 4.4,
      totalAvaliacoes: 8750,
      ativo: true
    },
    {
      nome: 'Tour de Tapas pelo Bairro Gótico',
      descricao: 'Descubra a gastronomia catalã em um tour por 5 bares tradicionais. Inclui 10 tapas e 5 bebidas.',
      categoria: Categoria.GASTRONOMIA,
      preco: 65.00,
      moeda: 'EUR',
      latitude: 41.3851,
      longitude: 2.1734,
      endereco: 'Plaça de Sant Jaume, 1, 08002 Barcelona, Espanha',
      parceiro: Parceiro.CIVITATIS,
      linkAfiliado: 'https://www.civitatis.com/en/barcelona/tapas-tour-gothic-quarter/',
      duracaoEstimada: 180,
      avaliacaoMedia: 4.8,
      totalAvaliacoes: 5620,
      ativo: true
    },

    // LONDRES - Reino Unido
    {
      nome: 'Torre de Londres e Joias da Coroa',
      descricao: 'Visite a histórica Torre de Londres e veja as Joias da Coroa Britânica. Inclui audioguia em português.',
      categoria: Categoria.CULTURA,
      preco: 32.70,
      moeda: 'GBP',
      latitude: 51.5081,
      longitude: -0.0759,
      endereco: 'St Katharine\'s & Wapping, London EC3N 4AB, Reino Unido',
      parceiro: Parceiro.TIQETS,
      linkAfiliado: 'https://www.tiqets.com/en/london-attractions-c71686/tower-of-london-tickets-p974524/',
      duracaoEstimada: 150,
      avaliacaoMedia: 4.5,
      totalAvaliacoes: 19230,
      ativo: true
    },
    {
      nome: 'Roda Gigante London Eye',
      descricao: 'Vista panorâmica de Londres da roda gigante mais famosa do mundo. Ingresso com horário marcado.',
      categoria: Categoria.AVENTURA,
      preco: 28.50,
      moeda: 'GBP',
      latitude: 51.5033,
      longitude: -0.1196,
      endereco: 'Riverside Building, County Hall, London SE1 7PB, Reino Unido',
      parceiro: Parceiro.VIATOR,
      linkAfiliado: 'https://www.viator.com/tours/London/London-Eye-Skip-the-Line-Tickets/d737-2916LONEYEF',
      duracaoEstimada: 45,
      avaliacaoMedia: 4.3,
      totalAvaliacoes: 16540,
      ativo: true
    },

    // AMSTERDAM - Holanda
    {
      nome: 'Casa de Anne Frank - Ingresso Sem Fila',
      descricao: 'Visite a casa onde Anne Frank escreveu seu famoso diário. Ingresso com horário marcado e audioguia.',
      categoria: Categoria.CULTURA,
      preco: 16.00,
      moeda: 'EUR',
      latitude: 51.8853,
      longitude: 4.8840,
      endereco: 'Prinsengracht 263-267, 1016 GV Amsterdam, Holanda',
      parceiro: Parceiro.GETYOURGUIDE,
      linkAfiliado: 'https://www.getyourguide.com/amsterdam-l36/anne-frank-house-skip-the-line-ticket-t61454/',
      duracaoEstimada: 75,
      avaliacaoMedia: 4.6,
      totalAvaliacoes: 22150,
      ativo: true
    },
    {
      nome: 'Cruzeiro pelos Canais de Amsterdam',
      descricao: 'Passeio de barco pelos famosos canais de Amsterdam com audioguia em múltiplos idiomas.',
      categoria: Categoria.RELAXAMENTO,
      preco: 18.00,
      moeda: 'EUR',
      latitude: 52.3676,
      longitude: 4.9041,
      endereco: 'Prins Hendrikkade 25, 1012 TM Amsterdam, Holanda',
      parceiro: Parceiro.TIQETS,
      linkAfiliado: 'https://www.tiqets.com/en/amsterdam-attractions-c71683/amsterdam-canal-cruise-tickets-p974521/',
      duracaoEstimada: 60,
      avaliacaoMedia: 4.2,
      totalAvaliacoes: 11890,
      ativo: true
    }
  ]

  const atracoesCriadas = []
  for (const atracaoData of atracoes) {
    const atracao = await prisma.atracao.create({
      data: atracaoData
    })
    atracoesCriadas.push(atracao)
    console.log(`✅ Atração criada: ${atracao.nome} (${atracao.parceiro})`)
  }

  // 3. ROTEIROS DE EXEMPLO
  console.log('🗺️ Criando roteiros...')

  // Roteiro Paris 3 dias
  const roteiroParis = await prisma.roteiro.create({
    data: {
      titulo: 'Paris Clássico - 3 Dias Inesquecíveis',
      descricao: 'Roteiro completo para conhecer o melhor de Paris em 3 dias, incluindo os principais monumentos, museus e experiências gastronômicas.',
      destino: 'Paris, França',
      dataInicio: new Date('2024-06-15'),
      dataFim: new Date('2024-06-17'),
      publico: true,
      categoria: Categoria.CULTURA,
      orcamento: 400.00,
      visualizacoes: 1250,
      usuarioId: usuariosCriados[0].id
    }
  })

  // Dias do roteiro Paris
  const diaParis1 = await prisma.diaRoteiro.create({
    data: {
      data: new Date('2024-06-15'),
      ordem: 1,
      roteiroId: roteiroParis.id
    }
  })

  const diaParis2 = await prisma.diaRoteiro.create({
    data: {
      data: new Date('2024-06-16'),
      ordem: 2,
      roteiroId: roteiroParis.id
    }
  })

  const diaParis3 = await prisma.diaRoteiro.create({
    data: {
      data: new Date('2024-06-17'),
      ordem: 3,
      roteiroId: roteiroParis.id
    }
  })

  // Atrações do roteiro Paris
  await prisma.atracaoDia.createMany({
    data: [
      {
        atracaoId: atracoesCriadas.find(a => a.nome.includes('Torre Eiffel'))!.id,
        diaRoteiroId: diaParis1.id,
        horario: '09:00',
        tempoEstimado: 120,
        ordem: 1,
        observacoes: 'Chegue cedo para evitar filas'
      },
      {
        atracaoId: atracoesCriadas.find(a => a.nome.includes('Cruzeiro no Rio Sena'))!.id,
        diaRoteiroId: diaParis1.id,
        horario: '19:30',
        tempoEstimado: 150,
        ordem: 2,
        observacoes: 'Jantar romântico com vista'
      },
      {
        atracaoId: atracoesCriadas.find(a => a.nome.includes('Museu do Louvre'))!.id,
        diaRoteiroId: diaParis2.id,
        horario: '10:00',
        tempoEstimado: 180,
        ordem: 1,
        observacoes: 'Reserve pelo menos 3 horas'
      }
    ]
  })

  // Roteiro Roma 4 dias
  const roteiroRoma = await prisma.roteiro.create({
    data: {
      titulo: 'Roma Eterna - 4 Dias na Cidade Imperial',
      descricao: 'Descubra a história milenar de Roma visitando o Coliseu, Vaticano e saboreando a melhor culinária italiana.',
      destino: 'Roma, Itália',
      dataInicio: new Date('2024-07-10'),
      dataFim: new Date('2024-07-13'),
      publico: true,
      categoria: Categoria.CULTURA,
      orcamento: 520.00,
      visualizacoes: 890,
      usuarioId: usuariosCriados[1].id
    }
  })

  console.log(`✅ Roteiros criados: ${roteiroParis.titulo}, ${roteiroRoma.titulo}`)

  // 4. AVALIAÇÕES
  console.log('⭐ Criando avaliações...')

  const avaliacoes = [
    {
      nota: 5,
      comentario: 'Experiência incrível! A vista do topo da Torre Eiffel é de tirar o fôlego. Vale cada centavo!',
      dataVisita: new Date('2024-05-20'),
      util: 15,
      naoUtil: 2,
      usuarioId: usuariosCriados[1].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Torre Eiffel'))!.id
    },
    {
      nota: 4,
      comentario: 'Museu impressionante, mas muito cheio. Recomendo ir bem cedo pela manhã.',
      dataVisita: new Date('2024-05-15'),
      util: 23,
      naoUtil: 1,
      usuarioId: usuariosCriados[2].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Louvre'))!.id
    },
    {
      nota: 5,
      comentario: 'O jantar no Sena foi o ponto alto da viagem! Comida excelente e vista deslumbrante.',
      dataVisita: new Date('2024-05-18'),
      util: 31,
      naoUtil: 0,
      usuarioId: usuariosCriados[3].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Cruzeiro'))!.id
    },
    {
      nota: 5,
      comentario: 'Coliseu é simplesmente magnífico! O tour guiado foi muito informativo.',
      dataVisita: new Date('2024-04-22'),
      util: 28,
      naoUtil: 3,
      usuarioId: usuariosCriados[0].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Coliseu'))!.id
    },
    {
      nota: 4,
      comentario: 'Casa de Anne Frank é muito emocionante. Prepare-se psicologicamente.',
      dataVisita: new Date('2024-03-10'),
      util: 19,
      naoUtil: 1,
      usuarioId: usuariosCriados[1].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Anne Frank'))!.id
    }
  ]

  for (const avaliacaoData of avaliacoes) {
    await prisma.avaliacao.create({
      data: avaliacaoData
    })
  }

  console.log(`✅ Avaliações criadas: ${avaliacoes.length}`)

  // 5. COMENTÁRIOS NOS ROTEIROS
  console.log('💬 Criando comentários...')

  const comentarios = [
    {
      conteudo: 'Roteiro perfeito! Seguimos exatamente como sugerido e foi incrível.',
      usuarioId: usuariosCriados[2].id,
      roteiroId: roteiroParis.id
    },
    {
      conteudo: 'Muito bom, mas acho que 3 horas no Louvre é pouco. Recomendo pelo menos 4h.',
      usuarioId: usuariosCriados[3].id,
      roteiroId: roteiroParis.id
    },
    {
      conteudo: 'Excelente roteiro para primeira viagem a Roma! Muito bem organizado.',
      usuarioId: usuariosCriados[0].id,
      roteiroId: roteiroRoma.id
    }
  ]

  for (const comentarioData of comentarios) {
    await prisma.comentario.create({
      data: comentarioData
    })
  }

  console.log(`✅ Comentários criados: ${comentarios.length}`)

  // 6. INGRESSOS
  console.log('🎫 Criando ingressos...')

  const ingressos = [
    {
      codigo: 'EIF-2024-001234',
      qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
      dataValidade: new Date('2024-12-31'),
      preco: 29.40,
      moeda: 'EUR',
      status: StatusIngresso.CONFIRMADO,
      observacoes: 'Apresentar na entrada principal',
      usuarioId: usuariosCriados[1].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Torre Eiffel'))!.id,
      roteiroId: roteiroParis.id
    },
    {
      codigo: 'LOU-2024-005678',
      dataValidade: new Date('2024-12-31'),
      preco: 22.00,
      moeda: 'EUR',
      status: StatusIngresso.USADO,
      observacoes: 'Ingresso utilizado em 15/05/2024',
      usuarioId: usuariosCriados[1].id,
      atracaoId: atracoesCriadas.find(a => a.nome.includes('Louvre'))!.id,
      roteiroId: roteiroParis.id
    }
  ]

  for (const ingressoData of ingressos) {
    await prisma.ingresso.create({
      data: ingressoData
    })
  }

  console.log(`✅ Ingressos criados: ${ingressos.length}`)

  // 7. CONSULTORIAS
  console.log('👨‍💼 Criando consultorias...')

  const consultorias = [
    {
      destino: 'Grécia - Ilhas Gregas',
      dataInicio: new Date('2024-08-15'),
      dataFim: new Date('2024-08-25'),
      orcamento: 2500.00,
      preferencias: 'Ilhas menos turísticas, foco em cultura local e gastronomia autêntica',
      status: 'EM_ANDAMENTO',
      preco: 150.00,
      clienteId: usuariosCriados[2].id,
      consultorId: usuariosCriados[0].id
    },
    {
      destino: 'Portugal - Porto e Lisboa',
      dataInicio: new Date('2024-09-10'),
      dataFim: new Date('2024-09-17'),
      orcamento: 1800.00,
      preferencias: 'Roteiro cultural, vinícolas do Porto, fado em Lisboa',
      status: 'PENDENTE',
      preco: 120.00,
      clienteId: usuariosCriados[3].id
    }
  ]

  for (const consultoriaData of consultorias) {
    await prisma.consultoria.create({
      data: consultoriaData
    })
  }

  console.log(`✅ Consultorias criadas: ${consultorias.length}`)

  // 8. RELACIONAMENTOS DE SEGUIR
  console.log('👥 Criando relacionamentos de follow...')

  await prisma.follow.createMany({
    data: [
      {
        seguidorId: usuariosCriados[1].id,
        seguidoId: usuariosCriados[0].id
      },
      {
        seguidorId: usuariosCriados[2].id,
        seguidoId: usuariosCriados[0].id
      },
      {
        seguidorId: usuariosCriados[3].id,
        seguidoId: usuariosCriados[1].id
      }
    ]
  })

  console.log('✅ Relacionamentos de follow criados')

  // ESTATÍSTICAS FINAIS
  const stats = {
    usuarios: await prisma.user.count(),
    atracoes: await prisma.atracao.count(),
    roteiros: await prisma.roteiro.count(),
    avaliacoes: await prisma.avaliacao.count(),
    comentarios: await prisma.comentario.count(),
    ingressos: await prisma.ingresso.count(),
    consultorias: await prisma.consultoria.count()
  }

  console.log('\n📊 ESTATÍSTICAS FINAIS:')
  console.log(`👥 Usuários: ${stats.usuarios}`)
  console.log(`🎯 Atrações: ${stats.atracoes}`)
  console.log(`🗺️ Roteiros: ${stats.roteiros}`)
  console.log(`⭐ Avaliações: ${stats.avaliacoes}`)
  console.log(`💬 Comentários: ${stats.comentarios}`)
  console.log(`🎫 Ingressos: ${stats.ingressos}`)
  console.log(`👨‍💼 Consultorias: ${stats.consultorias}`)

  console.log('\n🎉 Seed concluído com sucesso!')
  console.log('📝 Dados realistas dos parceiros criados:')
  console.log('   • Civitatis: Aulas de culinária, tours gastronômicos')
  console.log('   • GetYourGuide: Atrações principais, tours culturais')
  console.log('   • Viator: Experiências premium, cruzeiros')
  console.log('   • Tiqets: Museus, ingressos prioritários')
  console.log('   • Booking: (Preparado para hotéis)')
  console.log('   • Airbnb: (Preparado para experiências locais)')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })