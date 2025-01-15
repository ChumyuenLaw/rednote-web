import Link from 'next/link'

export default function ShoppingTipsPage() {
  const tips = [
    {
      title: "Finding Authentic Products",
      content: `
        How to verify product authenticity:
        • Check seller verification status
        • Look for official store badges
        • Read seller ratings and history
        • Verify product reviews with photos
        • Compare prices with official websites
        • Check product serial numbers
        • Look for authentic packaging details
        • Be cautious of extremely low prices
      `,
      icon: "✅"
    },
    {
      title: "Smart Price Comparison",
      content: `
        Tips for getting the best deals:
        • Use RED's price comparison tool
        • Check historical price trends
        • Compare prices across different sellers
        • Look for bundle deals
        • Watch for seasonal sales
        • Sign up for price drop alerts
        • Consider shipping costs
        • Check for available coupons
      `,
      icon: "💰"
    },
    {
      title: "Reading Reviews Effectively",
      content: `
        How to evaluate product reviews:
        • Focus on detailed reviews with photos
        • Look for verified purchase badges
        • Read both positive and negative reviews
        • Check review dates for relevance
        • Look for specific product details
        • Pay attention to size/fit comments
        • Consider similar use cases to yours
        • Watch review videos for better insight
      `,
      icon: "📝"
    },
    {
      title: "Secure Payment Methods",
      content: `
        Payment safety tips:
        • Use RED's secure payment system
        • Never send money outside the platform
        • Keep payment confirmation records
        • Enable purchase protection
        • Use trusted payment methods
        • Check seller's return policy
        • Document item condition upon receipt
        • Report suspicious payment requests
      `,
      icon: "🔒"
    },
    {
      title: "International Shopping Guide",
      content: `
        Tips for international buyers:
        • Check shipping restrictions
        • Understand import duties
        • Verify international shipping costs
        • Check estimated delivery times
        • Review return policies
        • Consider size differences
        • Check voltage compatibility
        • Understand warranty coverage
      `,
      icon: "🌍"
    },
    {
      title: "Product Quality Assessment",
      content: `
        How to assess product quality:
        • Check material descriptions
        • Look for detailed specifications
        • Read quality-specific reviews
        • Watch unboxing videos
        • Check brand reputation
        • Verify product certifications
        • Compare with similar products
        • Ask sellers specific questions
      `,
      icon: "⭐"
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
          Learn how to shop smartly and safely on RED Note with our expert shopping tips
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
            Create collections for different product categories you're interested in. This helps you track prices over time and compare similar items before making a purchase decision. Don't forget to enable price drop notifications for items you've saved!
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