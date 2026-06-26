import Link from 'next/link'

export default function Header({categories=[]}){
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="logo">EGJ</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/">Terbaru</Link>
          <Link href="/kategori/pasar-swalayan">Kategori</Link>
          <div className="dropdown">
            <Link href="#">Katalog</Link>
          </div>
          <Link href="/tentang-kami">Tentang Kami</Link>
        </nav>
      </div>
    </header>
  )
}
