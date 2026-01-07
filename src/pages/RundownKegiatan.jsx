import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";
import rundownData from "../../rundown_kegiatan.json";

function RundownKegiatan() {
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

  // Format duration from "00:20" to "20 Minutes"
  const formatDuration = (duration) => {
    if (!duration) return "-";
    const [hours, minutes] = duration.split(":");
    const h = parseInt(hours);
    const m = parseInt(minutes);

    if (h > 0 && m > 0)
      return `${h} Hour${h > 1 ? "s" : ""} ${m} Minute${m > 1 ? "s" : ""}`;
    if (h > 0) return `${h} Hour${h > 1 ? "s" : ""}`;
    if (m > 0) return `${m} Minute${m > 1 ? "s" : ""}`;
    return "-";
  };

  // Location coordinates
  const locations = {
    "Menara Kuningan": { lat: -6.21823500333064, lng: 106.83068271853284 },
    "R Hotel Rancamaya": { lat: -6.658684469347514, lng: 106.82344828177779 },
  };

  const openMap = (locationName) => {
    const location = locations[locationName];
    if (location) {
      window.open(
        `https://www.google.com/maps?q=${location.lat},${location.lng}`,
        "_blank"
      );
    }
  };

  const { event_name, pra_corporate_planning, corporate_planning } =
    rundownData;

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
          <AnimatedTitle title={event_name} containerClass="text-center mb-8" />
          <p className="text-center text-gray-300 mt-5 text-xl max-w-2xl mx-auto font-light tracking-wide">
            Jadwal lengkap kegiatan Corporate Planning KJPP RHR 2026
          </p>
        </div>
      </section>

      {/* Pra Corporate Planning Section */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-5">
          <div className="mb-12">
            <AnimatedTitle
              title={pra_corporate_planning.title}
              containerClass="text-center mb-8"
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 mb-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-base font-light tracking-wide">
                  {pra_corporate_planning.day}, 23 Januari 2026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <button
                  onClick={() => openMap("Menara Kuningan")}
                  className="text-base font-light tracking-wide text-gray-400 hover:text-white transition-colors underline cursor-pointer"
                >
                  {pra_corporate_planning.location.venue},{" "}
                  {pra_corporate_planning.location.city}
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
              <thead className="bg-gray-800/50 text-white border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                {pra_corporate_planning.agenda.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-gray-800/30"
                  >
                    <td className="px-6 py-4 font-light tracking-wide whitespace-nowrap">
                      {item.start}
                      {item.end && item.end !== "end" && ` - ${item.end}`}
                    </td>
                    <td className="px-6 py-4 text-gray-400 font-light tracking-wide">
                      {formatDuration(item.duration)}
                    </td>
                    <td className="px-6 py-4 text-gray-300 font-light tracking-wide">
                      {item.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Corporate Planning Section */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gray-800" />
            <span className="h-2 w-2 rounded-full bg-gray-700" />
            <span className="h-px w-16 bg-gray-800" />
          </div>
          <div className="mb-12">
            <AnimatedTitle
              title={corporate_planning.title}
              containerClass="text-center mb-8"
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 mb-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <button
                  onClick={() => openMap("R Hotel Rancamaya")}
                  className="text-base font-light tracking-wide text-gray-400 hover:text-white transition-colors underline cursor-pointer"
                >
                  {corporate_planning.location.venue},{" "}
                  {corporate_planning.location.city}
                </button>
              </div>
            </div>
          </div>

          {/* Days */}
          {corporate_planning.days.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-16">
              <div className="max-w-6xl mx-auto mb-8">
                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center">
                  <h3 className="text-2xl font-light tracking-wide text-white mb-2">
                    Hari {dayIndex + 1} — {day.day}
                  </h3>
                  <p className="text-gray-400 text-base font-light tracking-wide">
                    {new Date(day.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="max-w-6xl mx-auto overflow-x-auto">
                <table className="w-full overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                  <thead className="bg-gray-800/50 text-white border-b border-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                        Time
                      </th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-sm uppercase">
                        Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-300">
                    {day.agenda.map((item, index) => (
                      <tr
                        key={index}
                        className="transition-colors hover:bg-gray-800/30"
                      >
                        <td className="px-6 py-4 font-light tracking-wide whitespace-nowrap">
                          {item.start}
                          {item.end && item.end !== "end" && ` - ${item.end}`}
                        </td>
                        <td className="px-6 py-4 text-gray-400 font-light tracking-wide">
                          {formatDuration(item.duration)}
                        </td>
                        <td className="px-6 py-4 text-gray-300 font-light tracking-wide">
                          {item.activity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default RundownKegiatan;
