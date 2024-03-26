

import React from 'react';

const Experiences = () => {

  const currentJobs = [
    {
      company: "BRAC University",
      role: "Student Tutor (ST)",
      duration: "February, 2024 - Present",
      description: "CSE111 Student Tutor",
      link: "https://www.bracu.ac.bd/"
    },
    {
      company: "MQ's School Of Mathematics",
      role: "Teaching Assistant (TA)",
      duration: "June, 2023 - Present",
      description: "Teaching EDEXCEL IAL Mathematics",
      link: "https://www.facebook.com/mqsirofficial2023"
    },
    {
      company: "Physics-The Study Town",
      role: "Invigilator",
      duration: "March, 2024 - Present",
      description: "Invigilating Exams and Checking Scripts",
      link: "https://www.facebook.com/Physicstst"
    }
  ];

  const formerJobs = [
    {
      company: "Physics-The Study Town",
      role: "Online Teaching Assistant (TA)",
      duration: "September, 2023 - December, 2023",
      description: "Taught EDEXCEL IAL Physics",
      link: "https://www.facebook.com/Physicstst"
    },
    {
      company: "Chemistry-The Study Town",
      role: "Invigilator",
      duration: "August, 2023 - October, 2024",
      description: "Invigilated Exams and Checked Scripts",
      link: "https://www.facebook.com/profile.php?id=100057186710936"
    }
  ];

  const handleBoxClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="bg-cyan-950 hover:bg-cyan-800 m-5 md:m-20 max-w-full">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="text-3xl text-white mt-10 font-sans">EXPERIENCE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="text-xl text-white mt-6 mb-4 col-span-full font-semibold text-center">CURRENT JOBS</h2>
        {currentJobs.map((job, index) => (
          <div key={index} className="w-full bg-teal-200 rounded-xl shadow-md overflow-hidden hover:animate-pulse" onClick={() => handleBoxClick(job.link)}>
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-teal-500">
                {job.company}
              </div>
              <div className="mt-4">
                Role: {job.role}
              </div>
              <div className="mt-4">
                Duration: {job.duration}
              </div>
              <div className="mt-4">
                Description: {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="text-xl text-white mt-6 mb-4 col-span-full font-semibold text-center">FORMER JOBS</h2>
        {formerJobs.map((job, index) => (
          <div key={index} className="w-full bg-indigo-200 rounded-xl shadow-md overflow-hidden hover:animate-pulse" onClick={() => handleBoxClick(job.link)}>
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-indigo-500">
                {job.company}
              </div>
              <div className="mt-4">
                Role: {job.role}
              </div>
              <div className="mt-4">
                Duration: {job.duration}
              </div>
              <div className="mt-4">
                Description: {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
