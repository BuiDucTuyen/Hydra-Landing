import React from "react";

const Frame: React.FC = () => {
  return (
    <section className="py-12">
      <nav className="max-w-[1200px] mx-auto bg-frame py-8 bg-no-repeat">
        <h1 className="text-[#270017] font-medium text-[24px] mb-5">
          Subscribe to Our Newsletter
        </h1>
        <div className="flex justify-center items-center gap-4">
          <div className="flex h-[56px] max-w-[536px] w-full items-center gap-10 rounded-lg border border-solid border-gray-200">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-[32px] py-[14px] outline-none"
            />
          </div>
          <button className="bg-[#EC008C] text-white text-[16px] font-semibold rounded-lg w-28 h-14">
            SEND
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Frame;
