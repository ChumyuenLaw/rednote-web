import Link from 'next/link'

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "TikTok to RedNote Live",
      description: "Complete guide for TikTok creators transitioning to RedNote live streaming",
      link: "/tutorials/tiktok-to-rednote-live",
      icon: "🎥",
      category: "Live Streaming",
      timeToRead: "12 min"
    },
    {
      title: "Create Your Account",
      description: "Step-by-step guide to creating and setting up your RED Note account",
      link: "/tutorials/create-account",
      icon: "👤",
      category: "Getting Started",
      timeToRead: "10 min"
    },
    {
      title: "RED Note to English",
      description: "How to change your app language to English and navigate the interface",
      link: "/tutorials/english",
      icon: "🌐",
      category: "Settings",
      timeToRead: "5 min"
    },
    {
      title: "RED Note for iPhone",
      description: "Complete guide to using RED Note on iOS devices",
      link: "/tutorials/iphone",
      icon: "📱",
      category: "Platforms",
      timeToRead: "8 min"
    },
    {
      title: "RED Note for Android",
      description: "Master RED Note on your Android device",
      link: "/tutorials/android",
      icon: "🤖",
      category: "Platforms",
      timeToRead: "8 min"
    },
    {
      title: "RED Note for Apple",
      description: "Using RED Note across all your Apple devices",
      link: "/tutorials/apple",
      icon: "🍎",
      category: "Platforms",
      timeToRead: "7 min"
    },
    {
      title: "Is RED Note Safe?",
      description: "Understanding RED Note's security features and best practices",
      link: "/tutorials/safety",
      icon: "🔒",
      category: "Security",
      timeToRead: "6 min"
    }
  ];

  const categories = Array.from(new Set(tutorials.map(t => t.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">RED Note Tutorials</h1>
        <p className="text-xl text-gray-600 mb-12">
          Learn everything about RED Note with our comprehensive tutorials
        </p>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tutorials
                .filter(tutorial => tutorial.category === category)
                .map((tutorial) => (
                  <Link 
                    href={tutorial.link}
                    key={tutorial.title}
                    className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start">
                        <span className="text-4xl mr-4">{tutorial.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                          <p className="text-gray-600 mb-4">{tutorial.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {tutorial.timeToRead} read
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-gray-700 mb-4">
            Can't find what you're looking for? Check our{' '}
            <Link href="/guides" className="text-blue-600 hover:underline">
              comprehensive guides
            </Link>
            {' '}or{' '}
            <Link href="mailto:cruncheng@hotmail.com" className="text-blue-600 hover:underline">
              contact our support team
            </Link>
            {' '}for personalized assistance.
          </p>
        </div>
      </div>
    </div>
  );
} 