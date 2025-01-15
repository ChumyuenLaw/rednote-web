export default function Shopping() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping on RED</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Shopping Features Overview</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            RED combines social media with e-commerce, allowing you to discover and purchase products
            directly through the platform. From beauty products to fashion items, RED offers a unique
            shopping experience with authentic reviews and user recommendations.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How to Shop</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">1. Finding Products</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Browse product reviews in your feed</li>
              <li>Search for specific items or brands</li>
              <li>Explore shopping categories</li>
              <li>Check product recommendations in posts</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">2. Product Research</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Read authentic user reviews</li>
              <li>View real product photos from users</li>
              <li>Compare prices across sellers</li>
              <li>Check product specifications and details</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">3. Making a Purchase</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Add items to your cart</li>
              <li>Select shipping options</li>
              <li>Choose payment method</li>
              <li>Track your order status</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Shopping Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Smart Shopping</h3>
            <div className="space-y-3 text-gray-600">
              <p>✓ Compare prices across different sellers</p>
              <p>✓ Check seller ratings and reviews</p>
              <p>✓ Look for authentic product verification</p>
              <p>✓ Save items to your wishlist for price tracking</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Buyer Protection</h3>
            <div className="space-y-3 text-gray-600">
              <p>✓ Secure payment processing</p>
              <p>✓ Authentic product guarantee</p>
              <p>✓ Return and refund policies</p>
              <p>✓ Customer service support</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Popular Shopping Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Beauty</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Skincare products</li>
              <li>• Makeup items</li>
              <li>• Beauty tools</li>
              <li>• Hair care</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Fashion</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Clothing</li>
              <li>• Accessories</li>
              <li>• Shoes</li>
              <li>• Bags</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Lifestyle</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Home decor</li>
              <li>• Electronics</li>
              <li>• Fitness gear</li>
              <li>• Travel accessories</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 