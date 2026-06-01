import Image from 'next/image'
import React from 'react'

const Client = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-8">
            <p className="text-sm text-gray-600">Who we work with</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#0f1724]">
              Values-driven
              <br />
              partnerships
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-xl">
              This approach enables us to build long-term, sustainable<br /> client partnerships
              grounded in trust and transparency<br /> - allowing us to contribute to digital
              projects that drive <br />positive, lasting impact.
            </p>
          </div>

          <div className="flex justify-end lg:justify-center">
            <div className="w-full max-w-sm">
              <Image src="/image1.png" alt="Clients" width={520} height={360} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
