// function Contact() {
//   return (
//     <div className="bg-white min-h-screen">

//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/70 via-yellow-200 to-white" />
//         <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
//             Let’s talk 🤍
//           </h1>
//           <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
//             Questions about hosting, travelling, or guiding?  
//             We’re real people — and we love helping.
//           </p>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-5 gap-20">

//         {/* LEFT — MESSAGE */}
//         <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
//           <h2 className="text-3xl font-bold text-slate-900">
//             Support, made human.
//           </h2>

//           <p className="text-slate-600 leading-relaxed">
//             Whether you’re opening your home to guests or planning your next
//             journey, we’re here to make things simple, safe, and personal.
//           </p>

//           <div className="space-y-6 text-sm">
//             <div>
//               <h4 className="font-semibold text-slate-900">🏠 Hosts</h4>
//               <p className="text-slate-600">
//                 Listings, pricing, bookings, and hosting tips.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-semibold text-slate-900">🧳 Travellers</h4>
//               <p className="text-slate-600">
//                 Stays, payments, safety, and experiences.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-semibold text-slate-900">🧭 Local Guides</h4>
//               <p className="text-slate-600">
//                 Tours, visibility, and traveller connections.
//               </p>
//             </div>
//           </div>

//           <div className="pt-6 text-sm text-slate-600">
//             ✉️ support@localstay.app <br />
//             ⏱ Usually replies within 24 hours
//           </div>
//         </div>

//         {/* RIGHT — FORM */}
//         <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-10">
//           <h3 className="text-2xl font-semibold text-slate-900 mb-8">
//             Send us a message
//           </h3>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-2">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 I am a
//               </label>
//               <select className="w-full rounded-xl border px-4 py-3">
//                 <option>Traveller</option>
//                 <option>Host</option>
//                 <option>Guide</option>
//               </select>
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-2">
//                 Message
//               </label>
//               <textarea
//                 rows={5}
//                 placeholder="Tell us what’s on your mind…"
//                 className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//               />
//             </div>

//             <div className="md:col-span-2 pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
//               >
//                 Send message
//               </button>
//             </div>

//           </form>
//         </div>

//       </section>
//     </div>
//   );
// }

// export default Contact;


function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/80 via-yellow-100 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            We’re here for you
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
            Hosting a home, planning a journey, or guiding travellers —
            we’re always happy to help.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-5 gap-20">

        {/* LEFT — BRAND MESSAGE */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Support, the LocalStay way.
          </h2>

          <p className="text-slate-600 leading-relaxed">
            At <strong>LocalStay</strong>, travel is about people — not platforms.
            Whether you’re welcoming guests or discovering new places,
            we’re here to make every step simple and safe.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900">🏠 Hosts</h4>
              <p className="text-slate-600">
                Listings, pricing, bookings, and hosting guidance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">🧳 Travellers</h4>
              <p className="text-slate-600">
                Stays, payments, safety, and local experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">🧭 Local Guides</h4>
              <p className="text-slate-600">
                Tours, visibility, and connecting with travellers.
              </p>
            </div>
          </div>

          <div className="pt-6 text-sm text-slate-600">
            ✉️ support@localstay.app <br />
            ⏱ Usually responds within 24 hours
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">
            Send us a message
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                I am a
              </label>
              <select className="w-full rounded-xl border px-4 py-3">
                <option>Traveller</option>
                <option>Host</option>
                <option>Guide</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help…"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Send message
              </button>
            </div>

          </form>
        </div>

      </section>
    </div>
  );
}

export default Contact;
