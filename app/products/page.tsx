import Link from 'next/link';

export const metadata = {
  title: 'Products - Lynera',
  description: 'Explore our innovative products including EngX, our flagship engineering platform.',
};

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">
            Our Products
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn">
            Discover our suite of innovative solutions designed to empower developers and transform businesses
          </p>
        </div>
      </section>

      {/* Flagship Product - EngX */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Flagship Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="px-4 py-2 gradient-purple text-white text-sm font-bold rounded-full shadow-lg">
                FLAGSHIP PRODUCT
              </span>
            </div>

            {/* EngX Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-violet-900/30 border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon/Logo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 gradient-purple rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    EngX
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Our flagship engineering platform that puts your knowledge to the test.
                  </p>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">Advanced Learning Tools</h4>
                        <p className="text-gray-400 text-sm">Integrated Analytics and Hints optimized with AI</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">Seamless Integration</h4>
                        <p className="text-gray-400 text-sm">Works with your existing workflow</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">Performance Optimized</h4>
                        <p className="text-gray-400 text-sm">Built for speed and efficiency</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">Free to Use</h4>
                        <p className="text-gray-400 text-sm">No upgrade needed to improve your skills</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://new-engx.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 gradient-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Start Learning Today
                    </a>
                    <button className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            More Products Coming Soon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-violet-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lynera Hosting</h3>
              <p className="text-gray-400 mb-4">
                High Preformance Web Hosting with a price that won't hold you back
              </p>
              <span className="text-purple-400 text-sm font-semibold">Coming Soon...</span>
            </div>

            {/* Placeholder Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-violet-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Lab</h3>
              <p className="text-gray-400 mb-4">
                Experimental projects and cutting-edge technology in the pipeline.
              </p>
              <span className="text-purple-400 text-sm font-semibold">In Development</span>
            </div>

            {/* Placeholder Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-violet-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Platform Tools</h3>
              <p className="text-gray-400 mb-4">
                Additional tools and services to enhance your development experience.
              </p>
              <span className="text-purple-400 text-sm font-semibold">Planned</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have an Idea for a New Product?
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;re always open to collaboration and new ideas. Get in touch with our team!
          </p>
          <Link
            href="/staff"
            className="inline-block px-8 py-4 gradient-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Team
          </Link>
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
