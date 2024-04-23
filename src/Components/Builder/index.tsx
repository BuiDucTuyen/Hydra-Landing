import React from "react";

const Build: React.FC = () => {
  return (
    <section className="bg-build bg-no-repeat animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto mt-20 flex justify-between items-center">
        <div className="max-w-[820px] text-left">
          <h1 className="text-[#270017] text-[40px] clash mb-6 font-semibold">
            Fast, secure, and affordable blockchain and AI infrastructure that
            scales.
          </h1>
          <h2
            className="text-ec-purple-700 text-[18px] manrope
          "
          >
            Hyperas Chain stands at the vanguard of technological innovation
            through its seamless integration of Federated Learning, Edge
            Computing, and NPUs from mobile devices.
          </h2>
        </div>
        <img src="./Img/snapedit_1711767796429 2.png" alt="" />
      </nav>
    </section>
  );
};

export default Build;
