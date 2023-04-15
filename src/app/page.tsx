import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='bg-gradient-to-br from-purple-500 to-white text-center font-bold text-3xl'>BACOT</h1>
    </main>
  )
}
