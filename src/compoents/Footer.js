import React from "react";
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="h-44 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,128L0,128L288,128L288,256L576,256L576,64L864,64L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="font-robo text-gray-50 pb-5">Developed By</p>

            <div className="h-1 border-2 border-white border-solid"></div>

            <div className="flex text-white w-full justify-between py-3">
              <Link to={"//www.facebook.com/kinglogan1/"}><FaFacebook /></Link>
              <a href="mailto:georgekinglogan@gmail.com"><FaMailBulk /></a>
              <Link to={"//www.instagram.com/kinqlogan//"}><FaInstagram /></Link>
              <Link to={"//www.linkedin.com/in/kinglogan3/"}><FaLinkedin /></Link>
              <Link to={"//www.github.com/kinglo3"}><FaGithub /></Link>
            </div>

            <div className="h-1 border-2 border-gray-50 border-solid"></div>

            <p className="font-robo text-gray-50 my-2">King Logan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
