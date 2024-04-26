/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="animate-fadeInDown py-10 lg:y-20">
      <nav className="  flex xl:flex-row flex-col  gap-10 justify-between mx-auto ">
        <div className=" xl:max-w-[650px] 2xl:max-w-[1000px] 2xl:ml-[350px] lg:ml-[50px]">
          <h1 className="text-[40px] 2xl:text-[80px] xl:text-left text-center mb-5 md:text-[55px] lg:text-[50px] lg:text-center clash text-[#270017] font-semibold  ">
            BLOCKCHAIN ft. AI WITHOUT
            <span className="text-[#EC008C]"> LIMITS</span>{" "}
          </h1>
          <h2 className="text-[#523345] mb-16 xl:text-left xl:px-0 2xl:max-w-[600px]  text-[18px] md:text-[24px] px-6  text-center  manrope font-normal lg:max-full">
            {t("Hyperas")}
          </h2>
          <div className="lg:max-w-full flex gap-6 justify-center  xl:justify-start manrope">
            <button className="bg-[#EC008C] w-32 font-medium h-12 px-5 py-2 gap-2 rounded-[4px] border border-solid border-[#EC008C] text-white text-[14px]">
              {t("Get")}
            </button>
            <button className="w-32 font-medium h-12 px-5 py-2 gap-2 rounded-[4px] border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
              {t("Read")}
            </button>
          </div>
        </div>
        <div className="bg-hero1 xl:ml-[-350px] bg-right-bottom relative bg-no-repeat ">
          <img
            className="hidden md:block"
            src="../svg/baxi_icon1 1.png"
            alt=""
          />
          <div className="block flex justify-center items-center md:hidden">
            <img src="../svg/baxi_icon1 1 (1).png" alt="" />
          </div>

          <img
            className="absolute  xl:bottom-0 lg:w-14 lg:left-32  w-10 left-7 bottom-5 xl:left-0 md:bottom-10 md:left-20 animate-bounce"
            src="../svg/Mask group.svg"
            alt=""
          />
          <img
            className="absolute lg:w-14  w-12 right-2 bottom-5 xl:right-5 "
            src="../svg/baxi_icon1 1.svg"
            alt=""
          />
          <img
            className="absolute lg:w-28 w-24 top-10 left-20 xl:top-[80px] xl:left-[240px] animate-bouncee "
            src="../svg/1 61.svg"
            alt=""
          />
          <img
            className="absolute lg:w-32  w-24 top-16 right-10 xl:top-[140px] xl:right-[70px] animate-bounce"
            src="../svg/1 61.svg"
            alt=""
          />
        </div>
      </nav>
    </section>
  );
};

export default Hero;
