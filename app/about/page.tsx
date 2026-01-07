import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Lynera</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are an umbrella company dedicated to creating innovative technology solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Lynera, we believe in the power of technology to transform ideas into reality. 
              Our mission is to develop innovative products that solve real-world problems and 
              empower individuals and teams to achieve their goals. We focus on creating 
              high-quality, user-centric solutions that make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">
                We constantly push boundaries and explore new technologies
              </p>
            </div>

            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-400 text-sm">
                Excellence in every line of code and every product feature
              </p>
            </div>

            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-400 text-sm">
                Creating solutions that make a real difference
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 p-8">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-300 mb-6">
              As an umbrella company, Lynera oversees the development and management of multiple 
              innovative technology products. We bring together talented developers, designers, 
              and strategists to create solutions that address real needs in the tech industry.
            </p>
            <p className="text-lg text-gray-300">
              Our flagship product, EngX, is just the beginning. We&apos;re continuously working on 
              new projects and improvements to help teams work smarter and more efficiently.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our products or meet the team behind Lynera
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/staff"
              className="px-8 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
