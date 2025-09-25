import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Beneficios from '@/components/Beneficios'
import Depoimentos from '@/components/Depoimentos'
import FormularioInteresse from '@/components/FormularioInteresse'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Beneficios />
      <Depoimentos />
      <FormularioInteresse />
      <Footer />
    </main>
  )
}