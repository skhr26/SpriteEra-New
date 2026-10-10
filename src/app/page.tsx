import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-gray-900 font-sans text-center">
      <h1 className="text-4xl font-bold mb-4">Vajra LED Next.js Project</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        This is a basic scaffolding based on the markdown specifications provided. Navigate below to see the requested pages.
      </p>
      
      <div className="flex flex-col gap-4">
        <Link href="/solutions" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
          View Solutions Page
        </Link>
        <Link href="/solutions/industrial-lighting" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">
          View Industrial Lighting Page
        </Link>
      </div>
    </main>
  );
}
