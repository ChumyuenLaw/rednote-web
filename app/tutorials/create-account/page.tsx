import Link from 'next/link'

export default function CreateAccountPage() {
  const steps = [
    {
      title: "Download the App",
      content: `
        First, get the RED Note app:
        
        For iPhone users:
        • Open the App Store
        • Search for "RED" or "Xiaohongshu"
        • Click "Get" or "Download"
        • Wait for installation to complete

        For Android users:
        • Open Google Play Store
        • Search for "RED" or "Xiaohongshu"
        • Tap "Install"
        • Accept permissions and wait for installation
      `,
      icon: "📱"
    },
    {
      title: "Choose Registration Method",
      content: `
        You have several options to register:

        1. Phone Number (Recommended):
        • Tap "Sign Up"
        • Select your country code
        • Enter your phone number
        • Receive and enter verification code

        2. Email:
        • Tap "Sign Up with Email"
        • Enter your email address
        • Create a password
        • Verify your email

        3. Social Media:
        • Choose from available social login options
        • Follow the authentication process
        • Grant necessary permissions
      `,
      icon: "🔐"
    },
    {
      title: "Complete Your Profile",
      content: `
        Essential profile setup steps:

        Basic Information:
        • Choose a unique username
        • Add a profile photo
        • Write a brief bio (160 characters max)
        • Select your interests
        • Add your location (optional)

        Privacy Settings:
        • Review default privacy settings
        • Adjust who can see your posts
        • Set comment preferences
        • Configure message settings
      `,
      icon: "👤"
    },
    {
      title: "Verify Your Account",
      content: `
        Important verification steps:

        1. Phone Verification:
        • Go to Settings
        • Select "Account Security"
        • Add phone number if not done
        • Complete verification process

        2. Email Verification:
        • Check your email inbox
        • Click verification link
        • Confirm in the app

        3. Additional Security:
        • Set up two-factor authentication
        • Create security questions
        • Link backup contact methods
      `,
      icon: "✅"
    },
    {
      title: "Customize Your Experience",
      content: `
        Personalize your RED Note experience:

        Content Preferences:
        • Select topics you're interested in
        • Follow recommended accounts
        • Join relevant communities
        • Save favorite categories

        App Settings:
        • Set language preference to English
        • Configure notification settings
        • Set content display preferences
        • Customize feed settings
      `,
      icon: "⚙️"
    },
    {
      title: "Start Using RED Note",
      content: `
        Begin your RED Note journey:

        First Steps:
        • Browse the homepage feed
        • Save interesting posts
        • Follow active creators
        • Like and comment on posts

        Content Guidelines:
        • Review community guidelines
        • Understand content policies
        • Learn about restricted content
        • Know your responsibilities
      `,
      icon: "🚀"
    }
  ];

  const troubleshooting = [
    {
      question: "Can't receive verification code?",
      answer: "Wait 60 seconds before requesting a new code. Check if your phone number is correct and ensure you have a stable internet connection."
    },
    {
      question: "Username already taken?",
      answer: "Try adding numbers or unique characters to your desired username, or choose a completely different unique username."
    },
    {
      question: "Registration failed?",
      answer: "Clear app cache, ensure you have a stable internet connection, and try again. If problems persist, try registering with a different method."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/tutorials" className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-8">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorials
        </Link>

        <h1 className="text-4xl font-bold mb-6">How to Create a RED Note Account</h1>
        <p className="text-xl text-gray-600 mb-12">
          A step-by-step guide to creating and setting up your RED Note account
        </p>

        <div className="grid gap-8">
          {steps.map((step) => (
            <div 
              key={step.title}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                  </div>
                </div>
                <div className="mt-4 pl-12">
                  <div className="prose prose-gray max-w-none">
                    {step.content.split('\n').map((line, index) => (
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

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="divide-y divide-gray-100">
              {troubleshooting.map((item, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Important Note</h3>
          <p className="text-gray-700 mb-4">
            Make sure to use authentic information when creating your account. This helps maintain account security and makes it easier to recover your account if needed. Keep your login credentials safe and never share them with others.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/tutorials" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Explore more tutorials
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 