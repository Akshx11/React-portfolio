import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { useState } from "react";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";
import web11 from "../public/web11.png";
import web12 from "../public/web12.png";
import Skills from "./Skills";
import Contact from "./Contact";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-7 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">Akshata Tande</h1>
        <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1KxeWWSrRi9sq5MQoIeOsQbnKZVhGGrqe/view?usp=sharing" target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
        </nav>
        <div className="text-center p-5 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Akshata Tande
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and UIUX Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            As a third-year AI & Data Science student with experience in user-centered design principles, wireframing,
prototyping, and helping startups build their products, I am seeking internships or entry-level positions to
apply my skills and continue learning.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/AkshataTande?t=lI22KjN-4XTnzgHn4-QpUQ&s=09">
                      <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/akshatatande/">
                        <AiFillLinkedin />
              </a>
               <a href="https://dribbble.com/akshatatande">
                 <AiFillDribbbleCircle />
                </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
        </div>
        </section>

        {/* <section> */}
          <Skills/>
        {/* </section> */}
        
        {/* <section>

        <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section> */}
        <section className="py-10">
        <div>
            <h3 className="text-3xl py-1 text-teal-600  dark:text-teal-400 ">Projects</h3>
        
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">

            </p>
          </div>
          <div className="flex flex-col gap-10 pt-5 pb-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://www.figma.com/file/i9AghyHMNqxX43ZnzWKy2T/Moviex?node-id=0%3A1&t=bkMG0jqFTvRvyrgJ-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/fdvyWSRRpeJjiP67HDeAR1/Streamify?node-id=32%3A2393&t=Md6OvY17CaNsVH3w-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/0vkXKWiqPy0fAhqnlVFg2r/movie-app?node-id=0%3A1&t=LnZpGLTOsT9pYc2G-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/ALP7eGsrRhGf6GbADcPhPO/NFT-Dashboard?node-id=0%3A1&t=bnGu6V94jnOGZL5l-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/e7s4IHjWhnepRn0oM4uSlt/Travel-App?node-id=0%3A1&t=43yVamHVH7fnrYsC-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/RNGa0jBFSc4OPxk2RK7fgf/Design?node-id=0%3A1&t=XqYXB7SJHn3xX0ac-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/KNE6iMCctrYoZIcAeDkIIr/DAY-16?node-id=1%3A2&t=fql3GNbu8vKMNsrx-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web7}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/osHyjMq2dDkNhq2DQAdBSm/Game?node-id=202%3A810&t=T44BiPMvd4dMEd5q-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web8}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/osHyjMq2dDkNhq2DQAdBSm/Game?node-id=202%3A810&t=T44BiPMvd4dMEd5q-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/8Jjb4KSxM1x6C7283wa7cM/Interstellar?node-id=104%3A307&t=CIl7XOPAztjbiAwp-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web10}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/keIC7ksXTzF3L0OWLaFEuW/XRAY?node-id=15%3A30&t=dX2BHNkMnHqjyIov-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web11}
              />
              </a>
              </div>
              <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/file/tI45OW3Akm9nN4xG9HslYL/TelphaTech?node-id=0%3A1&t=3QFyZ83yrmAxUXt1-1" target="blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web12}
              />
              </a>
              </div>
              
            </div>
        </section>
        <Contact/>
        </main>
    </div>
  );
}
