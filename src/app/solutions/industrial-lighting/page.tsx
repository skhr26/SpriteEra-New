import Link from 'next/link';

export default function IndustrialLightingPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Breadcrumb */}
      <div className="py-4 px-6 max-w-7xl mx-auto text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link> → <Link href="/solutions" className="hover:text-blue-600">Solutions</Link> → <span className="font-semibold text-gray-900">Industrial Lighting</span>
      </div>

      {/* 2. Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <p className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">Solutions</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Lighting Solutions</h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
          Reliable lighting solutions for factories, manufacturing units, warehouses, workshops and other industrial environments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#products" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition">
            Explore Products →
          </Link>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-semibold transition">
            Get a Project Quote →
          </Link>
        </div>
      </section>

      {/* 3. Overview */}
      <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Overview</p>
          <h2 className="text-3xl font-bold mb-4">Lighting for Every Industrial Space</h2>
          <p className="text-gray-600 mb-6">
            Industrial spaces have different lighting requirements depending on the activity, ceiling height, environment and working conditions. Vajra LED offers lighting solutions suited to different areas of factories, warehouses, production spaces, workshops and other industrial facilities.
          </p>
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Talk to a Lighting Expert →</Link>
        </div>
        <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
          [Industrial Warehouse Image / Video Placeholder]
        </div>
      </section>

      {/* 4. Where Industrial Lighting Is Used */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Application Areas</p>
          <h2 className="text-3xl font-bold mb-8">Where Industrial Lighting is Used</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manufacturing Floors", desc: "Production lines, assembly areas and workspaces." },
              { title: "Warehouses", desc: "High-bay lighting for storage areas and aisles." },
              { title: "Loading Areas", desc: "Loading docks, material handling zones." },
              { title: "Outdoor Yards", desc: "Open areas, yards and facility perimeters." },
              { title: "Workshops", desc: "Workshops and smaller industrial work areas." },
              { title: "Internal Roads", desc: "Movement routes and internal access areas." },
              { title: "Parking Areas", desc: "Staff, visitor and vehicle parking areas." },
              { title: "Security & Entry", desc: "Entrances and facility boundaries." }
            ].map((app, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{app.desc}</p>
                <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Explore →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Project Support */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center border-t border-gray-200 mt-8">
        <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Project Support</p>
        <h2 className="text-3xl font-bold mb-4">Planning a Larger Industrial Project?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          From product selection to installation guidance, our team can support your project with lighting solutions, technical advice and product recommendations.
        </p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">
          Get a Project Quote →
        </Link>
      </section>
    </div>
  );
}
