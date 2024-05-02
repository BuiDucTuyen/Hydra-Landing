import React from "react";
import { useTranslation } from "react-i18next";

const Frame: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-6 animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto bg-frame bg-center lg:bg-cover px-4 lg:px-2 rounded-xl py-8 bg-no-repeat">
        <h1 className="text-[#270017] clash  font-medium text-[24px] mb-5">
          {t("Subscribe")}
        </h1>
        <div className="flex justify-center items-center gap-4">
          <div className="flex h-[56px] max-w-[536px] w-full items-center gap-10 rounded-lg border border-solid border-gray-200">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-[32px] rounded-md py-[14px] outline-none"
            />
          </div>
          <button className="bg-[#EC008C] text-white flex justify-center items-center text-[16px] font-semibold rounded-lg w-28 h-14">
            <p className="hidden sm:block">{t("send")}</p>

            <img
              className="block sm:hidden"
              src="./svg/bi_send-fill.svg"
              alt=""
            />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Frame;
