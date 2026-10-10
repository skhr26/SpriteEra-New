import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <p className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">Solutions</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Lighting Solutions for Every Application</h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
          From industrial facilities and warehouses to roads, offices and outdoor spaces, explore Vajra LED lighting solutions designed around real-world applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#solutions" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition">
            Explore Solutions →
          </Link>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-semibold transition">
            Get a Project Quote →
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
          <span>✔️ Wide Product Range</span>
          <span>✔️ Application Support</span>
          <span>✔️ Reliable Performance</span>
          <span>✔️ Technical Assistance</span>
        </div>
      </section>

      {/* 2. Solutions / Application Areas */}
      <section id="solutions" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Our Solutions</p>
          <h2 className="text-3xl font-bold mb-4">Find the Right Lighting Solution</h2>
          <p className="text-gray-600 mb-4 max-w-2xl">
            Every space has different lighting requirements. Explore our application-based solutions to find suitable lighting products for your project.
          </p>
          <Link href="/solutions" className="text-blue-600 font-semibold hover:underline">View All Solutions →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Industrial Lighting", desc: "Factories, manufacturing units, workshops.", link: "/solutions/industrial-lighting" },
            { title: "Warehouse Lighting", desc: "Warehouses, storage facilities, logistics.", link: "/solutions/warehouse-lighting" },
            { title: "Road & Street Lighting", desc: "Roads, streets, pathways, highways.", link: "/solutions/road-street-lighting" },
            { title: "Commercial Lighting", desc: "Offices, commercial buildings, retail spaces.", link: "/solutions/commercial-lighting" },
            { title: "Petrol Pump Lighting", desc: "Fuel stations, forecourts, service areas.", link: "/solutions/petrol-pump-lighting" },
            { title: "Hospital Lighting", desc: "Hospitals, clinics, healthcare facilities.", link: "/solutions/hospital-lighting" },
            { title: "School Lighting", desc: "Schools, colleges, educational institutions.", link: "/solutions/school-lighting" },
            { title: "Solar Lighting", desc: "Solar-powered lighting for off-grid applications.", link: "/solutions/solar-lighting" }
          ].map((sol, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition flex flex-col">
              <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{sol.desc}</p>
              <Link href={sol.link} className="text-blue-600 font-semibold hover:underline mt-auto">Explore Solution →</Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* 3. Product Recommendation CTA */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Solution?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Tell us about your application and our team can help you identify suitable lighting products for your requirement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/recommendation" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">
            Request Product Recommendation →
          </Link>
          <Link href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition">
            Talk to a Lighting Expert →
          </Link>
        </div>
      </section>

      {/* Adding remaining placeholders per the MD structure (Featured Products, Why Vajra, etc.) */}
      <section className="py-16 px-6 text-center">
         <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
         <p className="text-gray-600">Explore Vajra LED products commonly used across various applications.</p>
      </section>
      
      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">Let's Work Together</p>
        <h2 className="text-3xl font-bold mb-4">Have a Lighting Requirement?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Whether you need a single product or lighting for a complete project, our team is ready to help you find a suitable solution.
        </p>
        <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-semibold transition">
          Get a Project Quote →
        </Link>
      </section>
    </div>
  );
}
