import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-full text-center py-5 bg-[#292828] mt-10">
      <p className="text-white">
        Copyright © Suraj. Made with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-pink-600" /> by Easy Tutorial
      </p>
    </div>
  );
};

export default Footer;
