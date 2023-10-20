export default function Hero() {
  return (
    <section className='w-full flex flex-col justify-center align-middle items-center my-8 text-black'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 items-center'>
          <div className='flex flex-col justify-center space-y-8 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-800'>
                Discover Our Unique Features
              </h1>
              <p className='max-w-[600px] text-black md:text-xl  mx-auto'>
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className='w-full max-w-full space-y-4 mx-auto'>
              <div className='grid grid-cols-3 gap-8'>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2 bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
                      <path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Smart Inbox</h2>
                  <p className=' '>
                    Our Smart Inbox feature helps you manage your emails
                    efficiently by prioritizing important emails.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2  bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='m8 6 4-4 4 4' />
                      <path d='M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22' />
                      <path d='m20 22-5-5' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Seamless Integration</h2>
                  <p className=' '>
                    Seamless Integration allows you to connect with your
                    favorite apps and services without leaving your inbox.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2  bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                      <circle cx='12' cy='12' r='3' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Advanced Customization</h2>
                  <p className=' '>
                    With Advanced Customization, you can personalize your email
                    client to suit your preferences and work style.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2  bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='11' cy='11' r='8' />
                      <path d='m21 21-4.3-4.3' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Powerful Search</h2>
                  <p className=' '>
                    Our Powerful Search feature allows you to find any email,
                    contact, or file in seconds.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2  bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect height='11' rx='2' ry='2' width='18' x='3' y='11' />
                      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Reliable Security</h2>
                  <p className=' '>
                    With Reliable Security, your data is always safe and
                    protected.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <div className='p-2  bg-opacity-50 rounded-full'>
                    <svg
                      className='  h-6 w-6 mb-2 opacity-75'
                      fill='none'
                      height='24'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='m8 6 4-4 4 4' />
                      <path d='M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22' />
                      <path d='m20 22-5-5' />
                    </svg>
                  </div>
                  <h2 className='text-xl font-bold '>Easy Collaboration</h2>
                  <p className=' '>
                    Easy Collaboration allows you to share and edit documents
                    with your team in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
