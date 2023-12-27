
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import LeftSideBar from '@/components/home-route/left-sidebar/left-sidebar-container'
const inter = Poppins({ subsets: ['latin'] ,weight:"400"})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
  details:React.ReactNode,
  home:React.ReactNode,
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-full   '>
          <div className='w-20 h-screen'>
        <LeftSideBar/></div>
        <section className=" flex w-full  ">
       
        {children}
        </section>
        
        
      
       </div>
        </body>
    </html>
  )
}
