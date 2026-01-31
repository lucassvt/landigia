import Header from '@/components/Header'
import CentralLayout from '@/components/CentralLayout'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CentralLayout />
      <Footer />
    </main>
  )
}
