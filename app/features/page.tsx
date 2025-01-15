import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xiaohongshu (RED) Features Overview | RedNote',
  description: 'Explore all features of Xiaohongshu (RED). Detailed guide to photo editing, video tools, writing features, analytics, collections, and live streaming capabilities.',
  keywords: 'Xiaohongshu features, RED Note tools, photo editor, video tools, writing features, analytics, collections, live streaming',
};

export default function Features() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">RED Features & Tools</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Notes (Posts)</h3>
            <p className="text-gray-600">
              Create and share photo/video content with detailed descriptions, product links, and location tags.
              Add multiple images, videos, and text to tell your story.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Discovery Feed</h3>
            <p className="text-gray-600">
              Personalized content recommendations based on your interests and browsing history.
              Explore trending topics and popular creators.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Shopping Integration</h3>
            <p className="text-gray-600">
              Shop products directly from posts, compare prices, and read authentic reviews.
              Save items to your wishlist and track price changes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Social Features</h3>
            <p className="text-gray-600">
              Follow creators, like and comment on posts, save content to collections,
              and share posts with your followers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Content Creation Tools</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Photo Editor</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Built-in filters and effects</li>
              <li>Basic photo editing tools (brightness, contrast, etc.)</li>
              <li>Text overlay options</li>
              <li>Stickers and decorative elements</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Video Tools</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Video trimming and editing</li>
              <li>Background music library</li>
              <li>Speed adjustment</li>
              <li>Transitions and effects</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Writing Tools</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Rich text formatting</li>
              <li>Hashtag suggestions</li>
              <li>Location tagging</li>
              <li>Product linking</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Analytics</h3>
            <p className="text-gray-600">
              Track your post performance, follower growth, and engagement metrics.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Collections</h3>
            <p className="text-gray-600">
              Organize saved posts into custom collections for easy reference.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Live Streaming</h3>
            <p className="text-gray-600">
              Connect with your audience in real-time through live broadcasts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 