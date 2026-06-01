"use client";
import React, { useEffect, useState, useRef } from 'react'

type Testimonial = {
  quote: string
  name: string
  role: string
  logo?: string
}

const data: Testimonial[] = [
  {
    quote:
      'I was very impressed by the project management acumen on this eCommerce project. On every meeting I had with you, it was evident to me that you were in complete control of your domain – great job!',
    name: 'Charles Nartey',
    role: 'Project Manager',
    logo: '/con1.png'
  },
  {
    quote:
      'Working with Testo has been a dream - they have felt like an extension of our team. They understand what we are trying to achieve and the business goals for our clients.',
    name: 'Andy Eva-Dale',
    role: 'Technical Director',
    logo: '/Margin.png'
  },
  {
    quote:
      'Great delivery and fast response times. They supported multiple releases with minimal overhead and clear reporting.',
    name: 'Sam Roberts',
    role: 'Delivery Lead',
    logo: '/Margin1.png'
  },
  {
    quote:
      'Their QA process helped us ship with confidence and reduced the number of regressions dramatically.',
    name: 'Priya Shah',
    role: 'Engineering Manager',
    logo: '/Margin2.png'
  }
]

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const Carosel: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2)
  const [page, setPage] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 640 ? 1 : 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const pages = chunk(data, itemsPerPage)

  useEffect(() => {
    if (page >= pages.length) setPage(pages.length - 1)
  }, [itemsPerPage, pages.length, page])

  function prev() {
    setPage((p) => Math.max(0, p - 1))
  }
  function next() {
    setPage((p) => Math.min(pages.length - 1, p + 1))
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 40) prev()
    else if (dx < -40) next()
    touchStartX.current = null
  }

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative">
        <h3 className="text-center text-2xl font-medium mb-8">What our clients say</h3>

        <div className="relative">
          <button
            aria-label="Previous"
            onClick={prev}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border absolute left-[-40px] top-1/2 -translate-y-1/2"
          >
            ←
          </button>

          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pages[page]?.map((t, i) => (
                <article key={i} className="bg-[#f3f4f2] p-6 rounded-lg min-h-[220px]">
                  <p className="text-sm leading-relaxed">{t.quote}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{t.role}</p>
                  </div>
                  {/* {t.logo && (
                    <img src={t.logo} alt="logo" className="mt-6 w-20 object-contain" />
                  )} */}
                </article>
              ))}
            </div>
          </div>

          <button
            aria-label="Next"
            onClick={next}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border absolute right-[-40px] top-1/2 -translate-y-1/2"
          >
            →
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="hidden md:block w-6 h-2 bg-black rounded-full" />
          <div className="hidden md:flex items-center gap-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`w-2 h-2 rounded-full ${idx === page ? 'bg-black' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carosel
