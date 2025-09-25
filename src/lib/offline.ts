import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface RoteiroOffline extends DBSchema {
  roteiros: {
    key: string
    value: {
      id: string
      titulo: string
      descricao?: string
      dias: any[]
      publico: boolean
      usuarioId: string
      createdAt: string
      updatedAt: string
    }
  }
  ingressos: {
    key: string
    value: {
      id: string
      codigo?: string
      data: string
      atracao?: string
      preco?: number
      roteiroId: string
      usuarioId: string
      createdAt: string
    }
  }
}

let db: IDBPDatabase<RoteiroOffline> | null = null

export const initOfflineDB = async () => {
  if (!db) {
    db = await openDB<RoteiroOffline>('roteiros-offline', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('roteiros')) {
          db.createObjectStore('roteiros', { keyPath: 'id' })
        }
        if (!db.objectStoreNames.contains('ingressos')) {
          db.createObjectStore('ingressos', { keyPath: 'id' })
        }
      },
    })
  }
  return db
}

export const saveRoteiroOffline = async (roteiro: any) => {
  const database = await initOfflineDB()
  await database.put('roteiros', {
    ...roteiro,
    createdAt: roteiro.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

export const getRoteirosOffline = async () => {
  const database = await initOfflineDB()
  return await database.getAll('roteiros')
}

export const getRoteiroOffline = async (id: string) => {
  const database = await initOfflineDB()
  return await database.get('roteiros', id)
}

export const saveIngressoOffline = async (ingresso: any) => {
  const database = await initOfflineDB()
  await database.put('ingressos', {
    ...ingresso,
    createdAt: ingresso.createdAt || new Date().toISOString()
  })
}

export const getIngressosOffline = async (roteiroId?: string) => {
  const database = await initOfflineDB()
  const ingressos = await database.getAll('ingressos')
  
  if (roteiroId) {
    return ingressos.filter(ingresso => ingresso.roteiroId === roteiroId)
  }
  
  return ingressos
}

export const deleteRoteiroOffline = async (id: string) => {
  const database = await initOfflineDB()
  await database.delete('roteiros', id)
}

export const isOnline = () => navigator.onLine

export const setupOfflineSync = () => {
  // Sincronizar quando voltar online
  window.addEventListener('online', async () => {
    console.log('Voltou online, sincronizando dados...')
    // Aqui você pode implementar a sincronização com o servidor
    await syncOfflineData()
  })

  // Salvar dados offline quando estiver offline
  window.addEventListener('offline', () => {
    console.log('Ficou offline, salvando dados localmente...')
  })
}

const syncOfflineData = async () => {
  try {
    const roteiros = await getRoteirosOffline()
    const ingressos = await getIngressosOffline()

    // Sincronizar roteiros
    for (const roteiro of roteiros) {
      try {
        const response = await fetch('/api/roteiros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(roteiro)
        })

        if (response.ok) {
          console.log(`Roteiro ${roteiro.titulo} sincronizado`)
        }
      } catch (error) {
        console.error('Erro ao sincronizar roteiro:', error)
      }
    }

    // Sincronizar ingressos
    for (const ingresso of ingressos) {
      try {
        const response = await fetch('/api/ingressos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ingresso)
        })

        if (response.ok) {
          console.log(`Ingresso sincronizado`)
        }
      } catch (error) {
        console.error('Erro ao sincronizar ingresso:', error)
      }
    }
  } catch (error) {
    console.error('Erro na sincronização offline:', error)
  }
}