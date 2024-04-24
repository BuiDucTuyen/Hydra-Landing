import React from "react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-chain bg-no-repeat animate-fadeInDown">
      <div className="flex container mx-auto mb-10 animate-fadeInDown mt-[64px]">
        <div className="gap-5 p-4 overflow-x-hidden">
          <h1 className="text-[#270017] text-[32px] mb-16 clash font-semibold px-5 text-center">
            {t("The")}
            <span className="text-[#EC008C]"> {t("innovative")}</span>
            <br />
            {t("build")}
          </h1>
          <div className="flex gap-10 p-4 mb-16 overflow-x-hidden select-none">
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
                  "../svg/Group.svg",
                  220,
                  64,
                  "https://docs.hyperaschain.com/technology/architecture"
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
  link: string // Thêm một tham số mới để truyền vào URL của trang cần chuyển hướng
) => (
  <li className="leading-0 !text-zinc-200 logo-container">
    <a href={link} target="_blank" rel="noopener noreferrer">
      {" "}
      {/* Thêm thẻ <a> và đặt URL trong thuộc tính href */}
      <img
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        decoding="async"
        data-nimg="1"
        style={{ color: "transparent" }}
        src={src}
        className="logo-image transition-opacity p-2 duration-300 ease-in-out hover:opacity-80"
      />
    </a>
  </li>
);

export default Logo;
