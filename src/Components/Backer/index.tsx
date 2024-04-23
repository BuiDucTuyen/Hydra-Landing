import React from "react";

const Backer: React.FC = () => {
  return (
    <section className="bg-[#D4F3FF] py-16 mt-[50px] animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto">
        <h1 className="text-[#270017] clash text-[48px] font-semibold mb-4 uppercase">
          Backers & Partners
        </h1>
        <h2 className=" text-ec-purple-700 text-center text-[18px] mb-12 font-normal">
          We are proud to be backed by crypto's manrope leading venture capital
          firms,
          <br />
          market makers, and angel investors
        </h2>
        <div className="flex justify-between  items-center gap-5">
          <img src="./Img/Frame 3109.png" alt="" />
          <img src="./Img/Frame 3110.png" alt="" />
          <img src="./Img/Frame 3111.png" alt="" />
          <img src="./Img/Frame 3112.png" alt="" />
        </div>
      </nav>
    </section>
  );
};

export default Backer;
