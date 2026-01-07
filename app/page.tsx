import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-6xl font-bold tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Lynera</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            An umbrella company creating innovative technology solutions. 
            We build products that make a difference.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-400">
              We prioritize cutting-edge technology and innovative solutions in everything we build.
            </p>
          </div>

          <div className="p-8 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Our talented developers bring years of experience and passion to every project.
            </p>
          </div>

          <div className="p-8 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-400">
              We maintain the highest standards of quality in all our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our products and discover how Lynera can help you achieve your goals.
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}
