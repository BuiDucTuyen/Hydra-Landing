import React from "react";

const Team: React.FC = () => {
  const imageNames: string[] = [
    "team1.jpg",
    "team2.jpg",
    "team3.jpg",
    "team4.jpg",
    "team5.jpg",
  ];

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-5">Team</h1>
        <div className="flex justify-center items-center gap-5 p-4">
          {imageNames.map((imageName, index) => (
            <img key={index} src={imageName} alt="Team" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
