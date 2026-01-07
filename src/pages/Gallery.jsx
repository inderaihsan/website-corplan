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
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-violet-300 via-blue-300 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-blue-200 opacity-20" />

        <div ref={heroRef} className="container mx-auto px-5 py-32 relative z-10">
          <AnimatedTitle
            title="Gallery Event"
            containerClass="text-center mb-8"
          />
          <p className="text-center text-blue-50 mt-5 text-xl max-w-2xl mx-auto mb-12">
            Dokumentasi Corporate Planning KJPP RHR 2026
          </p>

          {/* Slideshow Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] bg-blue-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                ref={imageRef}
                key={currentIndex}
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-blue-200/80 text-blue-50 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="font-bold">
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
                      ? "w-12 h-3 bg-violet-300"
                      : "w-3 h-3 bg-blue-100 hover:bg-blue-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <p className="text-center text-blue-50 mt-6 text-sm">
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
