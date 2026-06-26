import Head from 'next/head'
import Header from '../components/Header'

export default function TentangKami(){
  return (
    <>
      <Head>
        <title>Tentang Kami - EventGratisJakarta</title>
        <meta name="description" content="Portal informasi promo, katalog belanja, dan kupon. Periksa kembali ke situs resmi brand terkait untuk validasi." />
      </Head>
      <Header />
      <main className="container">
        <h1>Tentang Kami</h1>
        <p>EventGratisJakarta adalah portal yang mengumpulkan informasi promo, diskon, katalog belanja, promo restoran, event, dan kupon. Konten dibuat untuk tujuan informatif. Promo dapat berubah sewaktu-waktu; mohon verifikasi ke sumber resmi brand sebelum melakukan transaksi.</p>
      </main>
    </>
  )
}
