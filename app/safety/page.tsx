export default function Safety() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Safety & Privacy Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Account Security</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Password Security</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use a strong, unique password</li>
              <li>Enable two-factor authentication</li>
              <li>Never share your password</li>
              <li>Regularly update your password</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Login Protection</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Monitor login activity</li>
              <li>Sign out from unused devices</li>
              <li>Review connected applications</li>
              <li>Set up login notifications</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Profile Privacy</h3>
            <div className="space-y-3 text-gray-600">
              <p>• Control who can see your posts</p>
              <p>• Manage your follower list</p>
              <p>• Hide your location information</p>
              <p>• Control tag settings</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Content Privacy</h3>
            <div className="space-y-3 text-gray-600">
              <p>• Control comment settings</p>
              <p>• Manage who can message you</p>
              <p>• Control resharing options</p>
              <p>• Manage saved content visibility</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Safe Shopping</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Verify Sellers</h3>
              <p className="text-gray-600">
                Always check seller ratings, reviews, and verification status before making a purchase.
                Look for official store badges and authentic product certifications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Use RED's secure payment system. Never send money directly to sellers through
                other payment methods or platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Product Authentication</h3>
              <p className="text-gray-600">
                Look for authentic product verification badges and cross-reference prices
                with official retailers when possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Reporting & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Report Issues</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Suspicious accounts or activity</li>
              <li>• Fake products or sellers</li>
              <li>• Inappropriate content</li>
              <li>• Privacy violations</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Get Help</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Contact customer support</li>
              <li>• Submit account appeals</li>
              <li>• Report technical issues</li>
              <li>• Request account recovery</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 