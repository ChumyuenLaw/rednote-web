import Link from 'next/link'

export default function LifestyleTipsPage() {
  const tips = [
    {
      title: "Travel Content Creation",
      content: `
        Create engaging travel content:
        • Plan your shots before traveling
        • Capture unique perspectives
        • Include local cultural elements
        • Share authentic experiences
        • Document hidden gems
        • Include practical travel tips
        • Show transportation options
        • Share accommodation reviews
      `,
      icon: "✈️"
    },
    {
      title: "Location Tagging",
      content: `
        Maximize location visibility:
        • Use precise location tags
        • Add multiple relevant locations
        • Create location collections
        • Tag both general and specific areas
        • Include neighborhood details
        • Add landmarks when relevant
        • Create location guides
        • Share local tips
      `,
      icon: "📍"
    },
    {
      title: "Restaurant Reviews",
      content: `
        Create helpful food content:
        • Take photos in natural lighting
        • Show multiple dishes
        • Include menu recommendations
        • Share pricing information
        • Describe taste and atmosphere
        • Note special dietary options
        • Include booking information
        • Share insider tips
      `,
      icon: "🍽️"
    },
    {
      title: "Lifestyle Photography",
      content: `
        Capture lifestyle moments:
        • Find good natural lighting
        • Create consistent aesthetics
        • Show authentic moments
        • Include environmental context
        • Focus on details
        • Tell visual stories
        • Use props effectively
        • Maintain brand consistency
      `,
      icon: "📸"
    },
    {
      title: "Travel Planning",
      content: `
        Share useful planning tips:
        • Create detailed itineraries
        • Include budget breakdowns
        • Share packing lists
        • Provide seasonal advice
        • Include local transportation tips
        • Recommend accommodations
        • Share safety information
        • Include visa requirements
      `,
      icon: "📝"
    },
    {
      title: "Cultural Experiences",
      content: `
        Share cultural insights:
        • Highlight local customs
        • Share traditional experiences
        • Feature local artisans
        • Document festivals/events
        • Include language tips
        • Share cultural etiquette
        • Feature local markets
        • Showcase traditional arts
      `,
      icon: "🌏"
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

        <h1 className="text-4xl font-bold mb-6">Travel & Lifestyle Tips</h1>
        <p className="text-xl text-gray-600 mb-12">
          Create compelling travel and lifestyle content that inspires and helps others
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
          <h3 className="text-xl font-semibold mb-4">Pro Travel & Lifestyle Tip</h3>
          <p className="text-gray-700 mb-4">
            Always respect local cultures and customs when creating travel content. Focus on providing value through authentic experiences and practical information that helps others plan their own adventures.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/tips/shopping" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Check out Shopping tips
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 