import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Lynera</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are an umbrella company dedicated to creating innovative technology solutions 
            that transform how teams work, collaborate, and achieve their goals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-10 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              At Lynera, we believe in the power of technology to transform ideas into reality. 
              Our mission is to develop innovative products that solve real-world problems and 
              empower individuals and teams to achieve their goals with greater efficiency and collaboration.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We focus on creating high-quality, user-centric solutions that make a meaningful impact 
              on how people work. Every product we build is designed with the end user in mind, 
              ensuring intuitive interfaces, powerful features, and seamless integration into existing workflows.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We constantly push boundaries and explore new technologies to stay at the forefront 
                of innovation, delivering solutions that shape the future.
              </p>
            </div>

            <div className="p-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Excellence in every line of code and every product feature. We never compromise 
                on quality, ensuring robust and reliable solutions.
              </p>
            </div>

            <div className="p-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Working together to achieve extraordinary results. We believe the best solutions 
                come from diverse teams working in harmony.
              </p>
            </div>

            <div className="p-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Impact</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Creating solutions that make a real difference in people&apos;s lives and work. 
                We measure success by the positive impact we create.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 p-10 md:p-12">
            <h2 className="text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              As an umbrella company, Lynera oversees the development and management of multiple 
              innovative technology products. We bring together talented developers, designers, 
              and strategists to create solutions that address real needs in the tech industry 
              and beyond.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Our approach combines cutting-edge technology with user-centric design principles. 
              We conduct extensive research, iterate rapidly based on feedback, and continuously 
              refine our products to ensure they deliver maximum value to our users.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our flagship product, EngX, is just the beginning. We&apos;re continuously working on 
              new projects and improvements to help teams work smarter, collaborate more effectively, 
              and achieve their goals with less friction and more joy.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to learn more?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our products to see what we&apos;ve built, or meet the talented team behind Lynera 
            who make it all possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-10 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
            >
              View Products
            </Link>
            <Link
              href="/staff"
              className="px-10 py-4 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-all hover:scale-105"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
