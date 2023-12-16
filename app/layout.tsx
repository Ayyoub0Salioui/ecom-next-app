import type { Metadata } from 'next'
import './styles/globals.css'


export const metadata: Metadata = {
  title: 'disney+',
  description: 'disney plus clone created using nextJs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex bg-black justify-center items-center m-3 p-1 pt-4 '>
        {children}
      </body>
    </html>
  )
}
