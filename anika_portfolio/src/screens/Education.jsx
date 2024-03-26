

import React from 'react';

const Education = () => {
  const currentlyStudying = [
    {
      institution: "BRAC University",
      degree: "Studying Bachelor of Science in Computer Science and Engineering",
      duration: "Spring, 2021 - Present",
      link: "https://www.bracu.ac.bd/"
    }
  ];

  const studied = [
    {
      institution: "Maple Leaf International School",
      degree: "Completed Class VI to Class XII",
      duration: "January, 2014 - January, 2021",
      link: "https://mlis.edu.bd/"
    },
    {
      institution: "Little Jewels Nursery Infant and Junior School",
      degree: "Completed Class I to Class V",
      duration: "January, 2010 - December, 2013",
      link: "https://ljs1955.com/"
    }
  ];

  const handleBoxClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="bg-purple-950 hover:bg-purple-800 m-5 md:m-20 max-w-full">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="text-3xl text-white mt-10 font-sans">EDUCATION</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="text-xl text-white mt-6 mb-4 col-span-full font-semibold text-center">CURRENTLY STUDYING</h2>
        {currentlyStudying.map((education, index) => (
          <div key={index} className="w-full bg-green-200 rounded-xl shadow-md overflow-hidden hover:animate-pulse cursor-pointer" onClick={() => handleBoxClick(education.link)}>
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-green-500">
                {education.institution}
              </div>
              <div className="mt-4">
                 {education.degree}
              </div>
              <div className="mt-4">
                {education.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="text-xl text-white mt-6 mb-4 col-span-full font-semibold text-center">STUDIED</h2>
        {studied.map((education, index) => (
          <div key={index} className="w-full bg-blue-200 rounded-xl shadow-md overflow-hidden hover:animate-pulse cursor-pointer" onClick={() => handleBoxClick(education.link)}>
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-blue-500">
                {education.institution}
              </div>
              <div className="mt-4 ">
                {education.degree}
              </div>
              <div className="mt-4">
                {education.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
