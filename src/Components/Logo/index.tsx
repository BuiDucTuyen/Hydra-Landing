import React from "react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-chain bg-no-repeat bg-contain animate-fadeInDown xl:mt-[-100px]">
      <div className="flex container mx-auto lg:mb-10 animate-fadeInDown ">
        <div className="gap-5 p-2 overflow-x-hidden">
          <h1 className="text-[#270017] 2xl:text-[40px] text-[24px]  xl:mb-16 mt-[64px] mb-5 clash font-semibold px-5 text-center">
            {t("The")}
            <span className="text-[#EC008C]"> {t("innovative")}</span>
            <br />
            {t("build")}
          </h1>
          <div className="flex gap-10 p-4 mb-4 lg:mb-16 overflow-x-hidden select-none">
            <div className="marquee-container flex flex-row gap-20">
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-32 md:animate-marqueeScroll">
                {renderLogo(
                  "Armory",
                  "../svg/egabid.svg",
                  220,
                  64,
                  "https://egabid.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame 3222.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo("Armory", "../svg/Group (1).svg", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../svg/Frame.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame 3222.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Group.svg",
                  220,
                  60,
                  "https://salala.io/"
                )}
                {renderLogo("Armory", "../svg/Group (1).svg", 220, 64, "/")}
                {renderLogo(
                  "Armory",
                  "../svg/Group.svg",
                  220,
                  64,
                  "https://salala.io/"
                )}
              </ul>
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-32 md:animate-marqueeScroll">
                {renderLogo(
                  "Armory",
                  "../svg/egabid.svg",
                  220,
                  64,
                  "https://egabid.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame 3222.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Group (1).svg",
                  220,
                  64,
                  "https://docs.hyperaschain.com/technology/architecture"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame 3222.svg",
                  220,
                  64,
                  "https://pindias.com/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Group.svg",
                  220,
                  64,
                  "https://salala.io/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Group (1).svg",
                  220,
                  64,
                  "https://salala.io/"
                )}
                {renderLogo(
                  "Armory",
                  "../svg/Frame.svg",
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
  <li className=" ">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        src={src}
        className="logo-image logo-container transition-opacity p-2 duration-300 ease-in-out "
      />
    </a>
  </li>
);

export default Logo;
