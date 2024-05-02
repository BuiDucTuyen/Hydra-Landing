import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const { t } = useTranslation();
  const teamMembers = [
    { name: "JohnB", position: "Product Owner", image: "./Img/Member 1.png" },
    { name: "David", position: "CMO", image: "./Img/Member 2.png" },
    {
      name: "Cris Nguyen",
      position: "Blockchain Leader",
      image: "./Img/Member 3.png",
    },
    {
      name: "Satoshi Bui",
      position: "Solution Architecture",
      image: "./Img/Member 4.png",
    },
    {
      name: "Andy Tran",
      position: "UI/UX Leader",
      image: "./Img/Member 5.png",
    },
    { name: "Noblu", position: "dApp Developer", image: "./Img/Member 6.png" },
    {
      name: "Thomas Nguyen",
      position: "Backend Developer",
      image: "./Img/Member 7.png",
    },
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-[40px] lg:mt-[70px]  lg:mb-[70px]">
      <div className="max-w-[1200px] mx-auto ">
        <h1 className="text-[#270017] clash lg:text-[40px] text-[24px] font-semibold lg:mb-16 uppercase">
          {t("team")}
        </h1>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="slick-slide mb-4 lg:mb-10 flex gap-2 justify-center"
            >
              <div className="team-member py-8 px-8 lg:p-4 text-center">
                <img
                  className="mb-6 mx-auto"
                  src={member.image}
                  alt={member.name}
                />

                <h2 className="text-[#32021E] font-bold text-[18px]">
                  {member.name}
                </h2>
                <h3 className="text-ec-purple-700 uppercase font-normal">
                  {member.position}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
