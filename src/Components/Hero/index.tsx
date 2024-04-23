import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="animate-fadeInDown py-20">
      <nav className="container mx-auto flex justify-center">
        <div>
          <h1 className="text-[72px] mb-8 text-left clash text-[#270017] font-bold  max-w-[1000px]">
            BLOCKCHAIN ft. AI WITHOUT
            <span className="text-[#EC008C]"> LIMITS</span>{" "}
          </h1>
          <h2 className="text-[#523345] mb-16 text-[18px] text-left manrope font-normal max-w-[542px]">
            Hyperas chain aims to build an infinitely scalable distributed
            high-performance computing power network based on blockchain
            technology.
          </h2>
          <div className="max-w-[542px] flex gap-4 justify-start manrope">
            <button className="bg-[#EC008C] text-[20px] rounded px-6 py-4 text-white  w-40 h-14">
              Get Started
            </button>
            <button className="bg-[#FFF] border border-solid border-gray-300 font-medium text-[20px] rounded px-6 py-4 text-[#684A5D]  w-40 h-14">
              Read Docs
            </button>
          </div>
        </div>
        <div className="bg-hero1 flex justify-center items-center">
          <img className="w-[760px]" src="../Img/video-unscreen.gif" alt="" />
        </div>
      </nav>
    </section>
  );
};

export default Hero;
