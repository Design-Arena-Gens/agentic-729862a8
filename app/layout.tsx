import './globals.css'
import { Montserrat, Lato } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '800']
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700']
})

export const metadata = {
  title: 'Get Your $100 Crumbl Gift Card - Free Survey',
  description: 'Complete a short survey and offers to receive a $100 Crumbl Cookies gift card. Join thousands who have claimed their free cookies!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}
