import React from "react";
import { useTranslation } from "react-i18next";

const Backer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#D4F3FF] py-16 mt-[50px] animate-fadeInDown">
      <nav className=" mx-auto">
        <h1 className="text-[#270017] clash lg:text-[40px]  text-[28px] font-semibold mb-4 uppercase">
          {t("Backers")}
        </h1>
        <h2 className=" text-ec-purple-700 text-center lg:text-[18px] mb-12 font-normal">
          {t("market")}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <img
              src="./Img/Frame 3109.png"
              alt=""
              className="w-40 h-auto  md:w-52 xl:w-72"
            />
            <img
              src="./Img/Frame 3110.png"
              alt=""
              className="w-40 h-auto  md:w-52 xl:w-72"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <img
              src="./Img/Frame 3111.png"
              alt=""
              className="w-40 h-auto  md:w-52 xl:w-72"
            />
            <img
              src="./Img/Frame 3112.png"
              alt=""
              className="w-40 h-auto  md:w-52 xl:w-72"
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Backer;
