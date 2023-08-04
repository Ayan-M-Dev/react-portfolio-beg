import React from "react";
import { useDarkMode } from './DarkMode/DarkModeContext'; 

const About = () => { 
  const { darkMode } = useDarkMode();

  return (
    <div
      name="about"
      id="about"
      className={`w-full h-screen ${darkMode ? 'bg-white text-black' : 'bg-[#0a192f] text-gray-300'}`}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className={`py-16 rounded-md ${darkMode ? 'bg-gray-300' : 'bg-cyan-800'} flex flex-col justify-center items-center w-4/6`}>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className={`sm:text-right pb-8 pl-4 ${darkMode ? 'text-black' : 'text-white'}`}>
              <p className={`text-4xl font-bold inline border-b-4 ${darkMode ? 'border-cyan-500' : 'border-cyan-500'}`}>
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className={`sm:text-right text-4xl font-bold ${darkMode ? 'text-black' : 'text-white'}`}>
              <p>
                Hi. I'm Ayan, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I am also a
                technical writer--simplifying topics/concepts on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
