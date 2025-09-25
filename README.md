# RoteirosApp - Plataforma de Roteiros Personalizados

Uma plataforma web responsiva para criação, personalização e compartilhamento de roteiros de viagem, com foco em mobile, integração com Google Maps, suporte multi-idiomas, funcionalidade offline e integração com carteiras digitais.

## 🚀 Funcionalidades

### ✅ MVP Implementado
- **Criação de Roteiros**: Interface drag-and-drop para organizar atrações por dia/horário
- **Autenticação**: Login via Google OAuth com NextAuth.js
- **Mapas**: Integração com Google Maps API para visualização de atrações
- **Avaliações**: Sistema de avaliações por atração (1-5 estrelas)
- **Ingressos**: Gestão de ingressos com QR codes
- **Carteiras Digitais**: Exportação para Apple Wallet e Google Wallet
- **PWA**: Funciona offline e pode ser instalado como app
- **Multi-idiomas**: Suporte a 6 idiomas (PT, EN, ES, FR, DE, IT)
- **Exportação PDF**: Geração de PDFs dos roteiros
- **SEO**: Otimizado para motores de busca

### 🔗 Integrações
- **Google Maps API**: Visualização de mapas e rotas
- **Parceiros de Afiliados**: Civitatis, GetYourGuide, Viator, Tiqets
- **Google OAuth**: Autenticação social
- **Apple Wallet/Google Wallet**: Carteiras digitais
- **PWA**: Service Worker para funcionalidade offline

## 🛠️ Tecnologias

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Banco de Dados**: PostgreSQL
- **Autenticação**: NextAuth.js
- **Mapas**: Google Maps API
- **PWA**: next-pwa
- **Internacionalização**: next-intl
- **Validação**: Zod
- **PDF**: jsPDF
- **Carteiras Digitais**: passkit-generator
- **Animações**: Framer Motion
- **Drag & Drop**: @dnd-kit

## 📋 Pré-requisitos

- Node.js 18+ 
- PostgreSQL
- Conta Google (para OAuth)
- Chave da API do Google Maps
- Contas de afiliados (opcional)

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd roteiros-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/roteiros_db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# Affiliate IDs (opcional)
CIVITATIS_AFFILIATE_ID="your-civitatis-affiliate-id"
GETYOURGUIDE_AFFILIATE_ID="your-getyourguide-affiliate-id"
VIATOR_AFFILIATE_ID="your-viator-affiliate-id"
TIQETS_AFFILIATE_ID="your-tiqets-affiliate-id"
```

4. **Configure o banco de dados**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Execute o projeto**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📱 PWA (Progressive Web App)

O app é configurado como PWA e pode ser instalado em dispositivos móveis:

1. Acesse o app no navegador móvel
2. Toque no botão "Instalar" quando aparecer
3. O app será adicionado à tela inicial

### Funcionalidades Offline
- Roteiros salvos localmente
- Acesso aos dados sem internet
- Sincronização automática quando voltar online

## 🌍 Multi-idiomas

O app suporta 6 idiomas:
- 🇧🇷 Português (padrão)
- 🇺🇸 English
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch
- 🇮🇹 Italiano

Para adicionar novos idiomas:
1. Crie arquivo em `messages/[codigo].json`
2. Adicione o código em `lib/i18n.ts`

## 📊 Estrutura do Banco de Dados

```sql
-- Usuários
User {
  id, name, email, image, createdAt, updatedAt
}

-- Roteiros
Roteiro {
  id, titulo, descricao, dias (JSON), publico, usuarioId
}

-- Atrações
Atracao {
  id, nome, descricao, categoria, endereco, latitude, longitude
  linkAfiliado, parceiro, preco, duracao, imagem
}

-- Avaliações
Avaliacao {
  id, nota, comentario, atracaoId, usuarioId
}

-- Ingressos
Ingresso {
  id, codigo, data, atracao, preco, roteiroId, usuarioId
}

-- Consultoria
Consultoria {
  id, destino, datas, preferencias, orcamento, status, valor
}
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start

# Linting
npm run lint

# Banco de dados
npx prisma studio          # Interface visual do banco
npx prisma migrate dev     # Aplicar migrations
npx prisma generate        # Gerar cliente Prisma
```

## 📁 Estrutura do Projeto

```
roteiros-app/
├── src/
│   ├── app/               # App Router (Next.js 14)
│   │   ├── api/           # API Routes
│   │   ├── roteiros/      # Páginas de roteiros
│   │   └── globals.css    # Estilos globais
│   ├── components/        # Componentes React
│   ├── lib/               # Utilitários e configurações
│   ├── messages/          # Traduções (i18n)
│   └── types/             # Definições de tipos TypeScript
├── prisma/                # Schema e migrations
├── public/                # Assets estáticos
└── README.md
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte o repositório ao Vercel**
2. **Configure as variáveis de ambiente** no dashboard
3. **Configure o banco PostgreSQL** (Vercel Postgres ou externo)
4. **Deploy automático** a cada push

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **Railway**: Suporte nativo ao PostgreSQL
- **DigitalOcean**: App Platform

## 🔐 Segurança

- **Autenticação**: NextAuth.js com Google OAuth
- **Validação**: Zod para validação de dados
- **CORS**: Configurado para domínios específicos
- **Rate Limiting**: Implementado nas APIs
- **Sanitização**: Inputs sanitizados

## 📈 SEO

- **Metadados dinâmicos**: Otimizados por página
- **Sitemap**: Gerado automaticamente
- **Open Graph**: Tags para redes sociais
- **Schema.org**: Dados estruturados
- **Performance**: Otimizado com Next.js

## 🧪 Testes

```bash
# Testes unitários (quando implementados)
npm run test

# Testes E2E (quando implementados)
npm run test:e2e
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte e dúvidas:
- 📧 Email: suporte@roteirosapp.com
- 💬 Discord: [Link do servidor]
- 📖 Documentação: [Link da documentação]

## 🔄 Roadmap

### Próximas Funcionalidades
- [ ] App mobile nativo (React Native)
- [ ] Sistema de notificações push
- [ ] Integração com mais parceiros
- [ ] Sistema de reviews avançado
- [ ] Chat em tempo real
- [ ] Modo escuro
- [ ] Temas personalizáveis

### Melhorias Técnicas
- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Monitoramento (Sentry)
- [ ] Analytics avançado
- [ ] Cache Redis
- [ ] CDN para imagens

---

**Desenvolvido com ❤️ para viajantes apaixonados**

*Versão 1.0.0 - Janeiro 2024*