import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative min-h-[100svh] w-full overflow-x-hidden">
      <div
        id="hero-frame"
        className="relative z-10 min-h-[100svh] w-full overflow-hidden rounded-lg bg-blue-75"
      >
        <img
          src="/img/hero.JPG"
          alt="Corporate Planning 2026"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <h1 className="special-font hero-heading absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 text-blue-75 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          20<b>2</b>6
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 md:px-10">
            <h1 className="special-font hero-heading text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="bg-black/90 px-2 py-1">
                CORPORATE PLA<b>N</b>NING
              </span>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-sm sm:text-base md:text-lg">
              <span className="bg-black/90 px-2 py-1 inline-block">
                Rooted Responsibility,
              </span>
              <br />
              <span className="bg-black/90 px-2 py-1 inline-block mt-1">
                Flourishing Transformation
              </span>
            </p>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-3 right-3 sm:bottom-5 sm:right-5 text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        20<b>2</b>6
      </h1>
    </div>
  );
};

export default Hero;
