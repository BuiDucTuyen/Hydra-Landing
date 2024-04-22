import React from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <footer className="bg-footer animate-fadeInDown py-12">
      <section className="max-w-[1200px] p-4 mx-auto flex justify-between text-white ">
        <nav className="">
          <a href="/">
            <img className="mb-5" src="../Img/logo.png" alt="" />
          </a>

          <div className="flex space-x-5 mb-5">
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/3670147 1.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                style={{ fontSize: "24px" }}
                src="./Img/5969020 1.png"
                alt=""
              />
            </a>
            <a href="/">
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
          <p className="text-ec-purple-700 text-[14px] font-normal">
            © 2024 Hyperaschain.com. All rights reserved.
          </p>
        </nav>
        <nav className="flex gap-10">
          <div className="text-left">
            <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
              {t("developers")}
            </h2>
            <ul className="flex flex-col  text-ec-purple-700 text-[14px] gap-4 mt-3">
              <a className="hover:text-white" href="/">
                <li>Get Started</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Hyperas Program</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Video Tutorials</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Documentation</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Blog</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Support</li>
              </a>
            </ul>
          </div>
          <div className="text-left ml-4">
            <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
              Applications
            </h2>
            <ul className="flex flex-col ml-4 text-ec-purple-700 text-[14px] gap-4 mt-3">
              <a className="hover:text-white" href="/">
                <li>Salala</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Egabid</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Pindias</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Staking</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Scan</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Swap</li>
              </a>
            </ul>
          </div>
          <div className="text-left ml-4">
            <h2 className="text-[1rem] text-[#270017] uppercase font-semibold">
              Community
            </h2>
            <ul className="flex flex-col  text-ec-purple-700 text-[14px] gap-4 mt-3">
              <a className="hover:text-white" href="/">
                <li>Hyperaschain group</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Hyperaschain Vietnam</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Salala community</li>
              </a>
              <a className="hover:text-white" href="/">
                <li>Egabid community</li>
              </a>
            </ul>
          </div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
