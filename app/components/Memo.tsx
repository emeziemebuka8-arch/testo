import Image from "next/image";
import React from "react";

const Memo = () => {
  return (
    <section className="bg-[#f5f7f4] py-16 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col justify-center items-center ">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-7xl">

        {/* Left */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-500">
            How we work
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-5 leading-tight">
            Flexible. Responsive. <br />
            Dependable.
          </h1>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed mt-2 lg:mt-16">
            Our delivery models are highly flexible and scalable
            to match variations in software testing requirements.
            We seamlessly integrate with you no matter when we
            join a project. We hit the ground running — adding
            value from day one.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-2">

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/image.png"
            alt="Memo"
            className="w-full max-w-md lg:max-w-lg h-auto  object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            We're an objective <br />
            and honest partner
          </h1>

          <p className="text-sm sm:text-base font-light text-gray-600 mt-6 leading-relaxed">
            As an independent software testing partner, we bring<br className="hidden sm:block" />
            an unbiased perspective to your projects, helping<br className="hidden sm:block" />
            you build robust and efficient QA processes.
          </p>

          <p className="text-sm sm:text-base font-light text-gray-600 mt-8 leading-relaxed">
            Whether you need strategic guidance or hands-on<br className="hidden sm:block" />
            support, we'll get to the heart of what you need<br className="hidden sm:block" />
            ensuring our solutions are aligned with your<br className="hidden sm:block" />
            timelines, budgets and quality goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memo;