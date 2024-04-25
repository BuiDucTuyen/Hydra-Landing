import React from "react";
import { useTranslation } from "react-i18next";

const Tokennomic: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className=" mt-[70px] lg:mt-[100px] animate-fadeInDown">
      <div className="max-w-[1200px] mx-auto mb-8 px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row  justify-between items-center">
          <div className="mb-5 sm:mb-0 flex flex-col gap-2 items-center">
            <img className="w-full" src="./Img/Group 4.png" alt="" />
            <h1 className="text-[#270017]  clash text-2xl sm:text-[40px] font-bold mb-4 uppercase">
              {t("Tokenomic")}
            </h1>
          </div>
          <div className="max-w-[450px] text-ec-purple-700 text-left text-[16px] font-normal">
            {t("Token")}
          </div>
        </div>
      </div>
      <div className="bg-token bg-contain p-6 ">
        <img
          className="mx-auto w-full max-w-[1132px] h-auto"
          src="./Img/Object.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Tokennomic;
