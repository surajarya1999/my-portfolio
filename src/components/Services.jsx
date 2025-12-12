import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Services() {
  const services = [
    {
      icon: faCode,
      color: "text-blue-400",
      title: "Full Stack Web Development",
      text: "I build complete, scalable web applications using MERN Stack — from frontend UI to backend APIs and database integration.",
    },
    {
      icon: faReact,
      color: "text-cyan-400",
      title: "Frontend Development",
      text: "Crafting responsive, user-friendly interfaces using React, Tailwind CSS, and modern UI/UX practices for smooth user experiences.",
    },
    {
      icon: faDatabase,
      color: "text-green-500",
      title: "Backend & API Development",
      text: "Developing secure REST APIs, authentication systems, CRUD features, and backend logic using Node.js, Express & MongoDB.",
    },
  ];

  return (
    <div id="Services" className="py-12 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[40px] md:text-[55px] font-semibold text-black text-center md:text-left">
          My Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#3e3a3b] rounded-xl p-8 text-white transition-all duration-500 hover:bg-[#ff004f] hover:-translate-y-2"
            >
              <FontAwesomeIcon
                icon={service.icon}
                className={`text-[40px] mb-6 ${service.color}`}
              />

              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>

              <p className="text-xs leading-6">{service.text}</p>

              <a
                href="#"
                className="inline-block text-[10px] mt-5 underline underline-offset-4"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
