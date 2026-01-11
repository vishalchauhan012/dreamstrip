import { useState } from "react";

type Stay = {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  hostType: "Local Host" | "Guide";
};

const dummyStays: Stay[] = [
  {
    id: 1,
    title: "Cozy Local Home",
    location: "Jaipur",
    price: 1200,
    rating: 4.6,
    hostType: "Local Host",
  },
  {
    id: 2,
    title: "Heritage Stay",
    location: "Udaipur",
    price: 1800,
    rating: 4.8,
    hostType: "Guide",
  },
  {
    id: 3,
    title: "Budget Traveller Room",
    location: "Delhi",
    price: 900,
    rating: 4.4,
    hostType: "Local Host",
  },
];

function Explore() {
  const [location, setLocation] = useState("");

  const filteredStays = dummyStays.filter((stay) =>
    stay.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* SEARCH BAR */}
      <section className="bg-yellow-400 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md outline-none"
          />

          <button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800">
            Search
          </button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* FILTERS */}
        <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="font-semibold mb-4">Filters</h3>

          <div className="space-y-3 text-sm">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Local Hosts
            </label>

            <label className="block">
              <input type="checkbox" className="mr-2" />
              Guides
            </label>

            <label className="block">
              <input type="checkbox" className="mr-2" />
              Under ₹1500
            </label>
          </div>
        </aside>

        {/* STAYS GRID */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay) => (
            <div
              key={stay.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Stay Image
              </div>

              <div className="p-4">
                <h4 className="font-semibold">{stay.title}</h4>
                <p className="text-sm text-gray-500">{stay.location}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-yellow-500 font-bold">
                    ₹{stay.price} / night
                  </span>

                  <span className="text-sm text-gray-600">
                    ⭐ {stay.rating}
                  </span>
                </div>

                <span className="inline-block mt-3 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  {stay.hostType}
                </span>

                <button className="mt-4 w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Explore;
