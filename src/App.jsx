import { useState } from "react";

import Navbar from "./UI/Navbar";

import WelcomeScreenBackground from "./UI/WelcomeScreenBackground";
import MobileMenu from "./UI/MobileMenu";
import Home from "./sections/Home";
import AnimationWaves from "./UI/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AnimationFeedIn from "./UI/AnimationFeedIn";
import Footer from "./sections/Footer";

function App() {
  const [isShowingText, setIsShowingText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isShowingText && (
        <WelcomeScreenBackground onComplete={() => setIsShowingText(true)} />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isShowingText ? "opacity-100" : "opacity-0"
        }  text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimationFeedIn>
          <Home />
          <AnimationWaves />
        </AnimationFeedIn>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
