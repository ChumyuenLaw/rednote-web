import Link from 'next/link'

export default function ContentCreationTipsPage() {
  const tips = [
    {
      title: "Photo Editing Excellence",
      content: `
        • Use natural lighting whenever possible
        • Maintain consistent color schemes in your feed
        • Edit photos to enhance, not transform
        • Recommended apps: VSCO, Snapseed, Lightroom
        • Keep your editing style consistent
        • Use RED's built-in filters for quick edits
        • Save your editing presets for consistency
      `,
      icon: "📸"
    },
    {
      title: "Writing Engaging Captions",
      content: `
        • Start with a hook to grab attention
        • Use storytelling techniques
        • Break text into readable paragraphs
        • Include relevant hashtags (3-5 is optimal)
        • Ask questions to encourage engagement
        • Share personal experiences
        • End with a call-to-action
      `,
      icon: "✍️"
    },
    {
      title: "Optimal Posting Times",
      content: `
        Best times to post on RED Note:
        • Weekdays: 7-9 AM, 12-2 PM, 6-8 PM EST
        • Weekends: 9-11 AM, 4-6 PM EST
        • Post consistently rather than sporadically
        • Consider your target audience's timezone
        • Check your analytics for personalized best times
      `,
      icon: "⏰"
    },
    {
      title: "Video Content Tips",
      content: `
        • Keep videos between 15-60 seconds
        • Start with an attention-grabbing opener
        • Use trending music when appropriate
        • Include captions for accessibility
        • Film in good lighting conditions
        • Maintain steady camera movements
        • End with a clear call-to-action
      `,
      icon: "🎥"
    },
    {
      title: "Hashtag Strategy",
      content: `
        • Mix popular and niche hashtags
        • Create branded hashtags for your content
        • Research trending hashtags in your niche
        • Use location-based hashtags
        • Avoid banned or restricted hashtags
        • Update your hashtag strategy regularly
        • Track hashtag performance
      `,
      icon: "#️⃣"
    },
    {
      title: "Engagement Boosting",
      content: `
        • Respond to comments promptly
        • Create interactive content (polls, questions)
        • Share behind-the-scenes content
        • Collaborate with other creators
        • Host challenges or contests
        • Share user-generated content
        • Cross-promote on other platforms
      `,
      icon: "🤝"
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

        <h1 className="text-4xl font-bold mb-6">Content Creation Tips</h1>
        <p className="text-xl text-gray-600 mb-12">
          Master the art of creating engaging content on RED Note with these expert tips
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
          <h3 className="text-xl font-semibold mb-4">Pro Creator Tip</h3>
          <p className="text-gray-700 mb-4">
            Remember to analyze your content performance regularly. Pay attention to which types of posts get the most engagement and adjust your strategy accordingly. Use RED Note's analytics tools to track your growth and understand your audience better.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/tips/growth" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Check out our Growth & Engagement tips
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 