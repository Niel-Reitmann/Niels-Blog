import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Niel's Blog",
  description: 'Created by Niel Reitmann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-slate-800'>
        {/* <Navbar />
        <MyProfilePic /> */}
        {children}
      </body>
    </html>
  )
}
