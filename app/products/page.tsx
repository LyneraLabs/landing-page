import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  status: 'Released' | 'Beta' | 'Coming Soon';
  url?: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'EngX',
    description: 'A powerful engineering tool designed to streamline your workflow and boost team productivity.',
    longDescription: 'EngX is our flagship product, built to help engineering teams work more efficiently and collaboratively. It provides a comprehensive suite of tools for project management, code collaboration, and technical documentation. With EngX, teams can seamlessly coordinate their efforts, track progress in real-time, and maintain high-quality documentation that grows with their projects. The platform is designed with modern engineering workflows in mind, offering intuitive interfaces and powerful automation to reduce manual overhead.',
    status: 'Released',
    url: 'https://github.com/ZachG05/new-engx',
    features: [
      'Advanced project management with customizable workflows',
      'Real-time collaboration with team members across time zones',
      'Integrated documentation that stays synchronized with your code',
      'Performance analytics and insights to optimize team productivity',
      'Team coordination tools including chat, video calls, and shared boards',
      'Git integration for seamless version control',
    ],
  },
  // Add more products here as they are released
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with passion and expertise. 
            Each product is crafted to solve real problems and empower teams to achieve more.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-all hover:shadow-xl"
            >
              <div className="p-10 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">{product.description}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-base font-medium whitespace-nowrap self-start ${
                      product.status === 'Released'
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : product.status === 'Beta'
                        ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                        : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="text-lg text-gray-300 mb-10 leading-relaxed">{product.longDescription}</p>

                <div className="mb-10">
                  <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-[#0a0a0a] rounded-lg">
                        <svg
                          className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-base leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
                  >
                    View on GitHub
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 p-12 md:p-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 text-center">
          <h3 className="text-4xl font-bold mb-6">More products coming soon!</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re constantly working on new innovative solutions to help teams work smarter and more efficiently. 
            Stay tuned for exciting updates and new product launches throughout the year.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-all hover:scale-105"
          >
            Learn About Lynera
          </Link>
        </div>
      </section>
    </main>
  );
}
