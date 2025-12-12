import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about" className="py-20 bg-white text-[#312d2d]">
      <div className="container mx-auto px-5" id="About">
        <div className="flex flex-wrap items-start justify-between gap-10">
          {/* Left Image */}
          <div className="w-full md:w-[35%] flex justify-center">
            <img
              src="Lumii_20220507_.jpg"
              alt="About"
              className="w-[85%] md:w-full rounded-[20px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[60%]">
            <h3 className="text-[40px] md:text-[55px] font-semibold text-black">
              About Me
            </h3>

            <p className="mt-5 text-[15px] md:text-[16px] leading-7">
              Hi, I’m{" "}
              <span className="text-[#ff004f] font-semibold">Suraj</span>, a
              passionate <b>Full Stack Developer</b> who enjoys creating modern,
              responsive, and user-friendly web applications. I work with MERN
              Stack and love turning creative ideas into real functional
              products.
            </p>

            <p className="mt-4 text-[15px] md:text-[16px] leading-7">
              I have completed a <b>1-year internship at PN Infosys</b> where I
              gained real-world experience in full-stack development, API
              integration, UI/UX improvements, and building dynamic web
              applications.
            </p>

            {/* Tabs */}
            <div className="flex mt-8 gap-10">
              {["skills", "experience", "education"].map((tab) => (
                <p
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[17px] md:text-[18px] font-medium cursor-pointer relative 
                    after:content-[''] after:absolute after:left-0 after:-bottom-2 
                    after:h-[3px] after:bg-[#ff004f] after:w-0
                    ${
                      activeTab === tab
                        ? "after:w-1/2 transition-all duration-300"
                        : ""
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 text-[15px] md:text-[16px]">
              {/* SKILLS TAB */}
              {activeTab === "skills" && (
                <ul className="space-y-3">
                  <li>
                    <span className="text-[#fa2c6d] text-[14px]">Frontend</span>
                    <br /> HTML, CSS, JavaScript, Next js, React js, Tailwind CSS, Bootstrap
                  </li>

                  <li>
                    <span className="text-[#fa2c6d] text-[14px]">Backend</span>
                    <br /> Node.js, Express.js, REST API Development
                  </li>

                  <li>
                    <span className="text-[#fa2c6d] text-[14px]">Database</span>
                    <br /> MongoDB, Mongoose
                  </li>

                  <li>
                    <span className="text-[#fa2c6d] text-[14px]">
                      Other Skills
                    </span>
                    <br /> UI/UX, Git & GitHub, Responsive Design, Deployment
                  </li>
                </ul>
              )}

              {/* EXPERIENCE TAB */}
              {activeTab === "experience" && (
                <ul className="space-y-3">
                  <li>
                    <span className="text-[#f34078] text-[14px]">
                      2024 - 2025
                    </span>
                    <br /> Full Stack Developer Internship at PN Infosys (1
                    Year)
                  </li>

                  <li>
                    <span className="text-[#f34078] text-[14px]">
                      2024 - 2025
                    </span>
                    <br /> Freelance Web Designer (UI/UX + Web Projects)
                  </li>

                  <li>
                    <span className="text-[#f34078] text-[14px]">
                      2023 - 2024
                    </span>
                    <br /> Personal Projects & Training
                  </li>
                </ul>
              )}

              {/* EDUCATION TAB */}
              {activeTab === "education" && (
                <ul className="space-y-3">
                  <li>
                    <span className="text-[#f34078] text-[14px]">2026</span>
                    <br /> MCA – RGPV University
                  </li>

                  <li>
                    <span className="text-[#f34078] text-[14px]">2025</span>
                    <br /> Mern Stack Training
                  </li>

                  <li>
                    <span className="text-[#f34078] text-[14px]">2023</span>
                    <br /> BSc (Computer Science) – Jiwaji University
                  </li>

                  
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
