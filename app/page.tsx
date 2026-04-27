import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Grade from './components/Grade'
import Galeria from './components/Galeria'
import Localizacao from './components/Localizacao'
import Social from './components/Social'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Grade />
        <Galeria />
        <Localizacao />
        <Social />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
