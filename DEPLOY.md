# 🚀 Guia de Deploy - RoteirosApp

Este guia fornece instruções detalhadas para fazer deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos para Deploy

### 1. Configuração do Banco de Dados
- **PostgreSQL** (obrigatório)
- **Redis** (opcional, para cache)

### 2. APIs e Serviços Externos
- **Google OAuth** (para autenticação)
- **Google Maps API** (para mapas)
- **Chaves de afiliados** (opcional)

### 3. Configuração de Domínio
- Domínio personalizado (opcional)
- Certificado SSL (geralmente automático)

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

#### Passo a Passo:

1. **Conectar Repositório**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Login
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configurar Variáveis de Ambiente**
   No dashboard da Vercel, adicione:
   ```env
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://seu-dominio.vercel.app
   NEXTAUTH_SECRET=sua-chave-secreta
   GOOGLE_CLIENT_ID=seu-google-client-id
   GOOGLE_CLIENT_SECRET=seu-google-client-secret
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua-chave-maps
   ```

3. **Configurar Banco de Dados**
   - Use **Vercel Postgres** ou **PlanetScale**
   - Configure a `DATABASE_URL`

4. **Executar Migrations**
   ```bash
   vercel env pull .env.local
   npx prisma migrate deploy
   npx prisma db seed
   ```

#### Vantagens Vercel:
- ✅ Deploy automático
- ✅ SSL automático
- ✅ CDN global
- ✅ Integração com Next.js
- ✅ Funções serverless

---

### 2. Railway

#### Passo a Passo:

1. **Conectar GitHub**
   - Acesse [railway.app](https://railway.app)
   - Conecte seu repositório

2. **Configurar Serviços**
   - Adicione PostgreSQL
   - Configure variáveis de ambiente

3. **Deploy Automático**
   - Railway detecta Next.js automaticamente
   - Deploy acontece a cada push

#### Vantagens Railway:
- ✅ PostgreSQL incluído
- ✅ Deploy automático
- ✅ SSL automático
- ✅ Preço acessível

---

### 3. DigitalOcean App Platform

#### Passo a Passo:

1. **Criar App**
   ```bash
   # Instalar doctl
   doctl apps create --spec .do/app.yaml
   ```

2. **Configurar Database**
   - Crie um PostgreSQL Droplet
   - Configure connection string

3. **Deploy**
   ```bash
   doctl apps create-deployment <app-id>
   ```

#### Vantagens DigitalOcean:
- ✅ Controle total
- ✅ Escalabilidade
- ✅ Preço previsível

---

### 4. Netlify

#### Passo a Passo:

1. **Configurar Build**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build && npm run export"
     publish = "out"
   
   [build.environment]
     NODE_VERSION = "18"
   ```

2. **Configurar Funções**
   - Use Netlify Functions para APIs
   - Configure redirects para SPA

#### Limitações Netlify:
- ⚠️ Não suporta Next.js API Routes nativamente
- ⚠️ Requer configuração adicional

---

## 🗄️ Configuração do Banco de Dados

### Opção 1: Vercel Postgres
```bash
# Instalar Vercel Postgres
npx vercel storage create postgres

# Conectar
npx vercel storage connect postgres
```

### Opção 2: PlanetScale
```bash
# Instalar PlanetScale CLI
npm install -g @planetscale/cli

# Criar banco
pscale database create roteiros-app

# Criar branch
pscale branch create roteiros-app main
```

### Opção 3: Supabase
```bash
# Criar projeto no Supabase
# Configurar DATABASE_URL
DATABASE_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
```

### Opção 4: Railway PostgreSQL
```bash
# Adicionar PostgreSQL no Railway
# Railway gera DATABASE_URL automaticamente
```

## 🔧 Scripts de Deploy

### package.json
```json
{
  "scripts": {
    "deploy": "npm run build && npm run start",
    "postbuild": "npx prisma generate",
    "postinstall": "npx prisma generate"
  }
}
```

### Deploy Manual
```bash
# 1. Build
npm run build

# 2. Executar migrations
npx prisma migrate deploy

# 3. Seed (opcional)
npm run db:seed

# 4. Start
npm start
```

## 🔐 Configuração de Segurança

### 1. Variáveis de Ambiente Obrigatórias
```env
# Autenticação
NEXTAUTH_SECRET=seu-secret-super-seguro
NEXTAUTH_URL=https://seu-dominio.com

# Google OAuth
GOOGLE_CLIENT_ID=seu-client-id
GOOGLE_CLIENT_SECRET=seu-client-secret

# Database
DATABASE_URL=postgresql://...

# Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua-chave-maps
```

### 2. Configuração de Domínio
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://seu-dominio.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' },
        ],
      },
    ]
  },
}
```

### 3. Rate Limiting
```javascript
// lib/rate-limit.js
export const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
}
```

## 📊 Monitoramento

### 1. Vercel Analytics
```bash
npm install @vercel/analytics
```

### 2. Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

### 3. Logs
```javascript
// lib/logger.js
export const logger = {
  info: (message) => console.log(`[INFO] ${message}`),
  error: (message) => console.error(`[ERROR] ${message}`),
}
```

## 🚀 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔍 Troubleshooting

### Problemas Comuns:

1. **Erro de Build**
   ```bash
   # Limpar cache
   rm -rf .next
   npm run build
   ```

2. **Erro de Database**
   ```bash
   # Reset migrations
   npx prisma migrate reset
   npx prisma migrate dev
   ```

3. **Erro de OAuth**
   - Verificar URLs no Google Console
   - Confirmar NEXTAUTH_URL

4. **Erro de Maps**
   - Verificar chave da API
   - Confirmar domínios autorizados

## 📈 Otimização de Performance

### 1. Build Optimization
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@prisma/client'],
  },
}
```

### 2. Image Optimization
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
}
```

### 3. Bundle Analysis
```bash
npm install @next/bundle-analyzer
npm run analyze
```

## 🎯 Checklist de Deploy

- [ ] Banco de dados configurado
- [ ] Variáveis de ambiente definidas
- [ ] OAuth configurado
- [ ] Maps API configurada
- [ ] Domínio configurado
- [ ] SSL ativo
- [ ] Migrations executadas
- [ ] Seed executado (opcional)
- [ ] Testes passando
- [ ] Monitoramento ativo
- [ ] Backup configurado

---

**🚀 Sua aplicação está pronta para produção!**

Para dúvidas específicas, consulte a documentação da plataforma escolhida ou abra uma issue no repositório.