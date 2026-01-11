function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/70 via-yellow-100 to-white" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Travel, the local way 🌍
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
            We connect travellers with real people, real homes, and real
            experiences — because travel should feel personal.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <p className="text-lg text-slate-700 leading-relaxed">
          <strong>LocalStay</strong> was created to bring back the human side of
          travel. Instead of anonymous hotels, we help travellers stay with
          trusted local hosts and experience destinations the way locals do.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Hosts can share their homes with confidence, manage bookings easily,
          and earn with dignity. Travellers get access to comfortable, affordable
          stays and meaningful connections — not just rooms.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Everything we build is guided by simplicity, trust, and respect for
          local communities.
        </p>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              🏠 For Hosts
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Earn by sharing your space, manage bookings with ease, and welcome
              guests from around the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              🧳 For Travellers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stay safely with locals, explore beyond tourist paths, and feel at
              home wherever you go.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              🤍 Our Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To make travel more human, more trusted, and more connected to
              local communities.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
