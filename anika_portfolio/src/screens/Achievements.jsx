import React from 'react';

const Achievements = () => {
  const achieve = [
    {
      award: "Music Streaming Service",
    },
    {
      award: "Snake Game",
    },
    {
      award: "DIY Design and Collaboration Website",
    }
  ];


  return (
    <div className="bg-slate-700 m-5 md:m-20 max-w-full">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="text-3xl text-white mt-10 font-sans">ACHIEVEMENTS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
        {achieve.map((achieve, index) => (
          <div key={index} className="w-full bg-slate-100 rounded-xl shadow-md overflow-hidden  cursor-pointer" >
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-slate-500">
                {achieve.award}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

