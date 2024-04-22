import React from "react";

const Navbar: React.FC = () => {
  return (
    <section className="animate-fadeInDown ">
      <nav className="container mx-auto py-[16px] flex justify-between animate-fadeInDown">
        <img className="" src="./Img/Logo.png" alt="Logo" />
        <div className="flex justify-between">
          <div></div>
          <button className="w-32 h-10 px-5 py-2 gap-2 rounded-[4px]  border border-solid border-[#EC008C] text-[#EC008C] text-[16px]">
            Get Started
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
