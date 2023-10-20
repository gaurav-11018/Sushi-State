import { Card } from '@/components/ui/card';
import Head from 'next/head'


const Profile: React.FC = () => {
  return (
    <div>
      {/* <Head>
        <title>Stars Arena</title>
      </Head> */}

      <div className="container mx-auto px-4 py-10">

        <main className="mt-10">
          <section className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="w-20 h-20 rounded-full mr-4" src="https://github.com/shadcn.png" alt="Profile"/>
              <div>
                <h2 className="text-lg font-bold">Gaurav</h2>
                <p>@Gaurav28112001</p>
              </div>
            </div>

            <div className = "flex items-center justify-between">
                <div className="text-center px-4">
                  <h4 className="text-sm">0.006 AVAX</h4>
                  <p>Ticket Price</p>
                </div>
                <button className="bg-blue-700 text-white px-4 py-2 rounded">Buy</button>
              </div>
          </section>

          <section className="mt-6">
            <div className="flex items-center justify-between bg-pink-400 p-4 rounded-lg">
              <div className="flex items-center justify-between space-x-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">0</h3>
                  <p>Followers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">2</h3>
                  <p>Following</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">261</h3>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </section>

          <div className='flex flex-row justify-center gap-[10%]'>
            <Card className='flex flex-col p-4'>
              <div className='text-xl font-semibold'>Followers</div>
              <div className='text-gray-500'>Followers</div>
            </Card>
            <Card className='flex flex-col p-4'>
              <div className='text-xl font-semibold'>
                Holders
              </div>
              <div className='text-gray-500'>Volume</div>
            </Card>
      </div>
    </main>
  </div>
  </div>
  )
}

export default Profile;
