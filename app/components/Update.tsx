import Image from 'next/image'
import React from 'react'

const posts = [
  {
    image: '/photo1.png',
    date: '9th Apr 2026',
    title: "Keeping releases moving: a practical look at outsourced QA delivery at Sharp",
    tags: ['Testing']
  },
  {
    image: '/photo2.png',
    date: '31st Mar 2026',
    title: 'How we build fresh perspectives into every penetration test',
    tags: ['Thoughts', 'Security']
  },
  {
    image: '/photo3.png',
    date: '25th Mar 2026',
    title: "From commitment to action: we're now a RNIB Visibly Better Employer",
    tags: ['News', 'Team']
  }
]

const Tag: React.FC<{ label: string; color?: string }> = ({ label, color = 'bg-amber-200' }) => {
  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <span>{label}</span>
    </span>
  )
}

const Update = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8">Latest updates from our blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="group">
              <div className="w-full h-48 bg-gray-100 overflow-hidden rounded">
                <Image src={p.image} alt={p.title} width={800} height={480} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
              </div>

              <p className="text-xs text-gray-600 mt-3">{p.date}</p>
              <h3 className="mt-2 text-base font-semibold hover:underline">{p.title}</h3>

              <div className="mt-4 flex items-center gap-4">
                {p.tags.map((t, idx) => (
                  <Tag key={idx} label={t} color={idx === 0 ? 'bg-amber-200' : 'bg-pink-200'} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Update
