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
    description: 'A powerful engineering tool designed to streamline your workflow.',
    longDescription: 'EngX is our flagship product, built to help engineering teams work more efficiently. It provides a comprehensive suite of tools for project management, code collaboration, and technical documentation.',
    status: 'Released',
    url: 'https://github.com/ZachG05/new-engx',
    features: [
      'Advanced project management',
      'Real-time collaboration',
      'Integrated documentation',
      'Performance analytics',
      'Team coordination tools',
    ],
  },
  // Add more products here as they are released
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-400">
            Innovative solutions built with passion and expertise
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-400">{product.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'Released'
                        ? 'bg-green-500/10 text-green-500'
                        : product.status === 'Beta'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-blue-500/10 text-blue-500'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6">{product.longDescription}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">KEY FEATURES</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
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
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 text-center">
          <h3 className="text-2xl font-bold mb-2">More products coming soon!</h3>
          <p className="text-gray-400 mb-4">
            We&apos;re constantly working on new innovative solutions. Stay tuned for updates.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-2 bg-[#1a1a1a] text-white rounded-lg font-medium border border-[#2a2a2a] hover:bg-[#252525] transition-colors"
          >
            Learn About Lynera
          </Link>
        </div>
      </section>
    </main>
  );
}
