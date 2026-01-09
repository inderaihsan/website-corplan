import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";
import participantsData from "../../participants.json";

function Participants() {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [filteredParticipants, setFilteredParticipants] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    // Extract unique branches
    const uniqueBranches = [
      "All",
      ...new Set(participantsData.map((p) => p.Cabang)),
    ];
    setBranches(uniqueBranches);
    setFilteredParticipants(participantsData);
  }, []);

  useEffect(() => {
    // Filter participants based on selected branch
    if (selectedBranch === "All") {
      setFilteredParticipants(participantsData);
    } else {
      setFilteredParticipants(
        participantsData.filter((p) => p.Cabang === selectedBranch)
      );
    }
  }, [selectedBranch]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-black">
        <div className="container mx-auto px-5 py-32">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Corporate Planning Participants"
              containerClass="text-center mb-8"
            />
            <p className="text-gray-300 mt-5 text-xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              Complete list of participants for KJPP RHR Corporate Planning 2026
            </p>
          </div>

          {/* Branch Filter */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-gray-400 font-light tracking-wide text-sm uppercase mr-2">
                Filter by Branch:
              </span>
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-6 py-2.5 rounded text-sm font-light tracking-wider transition-all duration-300 ${
                    selectedBranch === branch
                      ? "bg-white text-black"
                      : "bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-300"
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          {/* Participants Count */}
          <div className="max-w-6xl mx-auto mb-6">
            <p className="text-gray-500 text-sm font-light tracking-wide text-center">
              Showing {filteredParticipants.length} participant
              {filteredParticipants.length !== 1 ? "s" : ""}
              {selectedBranch !== "All" && ` from ${selectedBranch}`}
            </p>
          </div>

          {/* Participants Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
              <thead className="bg-gray-800/50 text-white border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase w-20">
                    No
                  </th>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase w-40">
                    Branch
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                {filteredParticipants.map((participant, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-gray-800/30"
                  >
                    <td className="px-6 py-4 font-light tracking-wide text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-light tracking-wide">
                      {participant.Nama}
                    </td>
                    <td className="px-6 py-4 font-light tracking-wide">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs tracking-wider border border-gray-700">
                        {participant.Cabang}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No Results */}
          {filteredParticipants.length === 0 && (
            <div className="max-w-6xl mx-auto mt-12 text-center">
              <p className="text-gray-500 font-light tracking-wide">
                No participants found for the selected branch
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Participants;
