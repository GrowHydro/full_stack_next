import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HomeGrown Hydro - Expert Plug and Grow Cannabis Hydroponics',
  description: 'Expert solutions for Superior cannabis hydroponics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
