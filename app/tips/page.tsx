import { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Xiaohongshu (RED) Tips & Tricks | RedNote',
  description: 'Expert tips and insider tricks for Xiaohongshu (RED). Learn content creation, shopping, growth strategies, and lifestyle content tips from experienced users.',
  keywords: 'Xiaohongshu tips, RED Note tricks, social media tips, content creation tips, shopping guide, growth strategy, lifestyle content',
};

export default function TipsPage() {
  const tipCategories = [
    {
      title: "Content Creation Tips",
      description: "Learn how to create engaging content that stands out",
      link: "/tips/content-creation",
      icon: "✍️",
      highlights: [
        "Photo editing techniques",
        "Writing compelling captions",
        "Best posting times",
        "Hashtag strategies"
      ]
    },
    {
      title: "Shopping Tips",
      description: "Make the most of RED Note's shopping features",
      link: "/tips/shopping",
      icon: "🛍️",
      highlights: [
        "Finding authentic products",
        "Price comparison",
        "Reading reviews effectively",
        "Secure payment methods"
      ]
    },
    {
      title: "Growth & Engagement",
      description: "Build your following and increase engagement",
      link: "/tips/growth",
      icon: "📈",
      highlights: [
        "Profile optimization",
        "Engagement strategies",
        "Community building",
        "Analytics understanding"
      ]
    },
    {
      title: "Travel & Lifestyle",
      description: "Tips for sharing travel and lifestyle content",
      link: "/tips/lifestyle",
      icon: "✈️",
      highlights: [
        "Travel content creation",
        "Location tagging",
        "Restaurant reviews",
        "Lifestyle photography"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">RED Note Tips & Tricks</h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert tips and insider tricks to enhance your RED Note experience
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {tipCategories.map((category) => (
            <Link 
              href={category.link}
              key={category.title}
              className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                  </div>
                </div>
                <div className="pl-12">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">HIGHLIGHTS</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-700 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Latest Tips</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💡</span>
              <h3 className="text-xl font-medium">Pro Tip of the Day</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Use RED Note's "Collections" feature to organize saved posts into themed folders. 
              This makes it easier to find inspiration and reference content later!
            </p>
            <Link 
              href="/tips/content-creation"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              Learn more tips
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Share Your Tips</h3>
          <p className="text-gray-600">
            Have a great tip to share? We'd love to hear from you! {' '}
            <Link href="mailto:cruncheng@hotmail.com" className="text-blue-600 hover:underline">
              Send us your tips
            </Link>
            {' '}and help the community grow.
          </p>
        </div>
      </div>
    </div>
  );
} 