import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { footerLinks } from "../constants/Constants";

const Footer = () => {
  return (
    <div className="bg-white flex flex-wrap justify-between sm:px-16 px-6 py-10 border-t-[1px] border-[#B7B7B7]">
      <div className="flex flex-col justify-start items-start gap-2 mb-2">
        <img src={logo} alt="boggle logo" />
        <p className="my-1">
          <Link to="/" className="hover:text-[#12B7D2] font-normal">Terms of Service</Link> |{" "}
          <Link to="/" className="hover:text-[#12B7D2] font-normal">Privacy Policy</Link>
        </p>
        <div className="flex justify-center">
          <div className="andriod mr-2">
            <a href="/" tabIndex="0">
              <img
                className="bn45"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="bn45"
              />
            </a>
          </div>
          <div className="ios">
            <a href="/" tabIndex="0">
              <img
                className="bn46"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="bn45"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[2.5rem]">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="font-semibold text-xl">{section.title}</h4>
            <ul className="list-none">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="my-1 hover:text-[#12B7D2] text-[16px] font-normal">
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div class="my-1">
      <div class=" flex">
        <Link to="/"><FaInstagram size={24} className="text-[#12B7D2] mr-2"/></Link>
        <Link to="/"><FaTwitter size={24} className="text-[#12B7D2] mx-2" /></Link>
        <Link to="/"><FaFacebook size={24} className="text-[#12B7D2] mx-2" /></Link>
        <Link to="/"><FaLinkedin size={24} className="text-[#12B7D2] ml-2" /></Link>
      </div>
      <h4 class="my-2 text-xl font-semibold">Get in touch</h4>
      <p className="text-[16px] font-normal">Questions or FeedBack?</p>
      <p className="text-[16px] font-normal">We'd love to hear from you</p>
    </div>

    </div>
  );
};

export default Footer;
