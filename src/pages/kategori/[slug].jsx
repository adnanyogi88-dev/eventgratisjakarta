import Head from 'next/head'
import Link from 'next/link'
import data from '../../data/promos.json'
import Header from '../../components/Header'
import PromoCard from '../../components/PromoCard'
import categories from '../../data/categories.json'

export async function getStaticPaths(){
  const paths = categories.map(c=>({params:{slug:c.slug}}))
  return {paths, fallback:false}
}

export async function getStaticProps({params}){
  const category = categories.find(c=>c.slug===params.slug) || null
  const promos = data.filter(p=>p.category===params.slug)
  return {props:{category,promos}}
}

export default function KategoriPage({category,promos}){
  return (
    <>
      <Head>
        <title>{category ? category.name + ' - EventGratisJakarta' : 'Kategori'} </title>
        <meta name="description" content={category ? category.description : 'Daftar promo'} />
      </Head>
      <Header />
      <main className="container">
        <nav className="breadcrumb">Home / {category ? category.name : 'Kategori'}</nav>
        <h1>{category ? category.name : 'Kategori'}</h1>
        <p>{category ? category.description : ''}</p>
        <div className="grid">
          {promos.map(p=> <PromoCard key={p.slug} promo={p} />)}
        </div>
        {/* Simple pagination placeholder */}
      </main>
    </>
  )
}
