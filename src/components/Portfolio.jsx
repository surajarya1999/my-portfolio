import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const works = [
    {
      img: "a.jpg",
      title: "Car Rental Full-Stack App",
      desc: "A fully responsive car rental platform with booking, detail pages, admin panels & user features. Built using MERN stack.",
      link: "https://car-rental-with-suraj.netlify.app/",
    },
    {
      img: "collge.png",
      title: "College Portal Website",
      desc: "A dynamic college portal with student dashboard, course overview, event sections & user interaction pages.",
      link: "https://collage-portal-ox3a.onrender.com",
    },
    {
      img: "pngegg(3).png",
      title: "Upcoming Project",
      desc: "More exciting projects coming soon. Stay tuned for my next full-stack creation.",
      link: "#",
    },
  ];

  /* 🔥 SCROLL DETECTION FOR MOBILE */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="portfolio" className="py-12 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[40px] md:text-[55px] font-semibold text-black ">
          My Work
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {works.map((work, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative overflow-hidden rounded-[30px]"
            >
              {/* IMAGE */}
              <img
                src={work.img}
                alt={work.title}
                className={`
                  w-full rounded-[30px]
                  h-[350px] sm:h-[420px] md:h-[480px]
                  object-cover transition-transform duration-500
                  ${activeIndex === index ? "scale-110" : ""}
                `}
              />

              {/* OVERLAY */}
              <div
                className={`
                  absolute inset-0
                  flex flex-col items-center justify-center
                  text-center px-6 rounded-[30px]
                  bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#ff004f]
                  transition-all duration-700
                  ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                <h3 className="text-white text-[22px] md:text-[25px] font-medium mb-3">
                  {work.title}
                </h3>

                <p className="text-white text-[14px] leading-6">{work.desc}</p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5 bg-white text-[#ff004f]
                    w-[55px] h-[55px]
                    flex items-center justify-center
                    rounded-full text-[18px]
                  "
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="
    block mt-12 mx-auto w-fit
    border-2 border-[#ff004f]
    text-black
    px-12 py-3
    rounded-md
    text-[18px]
    transition-all duration-300

    hover:bg-[#ff004f] hover:text-white
    active:bg-[#ff004f] active:text-white
    active:scale-95
  "
        >
          See more
        </a>
      </div>
    </div>
  );
}
