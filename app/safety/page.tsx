import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety & Privacy Guide for Xiaohongshu | RedNote',
  description: 'Learn how to stay safe and protect your privacy while using Xiaohongshu (RED). Essential security tips, privacy settings, and best practices for a secure experience.',
  keywords: 'Xiaohongshu safety, RED privacy, account security, safe shopping, privacy settings, secure payment, online safety',
};

export default function Safety() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Safety & Privacy Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Account Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Password Security</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use strong, unique passwords</li>
              <li>Enable two-factor authentication</li>
              <li>Never share account credentials</li>
              <li>Change passwords regularly</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Account Protection</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Monitor login activity</li>
              <li>Review connected devices</li>
              <li>Set up security questions</li>
              <li>Keep contact info updated</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Profile Privacy</h3>
              <p className="text-gray-600">Control who can see your profile, posts, and personal information.</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Adjust profile visibility</li>
                <li>Manage follower permissions</li>
                <li>Control post visibility</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Content Sharing</h3>
              <p className="text-gray-600">Customize how your content is shared and interacted with.</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Set default post privacy</li>
                <li>Control comments and mentions</li>
                <li>Manage content resharing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Safe Shopping</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Verify Sellers:</strong> Always check seller ratings and authentication badges before making purchases.
            </p>
            <p className="text-gray-600">
              <strong>Secure Payments:</strong> Only use RED's official payment system for transactions.
            </p>
            <p className="text-gray-600">
              <strong>Product Authentication:</strong> Look for official product verification marks.
            </p>
            <p className="text-gray-600">
              <strong>Keep Records:</strong> Save order details and communication with sellers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Report Issues</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">How to Report</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you encounter any issues or suspicious activity:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Use the in-app reporting feature</li>
              <li>Contact customer support</li>
              <li>Document the issue with screenshots</li>
              <li>Follow up on report status</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 