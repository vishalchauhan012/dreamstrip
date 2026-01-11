import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Stay with Locals. <br />
              Travel Like You Belong.
            </h1>

            <p className="mt-4 text-gray-800 max-w-lg">
              Connect with trusted local hosts and guides. Find affordable stays,
              authentic experiences, and travel beyond hotels.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/explore"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800"
              >
                Explore Stays
              </Link>

              <Link
                to="/signup"
                className="border border-gray-900 px-6 py-3 rounded-md hover:bg-yellow-300"
              >
                Become a Host
              </Link>
            </div>
          </div>

          {/* Right (Visual Placeholder) */}
          <div className="hidden md:block">
            <div className="h-80 rounded-xl bg-white shadow-lg flex items-center justify-center text-gray-400">
              Image / Illustration
            </div>
          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Verified Hosts</h3>
            <p className="text-gray-600 text-sm">
              Real homes, real people, verified profiles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Local Guides</h3>
            <p className="text-gray-600 text-sm">
              Explore cities with people who know them best.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Affordable Travel</h3>
            <p className="text-gray-600 text-sm">
              Comfort without hotel pricing.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            <div>
              <div className="w-14 h-14 mx-auto bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                1
              </div>
              <h4 className="mt-4 font-semibold">Find a Stay</h4>
              <p className="text-sm text-gray-600">
                Search homes and guides by location.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                2
              </div>
              <h4 className="mt-4 font-semibold">Connect</h4>
              <p className="text-sm text-gray-600">
                Talk directly with hosts & guides.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                3
              </div>
              <h4 className="mt-4 font-semibold">Travel Local</h4>
              <p className="text-sm text-gray-600">
                Experience places like a local.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Share Your Space. Guide Your City.
        </h2>

        <p className="text-gray-300 mt-3">
          Earn by hosting or guiding travellers in your area.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-6 bg-yellow-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-300"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}

export default Home;
