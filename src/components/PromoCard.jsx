import Link from 'next/link'

export default function PromoCard({promo}){
  return (
    <article className="card">
      <Link href={`/promo/${promo.slug}`}>
        <img src={promo.image} alt="" />
        <div className="card-body">
          <small className="category">{promo.subcategory || promo.category}</small>
          <h3>{promo.title}</h3>
          <p className="excerpt">{promo.excerpt}</p>
          <p className="date">{promo.date}</p>
        </div>
      </Link>
    </article>
  )
}
