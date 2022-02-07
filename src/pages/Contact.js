import React from "react";
import { Link } from "react-router-dom";
import Layout from "../compoents/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <div className="h-full">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_8tmvgkde.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          </div>
        </div>

        <div className='w-screen flex justify-center'>

             <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
                 <h1 className='text-2xl font-semibold'>Let's connect!</h1>
                 <input type="text" placeholder='Name' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                 <input type="text" placeholder='Email' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                 <textarea type="text" placeholder='Message' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                  
                  <a href="mailto:georgekinglogan@gmail.com"><button className='bg-red-500 rounded text-white px-5 py-1 mt-3'>SUBMIT</button></a>
           
             </div>

        </div>

      </div>
    </Layout>
  );
}

export default Contact;
