// import { Inter } from 'next/font/google'
import DSA from "@/components/DSA/index"
import Layout from "@/components/LAYOUT"
// const inter = Inter({ subsets: ['latin'] })

import Development from "@/components/Development"
export default function Home() {
  
  return (
   <div>
    <DSA/>
    <Development />
    <Layout/>
   </div>
  )
}


