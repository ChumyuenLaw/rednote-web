export default function ContentCreation() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Content Creation Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Creating Engaging Content</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            RED is all about authentic, high-quality content that provides value to your audience.
            Whether you're sharing lifestyle tips, product reviews, or travel experiences,
            here's how to create content that resonates with your followers.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Content Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Photo Posts</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use high-quality, well-lit images</li>
              <li>Include multiple angles for product reviews</li>
              <li>Add detailed captions with your experience</li>
              <li>Tag relevant products and locations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Video Content</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep videos concise and engaging</li>
              <li>Use background music to set the mood</li>
              <li>Add captions for accessibility</li>
              <li>Include clear call-to-actions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Writing Tips</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Title:</strong> Use clear, attention-grabbing titles that accurately describe your content.
              </p>
              <p className="text-gray-600">
                <strong>Structure:</strong> Break your content into easy-to-read sections with headers.
              </p>
              <p className="text-gray-600">
                <strong>Hashtags:</strong> Use relevant hashtags to increase visibility (3-5 is optimal).
              </p>
              <p className="text-gray-600">
                <strong>Call-to-action:</strong> End with a question or invitation for engagement.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Visual Content Tips</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Quality:</strong> Use good lighting and clean backgrounds.
              </p>
              <p className="text-gray-600">
                <strong>Consistency:</strong> Maintain a cohesive visual style.
              </p>
              <p className="text-gray-600">
                <strong>Authenticity:</strong> Show real experiences and genuine reactions.
              </p>
              <p className="text-gray-600">
                <strong>Editing:</strong> Use RED's built-in tools to enhance your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Content Ideas by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Beauty & Skincare</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Product reviews</li>
              <li>Skincare routines</li>
              <li>Makeup tutorials</li>
              <li>Beauty tips & tricks</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Fashion & Style</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Outfit of the day</li>
              <li>Style guides</li>
              <li>Shopping hauls</li>
              <li>Fashion tips</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Food & Dining</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Restaurant reviews</li>
              <li>Recipe tutorials</li>
              <li>Food photography</li>
              <li>Cooking tips</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 