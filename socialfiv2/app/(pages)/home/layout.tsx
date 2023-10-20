import Sidebar from '@/app/(sections)/Sidebar'
import Nav from '@/components/nav'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <main className='flex  flex-row '>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <Nav />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
