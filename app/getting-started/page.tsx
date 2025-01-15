import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with Xiaohongshu (RED) | RedNote',
  description: 'Learn how to get started with Xiaohongshu (RED). Step-by-step guide for creating an account, basic navigation, and essential features for new users.',
  keywords: 'Xiaohongshu tutorial, RED app guide, how to use Xiaohongshu, RED Note basics, Chinese social media guide',
};

export default function GettingStarted() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Getting Started with RED</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is RED (Xiaohongshu)?</h2>
        <p className="text-gray-600 mb-4">
          RED (Xiaohongshu) is China's leading lifestyle platform that combines social media with e-commerce. 
          It's often described as a combination of Instagram and Pinterest, where users share lifestyle tips, 
          product reviews, and shopping experiences.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setting Up Your Account</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="text-xl font-medium mb-2">1. Download the App</h3>
            <p className="text-gray-600">
              RED is available on both iOS App Store and Google Play Store. Search for "Xiaohongshu" or "RED" to find it.
            </p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="text-xl font-medium mb-2">2. Create Your Account</h3>
            <p className="text-gray-600">
              Sign up using your email address or phone number. You'll need to verify your account through a confirmation code.
            </p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="text-xl font-medium mb-2">3. Complete Your Profile</h3>
            <p className="text-gray-600">
              Add a profile picture, bio, and select your interests to get personalized content recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Home Feed</h3>
            <p className="text-gray-600">
              Your personalized feed showing posts from users you follow and recommended content.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Explore</h3>
            <p className="text-gray-600">
              Discover trending content, popular users, and featured posts in different categories.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Shopping</h3>
            <p className="text-gray-600">
              Browse and purchase products directly through the platform.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Profile</h3>
            <p className="text-gray-600">
              Access your posts, likes, collections, and account settings.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="text-gray-600 mb-4">
          Now that you're set up, explore our other guides to learn about creating content, 
          shopping features, and making the most of your RED experience.
        </p>
        <div className="flex gap-4">
          <a href="/features" className="text-red-500 hover:text-red-600">
            Explore Features →
          </a>
          <a href="/content-creation" className="text-red-500 hover:text-red-600">
            Start Creating →
          </a>
        </div>
      </section>
    </main>
  );
} 