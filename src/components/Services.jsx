import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  /* 📱 MOBILE SCROLL HOVER (UP + DOWN) */
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex(index);
          } else if (activeIndex === index) {
            setActiveIndex(null);
          }
        });
      },
      { threshold: 0.55 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeIndex]);

  const services = [
    {
      iconType: "fa",
      icon: faCode,
      color: "text-blue-400",
      title: "Full Stack Web Development",
      text: "I build complete, scalable web applications using MERN Stack — from frontend UI to backend APIs and database integration.",
    },
    {
      iconType: "fa",
      icon: faReact,
      color: "text-cyan-400",
      title: "Frontend Development",
      text: "Crafting responsive, user-friendly interfaces using React, Tailwind CSS, and modern UI/UX practices for smooth user experiences.",
    },
    {
      iconType: "react",
      icon: SiMongodb,
      color: "text-green-500",
      title: "Backend & API Development",
      text: "Developing secure REST APIs, authentication systems, CRUD features, and backend logic using Node.js, Express & MongoDB.",
    },
  ];

  return (
    <section id="Services" className="py-14 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[40px] md:text-[55px] font-semibold text-black">
          My Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              data-aos="fade-up"
              onMouseEnter={() =>
                window.innerWidth >= 768 && setActiveIndex(index)
              }
              onMouseLeave={() =>
                window.innerWidth >= 768 && setActiveIndex(null)
              }
              onClick={() => window.innerWidth < 768 && setActiveIndex(index)}
              className="relative"
            >
              {/* ✅ INNER CARD (rounded ALWAYS here) */}
              <div
                className={`
                  rounded-xl p-8 text-white cursor-pointer
                  transition-all duration-500
                  ${
                    activeIndex === index
                      ? "bg-[#ff004f] -translate-y-4"
                      : "bg-[#3e3a3b] "
                  }
                `}
              >
                {service.iconType === "fa" && (
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={`text-[40px] mb-6 ${service.color}`}
                  />
                )}

                {service.iconType === "react" && (
                  <service.icon
                    className={`text-[40px] mb-6 ${service.color}`}
                  />
                )}

                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>

                <p className="text-sm leading-6 opacity-90">{service.text}</p>

                <span className="inline-block text-xs mt-5 underline">
                  Learn more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
