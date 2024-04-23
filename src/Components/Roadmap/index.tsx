import React from "react";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-roadmap bg-cover bg-no-repeat mb-[72px] animate-fadeInDown manrope">
      <section className="container mx-auto  ">
        <h1 className="text-[#270017] text-[40px] clash font-semibold uppercase text-center mt-[72px]">
          Roadmap
        </h1>
        <React.Fragment>
          <div className="mt-[60px] hidden  lg:grid grid-cols-6 roadmap">
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
                  Phase 2
                </p>
              </div>
              <div className="horizontal-line"></div>
            </div>

            {/*1*/}
            <div className="col-span-2 relative border-r bg-roadmap1 bg-no-repeat border-[#EC008C] h-[270px]">
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
                  Phase 4
                </p>
              </div>
              <div className="platform-content   text-start absolute top-0 left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  Core Development Q2-2022
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 text-rgba-50230">
                  <li>Develop and deploy Hyperaschain</li>
                  <li>Build ecosytem</li>
                  <li>
                    Test the ecosystem for security, scalability, and
                    functionality
                  </li>
                </ul>
              </div>
            </div>
            {/* Q2-2024 */}
            <div className="col-span-2 relative bg-roadmap1 bg-no-repeat">
              <div className="platform-content  text-start absolute top-0 left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  Test net Q2 2023
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 text-rgba-50230">
                  <li>Dev test</li>
                  <li>Public test</li>
                  <li>
                    Collect feedbacks about the platform from early partners and
                    users
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="col-span-2 border-l border-[#FF4581] bg-roadmap1 bg-no-repeat relative h-[230px] ">
              <div className="aura active current">
                <div className="core"></div>
              </div>
              <div className="platform aspect-square max-w-[95px] w-full flex flex-col justify-center items-center absolute">
                <p className="text-[#006D82] uppercase text-[16px] font-semibold gap-2">
                  Phase 1
                </p>
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start  absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  Research & Development Q4-2021
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 text-rgba-50230">
                  <li>Research blockchain applications</li>
                  <li>Develop a detailed roadmap</li>
                  <li>Recruit key team members</li>
                  <li>Outline whitepaper</li>
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
                  Phase 3
                </p>
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  Community Building Q2 2023
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 text-rgba-50230">
                  <li>Build early adopters community</li>
                  <li>Start marketing and awareness campaigns</li>
                  <li>Recruit developers and partners</li>
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
                  Phase 5
                </p>
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="platform-content  text-start absolute top-[50px] left-5">
                <h5 className="text-[#32021E] font-bold  text-lg mt-5">
                  Mainnet - Expansion & Adoption
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 text-rgba-50230">
                  <li>Release Hyperas chain Mainet</li>
                  <li>Ecosystem expansion</li>
                  <li>
                    Develop additional platform use-cases to attract more users
                    and partners
                  </li>
                  <li>
                    Build out regional infrastructure for ecosystem’s widespread
                    adoption
                  </li>
                </ul>
              </div>
            </div>
            {/* 6 */}
          </div>

          {/* mobile */}
          <div className="lg:hidden mt-[60px] relative">
            {/* Q1-2022 */}
            <div className="vertical-line"></div>
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px] bottom-line relative roadmap-vertical">
              <div className="aura active current bottom-[-16px] flex justify-center items-center left-1/2 -translate-x-1/2">
                <div className="core"></div>
              </div>
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-8 h-8"
                />
              </div>

              <div className="platform-content lg:text-lg text-base  text-start">
                <h5 className="milestone lg:text-lg text-base">
                  {t("what-chain.item6.title3")} Q4-2021
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text3-1")}</li>
                  <li>{t("what-chain.item6.text3-2")}</li>
                  <li>{t("what-chain.item6.text3-3")}</li>
                  <li>{t("what-chain.item6.text3-4")}</li>
                </ul>
              </div>
            </div>
            {/* Q2-2022 */}
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px] bottom-line relative roadmap-vertical">
              <div className="aura active bottom-[-16px] left-1/2 -translate-x-1/2">
                <div className="core"></div>
              </div>
              <div className="platform-content lg:text-lg text-base text-end">
                <h5 className="milestone-testnet lg:text-lg text-base">
                  {t("what-chain.item6.title1")} Q2-2022
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text1-1")}</li>
                  <li>{t("what-chain.item6.text1-2")}</li>
                  <li>{t("what-chain.item6.text1-3")}</li>
                </ul>
              </div>
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            {/* Q1 */}
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px] bottom-line relative roadmap-vertical">
              <div className="aura active bottom-[-16px] left-1/2 -translate-x-1/2">
                <div className="core"></div>
              </div>
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="platform-content lg:text-lg text-base  text-start">
                <h5 className="milestone lg:text-lg text-base">
                  {t("what-chain.item6.title4")} Q1-2024
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text4-1")}</li>
                  <li>{t("what-chain.item6.text4-2")}</li>
                  <li>{t("what-chain.item6.text4-3")}</li>
                  <li>{t("what-chain.item6.text4-4")}</li>
                  <li>{t("what-chain.item6.text4-5")}</li>
                  <li>{t("what-chain.item6.text4-6")}</li>
                  <li>{t("what-chain.item6.text4-7")}</li>
                  <li>{t("what-chain.item6.text4-8")}</li>
                </ul>
              </div>
            </div>
            {/* Q2 */}
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px] bottom-line-blue relative">
              <div className="aura  bottom-[-16px] left-1/2 -translate-x-1/2">
                <div className="core"></div>
              </div>
              <div className="platform-content lg:text-lg text-base  text-end">
                <h5 className="milestone-testnet lg:text-lg text-base ">
                  Test net Q2 2023
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text2-1")}</li>
                  <li>{t("what-chain.item6.text2-2")}</li>
                  <li>{t("what-chain.item6.text2-3")}</li>
                </ul>
              </div>
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            {/* Q3 */}
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px]">
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="platform-content lg:text-lg text-base  text-start">
                <h5 className="milestone lg:text-lg text-base">
                  {t("what-chain.item6.title5")} Q3 2024
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text5-1")}</li>
                  <li>{t("what-chain.item6.text5-2")}</li>
                  <li>{t("what-chain.item6.text5-3")}</li>
                  <li>{t("what-chain.item6.text5-4")}</li>
                  <li>{t("what-chain.item6.text5-5")}</li>
                  <li>{t("what-chain.item6.text5-6")}</li>
                  <li>{t("what-chain.item6.text5-7")}</li>
                </ul>
              </div>
            </div>
            {/* Q4 */}
            <div className="grid grid-cols-2 gap-x-[32px] py-[32px] top-line-blue relative">
              <div className="aura left-1/2 -translate-x-1/2">
                <div className="core"></div>
              </div>
              <div className="platform-content lg:text-lg text-base text-white text-end">
                <h5 className="milestone-testnet lg:text-lg text-base ">
                  {t("what-chain.item6.title2")} Q4 2024
                </h5>
                <ul className="list-disc pl-6 text-sm mt-2 ">
                  <li>{t("what-chain.item6.text2-1")}</li>
                  <li>{t("what-chain.item6.text2-2")}</li>
                  <li>{t("what-chain.item6.text2-3")}</li>
                </ul>
              </div>
              <div className="grid place-items-center">
                <img
                  src="./Img/cham.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      </section>
    </div>
  );
};

export default RoadMap;