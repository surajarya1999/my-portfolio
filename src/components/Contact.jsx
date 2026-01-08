import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="Contact" className="text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT */}
          <div className="md:w-1/3">
            <h3 className="text-3xl font-semibold">Contact Me</h3>

            <p className="mt-8 text-black flex items-center text-lg">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-pink-600 mr-4 text-2xl"
              />
              surajarya460@gmail.com
            </p>

            <p className="mt-4 text-black flex items-center text-lg">
              <FontAwesomeIcon
                icon={faSquarePhone}
                className="text-pink-600 mr-4 text-2xl"
              />
              +91 7509478047
            </p>

            {/* Social Icons */}
            <div className="mt-8 text-black flex gap-5 text-3xl">
              <a href="https://facebook.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/_suraj_arya/" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                className="hover:text-pink-600"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <a
              href="Suraj Arya Full Stack.pdf"
              download
              className="inline-block bg-pink-600 mt-8 px-8 py-3 rounded-lg text-lg"
            >
              Download CV
            </a>
          </div>

          {/* RIGHT */}
          <div className="md:w-2/3">
            <form ref={formRef} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                name="name" // ✅ FIXED
                placeholder="Your Name"
                required
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              />

              <input
                type="email"
                name="email" // ✅ FIXED
                placeholder="Your Email"
                required
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              />

              <textarea
                rows="6"
                name="message" // ✅ already correct
                placeholder="Your Message"
                required
                className="w-full bg-gray-800 p-3 rounded-lg text-white text-lg mb-4 outline-none"
              />

              {/* OPTIONAL (safe side) */}
              <input type="hidden" name="title" value="Portfolio Contact" />

              <button
                type="submit"
                disabled={loading}
                className={`px-10 py-3 rounded-lg text-lg transition
    ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-pink-600"}
  `}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-4">Message sent successfully</p>
              )}

              {status === "error" && (
                <p className="text-red-500 mt-4">Failed to send message</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
