import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import Header from "components/views/Header";
import Crew from "pages/Crew";
import Destination from "pages/Destination";
import Home from "pages/Home";
import Technology from "pages/Technology";

import SpaceData from "configs/spaceDataConfig";
import { getImagePath } from "utils/url";
import useMedia from "hooks/useMedia";

function App() {
  const { destinations, crews, technologies } = SpaceData;

  const pathname = useLocation().pathname;

  const [background, setBackground] = useState<string>();

  const mobileMatch = useMedia("(max-width: 768px)");
  const laptopMatch = useMedia("(min-width: 1024px)");

  useLayoutEffect(() => {
    mobileMatch
      ? setBackground(getImagePath(pathname, "mobile"))
      : setBackground(getImagePath(pathname, "tablet"));

    laptopMatch ? setBackground(getImagePath(pathname, "desktop")) : null;
  }, [mobileMatch, laptopMatch, pathname]);

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "100% 100%",
      }}
      className="w-screen min-h-screen text-white bg-no-repeat grid grid-rows-[5rem_1fr] 
      md:grid-rows-[6rem_1fr] lg:grid-rows-[10rem_1fr]"
    >
      <header className="row-start-1 row-end-2 fixed w-full lg:py-[5vh]">
        <Header />
      </header>
      <main className="row-start-2 row-end-3">
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="destination"
              element={<Destination destinations={destinations} />}
            />
            <Route path="crew" element={<Crew crews={crews} />} />
            <Route
              path="technology"
              element={<Technology technologies={technologies} />}
            />
          </Routes>
        }
      </main>
    </div>
  );
}

export default App;
