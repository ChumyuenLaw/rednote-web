import Link from 'next/link'

export default function GuidesPage() {
  const guides = [
    {
      title: "Getting Started with RED",
      description: "Learn the basics of RED and how to set up your account",
      link: "/getting-started",
      icon: "🚀"
    },
    {
      title: "Content Creation",
      description: "Tips and best practices for creating engaging content",
      link: "/content-creation",
      icon: "📝"
    },
    {
      title: "Platform Features",
      description: "Detailed guide to RED's key features and functionalities",
      link: "/features",
      icon: "⚡"
    },
    {
      title: "Shopping Guide",
      description: "How to find and purchase products on RED",
      link: "/shopping",
      icon: "🛍️"
    },
    {
      title: "Safety & Privacy",
      description: "Stay safe and protect your privacy while using RED",
      link: "/safety",
      icon: "🔒"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">RED Platform Guides</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive guides to help you make the most of your RED experience
        </p>

        <div className="grid gap-6">
          {guides.map((guide) => (
            <Link 
              href={guide.link} 
              key={guide.title}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <span className="text-3xl mr-4">{guide.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
                  <p className="text-gray-600">{guide.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-gray-600">
            Can't find what you're looking for? Check our{' '}
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQ section
            </Link>
            {' '}or{' '}
            <Link href="mailto:cruncheng@hotmail.com" className="text-blue-600 hover:underline">
              contact us
            </Link>
            {' '}for assistance.
          </p>
        </div>
      </div>
    </div>
  );
} 