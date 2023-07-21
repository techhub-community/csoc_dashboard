// import { Inter } from 'next/font/google'
import DSA from "@/components/DSA/index"
import Layout from "@/components/LAYOUT"
import Resource from "@/components/Resource"
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
   <div>
    {/* <DSA/> */}
    <Resource/>
    <Layout/>
   </div>
  )
}
