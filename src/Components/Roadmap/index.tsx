import React from "react";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto mb-[72px]">
      <h1 className="text-[#270017] text-[40px] font-semibold uppercase text-center mt-[72px]">
        Roadmap
      </h1>
      <React.Fragment>
        <div className="mt-[60px] hidden lg:grid grid-cols-6 roadmap">
          <div className="relative border-r border-[#FF4581] h-[270px] ">
            <div className="aura active">
              <div className="core"></div>
            </div>
            <div className="platform aspect-square max-w-[95px] w-full absolute">
              <img
                src="./Img/cham.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="horizontal-line"></div>
          </div>

          {/*1*/}
          <div className="col-span-2 relative border-r border-[#FF4581] h-[270px]">
            <div className="aura active">
              <div className="core"></div>
            </div>
            <div className="platform aspect-square max-w-[95px] w-full absolute">
              <img
                src="./Img/cham.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="platform-content text-black text-start absolute top-0 left-5">
              <h5 className="milestone text-lg mt-5">
                Core Development Q2-2022
              </h5>
              <ul className="list-disc pl-6 text-sm mt-2">
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
          <div className="col-span-2 relative">
            <div className="platform-content  text-start absolute top-0 left-5">
              <h5 className="milestone_testnet text-lg mt-5">
                Test net Q2 2023
              </h5>
              <ul className="list-disc pl-6 text-sm mt-2">
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
          <div className="col-span-2 border-l border-[#FF4581] relative h-[230px] roadmap-section">
            <div className="aura active current">
              <div className="core"></div>
            </div>
            <div className="platform aspect-square max-w-[95px] w-full absolute">
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain w-full h-full"
            /> */}
            </div>
            <div className="platform-content  text-start absolute top-[50px] left-5">
              <h5 className="milestone text-lg ">
                Research & Development Q4-2021
              </h5>
              <ul className="list-disc pl-6 text-sm mt-2">
                <li>Research blockchain applications</li>
                <li>Develop a detailed roadmap</li>
                <li>Recruit key team members</li>
                <li>Outline whitepaper</li>
              </ul>
            </div>
          </div>
          {/* 4 */}
          <div className="col-span-2 relative border-l border-[#FF4581] h-[290px]">
            <div className="aura active">
              <div className="core"></div>
            </div>
            <div className="platform aspect-square max-w-[95px] w-full absolute">
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain w-full h-full"
            /> */}
            </div>
            <div className="platform-content  text-start absolute top-[50px] left-5">
              <h5 className="milestone text-lg">Community Building Q2 2023</h5>
              <ul className="list-disc pl-6 text-sm mt-2">
                <li>Build early adopters community</li>
                <li>Start marketing and awareness campaigns</li>
                <li>Recruit developers and partners</li>
              </ul>
            </div>
          </div>
          {/* 5 */}
          <div className="relative border-l border-[#79B8F3] h-[290px]">
            <div className="aura">
              <div className="core"></div>
            </div>
            <div className="platform aspect-square max-w-[95px] w-full absolute">
              {/* <img
              src={image.inactivePlat}
              alt=""
              className="object-contain w-full h-full"
            /> */}
            </div>
            <div className="platform-content  text-start absolute top-[50px] left-5">
              <h5 className="milestone text-lg">
                Mainnet - Expansion & Adoption
              </h5>
              <ul className="list-disc pl-6 text-sm mt-2">
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
            <div className="aura active current bottom-[-16px] left-1/2 -translate-x-1/2">
              <div className="core"></div>
            </div>
            <div className="grid place-items-center">
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
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
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
            </div>
          </div>
          {/* Q1 */}
          <div className="grid grid-cols-2 gap-x-[32px] py-[32px] bottom-line relative roadmap-vertical">
            <div className="aura active bottom-[-16px] left-1/2 -translate-x-1/2">
              <div className="core"></div>
            </div>
            <div className="grid place-items-center">
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
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
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
            </div>
          </div>
          {/* Q3 */}
          <div className="grid grid-cols-2 gap-x-[32px] py-[32px]">
            <div className="grid place-items-center">
              {/* <img
              src={image.inactivePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
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
              {/* <img
              src={image.activePlat}
              alt=""
              className="object-contain aspect-square max-w-[95px] w-full h-full"
            /> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    </section>
  );
};

export default RoadMap;
