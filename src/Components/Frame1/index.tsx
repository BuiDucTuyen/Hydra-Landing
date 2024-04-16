import React from "react";

const IconDapp: React.FC = () => {
  const logos = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
  ];

  return (
    <section className="bg-slate-500">
      <nav className="container mx-auto flex justify-around animate-slide ">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo${index + 1}`} />
        ))}
      </nav>
    </section>
  );
};

export default IconDapp;
