import React from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
const Footer: React.FC = () => {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "vi" : "en";

    i18n.changeLanguage(newLanguage);

    localStorage.setItem("language", newLanguage);
  };
  return (
    <footer className="bg-footer animate-fadeInDown py-12 manrope">
      <section className="max-w-[1200px] p-4 mx-auto flex justify-between text-white ">
        <nav className="">
          <a href="/">
            <img className="mb-5" src="../Img/logo.png" alt="" />
          </a>

          <div className="flex space-x-5 mb-5 mt-10">
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/3670147 1.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/hyperaschain"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ fontSize: "24px" }}
                src="./Img/5969020 1.png"
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/hyperaschain"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ fontSize: "24px" }}
                src="./Img/5968764 1.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/Discord.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/Group 4 (1).png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/3670147 1.png"
                alt=""
              />
            </a>
          </div>
          <p className="text-ec-purple-700 text-[14px] mt-10 font-normal">
            © 2024 Hyperaschain.com. All rights reserved.
          </p>
        </nav>
        <div className="flex gap-10">
          <nav className="flex gap-16">
            <div className="text-left">
              <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
                {t("developers")}
              </h2>
              <ul className="flex flex-col  text-ec-purple-700 text-[14px] gap-4 mt-3">
                <a className="" href="/">
                  <li>Get Started</li>
                </a>
                <a className="" href="/">
                  <li>Hyperas Program</li>
                </a>
                <a className="" href="/">
                  <li>Video Tutorials</li>
                </a>
                <a className="" href="/">
                  <li>Documentation</li>
                </a>
                <a className="" href="/">
                  <li>Blog</li>
                </a>
                <a className="" href="/">
                  <li>Support</li>
                </a>
              </ul>
            </div>
            <div className="text-left ml-4">
              <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
                Applications
              </h2>
              <ul className="flex flex-col  text-ec-purple-700 text-[14px] gap-4 mt-3">
                <a href="https://salala.io/" target="_blank" rel="noreferrer">
                  <li>Salala</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://egabid.com/"
                  rel="noreferrer"
                >
                  <li>Egabid</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://pindias.com/"
                  rel="noreferrer"
                >
                  <li>Pindias</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://www.hyperaschain.com/stake"
                  rel="noreferrer"
                >
                  <li>Staking</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://testnet.hyrascan.com/"
                  rel="noreferrer"
                >
                  <li>Scan</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://www.hyperaschain.com/swap"
                  rel="noreferrer"
                >
                  <li>Swap</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://www.hyperaschain.com/bridge"
                  rel="noreferrer"
                >
                  <li>Bridge</li>
                </a>
              </ul>
            </div>
            <div className="text-left ml-4">
              <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
                Community
              </h2>
              <ul className="flex flex-col  text-ec-purple-700 text-[14px] gap-4 mt-3">
                <a
                  className=""
                  target="_blank"
                  href="https://t.me/hyperaschaingroup"
                  rel="noreferrer"
                >
                  <li>Hyperaschain group</li>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://t.me/hyperaschaingroup"
                  rel="noreferrer"
                >
                  <li>Hyperaschain Vietnam</li>
                </a>
                <a className="" href="/">
                  <li>Salala community</li>
                </a>
                <a className="" href="/">
                  <li>Egabid community</li>
                </a>
              </ul>
            </div>
            <div className="">
              <div className="flex gap-1">
                <img src="./svg/globe.svg" alt="" />
                <button
                  className="language-switcher text-black"
                  onClick={toggleLanguage}
                >
                  {i18n.language === "en" ? "Vi" : "En"}
                </button>
                <img src="./svg/direction-down 01.svg" alt="" />
              </div>
            </div>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
