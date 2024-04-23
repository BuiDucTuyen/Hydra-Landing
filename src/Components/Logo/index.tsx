import React from "react";

const Logo = () => {
  return (
    <div className=" bg-chain bg-no-repeat animate-fadeInDown">
      <div className="flex container mx-auto  mb-10 animate-fadeInDown mt-[64px]">
        <div className=" gap-5 p-4 overflow-x-hidden">
          <h1 className="text-[#270017] text-[32px] mb-16 clash font-semibold px-5  text-center">
            The most <span className="text-[#EC008C]">innovative builders</span>{" "}
            <br />
            build on Hyperas Chain{" "}
          </h1>
          <div className="flex  gap-10 p-4 mb-16 overflow-x-hidden select-none">
            <div className="marquee-container flex flex-row gap-20">
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-32 md:animate-marqueeScroll">
                {renderLogo("Armory", "../Img/egabid (1).png", 220, 64)}
                {renderLogo("Armory", "../Img/pindias.png", 220, 64)}
                {renderLogo("Armory", "../Img/hyratek.png", 220, 64)}
                {renderLogo("Armory", "../Img/pindias.png", 220, 64)}
                {renderLogo("Armory", "../Img/hyratek.png", 220, 64)}
              </ul>
              <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-32 md:animate-marqueeScroll">
                {renderLogo("Armory", "../Img/egabid (1).png", 220, 64)}
                {renderLogo("Armory", "../Img/pindias.png", 220, 64)}
                {renderLogo("Armory", "../Img/hyratek.png", 220, 64)}
                {renderLogo("Armory", "../Img/egabid (1).png", 220, 64)}
                {renderLogo("Armory", "../Img/hyratek.png", 220, 64)}
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
  height: number
) => (
  <li className="leading-0 !text-zinc-200 logo-container">
    <img
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      decoding="async"
      data-nimg="1"
      style={{ color: "transparent" }}
      src={src}
      className="logo-image"
    />
  </li>
);

export default Logo;
