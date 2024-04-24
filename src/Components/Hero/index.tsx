import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="animate-fadeInDown py-20">
      <nav className=" flex justify-between mx-auto ">
        <div className="ml-[200px] max-w-[1000px]">
          <h1 className="text-[80px] text-left mb-8 clash text-[#270017] font-semibold  ">
            BLOCKCHAIN ft. AI WITHOUT
            <span className="text-[#EC008C]"> LIMITS</span>{" "}
          </h1>
          <h2 className="text-[#523345] mb-16 text-[18px] text-left manrope font-normal max-w-[542px]">
            {t("Hyperas")}
          </h2>
          <div className="max-w-[542px] flex gap-4 justify-start manrope">
            <button className="bg-[#EC008C] text-[18px] rounded px-6 py-4 text-white  w-40 h-14">
              {t("Get")}
            </button>
            <button className="bg-[#FFF] border border-solid border-gray-300 font-medium text-[20px] rounded px-6 py-4 text-[#684A5D]  w-40 h-14">
              {t("Read")}
            </button>
          </div>
        </div>
        <div className="bg-hero1 bg-cover pr-20">
          {/* <img className="w-[760px]" src="../Img/video-unscreen.gif" alt="" /> */}
          <iframe
            src="https://my.spline.design/youarefightingeveryday-c2e9cd6a150cf5fb10aa974c5b8785a9/"
            frameBorder="0"
            className="w-[708px] h-[620px]"
          ></iframe>
        </div>
      </nav>
    </section>
  );
};

export default Hero;
