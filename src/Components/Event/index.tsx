import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";

const Event: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-br  from-teal-500 to-pink-600 animate-slide-down">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex justify-center gap-5 lg:text-[16px] text-[10px] uppercase text-white items-center">
            {/* <a
              href="/"
              className="flex gap-2 lg:text-[16px] text-[10px] uppercase text-white items-center"
            >
              {t("Event")}
              <AiOutlineArrowRight />
            </a> */}
            {t("Event")}
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
