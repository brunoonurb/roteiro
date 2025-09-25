import { PKPass } from 'passkit-generator'

interface IngressoData {
  id: string
  codigo?: string
  data: string
  atracao?: string
  preco?: number
  roteiroId: string
  roteiro: {
    titulo: string
  }
}

interface WalletPassData {
  atracao: string
  data: string
  codigo?: string
  preco?: number
  roteiroTitulo: string
}

export const generateAppleWalletPass = async (ingresso: IngressoData): Promise<Blob> => {
  try {
    const passData: WalletPassData = {
      atracao: ingresso.atracao || 'Atração',
      data: ingresso.data,
      codigo: ingresso.codigo,
      preco: ingresso.preco,
      roteiroTitulo: ingresso.roteiro.titulo
    }

    // Criar o pass do Apple Wallet
    const pass = await PKPass.from({
      model: './models/pass.json', // Modelo do pass
      certificates: {
        wwdr: './certificates/wwdr.pem',
        signerCert: './certificates/signerCert.p12',
        signerKey: './certificates/signerKey.pem',
        signerKeyPassphrase: process.env.APPLE_WALLET_KEY_PASSPHRASE || ''
      },
      overrides: {
        // Dados específicos do ingresso
        serialNumber: ingresso.id,
        description: `Ingresso - ${passData.atracao}`,
        organizationName: 'RoteirosApp',
        teamIdentifier: process.env.APPLE_TEAM_ID || '',
        passTypeIdentifier: process.env.APPLE_PASS_TYPE_ID || '',
        
        // Dados da atração
        primaryFields: [
          {
            key: 'attraction',
            label: 'Atração',
            value: passData.atracao
          }
        ],
        
        secondaryFields: [
          {
            key: 'date',
            label: 'Data',
            value: new Date(passData.data).toLocaleDateString('pt-BR')
          },
          {
            key: 'itinerary',
            label: 'Roteiro',
            value: passData.roteiroTitulo
          }
        ],
        
        auxiliaryFields: [
          ...(passData.codigo ? [{
            key: 'code',
            label: 'Código',
            value: passData.codigo
          }] : []),
          ...(passData.preco ? [{
            key: 'price',
            label: 'Preço',
            value: `€${passData.preco}`
          }] : [])
        ],
        
        // Código de barras/QR Code
        barcodes: passData.codigo ? [
          {
            message: passData.codigo,
            format: 'PKBarcodeFormatQR',
            messageEncoding: 'iso-8859-1'
          }
        ] : undefined,
        
        // Logo e ícone
        logoText: 'RoteirosApp',
        backgroundColor: 'rgb(59, 130, 246)',
        foregroundColor: 'rgb(255, 255, 255)',
        labelColor: 'rgb(255, 255, 255)'
      }
    })

    return new Blob([pass.getAsBuffer() as unknown as ArrayBuffer], { type: 'application/vnd.apple.pkpass' })
  } catch (error) {
    console.error('Erro ao gerar pass do Apple Wallet:', error)
    throw new Error('Erro ao gerar pass do Apple Wallet')
  }
}

export const generateGoogleWalletPass = async (ingresso: IngressoData): Promise<string> => {
  try {
    // Para Google Wallet, normalmente usamos JWT (JSON Web Token)
    // Este é um exemplo simplificado
    
    const passData = {
      iss: process.env.GOOGLE_WALLET_ISSUER_ID || '',
      aud: 'google',
      typ: 'savetowallet',
      iat: Math.floor(Date.now() / 1000),
      payload: {
        genericObjects: [
          {
            id: `${process.env.GOOGLE_WALLET_ISSUER_ID}.${ingresso.id}`,
            classId: `${process.env.GOOGLE_WALLET_ISSUER_ID}.ticket_class`,
            state: 'ACTIVE',
            heroImage: {
              sourceUri: {
                uri: 'https://roteiros-app.vercel.app/icon-512x512.png'
              }
            },
            textModulesData: [
              {
                header: 'Atração',
                body: ingresso.atracao || 'Atração'
              },
              {
                header: 'Data',
                body: new Date(ingresso.data).toLocaleDateString('pt-BR')
              },
              {
                header: 'Roteiro',
                body: ingresso.roteiro.titulo
              },
              ...(ingresso.codigo ? [{
                header: 'Código',
                body: ingresso.codigo
              }] : []),
              ...(ingresso.preco ? [{
                header: 'Preço',
                body: `€${ingresso.preco}`
              }] : [])
            ],
            barcode: ingresso.codigo ? {
              type: 'QR_CODE',
              value: ingresso.codigo
            } : undefined
          }
        ]
      }
    }

    // Em uma implementação real, você assinaria este JWT com sua chave privada
    // Por simplicidade, retornamos o JSON como string
    return JSON.stringify(passData)
  } catch (error) {
    console.error('Erro ao gerar pass do Google Wallet:', error)
    throw new Error('Erro ao gerar pass do Google Wallet')
  }
}

export const downloadAppleWalletPass = async (ingresso: IngressoData) => {
  try {
    const passBlob = await generateAppleWalletPass(ingresso)
    const url = URL.createObjectURL(passBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${ingresso.atracao || 'ingresso'}.pkpass`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Erro ao baixar pass do Apple Wallet:', error)
    alert('Erro ao gerar pass do Apple Wallet')
  }
}

export const addToGoogleWallet = async (ingresso: IngressoData) => {
  try {
    const passJwt = await generateGoogleWalletPass(ingresso)
    
    // Criar URL para Google Wallet
    const googleWalletUrl = `https://pay.google.com/gp/v/save/${encodeURIComponent(passJwt)}`
    
    // Abrir em nova aba
    window.open(googleWalletUrl, '_blank')
  } catch (error) {
    console.error('Erro ao adicionar ao Google Wallet:', error)
    alert('Erro ao adicionar ao Google Wallet')
  }
}

export const detectWalletSupport = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const isIOS = /iphone|ipad|ipod/.test(userAgent)
  const isAndroid = /android/.test(userAgent)
  
  return {
    appleWallet: isIOS,
    googleWallet: isAndroid,
    both: isIOS || isAndroid
  }
}