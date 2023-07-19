import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import MySkills from "./scenes/MySkills";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>

        {/* NOTE: LineGradient for separation */}
        {/* SKILLS */}
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full mb-32">
          <MySkills />
        </div>

        {/* PROJECTS */}
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>

        {/* Contact */}
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
