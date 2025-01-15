'use client'

import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

// 这个类型定义了我们的内容项结构
type ContentItem = {
  title: string;
  description: string;
  content?: string;
  link: string;
  type: 'tutorial' | 'guide' | 'tip';
  icon: string;
};

// 模拟数据库中的所有内容
const allContent: ContentItem[] = [
  // Tutorials
  {
    title: "Create Your Account",
    description: "Step-by-step guide to creating and setting up your RED Note account",
    link: "/tutorials/create-account",
    type: "tutorial",
    icon: "👤"
  },
  {
    title: "RED Note to English",
    description: "How to change your app language to English and navigate the interface",
    link: "/tutorials/english",
    type: "tutorial",
    icon: "🌐"
  },
  // Tips
  {
    title: "Photo Editing Tips",
    description: "Master the art of photo editing for RED Note",
    link: "/tips/content-creation",
    type: "tip",
    icon: "📸"
  },
  {
    title: "Writing Engaging Captions",
    description: "Learn how to write captions that capture attention",
    link: "/tips/content-creation",
    type: "tip",
    icon: "✍️"
  },
  // Guides
  {
    title: "Shopping Guide",
    description: "Complete guide to shopping on RED Note",
    link: "/guides/shopping",
    type: "guide",
    icon: "🛍️"
  },
  {
    title: "Content Creation Guide",
    description: "Comprehensive guide to creating content on RED Note",
    link: "/guides/content-creation",
    type: "guide",
    icon: "🎨"
  }
];

// 搜索函数
function searchContent(query: string): ContentItem[] {
  const searchTerms = query.toLowerCase().split(' ');
  
  return allContent.filter(item => {
    const searchableText = `${item.title} ${item.description} ${item.content || ''}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  });
}

export default function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || '';
  const results = query ? searchContent(query) : [];

  const resultsByType = {
    tutorial: results.filter(r => r.type === 'tutorial'),
    guide: results.filter(r => r.type === 'guide'),
    tip: results.filter(r => r.type === 'tip')
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Search Results</h1>
        
        <SearchBar className="mb-12" />

        {query ? (
          <>
            <p className="text-gray-600 mb-8">
              {results.length} results found for "{query}"
            </p>

            {Object.entries(resultsByType).map(([type, typeResults]) => (
              typeResults.length > 0 && (
                <div key={type} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 capitalize">
                    {type}s ({typeResults.length})
                  </h2>
                  <div className="grid gap-6">
                    {typeResults.map((result) => (
                      <Link
                        href={result.link}
                        key={result.title}
                        className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-start">
                            <span className="text-3xl mr-4">{result.icon}</span>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                              <p className="text-gray-600">{result.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}

            {results.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">No results found</h2>
                <p className="text-gray-600 mb-8">
                  Try different keywords or browse our content categories below
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/tutorials"
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <span className="text-3xl mb-2 block">📚</span>
                    <h3 className="font-semibold">Browse Tutorials</h3>
                  </Link>
                  <Link
                    href="/guides"
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <span className="text-3xl mb-2 block">📖</span>
                    <h3 className="font-semibold">Explore Guides</h3>
                  </Link>
                  <Link
                    href="/tips"
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <span className="text-3xl mb-2 block">💡</span>
                    <h3 className="font-semibold">View Tips</h3>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start searching</h2>
            <p className="text-gray-600">
              Enter keywords above to search through our content
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 