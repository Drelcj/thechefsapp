import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Chefs Culinary Academy App',
  description: 'The Chefs Culinary Academy App, is your one-stop solution for interactive online culinary courses and a seamless e-commerce experience. Learn from expert chefs, explore diverse cuisines, shop for exclusive culinary tools and ingredients, all at your own pace. Join us to unleash your inner chef and elevate your cooking with our curated selection of products!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="flex-grow pt-16"> {/* Adjusted the padding (pt-16) as needed to suit the fixed position of the navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
