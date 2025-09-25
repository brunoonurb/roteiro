import jsPDF from 'jspdf'

interface Atracao {
  nome: string
  descricao?: string
  categoria: string
  endereco?: string
  horario?: string
  preco?: number
  duracao?: number
}

interface Dia {
  dia: number
  atracoes: Atracao[]
}

interface RoteiroPDF {
  titulo: string
  descricao?: string
  dias: Dia[]
  usuario: {
    name: string
  }
  criadoEm: string
}

export const generateRoteiroPDF = (roteiro: RoteiroPDF) => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  let yPosition = 20

  // Cores
  const primaryColor = [59, 130, 246] // blue-600
  const secondaryColor = [107, 114, 128] // gray-500
  const accentColor = [16, 185, 129] // green-500

  // Função para adicionar quebra de página se necessário
  const checkPageBreak = (requiredSpace: number = 20) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage()
      yPosition = 20
      return true
    }
    return false
  }

  // Cabeçalho
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(0, 0, pageWidth, 30, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text('RoteirosApp', 15, 20)
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Seu roteiro de viagem personalizado', 15, 25)

  yPosition = 40

  // Título do roteiro
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text(roteiro.titulo, 15, yPosition)
  yPosition += 10

  // Descrição
  if (roteiro.descricao) {
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    const descricaoLines = doc.splitTextToSize(roteiro.descricao, pageWidth - 30)
    doc.text(descricaoLines, 15, yPosition)
    yPosition += descricaoLines.length * 5 + 10
  }

  // Informações do roteiro
  doc.setFontSize(10)
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
  doc.text(`Criado por: ${roteiro.usuario.name}`, 15, yPosition)
  yPosition += 5
  doc.text(`Data: ${new Date(roteiro.criadoEm).toLocaleDateString('pt-BR')}`, 15, yPosition)
  yPosition += 5
  doc.text(`Total de dias: ${roteiro.dias.length}`, 15, yPosition)
  yPosition += 15

  // Dias do roteiro
  roteiro.dias.forEach((dia, diaIndex) => {
    checkPageBreak(40)

    // Cabeçalho do dia
    doc.setFillColor(accentColor[0], accentColor[1], accentColor[2])
    doc.rect(15, yPosition - 5, pageWidth - 30, 15, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text(`Dia ${dia.dia}`, 20, yPosition + 5)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`${dia.atracoes.length} atração${dia.atracoes.length !== 1 ? 'ões' : ''}`, pageWidth - 50, yPosition + 5)
    
    yPosition += 20

    // Atrações do dia
    dia.atracoes.forEach((atracao, atracaoIndex) => {
      checkPageBreak(25)

      // Nome da atração
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(`• ${atracao.nome}`, 20, yPosition)
      yPosition += 7

      // Categoria
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
      doc.text(`Categoria: ${atracao.categoria}`, 25, yPosition)
      yPosition += 5

      // Descrição
      if (atracao.descricao) {
        doc.setTextColor(0, 0, 0)
        const descricaoLines = doc.splitTextToSize(atracao.descricao, pageWidth - 50)
        doc.text(descricaoLines, 25, yPosition)
        yPosition += descricaoLines.length * 4
      }

      // Detalhes
      const detalhes = []
      if (atracao.horario) detalhes.push(`Horário: ${atracao.horario}`)
      if (atracao.duracao) detalhes.push(`Duração: ${atracao.duracao} min`)
      if (atracao.preco) detalhes.push(`Preço: €${atracao.preco}`)
      if (atracao.endereco) detalhes.push(`Endereço: ${atracao.endereco}`)

      if (detalhes.length > 0) {
        doc.setFontSize(8)
        doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
        detalhes.forEach(detalhe => {
          doc.text(detalhe, 25, yPosition)
          yPosition += 4
        })
      }

      yPosition += 8
    })

    yPosition += 10
  })

  // Rodapé
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.setFontSize(8)
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth - 30,
      pageHeight - 10
    )
    doc.text(
      'Gerado pelo RoteirosApp',
      15,
      pageHeight - 10
    )
  }

  return doc
}

export const downloadRoteiroPDF = (roteiro: RoteiroPDF) => {
  const doc = generateRoteiroPDF(roteiro)
  const fileName = `${roteiro.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`
  doc.save(fileName)
}

export const printRoteiroPDF = (roteiro: RoteiroPDF) => {
  const doc = generateRoteiroPDF(roteiro)
  const pdfBlob = doc.output('blob')
  const pdfUrl = URL.createObjectURL(pdfBlob)
  
  const printWindow = window.open(pdfUrl, '_blank')
  if (printWindow) {
    printWindow.onload = () => {
      printWindow.print()
      URL.revokeObjectURL(pdfUrl)
    }
  }
}