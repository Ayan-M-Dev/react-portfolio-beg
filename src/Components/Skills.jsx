import React from 'react';
import htmlIcon from '../Assets/html.jpg';
import cssIcon from '../Assets/css.jpg';
import jsIcon from '../Assets/javascript.jpg';
import reactIcon from '../Assets/react.png';
import githubIcon from '../Assets/github.png';
import nodejsIcon from '../Assets/nodejs.jpg';
import typeIcon from '../Assets/typescript.png';
import mongoIcon from '../Assets/mongodb.png';
import { useDarkMode } from './DarkMode/DarkModeContext';

const Skills = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      name='skills'
      className={`w-full h-screen ${darkMode ? 'bg-white text-black' : 'bg-[#0a192f] text-gray-300'}`}
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className={`text-4xl font-bold inline border-b-4 ${darkMode ? 'border-cyan-500' : 'border-cyan-500'} text-center`}>
            Skills
          </p>
          <p className='py-4 text-2xl'>
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={htmlIcon} alt='HTML' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'HTML' : <span className='text-black'>HTML</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={cssIcon} alt='CSS' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'CSS' : <span className='text-black'>CSS</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={jsIcon} alt='JavaScript' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'JavaScript' : <span className='text-black'>JavaScript</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={typeIcon} alt='TypeScript' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'TypeScript' : <span className='text-black'>TypeScript</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={reactIcon} alt='React' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'React' : <span className='text-black'>React</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={githubIcon} alt='GitHub' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'GitHub' : <span className='text-black'>GitHub</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={nodejsIcon} alt='Node.js' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'Node.js' : <span className='text-black'>Node.js</span>}</p>
          </div>
          
          <div className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${darkMode ? 'bg-gray-300 text-black' : 'bg-white text-black'} p-4 rounded-md`}>
            <img src={mongoIcon} alt='MongoDB' className='w-16 h-16 mx-auto mb-4' />
            <p className='my-4'>{darkMode ? 'MongoDB' : <span className='text-black'>MongoDB</span>}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
