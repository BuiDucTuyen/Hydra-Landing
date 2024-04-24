import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const { t } = useTranslation();
  const teamMembers = [
    { name: "TRẦN NAM CHUNG", position: "FOUNDER - CHAIRMAN" },
    { name: "NGUYỄN VĂN TUẤN", position: "CO-FOUNDER – VICE CHAIRMAN" },
    { name: "TRẦN NAM CHUNG", position: "FOUNDER - CHAIRMAN" },
    { name: "NGUYỄN VĂN TUẤN", position: "CO-FOUNDER – VICE CHAIRMAN" },
    { name: "TRẦN NAM CHUNG", position: "FOUNDER - CHAIRMAN" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-[70px] mb-[70px]">
      <nav className="max-w-[1200px] mx-auto">
        <h1 className="text-[#270017] clash text-[40px] font-semibold mb-16 uppercase">
          {t("team")}
        </h1>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <img className="mb-6" src="/Img/Frame 3213.png" alt="" />
              <h2 className="text-[#32021E] text-left font-bold text-[18px]">
                {member.name}
              </h2>
              <h3 className="text-ec-purple-700 text-left font-normal">
                {member.position}
              </h3>
            </div>
          ))}
        </Slider>
      </nav>
    </section>
  );
};

export default Team;
