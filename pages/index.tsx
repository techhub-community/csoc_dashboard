// import { Inter } from 'next/font/google'
import DSA from "@/components/DSA/index"
import Layout from "@/components/LAYOUT"
import Profile from "@/components/PROFILE"
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
   <div>
    <DSA/>
    <Layout/>
    <Profile/>
    </div>
  )
}
