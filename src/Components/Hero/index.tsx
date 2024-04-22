import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="animate-fadeInDown">
      <nav className="container mx-auto flex">
        <div>
          <h1 className="text-[72px] mb-8 text-left text-[#270017] font-medium  max-w-[1000px]">
            BLOCKCHAIN ft. AI WITHOUT
            <span className="text-[#EC008C]">LIMITS</span>{" "}
          </h1>
          <h2 className="text-[#523345] mb-16 text-[18px] text-left font-normal max-w-[542px]">
            Hyperas chain aims to build an infinitely scalable distributed
            high-performance computing power network based on blockchain
            technology.
          </h2>
          <div className="max-w-[542px] flex gap-4 justify-start">
            <button className="bg-[#EC008C] text-[20px] rounded px-6 py-4 text-white  w-40 h-14">
              Get Started
            </button>
            <button className="bg-[#FFF] border border-solid border-gray-300   font-medium text-[20px] rounded px-6 py-4 text-[#684A5D]  w-40 h-14">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-hero"></div>
      </nav>
    </section>
  );
};

export default Hero;
