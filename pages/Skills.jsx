import React from "react";
import react from "../public/react.png";
import design from "../public/design.png";
import Image from "next/image";
import html from "../public/html.png";
import css from "../public/css.png";
import figma from "../public/figma.png";
import javaScript from "../public/javascript.png";
import canva from "../public/canva.png";
import blender from "../public/blender2.png";

const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full lg:h-screen pb-2 pt-0">
        <div className="mx-auto flex flex-col justify-center h-full">
          {/* <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Skills
          </p> */}
          <h3 className="text-3xl py-1 text-teal-600  dark:text-teal-400">
            Skills
          </h3>
          <h2 className="py-4 dark:text-gray-200 ml-2">What I Can Do</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={html} width="64px" height="64px" alt="/" />
                </div>
                <div className="items-center justify-center">
                  <h3 className="font-semibold text-[20px]  dark:text-white ">
                    HTML
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="p-6 shadow-xl dark:border dark:border-gray-50  rounded-xl hover:scale-105 ease-in duration-300"> */}
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-[20px] dark:text-white">
                    CSS
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={javaScript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-[15px] dark:text-white">
                    JavaScript
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={react} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-[20px] dark:text-white">React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={figma} width="45px" height="64px" alt="/" />
                </div>
                <div className=" items-center justify-center">
                  <h3 className="font-semibold text-[20px] dark:text-white">
                    Figma
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={canva} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold dark:text-white  text-[20px]">
                    Canva
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={design} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold dark:text-white"></h3>
                </div>
              </div>
            </div> */}
            <div className="p-6 shadow-xl dark:shadow-2xl dark:shadow-black rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={blender} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-semibold dark:text-white text-[20px]">Blender</h3>
                </div>
              </div>
            </div>
            {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={c} width='150px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>C++</h3>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
