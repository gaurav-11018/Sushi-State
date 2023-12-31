import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './(sections)/Sidebar'
import Navbar from './(sections)/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex  flex-row '>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
