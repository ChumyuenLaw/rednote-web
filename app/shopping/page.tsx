import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Guide on Xiaohongshu (RED) | RedNote',
  description: 'Learn how to shop safely and effectively on Xiaohongshu (RED). Find authentic products, compare prices, read reviews, and make secure purchases.',
  keywords: 'Xiaohongshu shopping, RED shopping guide, authentic products, price comparison, product reviews, secure payment, Chinese shopping',
};

export default function Shopping() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping on RED</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Getting Started with Shopping</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            RED combines social media with e-commerce, making it easy to discover and purchase products
            recommended by other users. Here's your guide to shopping safely and effectively on RED.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Shopping Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Product Search</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Search by keywords or categories</li>
              <li>Filter by price, brand, and ratings</li>
              <li>Browse trending products</li>
              <li>Save items to wishlist</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Product Reviews</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Read authentic user reviews</li>
              <li>View real product photos</li>
              <li>Check seller ratings</li>
              <li>Compare user experiences</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Shopping Safety</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Safety Tips</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Verify Sellers:</strong> Always check seller ratings and reviews before purchasing.
            </p>
            <p className="text-gray-600">
              <strong>Authentic Products:</strong> Look for official store badges and product authentication marks.
            </p>
            <p className="text-gray-600">
              <strong>Secure Payment:</strong> Only use RED's official payment system for transactions.
            </p>
            <p className="text-gray-600">
              <strong>Compare Prices:</strong> Check prices across different sellers and platforms.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Beauty & Skincare</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Korean skincare</li>
              <li>Japanese beauty</li>
              <li>Makeup products</li>
              <li>Natural skincare</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Fashion</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Women's clothing</li>
              <li>Accessories</li>
              <li>Bags & shoes</li>
              <li>Jewelry</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Lifestyle</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Home decor</li>
              <li>Stationery</li>
              <li>Digital gadgets</li>
              <li>Food & snacks</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 