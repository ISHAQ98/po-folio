import { useEffect } from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />

          {!menuOpen && (
            <div
              onClick={() => setMenuOpen((open) => !open)}
              className={`text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono`}
            >
              <MdMenu />
            </div>
          )}

          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8 ">
              <a
                href="#home"
                className="text-gray-300 hover:text-lg hover:text-white transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-lg hover:text-white transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-lg hover:text-white transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-lg hover:text-white transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
