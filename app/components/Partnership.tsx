import React from 'react'

const Partnership = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="relative h-64 lg:h-[420px]">
            <img
              src="/Container3.png"
              alt="Partnership"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="lg:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Every great
              partnership starts
              with a conversation</h2>

            <p className="mt-4 text-sm text-gray-600 max-w-xl">
              Reach out to explore how we can collaborate and achieve the best outcomes together.
            </p>

            <div className="mt-6">
              <button className="bg-[#3b0070] text-white rounded-full py-2 px-5 text-sm font-medium">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership
