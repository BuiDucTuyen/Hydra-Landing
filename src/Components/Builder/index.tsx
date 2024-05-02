import React from "react";
import { useTranslation } from "react-i18next";

const Build: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-build bg-no-repeat animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto p-2 mt-4 lg:mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-[820px] text-center lg:px-0 px-6  md:text-left md:mr-6">
          <h1 className="text-[#270017] text-[24px] text-left md:text-[40px] clash mb-6 font-semibold">
            {t("Fastt")}
          </h1>
          <h2 className="text-ec-purple-700 text-left text-[16px] md:text-[18px] manrope">
            {t("Chain")}
          </h2>
        </div>
        <img
          className="w-full hidden md:block md:w-auto"
          src="./Img/snapedit_1711767796429 2.png"
          alt=""
        />
      </nav>
      <nav className="max-w-[1200px] p-4max-w-[1200px] mx-auto p-2 mt-4 lg:mt-20 flex flex-col md:flex-row justify-between items-center   mb-[20px]  lg:mb-[80px]">
        <img
          className="hidden md:block w-full"
          src="./Img/Demo (1).png"
          alt=""
        />
        <img className="md:hidden w-full" src="../svg/Demo (1).png" alt="" />
      </nav>
    </section>
  );
};

export default Build;
