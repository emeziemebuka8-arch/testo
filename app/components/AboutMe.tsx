import React from "react";

const services = [
  {
    title: "QA and software testing",
    desc:
      "Ensure software quality and functionality through thorough, end-to-end testing that identifies issues early and supports successful outcomes.",
    icons: "/con1.png",
  },
  {
    title: "Digital accessibility",
    desc:
      "Build inclusive user experiences, provide equal access and comply with accessibility regulations by prioritising digital accessibility.",
    icons: "/Margin.png",
  },
  {
    title: "Performance optimisation",
    desc:
      "Leverage performance data to quickly identify and fix bottlenecks, ensuring fast load times, great user experiences, and scalable applications and systems.",
    icons: "/Margin1.png",
  },
  {
    title: "Cyber security",
    desc:
      "Safeguard your data, people, and reputation with a proactive risk-management strategy to effectively combat modern cyber security threats.",
    icons: "/Margin.png",
  },
  {
    title: "Test automation",
    desc:
      "Release updates faster and reduce time, cost and resource by implementing an automated solution based on a flexible core framework.",
    icons: "/Margin.png",
  },
  {
    title: "Strategy and consultancy",
    desc:
      "Gain insight into your testing strategy, QA structure, test processes, and tools to eliminate bottlenecks and streamline processes.",
    icons: "/Margin.png",
  },
];

const AboutMe = () => {
  return (
    <section className="px-6 md:px-12 lg:px-40 py-16 flex flex-col justify-center items-center">

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-44 items-start max-w-7xl">

        {/* Left Section */}
        <div className="w-full lg:w-1/3">

          <p className="text-sm uppercase tracking-wide text-gray-500">
            What We do
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap font-semibold mt-4 leading-tight">
            Independent. <br />
            Objective. Reliable.
          </h1>

          <div className="mt-6 space-y-6">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our UK-based team deliver an extensive range of
              fully managed software testing and QA services.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We work across strategy, delivery and execution
              to help our clients deliver better software,
              services and digital products.
            </p>

            <button className="underline text-sm sm:text-base font-medium hover:opacity-70 transition">
              See all our services
            </button>
          </div>
        </div>

        {/* Right Services */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">

          {services.map((s, i) => (
            <div
              key={s.title + i}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                <img
                  src={s.icons}
                  alt={s.title}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold">
                  {s.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;