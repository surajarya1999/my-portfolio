import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="Home"
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
      url('my image.jpg')  /* default = mobile image */ `,
      }}
    >
      <div className="hidden sm:block">
        <style>
          {`
        @media (min-width: 480px) {
          #Home {
            background-image: url('Lumii_20230825_211427600.jpg') !important; /* desktop image */
          }
        }
      `}
        </style>
      </div>

      <div
        className="
            pt-[500px]        /* mobile: text niche */
            sm:pt-[200px]    /* tablet/desktop: normal */
            px-4 sm:px-18"
      >
        <p className="flex items-center gap-2 text-black text-[26px] sm:text-[30px]">
          React Developer
          <FaReact className="text-cyan-500 text-[28px] sm:text-[32px] animate-spin-slow" />
        </p>

        <h2 className="text-[45px] sm:text-[70px] text-black mt-2 leading-tight">
          Hi, I'm <span className="text-[#ff004f]">Suraj</span> <br />
          Arya From India
        </h2>
      </div>
    </section>
  );
}
