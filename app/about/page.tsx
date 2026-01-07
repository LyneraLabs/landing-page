import Link from 'next/link';

export const metadata = {
  title: 'About Us - Lynera',
  description: 'Learn about Lynera, our mission, vision, and how we are shaping the future of technology.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">
            About Lynera
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn">
            Building the future of technology, one innovation at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Lynera, our mission is to empower developers and businesses with cutting-edge technology solutions that drive innovation and efficiency. We believe in creating tools that not only solve problems but inspire creativity and push the boundaries of what&apos;s possible in software development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where technology seamlessly integrates with human creativity, enabling everyone to build, innovate, and transform their ideas into reality. Lynera aims to be at the forefront of this transformation, creating an ecosystem of products that work together to make development faster, smarter, and more accessible.
            </p>
          </div>
        </div>
      </section>

      {/* About Lynera as Umbrella Company */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Makes Lynera Unique
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Umbrella Structure
              </h3>
              <p className="text-gray-400">
                Lynera operates as an umbrella company, housing multiple innovative products and services under one roof. This structure allows us to foster synergies between our projects while maintaining focused teams for each product.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Innovation First
              </h3>
              <p className="text-gray-400">
                We prioritize innovation in everything we do. Our research and development efforts are constantly exploring new technologies and methodologies to create products that truly make a difference.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Community Driven
              </h3>
              <p className="text-gray-400">
                We believe in the power of community. Many of our projects are open source, and we actively engage with developers worldwide to create better solutions together.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Quality & Reliability
              </h3>
              <p className="text-gray-400">
                Every product we create is built with quality and reliability at its core. We use industry best practices and maintain rigorous testing standards to ensure our solutions perform flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every line of code and every user interaction
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
              <p className="text-gray-400">
                Open communication and honest practices are fundamental to our operations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-400">
                Continuous learning and improvement drive us forward every day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you&apos;re a developer, partner, or enthusiast, we&apos;d love to connect with you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 gradient-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </Link>
            <Link
              href="/staff"
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-900/20 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lynera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
