import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";

// Sample data for papers - replace with actual data
const papers = [
  {
    id: 1,
    title: "Sustainable Office Practices for Modern Consulting Firms",
    author: "John Doe",
    image: "/img/papers/paper1.jpg",
    driveLink: "https://drive.google.com/file/d/example1",
    description: "Exploring eco-friendly practices in corporate environments",
  },
  {
    id: 2,
    title: "Carbon Footprint Reduction Strategies",
    author: "Jane Smith",
    image: "/img/papers/paper2.jpg",
    driveLink: "https://drive.google.com/file/d/example2",
    description: "A comprehensive analysis of emission reduction methods",
  },
  {
    id: 3,
    title: "Green Technology Integration in Audit Processes",
    author: "Michael Chen",
    image: "/img/papers/paper3.jpg",
    driveLink: "https://drive.google.com/file/d/example3",
    description: "Leveraging technology for sustainable business practices",
  },
  {
    id: 4,
    title: "Environmental Impact Assessment Framework",
    author: "Sarah Williams",
    image: "/img/papers/paper4.jpg",
    driveLink: "https://drive.google.com/file/d/example4",
    description: "Developing robust assessment methodologies",
  },
  {
    id: 5,
    title: "Circular Economy Principles in Professional Services",
    author: "David Brown",
    image: "/img/papers/paper5.jpg",
    driveLink: "https://drive.google.com/file/d/example5",
    description: "Implementing circular economy concepts",
  },
  {
    id: 6,
    title: "Renewable Energy Adoption in Corporate Settings",
    author: "Emily Davis",
    image: "/img/papers/paper6.jpg",
    driveLink: "https://drive.google.com/file/d/example6",
    description: "Transitioning to sustainable energy sources",
  },
];

function RHRGreenIdea() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-black">
        <div className="container mx-auto px-5 py-32">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="RHR Green Idea"
              containerClass="text-center mb-8"
            />
            <p className="text-gray-300 mt-5 text-xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              A curated collection of sustainability research and green
              initiatives by KJPP RHR employees, driving innovation in
              environmental responsibility and corporate sustainability.
            </p>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="group relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600"
                onMouseEnter={() => setHoveredCard(paper.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-800 overflow-hidden">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%234B5563'%3EResearch Paper%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-lg font-light tracking-wide mb-2 line-clamp-2 min-h-[3.5rem]">
                    {paper.title}
                  </h3>

                  <p className="text-gray-400 text-sm font-light tracking-wider mb-4">
                    by {paper.author}
                  </p>

                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {paper.description}
                  </p>

                  {/* Access Button */}
                  <a
                    href={paper.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-transparent border border-gray-700 px-6 py-2.5 rounded text-sm font-light tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Access Paper
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 border-2 border-white rounded-lg pointer-events-none transition-opacity duration-300 ${
                    hoveredCard === paper.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-20 pb-10">
            <p className="text-gray-500 text-sm font-light tracking-wide">
              Contributions from KJPP RHR team members
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default RHRGreenIdea;
