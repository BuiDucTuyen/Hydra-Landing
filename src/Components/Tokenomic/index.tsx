import React from "react";

const Tokennomic: React.FC = () => {
  return (
    <section className=" mt-[72px] animate-fadeInDown">
      <nav className="max-w-[1200px] mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div>
            <img className="mb-5" src="./Img/Group 4.png" alt="" />
            <h1 className="text-[#270017] text-[40px] font-bold mb-4 uppercase">
              Tokenomic
            </h1>
          </div>
          <div className="max-w-[450px] text-ec-purple-700 text-left text-[16px] font-normal">
            Hyperas Chain stands at the vanguard of technological innovation
            through its seamless integration of Federated Learning, Edge
            Computing, and NPUs from mobile devices.
          </div>
        </div>
      </nav>
      <nav className="bg-token bg-contain">
        <img className="mx-auto" src="./Img/Object.png" alt="" />
      </nav>
    </section>
  );
};

export default Tokennomic;
