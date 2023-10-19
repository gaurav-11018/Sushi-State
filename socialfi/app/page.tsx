import Sidebar from './(sections)/Sidebar'
import MainContent from './(sections)/MainContent'
import Navbar from './(sections)/Navbar'

export default function Home() {
  return (
    <main className='flex  flex-row '>
      <Sidebar />
      <div className='flex flex-col'>
        <Navbar />
        <MainContent />
      </div>
    </main>
  )
}
