import Nav from '@/components/nav'
import cx from 'classnames'
import { inter, sfPro } from './fonts'
import './globals.css'
import Sidebar from './(sections)/Sidebar'

// export const metadata = {
//   title: "Scale3 zkLogin - Authentication for your next project on Sui",
//   description:
//     "Scale3 zkLogin is the all-in-one solution for your next project on Sui. It includes a design system, authentication, analytics, and more.",
//   twitter: {
//     card: "summary_large_image",
//     title: "Scale3 zkLogin - Authentication for your next project on Sui",
//     description:
//       "Scale3 zkLogin is the all-in-one solution for your next project on Sui. It includes a design system, authentication, analytics, and more.",
//     creator: "@scale3labs",
//   },
//   metadataBase: new URL("https://zklogin.scale3labs.com"),
//   themeColor: "#FFF",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cx(sfPro.variable, inter.variable)}>
        <main className='flex  flex-row '>
          <div className='flex flex-col w-full'>
            <Nav />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
