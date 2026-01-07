import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";

const galleryImages = [
  "/img/gallery/DSC05110.JPG",
  "/img/gallery/DSC05452.JPG",
  "/img/gallery/DSC05466.JPG",
  "/img/gallery/DSC05663.JPG",
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // Auto-switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fade animation when image changes
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        <div
          ref={heroRef}
          className="container mx-auto px-5 py-32 relative z-10"
        >
          <AnimatedTitle
            title="Gallery Event"
            containerClass="text-center mb-8"
          />
          <p className="text-center text-gray-300 mt-5 text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Dokumentasi Corporate Planning KJPP RHR 2026
          </p>

          {/* Slideshow Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <img
                ref={imageRef}
                key={currentIndex}
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded backdrop-blur-sm border border-gray-700">
                <span className="font-light tracking-wider text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-12 h-3 bg-white"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <p className="text-center text-gray-500 mt-6 text-sm font-light tracking-wide">
              Auto-playing every 5 seconds
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Gallery;
