import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-chain bg-no-repeat bg-contain animate-fadeInDown xl:mt-[-100px] ${
        isHovered ? "paused" : ""
      }`}
    >
      <div className="flex container mx-auto  animate-fadeInDown ">
        <div className="gap-5 p-2 overflow-x-hidden">
          <h1 className="text-[#270017] 2xl:text-[40px] text-[24px] lg:mb-10 mt-[30px] lg:mt-[64px] mb-6 clash font-semibold px-5 text-center">
            {t("The")}
            <span className="text-[#EC008C]"> {t("innovative")}</span>
            <br />
            {t("build")}
          </h1>
          <div className="flex gap-5 lg:gap-10 p-4  overflow-x-hidden select-none">
            <div
              className="marquee-container flex flex-row gap-20"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-5 lg:gap-32 md:animate-marqueeScroll">
                {renderLogo(
                  "Armory",
                  "../Img/egabid.png",
                  220,
                  64,
                  "https://egabid.com/"
                )}
                {renderLogo("Armory", "../Img/hyracare.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/pindias.png",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo("Armory", "../Img/Group.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/Group (1).png",
                  220,
                  70,
                  "https://salala.io/"
                )}
                {renderLogo(
                  "Armory",
                  "../Img/egabid.png",
                  220,
                  60,
                  "https://egabid.com/"
                )}
                {renderLogo("Armory", "../Img/hyracare.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/pindias.png",
                  220,
                  64,
                  "https://pindias.com/"
                )}
              </ul>
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-5 lg:gap-32 md:animate-marqueeScroll">
                {renderLogo(
                  "Armory",
                  "../Img/egabid.png",
                  220,
                  64,
                  "https://egabid.com/"
                )}
                {renderLogo("Armory", "../Img/hyracare.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/pindias.png",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo("Armory", "../Img/Group.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/Group (1).png",
                  220,
                  70,
                  "https://salala.io/"
                )}
                {renderLogo(
                  "Armory",
                  "../Img/egabid.png",
                  220,
                  60,
                  "https://egabid.com/"
                )}
                {renderLogo("Armory", "../Img/hyracare.png", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../Img/pindias.png",
                  220,
                  64,
                  "https://pindias.com/"
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderLogo = (
  alt: string,
  src: string,
  width: number,
  height: number,
  link: string
) => (
  <li className=" p-2 ">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        src={src}
        className="logo-image py-2 px-4 rounded-[8px]  ease-in-out "
      />
    </a>
  </li>
);

export default Logo;
