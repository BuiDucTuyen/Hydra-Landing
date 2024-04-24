import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
const Footer: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage("en"); // Ngôn ngữ mặc định
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };
  return (
    <footer className="bg-footer animate-fadeInDown py-12 manrope">
      <section className="max-w-[1200px] p-4 mx-auto flex justify-between text-white ">
        <nav className="">
          <img className="mb-5" src="../svg/Group 3.svg" alt="" />
          <div className="flex space-x-5 mb-5 mt-10">
            <a
              href="https://www.youtube.com/@Hyperaschain"
              target="_blank"
              rel="noreferrer"
            >
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
            {/* <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/Discord.png"
                alt=""
              />
            </a> */}
            {/* <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/Group 4 (1).png"
                alt=""
              />
            </a> */}
            <a
              href="https://t.me/hyperaschaingroup"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ fontSize: "24px" }}
                src="./Img/2111646 1.png"
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
                <a className="" href="https://www.hyperaschain.com/news">
                  <li>Blog</li>
                </a>
                <a className="" href="/">
                  <li>Support</li>
                </a>
              </ul>
            </div>
            <div className="text-left ml-4">
              <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
                {t("applications")}
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
                {t("Community")}
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
              <div className="flex gap-1 relative">
                <img src="./svg/globe.svg" alt="" />
                <button
                  className="language-switcher text-black"
                  onClick={toggleDropdown}
                >
                  {language === "en"
                    ? "En"
                    : language === "vi"
                    ? "Vi"
                    : "日本語"}
                </button>
                <img src="./svg/direction-down 01.svg" alt="" />
                {dropdownOpen && (
                  <div className="absolute mt-7 w-24  bg-white border rounded-lg shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      onClick={() => selectLanguage("en")}
                    >
                      English
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      onClick={() => selectLanguage("vi")}
                    >
                      Việt Nam
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
