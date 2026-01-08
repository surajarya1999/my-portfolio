import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed w-full top-0 left-0 z-50
        p-5 px-9 flex items-center justify-between
        bg-white/30 md:backdrop-blur-md shadow-lg 
        text-black
      "
    >
      {/* Logo */}
      <h1 className="text-black font-sans text-3xl font-extrabold">
        $<span className="text-[#ff004f] text-3xl font-semibold">uraj_</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {["Home", "Services", "About", "Contact", "Portfolio"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="text-black text-lg relative after:content-[''] after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-3xl"
        onClick={() => setMenuOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-[#ff004f] backdrop-blur-xl shadow-xl p-5 z-50 transition-all duration-300">
          <button
            className="text-black text-3xl mb-5"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className="space-y-6">
            {["Home", "Services", "About", "Contact", "Portfolio"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-black text-xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
