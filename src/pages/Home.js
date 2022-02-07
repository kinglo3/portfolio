import React , {useEffect} from "react";
import Layout from "../compoents/Layout";
import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai"
import { SiExpress, SiTailwindcss } from "react-icons/si";
import AOS from 'aos';
AOS.init({
  duration:1000
});
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-theme">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-white transform md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl font-robo md:text-4xl" data-aos='slide-right'>
                Hi,my name is <b className="text-yellow-500">KING</b>
              </h1>
              <h1 className="text-4xl font-robo md:text-xl" data-aos='slide-left'>
                Software <b className="text-red-500">Developer</b>,Info Systems Specialist
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-20">
          <h1 className="font-robo text-6xl text-blue-900 font-bold text-center my-8" data-aos='slide-up'>
            TECHNOLOGIES I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <SiExpress
              size={180}
              color="red"
              className="w-full text-center mt-20 animate-bounce"
            />
            <AiOutlineConsoleSql
              size={180}
              color="black"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20"
            />
            <DiMongodb
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20"
            />
            <SiTailwindcss
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        {/* {Javscript Buff} */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl font-robo py-10">
              I'm always eager to learn new skills
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos='zoom-in'>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <p className="font-robo text-center text-xl my-5 font-semibold md:px-5 px-14 py-10">
            I love the continuous cyle of learning and teaching, and the passion that comes from tackling something new. The world is a better place when we help each other.
            </p>
          </div>
        </div>

        {/* {Dev stack section} */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-white font-robo font-bold text-4xl py-10">
              My DEV Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos='zoom-in'>
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_KmtjWu.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-3 p-5 font-robo">
              <div>
                <h1 className="text-xl font-bold">Frontend</h1>
                <hr />
                <p className="font-semibold mt-2">HTML/CSS</p>
                <p className="font-semibold mt-2">React</p>

                <p className="font-semibold mt-2">Javascript</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">UI / UX</h1>
                <hr />
                <p className="font-semibold mt-2">Bootstrap</p>
                <p className="font-semibold mt-2">Tailwind</p>

              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold">Backend</h1>
                <hr />
                <p className="font-semibold mt-2">Node JS</p>
                <p className="font-semibold mt-2">Express JS</p>


                <p className="font-semibold mt-2">Postgresql</p>
                <p className="font-semibold mt-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}

        <div>
          <h1 className="font-mont text-4xl text-gray-500 text-center font-bold">
            Who am I?
          </h1>

          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_o25hrlyo.json"
                background="transparent"
                speed=".2"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
               <h1 className='text-2xl font-bold'>Hi , Hello , Bonjour...

               <hr />

               <pre className='text-2xl md:text-sm my-5 font-robo font-semibold'>
                 {JSON.stringify({
                   name : 'King Logan',
                   age : null ,
                   gender : 'Male' ,
                   country : 'USA'
                 }, null , 2)}
               </pre>

               </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
