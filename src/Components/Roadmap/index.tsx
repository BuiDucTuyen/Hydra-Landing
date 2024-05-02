import React from "react";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();

  return (
    <div className=" mb-[72px] bg-roadmap bg-top bg-no-repeat animate-fadeInDown manrope">
      <section className="container mx-auto ">
        <h1 className="text-[#270017] lg:text-[40px] text-[28px] clash font-semibold uppercase text-center mt-[20px] lg:mt-[72px]">
          {t("roadmap")}
        </h1>
        <React.Fragment>
          <div className="mt-[60px] hidden lg:px-8 lg:grid grid-cols-6 roadmap">
            <div className="relative border-r border-left border-solid border-[#EC008C]  h-[270px]">
              <div className="aura active">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] flex flex-col justify-center items-center w-full absolute">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  {t("Phase 2")}
                </p>
              </div>
              <div className="horizontal-line"></div>
            </div>

            {/*1*/}
            <div className="col-span-2 relative border-r bg-roadmap2 bg-no-repeat border-[#EC008C] h-[270px]">
              <div className="aura active">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] flex flex-col justify-center items-center w-full absolute">
                <img
                  src="../Img/Group 121850.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  {t("Phase 4")}
                </p>
              </div>
              <div className="platform-content   text-start absolute top-0 left-5">
                <h5 className="text-[#32021E] font-bold mb-2  text-lg mt-5">
                  {t("Q2-2022")}
                </h5>
                <ul className="list-disc px-6 text-sm mt-2 flex flex-col gap-2 text-rgba-50230">
                  <li> {t("Develop")}</li>
                  <li>{t("Build ecosytem")}</li>
                  <li>{t("Test")}</li>
                  <li>{t("textt")}</li>
                </ul>
              </div>
            </div>
            {/* Q2-2024 */}
            <div className="col-span-2 relative bg-roadmap1 bg-no-repeat">
              <div className="platform-content  text-start absolute top-0 left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  {t("Q2 2023")}
                </h5>
                <ul className="list-disc px-6 text-sm flex flex-col gap-2 mt-2 text-rgba-50230">
                  <li> {t("dev")}</li>
                  <li> {t("public")}</li>
                  <li> {t("Collect")}</li>
                  <li> {t("Omnichain")}</li>
                  <li> {t("Hackathon")}</li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="col-span-2 border-l border-[#FF4581] bg-roadmap2 bg-no-repeat relative h-[290px] ">
              <div className="aura active current">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] w-full flex flex-col justify-center items-center absolute">
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  {t("Phase 1")}
                </p>
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start  absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  {t("QQ4-2021")}
                </h5>
                <ul className="list-disc px-6 text-sm mt-2 flex flex-col gap-2 text-rgba-50230">
                  <li> {t("Research ")}</li>
                  <li> {t("detailedd")}</li>
                  <li>{t("Recruitt")}</li>
                  {/* <li>{t("Outline ")}</li> */}
                </ul>
              </div>
            </div>
            {/* 4 */}
            <div className="col-span-2 relative border-l bg-roadmap1 bg-no-repeat border-[#FF4581] h-[290px]">
              <div className="aura active">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] w-full flex flex-col justify-center items-center absolute">
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  {t("Phase 3")}
                </p>
                <img
                  src="./Img/Group 121847.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  {t("Q3 2023")}
                </h5>
                <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                  <li>{t("early")}</li>
                  <li>{t("and")}</li>
                  <li>{t("partners")}</li>
                </ul>
              </div>
            </div>
            {/* 5 */}
            <div className="relative col-span-2 border-l bg-roadmap1 bg-no-repeat border-[#79B8F3] h-[290px]">
              <div className="aura">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] w-full flex flex-col justify-center items-center absolute">
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  {t("Phase 5")}
                </p>
                <img
                  src="./Img/Group 121850.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  {t("Mainnet")}
                </h5>
                <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                  <li> {t("Mainet")}</li>
                  <li> {t("expansion")}</li>
                  <li>{t("platform")}</li>
                  {/* <li>{t("regional")}</li> */}
                </ul>
              </div>
            </div>
            {/* 6 */}
          </div>

          {/* mobile */}
          <div className="lg:hidden bg-roadmap bg-cover  bg-no-repeat  mt-[60px] px-6 relative">
            <div className="border-l-4 border-gradient-to-r from-transparent to-ffc5e7 via-fb89cc to-0094b0 px-2">
              <div className="text-left px-4 mb-10 relative">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="absolute left-[-32px] top-[10px] w-11 h-11"
                />
                <p className="text-[#006D82] ml-2 uppercase text-[16px] mb-1 font-semibold gap-2">
                  {t("Phase 1")}
                </p>
                <div className="bg-roadmap3 bg-cover ml-2 px-6 py-4">
                  <h5 className="text-[#32021E] font-bold  text-lg ">
                    {t("QQ4-2021")}
                  </h5>
                  <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                    <li> {t("Research ")}</li>
                    <li> {t("detailedd")}</li>
                    <li>{t("Recruitt")}</li>
                  </ul>
                </div>
              </div>
              <div className="text-left px-4 mb-10 relative">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="absolute left-[-32px] top-[10px] w-11 h-11"
                />
                <p className="text-[#006D82] ml-2 uppercase text-[16px] mb-1 font-semibold gap-2">
                  {t("Phase 2")}
                </p>
                <div className="bg-roadmap3 bg-cover ml-2 px-6 py-4">
                  <h5 className="text-[#32021E] font-bold  text-lg ">
                    {t("Q2-2022")}
                  </h5>
                  <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                    <li> {t("Develop")}</li>
                    <li>{t("Build ecosytem")}</li>
                    <li>{t("Test")}</li>
                    <li>{t("textt")}</li>
                  </ul>
                </div>
              </div>
              <div className="text-left px-4 mb-10 relative">
                <img
                  src="./Img/Group 121847.png"
                  alt=""
                  className="absolute left-[-32px] top-[10px] w-11 h-11"
                />
                <p className="text-[#006D82] ml-2 uppercase text-[16px] mb-1 font-semibold gap-2">
                  {t("Phase 3")}
                </p>
                <div className="bg-roadmap3 ml-2 px-6 py-4 bg-no-repeat sm:bg-repeat">
                  <h5 className="text-[#32021E] font-bold  text-lg ">
                    {t("Q3 2023")}
                  </h5>
                  <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                    <li>{t("early")}</li>
                    <li>{t("and")}</li>
                    <li>{t("partners")}</li>
                  </ul>
                </div>
              </div>
              <div className="text-left px-4 mb-10 relative">
                <img
                  src="./Img/Group 121850.png"
                  alt=""
                  className="absolute left-[-32px] top-[10px] w-11 h-11"
                />
                <p className="text-[#006D82] ml-2 uppercase text-[16px] mb-1 font-semibold gap-2">
                  {t("Phase 4")}
                </p>
                <div className="bg-roadmap4 ml-2 px-6 py-4 bg-no-repeat sm:bg-repeat">
                  <h5 className="text-[#32021E] font-bold  text-lg ">
                    {t("Q2 2023")}
                  </h5>
                  <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                    <li> {t("dev")}</li>
                    <li> {t("public")}</li>
                    <li> {t("Collect")}</li>
                    <li> {t("Omnichain")}</li>
                    <li> {t("Hackathon")}</li>
                  </ul>
                </div>
              </div>
              <div className="text-left px-4 mb-10 relative">
                <img
                  src="./Img/Group 121850.png"
                  alt=""
                  className="absolute left-[-32px] top-[10px] w-11 h-11"
                />
                <p className="text-[#006D82] ml-2 uppercase text-[16px] mb-1 font-semibold gap-2">
                  {t("Phase 5")}
                </p>
                <div className="bg-roadmap4 ml-2 px-6 py-4 ">
                  <h5 className="text-[#32021E] font-bold  text-lg ">
                    {t("Mainnet")}
                  </h5>
                  <ul className="list-disc px-6 flex flex-col gap-2 text-sm mt-2 text-rgba-50230">
                    <li> {t("Mainet")}</li>
                    <li> {t("expansion")}</li>
                    <li>{t("platform")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </section>
    </div>
  );
};

export default RoadMap;
