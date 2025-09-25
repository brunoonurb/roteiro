// Teste simples para verificar variáveis de ambiente
require('dotenv').config()
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL)
console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '***CONFIGURADO***' : 'NÃO CONFIGURADO')
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '***CONFIGURADO***' : 'NÃO CONFIGURADO')
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? '***CONFIGURADO***' : 'NÃO CONFIGURADO')