import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Lynera</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            An umbrella company creating innovative technology solutions that empower teams and drive progress. 
            We build products that make a real difference in how people work and collaborate.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            At Lynera, we combine cutting-edge technology with user-centric design to deliver 
            exceptional tools and platforms. Our mission is to simplify complex workflows and 
            enable teams to focus on what truly matters—building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className="px-10 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
            >
              View Products
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-all hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Lynera</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re committed to excellence in everything we do, from product development to customer support
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Innovation First</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We prioritize cutting-edge technology and innovative solutions in everything we build. 
              Our team stays ahead of industry trends to deliver products that shape the future of work.
            </p>
          </div>

          <div className="p-10 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our talented developers bring years of experience and deep passion to every project. 
              We believe in continuous learning and pushing the boundaries of what&apos;s possible.
            </p>
          </div>

          <div className="p-10 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Quality Assured</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We maintain the highest standards of quality in all our products and services. 
              Every feature is thoroughly tested and refined to ensure exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 mb-12">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our products and discover how Lynera can help you achieve your goals. 
            Join countless teams already building amazing things with our tools.
          </p>
          <Link
            href="/products"
            className="inline-block px-10 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}
