import React from "react";

const About = () => {
  return (
    <section className="bg-[#400093] mt-20 py-16 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Top Content */}
      <div className="flex flex-col items-center text-center">
        <p className="text-white text-base md:text-lg">
          Who we are
        </p>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Employee-owned <br />
          software testing company
        </h1>

        <p className="mt-6 text-white text-sm sm:text-base font-light leading-relaxed">
          Our ISTQB accredited software testing team
          <br className="hidden sm:block" />
          have delivered over 5,000 projects in 15 years
        </p>

        {/* Navigation Pills */}
        <div className="w-full max-w-3xl mt-10 overflow-x-auto scrollbar-hide">
          <nav className="flex gap-4 bg-[#6b27c5] p-3 rounded-full min-w-max justify-start lg:justify-center">
            {[
              "Services",
              "Delivery models",
              "Industries",
              "Company",
              "Case studies",
              "Blog",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full px-4 py-2 whitespace-nowrap hover:bg-pink-300 hover:text-black transition-all duration-300 text-sm text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/photo.png"
            alt="Team"
            className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl"
          />

          <img
            src="/Container.png"
            alt="Decoration"
            className="hidden lg:block lg:absolute bottom-[-100px] right-5 w-32 sm:w-40 lg:w-200"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl text-white font-semibold leading-tight">
            We do business <br />
            differently
          </h1>

          <p className="text-white mt-6 font-light text-sm sm:text-base leading-relaxed">
            We're a 50+ strong team of software testing, QA
            strategy, and test delivery experts based in the UK.
          </p>

          <p className="text-white mt-8 font-light text-sm sm:text-base leading-relaxed">
            As an employee-owned B Corp, we approach business
            with purpose and accountability. We believe in a
            business model that puts people and the planet first,
            ensuring that every decision we make benefits our
            team, our community, and our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;