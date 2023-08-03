import './globals.css'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from './navbar'
import Footer from './footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "500", "600", "700"],
})

const royal = localFont({
  src: '../public/fonts/Royal_Knights-Demo.woff',
  variable: '--font-royal'
})

export const metadata = {
  title: 'SOV',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${poppins.className} ${royal.variable} bg-[#1D1F2C] font-bold text-white`}>
        <Navbar />
        <div className="flex w-full max-w-[1600px] mx-auto px-2 sm:px-5 overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
