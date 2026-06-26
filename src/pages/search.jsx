import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import data from '../data/promos.json'
import Header from '../components/Header'
import PromoCard from '../components/PromoCard'
import categories from '../data/categories.json'

export default function Search(){
  const router = useRouter()
  const q = router.query.q || ''
  const category = router.query.category || ''

  const results = data.filter(p=>{
    const matchesQ = q ? (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())) : true
    const matchesCat = category ? p.category===category : true
    return matchesQ && matchesCat
  })

  return (
    <>
      <Head>
        <title>Search results for "{q}" - EventGratisJakarta</title>
      </Head>
      <Header />
      <main className="container">
        <h1>Hasil pencarian</h1>
        <p>Keyword: <strong>{q}</strong></p>
        <div className="grid">
          {results.map(p=> <PromoCard key={p.slug} promo={p} />)}
        </div>
      </main>
    </>
  )
}
