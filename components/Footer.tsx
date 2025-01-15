export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">About rednote</h3>
            <p className="text-gray-600">
              Your comprehensive guide to mastering social media content creation and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guides" className="text-gray-600 hover:text-gray-900">
                  Guides
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-gray-600 hover:text-gray-900">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/tips" className="text-gray-600 hover:text-gray-900">
                  Tips & Tricks
                </a>
              </li>
              {/* <li>
                <a href="/resources" className="text-gray-600 hover:text-gray-900">
                  Resources
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Community
                </a>
              </li>
              <li>
                <a href="mailto:cruncheng@hotmail.com" className="text-gray-600 hover:text-gray-900">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} rednote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 