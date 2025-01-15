import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-red-100 to-pink-100"></div>
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-light text-gray-800 mb-8">
              Your Guide to Xiaohongshu
              <span className="text-red-500">.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Master China's top lifestyle platform with our comprehensive guides and tutorials for international users.
            </p>
            <Link
              href="/getting-started"
              className="inline-block bg-red-400 text-white px-8 py-3 rounded-lg hover:bg-red-500 transition-colors backdrop-blur-sm"
            >
              Start Learning
            </Link>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </section>
      
      <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to RED Guide</h1>
        <p className="text-xl mb-12 text-center max-w-2xl">
          Discover RED: Your Gateway to China's Most Influential Social Commerce Platform - Where Lifestyle Trends Meet Authentic Reviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Getting Started */}
          <Link href="/getting-started" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
            <p className="text-gray-600">New to RED? Learn the basics and set up your account.</p>
          </Link>

          {/* Features & Tools */}
          <Link href="/features" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Features & Tools</h2>
            <p className="text-gray-600">Discover RED's powerful features and how to use them.</p>
          </Link>

          {/* Content Creation */}
          <Link href="/content-creation" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Content Creation</h2>
            <p className="text-gray-600">Learn how to create engaging content that resonates.</p>
          </Link>

          {/* Shopping Guide */}
          <Link href="/shopping" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Shopping Guide</h2>
            <p className="text-gray-600">Navigate RED's shopping features like a pro.</p>
          </Link>

          {/* Safety & Privacy */}
          <Link href="/safety" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Safety & Privacy</h2>
            <p className="text-gray-600">Stay safe and protect your privacy on RED.</p>
          </Link>

          {/* FAQ */}
          <Link href="/faq" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
            <p className="text-gray-600">Find answers to commonly asked questions.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
