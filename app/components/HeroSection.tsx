export default function HeroSection() {
  return (
    <section className="px-6 md:px-12 lg:px-50 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            People-powered <br />
            software testing
          </h1>

          <div className="flex flex-col gap-8 mt-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We're a software testing and QA company;
              <br className="hidden sm:block" />
              we help our clients create better software.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Team of Software Engineers, QA, UX Experts,
              Researchers,
              <br className="hidden sm:block" />
              Cyber Security Experts, Pen Testers.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[300px] flex justify-center">
          <img
            src="/frame.png"
            alt="Hero Image"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}