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

    if (h > 0 && m > 0) return `${h} Hour${h > 1 ? 's' : ''} ${m} Minute${m > 1 ? 's' : ''}`;
    if (h > 0) return `${h} Hour${h > 1 ? 's' : ''}`;
    if (m > 0) return `${m} Minute${m > 1 ? 's' : ''}`;
    return "-";
  };

  // Location coordinates
  const locations = {
    "Menara Kuningan": { lat: -6.21823500333064, lng: 106.83068271853284 },
    "R Hotel Rancamaya": { lat: -6.658684469347514, lng: 106.82344828177779 }
  };

  const openMap = (locationName) => {
    const location = locations[locationName];
    if (location) {
      window.open(`https://www.google.com/maps?q=${location.lat},${location.lng}`, '_blank');
    }
  };

  const { event_name, pra_corporate_planning, corporate_planning } = rundownData;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-violet-300 to-blue-300 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/about.webp')] bg-cover bg-center opacity-5" />

        <div ref={heroRef} className="container mx-auto px-5 py-32 relative z-10">
          <h1 className="special-font hero-heading text-center text-blue-50 drop-shadow-lg">
            {event_name}
          </h1>
          <p className="text-center text-blue-50 mt-5 text-xl max-w-2xl mx-auto">
            Jadwal lengkap kegiatan Corporate Planning KJPP RHR 2026
          </p>
        </div>
      </section>

      {/* Pra Corporate Planning Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-5">
          <div className="mb-12">
            <AnimatedTitle
              title={pra_corporate_planning.title}
              containerClass="text-center mb-8"
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span className="text-lg">
                  {pra_corporate_planning.day}, 23 Januari 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <button
                  onClick={() => openMap("Menara Kuningan")}
                  className="text-lg text-white/80 hover:text-white transition-colors underline cursor-pointer"
                >
                  {pra_corporate_planning.location.venue}, {pra_corporate_planning.location.city}
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
            <table className="w-full overflow-hidden rounded-2xl bg-black/95 shadow-sm">
              <thead className="bg-white/5 text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Time</th>
                  <th className="px-5 py-4 text-left font-semibold">Duration</th>
                  <th className="px-5 py-4 text-left font-semibold">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/90">
                {pra_corporate_planning.agenda.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-white/5"
                  >
                    <td className="px-5 py-4 font-medium whitespace-nowrap">
                      {item.start}
                      {item.end && item.end !== "end" && ` - ${item.end}`}
                    </td>
                    <td className="px-5 py-4 text-white/70">
                      {formatDuration(item.duration)}
                    </td>
                    <td className="px-5 py-4 text-white/80">
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-px w-16 bg-white/20" />
          </div>
          <div className="mb-12">
            <AnimatedTitle
              title={corporate_planning.title}
              containerClass="text-center mb-8"
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <button
                  onClick={() => openMap("R Hotel Rancamaya")}
                  className="text-lg text-white/80 hover:text-white transition-colors underline cursor-pointer"
                >
                  {corporate_planning.location.venue}, {corporate_planning.location.city}
                </button>
              </div>
            </div>
          </div>

          {/* Days */}
          {corporate_planning.days.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-16">
              <div className="max-w-6xl mx-auto mb-8">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Hari {dayIndex + 1} - {day.day}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {new Date(day.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="max-w-6xl mx-auto overflow-x-auto">
                <table className="w-full overflow-hidden rounded-2xl bg-black/95 shadow-sm">
                  <thead className="bg-white/5 text-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-semibold">Time</th>
                      <th className="px-5 py-4 text-left font-semibold">Duration</th>
                      <th className="px-5 py-4 text-left font-semibold">Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/90">
                    {day.agenda.map((item, index) => (
                      <tr
                        key={index}
                        className="transition-colors hover:bg-white/5"
                      >
                        <td className="px-5 py-4 font-medium whitespace-nowrap">
                          {item.start}
                          {item.end && item.end !== "end" && ` - ${item.end}`}
                        </td>
                        <td className="px-5 py-4 text-white/70">
                          {formatDuration(item.duration)}
                        </td>
                        <td className="px-5 py-4 text-white/80">
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
