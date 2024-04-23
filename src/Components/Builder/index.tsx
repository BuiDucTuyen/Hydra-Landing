import React from "react";
import { useTranslation } from "react-i18next";

const Build: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-build bg-no-repeat animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto mt-20 flex justify-between items-center">
        <div className="max-w-[820px] text-left">
          <h1 className="text-[#270017] text-[36px] clash mb-6 font-semibold">
            {t("Fast")}
          </h1>
          <h2
            className="text-ec-purple-700 text-[18px] manrope
          "
          >
            {t("Chain")}
          </h2>
        </div>
        <img src="./Img/snapedit_1711767796429 2.png" alt="" />
      </nav>
      <nav className="max-w-[1200px] mx-auto mt-[48px] mb-[80px]">
        <img src="./Img/Demo (1).png" alt="" />
      </nav>
    </section>
  );
};

export default Build;
