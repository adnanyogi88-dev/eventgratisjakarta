import Head from 'next/head'
import Header from '../components/Header'
import PromoCard from '../components/PromoCard'
import data from '../data/promos.json'
import categories from '../data/categories.json'

export default function Home() {
  const hotDeals = data.slice(0,3)
  const picks = data.slice(3,9)
  const latest = data.slice(9,15)
  const catalogs = data.slice(15,18)

  return (
    <>
      <Head>
        <title>EventGratisJakarta - Katalog Promo & Diskon</title>
        <meta name="description" content="Kumpulan promo, katalog belanja, restoran, event, dan kupon di Jakarta. Ringan, cepat, dan mobile-friendly." />
        <link rel="canonical" href="https://eventgratisjakarta.example/" />
        <meta property="og:title" content="EventGratisJakarta - Katalog Promo & Diskon" />
        <meta property="og:description" content="Kumpulan promo, katalog belanja, restoran, event, dan kupon di Jakarta." />
      </Head>
      <Header categories={categories} />
      <main className="container">
        <section className="hero">
          <h1>Temukan Promo Terbaru & Hemat Hari Ini</h1>
          <form className="search" action="/search">
            <input name="q" placeholder="Cari promo, brand, atau kategori..." aria-label="search" />
            <button type="submit">Cari</button>
          </form>
        </section>

        <section>
          <h2>Hot Deal Hari Ini</h2>
          <div className="grid">
            {hotDeals.map(p => <PromoCard key={p.slug} promo={p} />)}
          </div>
        </section>

        <section>
          <h2>Promo Pilihan Minggu Ini</h2>
          <div className="grid">
            {picks.map(p => <PromoCard key={p.slug} promo={p} />)}
          </div>
        </section>

        <section>
          <h2>Promo Terbaru</h2>
          <div className="grid">
            {latest.map(p => <PromoCard key={p.slug} promo={p} />)}
          </div>
        </section>

        <section>
          <h2>Katalog Belanja Terbaru</h2>
          <div className="grid">
            {catalogs.map(p => <PromoCard key={p.slug} promo={p} />)}
          </div>
        </section>

        <section>
          <h2>Tag Terpopuler</h2>
          <div className="tags">
            <a className="tag">Promo JSM</a>
            <a className="tag">Birthday Treats</a>
            <a className="tag">Payday Deals</a>
            <a className="tag">Promo Weekend</a>
            <a className="tag">Promo Gajian</a>
          </div>
        </section>
      </main>
    </>
  )
}
