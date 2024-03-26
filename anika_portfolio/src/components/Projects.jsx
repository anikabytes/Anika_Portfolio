import React from 'react';

const Projects = () => {
  return (
    <div className="bg-blue-700 m-20 max-w-full">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl text-white mt-10 font-sans">PROJECTS</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 p-5">

        <div className="w-full bg-blue-100 rounded-xl shadow-md overflow-hidden hover:animate-pulse flex justify-center items-center">
          <div className="p-8 text-center">
            <div className="uppercase tracking-wide text-lg font-semibold text-blue-500">
              <a href="https://github.com/anikabytes/BRACU_CSE370_Database_Systems_Project">
                Music Streaming Service
              </a>
            </div>
          </div>
        </div>

        <div className="w-full bg-blue-100 rounded-xl shadow-md overflow-hidden hover:animate-pulse flex justify-center items-center">
          <div className="p-8 text-center">
            <div className="uppercase tracking-wide text-lg font-semibold text-blue-500">
              <a href="https://github.com/anikabytes/BRACU_CSE423_Snake_Game">
                Snake Game
              </a>
            </div>
          </div>
        </div>

        <div className="w-full bg-blue-100 rounded-xl shadow-md overflow-hidden hover:animate-pulse flex justify-center items-center">
          <div className="p-8 text-center">
            <div className="uppercase tracking-wide text-lg font-semibold text-blue-500">
              <a href="https://github.com/anikabytes/CSE470_DIY_Design_And_Collaboration_Website">
                DIY Design and Collaboration Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


