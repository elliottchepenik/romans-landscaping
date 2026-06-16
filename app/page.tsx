"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-md bg-white/70 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="font-bold text-lg">
              Roman's Lawn & Landscaping
            </div>

            <div className="hidden md:flex gap-6 text-sm text-gray-700">
              <a href="#services">Services</a>
              <a href="#quote">Quote</a>
              <a href="#reviews">Reviews</a>
            </div>

            <a
              href="tel:443-996-2397"
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 flex items-center justify-center text-center px-6 py-32 bg-[url('/lawn.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Roman's Lawn & Landscaping
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            Family Owned & Operated Since 1986
          </p>

          <p className="mt-2 text-lg text-gray-300">
            ⭐⭐⭐⭐⭐ 4.9 Star Rating | Trusted by Local Homeowners
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4439962397"
              className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
            >
              Call Now
            </a>

            <a
              href="#quote"
              className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Get Free Estimate
              
            </a>
            
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Lawn Maintenance",
            "Mulching",
            "Landscape Design",
            "Shrub Trimming",
            "Seasonal Cleanup",
            "Hardscaping",
          ].map((service) => (
            <div
              key={service}
              className="p-6 rounded-2xl border hover:shadow-lg transition bg-white"
            >
              <h3 className="font-semibold text-xl">{service}</h3>
              <p className="text-gray-500 mt-2">
                Professional {service.toLowerCase()} services tailored to your property.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-green-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold">
          Get Your Free Estimate Today
        </h2>
        <p className="mt-2 text-lg text-green-100">
          Fast response • Local experts • No obligation
        </p>

        <a
          href="#quote"
          className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold"
        >
          Request Quote
        </a>
      </section>

      {/* CONTACT */}
      {/* REVIEWS */}
<section id="reviews" className="py-20 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4">
      What Our Customers Say
    </h2>

    <p className="text-center text-gray-600 mb-12">
      ⭐⭐⭐⭐⭐ 4.9 Star Rating • Family Owned Since 1986
    </p>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
  <div className="text-yellow-500 text-xl mb-3">
    ★★★★★
  </div>

  <p className="text-gray-700 mb-4">
    "This is the second year we have had Roman and his team come out and do our landscaping. We couldn't be happier with how it has turned out each time."
  </p>

  <p className="font-semibold">
    Austin Whitcomb
  </p>
</div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="text-yellow-500 text-xl mb-3">
          ★★★★★
        </div>

        <p className="text-gray-700 mb-4">
          "I have used Roman's Landscaping for the last few years and this is because they are simply the best. Roman communicates well and his team delivers top-notch landscaping every time."
        </p>

        <p className="font-semibold">
          Caleb Sanders
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="text-yellow-500 text-xl mb-3">
          ★★★★★
        </div>

        <p className="text-gray-700 mb-4">
          "Roman and his team were great! They cleared flower beds, removed shrubs and overgrowth, and laid fresh mulch. We were extremely happy with the results."
        </p>

        <p className="font-semibold">
          Shane Mastronardi
        </p>
      </div>

    </div>
  </div>
</section>
      <section id="quote" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Request a Quote
        </h2>

        <form
  className="grid gap-4"
  onSubmit={async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Quote request sent!");
  }}
>
          <input
  className="border p-3 rounded-lg"
  placeholder="Name"
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
/>
          <input
            className="border p-3 rounded-lg"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
          <input
            className="border p-3 rounded-lg"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <textarea
  className="border p-3 rounded-lg"
  placeholder="What do you need help with?"
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
/>

          <button className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
            Submit Request
          </button>
        </form>
      </section>

    </main>
  );
}