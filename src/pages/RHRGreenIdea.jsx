import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";

// Sample data for papers - replace with actual data
const papers = [
  {
    id: 1,
    title: "Sustainability dalam hubungan dengan metode dan teknik penilaian",
    author: "Halim Rusli , Kantor Pusat",
    image: "/img/papers/paper1.jpg",
    driveLink:
      "https://drive.google.com/file/d/1uwWlD8Yu6v0oQd_rOxngrymbdZIY2i3o/view?usp=drive_link",
    description: "Exploring eco-friendly practices in corporate environments",
  },
  {
    id: 2,
    title: "Sustainability dalam kegiatan Perkantoran dan Kepegawaian RHR",
    author: "Pamela Ribka, Kantor Pusat",
    image: "/img/papers/paper2.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/1NfPiHB_Bef4E589rL2WdajzC9bBaqdpT/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
    description: "A comprehensive analysis of emission reduction methods",
  },
  {
    id: 3,
    title: "Sustainability dalam hubungan dengan metode dan teknik penilaian",
    author: "Nurul Hidayat, Kantor Cabang Medan",
    image: "/img/papers/paper3.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/1n9FC4CnYfwIkJWNBRfqnE-vkf4xP4qQv/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
    description: "Leveraging technology for sustainable business practices",
  },
  {
    id: 4,
    title: "Sustainability Kepegawaian dan Perkantoran",
    author: "Subarno, Kantor Cabang Yogyakarta",
    image: "/img/papers/paper4.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/1z1yQJK_tl63X7jDIInUnYU2Pe1GjlCOt/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
    description: "Developing robust assessment methodologies",
  },
  {
    id: 5,
    title: "Sustainability Dalam Hubungan Dengan Metode Dan Teknik Penilaian",
    author: "Jamaluddin Al Afgani, Kantor Cabang Makassar",
    image: "/img/papers/paper5.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/1MxJizcMrIMkA9_764n1ptkphOip1loJc/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
    description: "Implementing circular economy concepts",
  },
  {
    id: 6,
    title: "Sustainability dalam hubungan efisiensi anggaran",
    author: "Henry Setyawan Oktavianus, Kantor Cabang Surabaya",
    image: "/img/papers/paper6.jpg",
    driveLink:
      "https://drive.google.com/file/d/1Tdz1uAf_eBPhN_2kBlhwsr9UWGPhsa4b/view?usp=drive_link",
    description: "Transitioning to sustainable energy sources",
  },
  {
    id: 7,
    title:
      "Sustainability dalam hubungan dengan proses dalam pelaksanaan penilaian",
    author: "Nurmiyanti, Kantor Cabang Semarang",
    image: "/img/papers/paper6.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/17xRYGCA5ZBkQFnUqG7uopfUn7ow5Gnbp/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
    description: "Transitioning to sustainable energy sources",
  },
  {
    id: 8,
    title:
      "Sustainability dalam hubungan dengan proses dalam pelaksanaan penilaian",
    author: "Eni Sumansari N, Kantor Cabang Bandung",
    image: "/img/papers/paper6.jpg",
    driveLink:
      "https://docs.google.com/presentation/d/17CbEd-i0tdtqXjDdtTnunhmnn0PQ7cRx/edit?usp=drive_link&ouid=112233642586268936798&rtpof=true&sd=true",
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

                  {/* <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {paper.description}
                  </p> */}

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
