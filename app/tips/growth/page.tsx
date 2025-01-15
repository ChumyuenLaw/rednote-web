import Link from 'next/link'

export default function GrowthTipsPage() {
  const tips = [
    {
      title: "Profile Optimization",
      content: `
        Create an attractive profile:
        • Choose a clear, professional profile photo
        • Write an engaging bio (160 characters max)
        • Add relevant interests and expertise
        • Link your other social media accounts
        • Use keywords in your profile description
        • Showcase your best content in highlights
        • Keep your contact information updated
        • Maintain a consistent brand image
      `,
      icon: "👤"
    },
    {
      title: "Content Strategy",
      content: `
        Build an effective content strategy:
        • Post consistently (2-3 times per week)
        • Create content series or themes
        • Mix different content types
        • Share behind-the-scenes content
        • Create seasonal/trending content
        • Use high-quality visuals
        • Share authentic experiences
        • Create educational content
      `,
      icon: "📊"
    },
    {
      title: "Engagement Tactics",
      content: `
        Boost your engagement:
        • Respond to comments within 24 hours
        • Ask questions in your posts
        • Create polls and surveys
        • Use call-to-actions (CTAs)
        • Host challenges or contests
        • Share user-generated content
        • Collaborate with other creators
        • Engage with your target audience
      `,
      icon: "🤝"
    },
    {
      title: "Analytics Understanding",
      content: `
        Key metrics to track:
        • Follower growth rate
        • Engagement rate per post
        • Best performing content types
        • Optimal posting times
        • Audience demographics
        • Content reach and impressions
        • Save and share rates
        • Click-through rates
      `,
      icon: "📈"
    },
    {
      title: "Community Building",
      content: `
        Create a strong community:
        • Define your target audience
        • Create valuable, niche content
        • Foster discussions in comments
        • Show appreciation to followers
        • Share community highlights
        • Create exclusive content
        • Host virtual meetups
        • Support other creators
      `,
      icon: "🌟"
    },
    {
      title: "Growth Acceleration",
      content: `
        Advanced growth strategies:
        • Cross-promote on other platforms
        • Participate in RED campaigns
        • Use trending topics strategically
        • Create shareable content
        • Optimize for search discovery
        • Network with other creators
        • Maintain posting consistency
        • Track competitor strategies
      `,
      icon: "🚀"
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

        <h1 className="text-4xl font-bold mb-6">Growth & Engagement Tips</h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert strategies to grow your following and boost engagement on RED Note
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
          <h3 className="text-xl font-semibold mb-4">Pro Growth Tip</h3>
          <p className="text-gray-700 mb-4">
            Focus on creating value for your audience rather than just chasing numbers. Authentic, helpful content naturally attracts engaged followers who are more likely to interact with your posts and become long-term supporters.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/tips/content-creation" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Explore Content Creation tips
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 