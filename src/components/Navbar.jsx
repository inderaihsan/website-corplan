import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

import Button from "./Button";

const navItems = [
  { name: "Rundown Kegiatan", path: "/rundown-kegiatan" },
  { name: "Gallery", path: "/gallery" },
  { name: "RHR Green Idea", path: "/rhr-green-idea" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-9 sm:top-6 md:top-4 z-50 h-auto md:h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full flex-col items-center justify-between gap-2 p-2 sm:flex-row md:p-4">
          {/* Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="logo"
                className="w-20 sm:w-28 md:w-36 lg:w-44"
              />
            </Link>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex w-full items-center justify-center sm:w-auto sm:justify-end">
            <div className="flex flex-wrap justify-center gap-2 md:gap-0">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="nav-hover-btn text-[0.6rem] sm:text-xs md:text-sm whitespace-nowrap px-1 md:px-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-4 md:ml-10 hidden sm:flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
