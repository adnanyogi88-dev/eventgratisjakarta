import Head from 'next/head'
import Header from '../../components/Header'
import Link from 'next/link'
import data from '../../data/promos.json'
import categories from '../../data/categories.json'

export async function getStaticPaths(){
  const paths = data.map(p=>({params:{slug:p.slug}}))
  return {paths, fallback:false}
}

export async function getStaticProps({params}){
  const promo = data.find(p=>p.slug===params.slug) || null
  const related = data.filter(x=>x.category===promo.category && x.slug!==promo.slug).slice(0,4)
  return {props:{promo,related}}
}

export default function PromoDetail({promo,related}){
  if(!promo) return <div>Not found</div>
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"BlogPosting",
    "headline":promo.title,
    "image":[promo.image],
    "datePublished":promo.date,
    "author":{"@type":"Organization","name":"EventGratisJakarta"},
    "publisher":{"@type":"Organization","name":"EventGratisJakarta"}
  }

  return (
    <>
      <Head>
        <title>{promo.meta_title}</title>
        <meta name="description" content={promo.meta_description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <Header />
      <main className="container">
        <nav className="breadcrumb">Home / {promo.category} / {promo.title}</nav>
        <h1>{promo.title}</h1>
        <img src={promo.image} alt="gambar promo" className="hero-image" />
        <p className="meta">Brand: {promo.brand} • {promo.date}</p>
        <p><strong>Periode:</strong> {promo.promo_start} — {promo.promo_end}</p>
        <article dangerouslySetInnerHTML={{__html: promo.content}} />
        <p><a className="cta" href={promo.source_url} target="_blank" rel="noopener noreferrer">Lihat Promo</a></p>

        <h2>Artikel terkait</h2>
        <div className="grid">
          {related.map(r=> <PromoCard key={r.slug} promo={r} />)}
        </div>
      </main>
    </>
  )
}
