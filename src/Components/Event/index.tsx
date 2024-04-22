import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Event: React.FC = () => {
  return (
    <section className="bg-gradient-to-br  from-teal-500 to-pink-600 animate-slide-down">
      <div className="container mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex justify-center items-center gap-5">
            <a
              href="/"
              className="flex gap-2 text-[16px] uppercase text-white items-center"
            >
              Breakpoint 2024 - New City. New Vibes - Get Early Access
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
