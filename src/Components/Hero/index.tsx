/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="animate-fadeInDown py-5bg-roadmap4 ml-2 py-4 lg:py-20">
      <nav className="  flex xl:flex-row flex-col  gap-10 justify-between mx-auto ">
        <div className=" xl:max-w-[650px] 2xl:max-w-[1000px] 2xl:ml-[350px] lg:ml-[50px]">
          <h1 className="text-[32px] 2xl:text-[72px] xl:text-left text-center mb-5 md:text-[55px] lg:text-[50px] lg:text-center clash text-[#270017] font-semibold leading-[50px] lg:leading-[80px]">
            BLOCKCHAIN ft. AI <br />
            WITHOUT<span className="text-[#EC008C]"> LIMITS</span>{" "}
          </h1>

          <h2 className="text-[#523345] mb-8 lg:mb-16 xl:text-left xl:px-0 2xl:max-w-[600px] text-[16px] md:text-[24px] px-6 text-center manrope font-normal lg:max-full">
            {t("Hyperas")}
          </h2>
          <div className="lg:max-w-full flex gap-6 justify-center  xl:justify-start manrope">
            <div className="bg-[#EC008C] custom-link flex justify-center items-center w-32 font-medium h-12 px-5 py-2 text-center rounded-[4px] border border-solid border-[#EC008C] text-white text-[14px]">
              <a
                href="https://linktr.ee/hyperaschain"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {t("Get")}
              </a>
            </div>

            <div className="w-32 custom-linkk font-medium h-12 px-5 py-2 gap-2 flex justify-center items-center rounded-[4px] border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.hyperaschain.com/"
                className=""
              >
                {t("Read")}
              </a>
            </div>
          </div>
        </div>
        <div className="bg-hero1 xl:ml-[-350px] font bg-right-bottom relative bg-no-repeat ">
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
