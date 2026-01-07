import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function RHRGreenIdea() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center bg-yellow-300">
        <div className="container mx-auto px-5 py-32">
          <h1 className="hero-heading text-center text-blue-200">
            RHR Green Idea
          </h1>
          <p className="text-center text-blue-200 mt-5 text-xl">
            Green initiatives and sustainability programs will be displayed here
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default RHRGreenIdea;
