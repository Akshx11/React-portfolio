import React from "react";
// import contactImg from "../public/assets/about.jpg";
import Image from "next/dist/client/image";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import {
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import Link from "next/dist/client/link";
import deved from "../public/dev-ed-wave.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <div className=" m-auto px-2 py-16 w-full ">
        <h3 className="text-3xl py-1 text-teal-600  dark:text-teal-400">
          Connect
        </h3>
        <h2 className="py-4 dark:text-gray-200 ml-2">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl dark:shadow-black shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl items-center text-center  justify-center hover:scale-105 ease-in duration-300"
                  src={deved}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 font-burtons font-extrabold underline-offset-4 underline dark:underline-teal-300 dark:underline-teal-700 text-teal-700 dark:text-teal-300  text-xl">
                  Akshata Tande
                </h2>
                <p className="dark:text-white font-semibold ">UI-UX Designer</p>
                <p className="py-2 dark:text-gray-400">
                  I am available for freelance or intern positions. Contact me
                  and let us talk.
                </p>
                <div className="flex py-3">
                  <div className=" rounded-2xl shadow-lg dark:text-gray-400 dark:border-gray-400 p-3 border border-black  text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                    <MdEmail/>
                  </div>
                    <p className="text-center justify-between dark:text-gray-300 py-3 px-3">
                     akshatatande80@gmail.com
                    </p>
                </div>
                <div className="flex ">
                  <div className=" rounded-2xl shadow-lg dark:text-gray-400 dark:border-gray-400 p-3 border border-black  text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                    <MdLocationOn/>
                  </div>
                    <p className="text-center justify-between dark:text-gray-300 py-3 px-3">
                     Pune🚩, India
                    </p>
                </div>
               
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl dark:shadow-black shadow-gray-400 rounded-xl lg:p-4">
            {/* Social links */}
            <div>
              <p className="uppercase pt-8 ml-4 font-bold dark:text-gray-100 ">
                Connect With Me
              </p>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <a href="https://twitter.com/">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://dribbble.com/">
                    <AiFillDribbbleCircle />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <form
                action="https://getform.io/f/9714cba4-f7ff-44aa-9ff5-9bf362b998a5"
                method="POST"
                enctype="multipart/form-data"
              >
                <div></div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase dark:text-gray-200 text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase dark:text-gray-200 text-sm py-2">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase dark:text-gray-200 text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="4"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 bg-teal-600 dark:bg-teal-500 text-white rounded-lg font-poppins font-bold text-lg mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <TbArrowBigUpLinesFilled className="text-teal-600" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
