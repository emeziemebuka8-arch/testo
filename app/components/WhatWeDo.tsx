import Image from 'next/image'
import React from 'react'

const WhatWeDo = () => {
  return (
    <section className="bg-[#3b0070] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <div
              className="w-64 sm:w-80 md:w-96 lg:w-[420px] h-64 sm:h-80 md:h-96 lg:h-[420px] overflow-hidden"
              style={{ borderTopLeftRadius: '220px', borderTopRightRadius: '220px' }}
            >
              <Image
                src="/photo.png"
                alt="case study"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-white lg:pl-12">
            <p className="text-xs uppercase tracking-wide text-white/80">Becreative UX</p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Helping Becreative UX
              <br />
              deliver quality at scale
              <br />
              with outsourced QA
            </h2>

            <p className="mt-4 text-sm text-white/90 max-w-lg">
              We brought structure, clarity, and confidence to two complex work streams -
              multifunctional printer validation and multi-market ecommerce testing - enabling Sharp to move faster and
              launch with certainty.
            </p>

            <div className="mt-6">
              <button className="bg-white text-black rounded-full py-2 px-5 text-sm font-medium">Read case study</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
