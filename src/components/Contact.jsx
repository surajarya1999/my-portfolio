import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="Contact" className=" text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT */}
          <div className="md:w-1/3">
            <h3 className="text-3xl font-semibold">Contact Me</h3>

            <p className="mt-8  text-black flex items-center text-lg">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-pink-600 mr-4 text-2xl"
              />
              surajarya460@gmail.com
            </p>

            <p className="mt-4  text-black flex items-center text-lg">
              <FontAwesomeIcon
                icon={faSquarePhone}
                className="text-pink-600 mr-4 text-2xl"
              />
              +917509478047
            </p>

            {/* Social Icons */}
            <div className="mt-8 text-black flex gap-5 text-3xl">
              <a
                href="https://facebook.com"
                className="hover:text-pink-600 transition"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-pink-600 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-pink-600 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-pink-600 transition">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <a
              href="attach CV"
              download
              className="inline-block bg-pink-600 mt-8 px-8 py-3 rounded-lg text-lg"
            >
              Download CV
            </a>
          </div>

          {/* RIGHT */}
          <div className="md:w-2/3">
            <form className="w-full">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-600 px-10 py-3 rounded-lg text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
