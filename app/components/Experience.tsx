import React from 'react'

const Experience = () => {
  return (
    <section className="w-full bg-[#FFBB80] py-12 sm:py-16">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0ea5a4] rounded-r"></div> */}

        <div className="pl-6 sm:pl-8 md:pl-12">
          <blockquote className="max-w-3xl text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#0f1724]">
            “I've worked with many other external QA companies, but they only do as
            they've been asked. Testo go way beyond that – they are proactive with
            suggestions and ideas on how to improve processes. That's what makes
            this such a great partnership.”
          </blockquote>

          <p className="mt-4 text-xs sm:text-sm text-[#1f2937] opacity-80">- David Comer, Software Test Manager at</p>
        </div>
      </div>
    </section>
  )
}

export default Experience
