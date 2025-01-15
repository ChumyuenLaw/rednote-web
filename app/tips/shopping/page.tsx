import { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shopping Tips for Xiaohongshu | RedNote',
  description: 'Smart shopping tips for Xiaohongshu (RED). Learn how to find deals, verify authentic products, compare prices, and shop safely on the platform.',
  keywords: 'Xiaohongshu shopping tips, RED shopping guide, find deals, authentic products, price comparison, safe shopping, Chinese shopping tips',
};

export default function ShoppingTipsPage() {
  const tips = [
    {
      title: "Finding the Best Deals",
      content: `
        • Use the price comparison feature
        • Follow official brand stores
        • Check seasonal sales and promotions
        • Set price alerts for desired items
        • Look for bundle deals
        • Compare prices across sellers
        • Check shipping costs
      `,
      icon: "🏷️"
    },
    {
      title: "Verifying Authenticity",
      content: `
        • Check seller ratings and reviews
        • Look for official store badges
        • Verify product authentication marks
        • Compare with official retail prices
        • Read buyer reviews carefully
        • Check product packaging details
        • Verify seller credentials
      `,
      icon: "✅"
    },
    {
      title: "Reading Reviews",
      content: `
        • Look for detailed reviews
        • Check photo reviews
        • Read recent feedback
        • Note common issues mentioned
        • Check size/fit comments
        • Verify purchase dates
        • Compare multiple reviews
      `,
      icon: "📝"
    },
    {
      title: "Safe Payment",
      content: `
        • Use RED's secure payment system
        • Never pay outside the platform
        • Keep payment records
        • Check return policies
        • Understand buyer protection
        • Verify payment methods
        • Save transaction details
      `,
      icon: "💳"
    },
    {
      title: "Smart Shopping",
      content: `
        • Create shopping lists
        • Save items for later
        • Track price history
        • Compare similar items
        • Check shipping options
        • Read product specifications
        • Verify stock availability
      `,
      icon: "🛒"
    },
    {
      title: "After Purchase",
      content: `
        • Track your order
        • Save order details
        • Check delivery status
        • Know return windows
        • Document any issues
        • Rate and review
        • Contact seller if needed
      `,
      icon: "📦"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/tips" className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-8">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tips
        </Link>

        <h1 className="text-4xl font-bold mb-6">Shopping Tips</h1>
        <p className="text-xl text-gray-600 mb-12">
          Master the art of smart and safe shopping on RED Note with these expert tips
        </p>

        <div className="grid gap-8">
          {tips.map((tip) => (
            <div 
              key={tip.title}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{tip.icon}</span>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{tip.title}</h2>
                  </div>
                </div>
                <div className="mt-4 pl-12">
                  <div className="prose prose-gray max-w-none">
                    {tip.content.split('\n').map((line, index) => (
                      <p key={index} className="my-2 text-gray-700">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Pro Shopping Tip</h3>
          <p className="text-gray-700 mb-4">
            Always save screenshots of product descriptions, prices, and seller promises. This documentation can be helpful if you need to resolve any issues later.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/tips/lifestyle" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Explore Lifestyle & Travel tips
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 