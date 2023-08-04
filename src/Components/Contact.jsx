import React, { useContext } from 'react';
import { useDarkMode } from './DarkMode/DarkModeContext'; 

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <div name='contact' className={`w-full h-screen ${darkMode ? 'bg-white' : 'bg-[#0a192f]'} flex justify-center items-center p-4`}>
        <div className={`flex flex-col max-w-[600px] w-full ${darkMode ? 'bg-gray-300' : 'bg-[#0a192f]'} rounded-md p-4`}>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className={`text-4xl font-bold inline border-b-4 border-cyan-500 ${darkMode ? 'text-black' : 'text-gray-300'}`}>Contact</p>
                <p className={`text-black py-4 ${darkMode ? 'text-black' : 'text-gray-300'}`}>Send me a message</p>
            </div>
            <input className={`bg-${darkMode ? 'white' : '[#ffff]'} p-2 rounded-md`} type="text" placeholder='Name' name='name' />
            <input className={`my-4 p-2 bg-${darkMode ? 'white' : '[#ffff]'} rounded-md`} type="email" placeholder='Email' name='email' />
            <textarea className={`bg-${darkMode ? 'white' : '[#ffff]'} p-2 rounded-md`} name="message" rows="10" placeholder='Message'></textarea>
            <button className={`text-${darkMode ? 'black' : 'white'} border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md ${darkMode ? 'border-black' : 'border-gray-300'}`}>
                Let's Collaborate
            </button>
        </div>
    </div>
  )
}

export default Contact;
