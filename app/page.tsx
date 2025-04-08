import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
   <main>
    <h1>
        Hello World...
    </h1>

         {/* add anchor to users page */}
         <h1> <a href="/users">Users</a> </h1>
         <Link href="/users">UsingLinkFromNextJs</Link>

         <ProductCard />
   </main>
  )
}
