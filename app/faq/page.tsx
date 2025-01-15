'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is RED (Xiaohongshu)?",
      answer: "RED (Xiaohongshu) is China's leading lifestyle platform that combines social media with e-commerce. It allows users to share product reviews, lifestyle tips, and shopping experiences while also providing a direct shopping platform for various products."
    },
    {
      question: "Can I use RED outside of China?",
      answer: "Yes, RED is available globally. However, some features might be limited depending on your location. The app can be downloaded from both the App Store and Google Play Store internationally."
    },
    {
      question: "How do I create an account?",
      answer: "You can create a RED account using your email address or phone number. After downloading the app, select 'Sign Up', enter your details, verify your account through a confirmation code, and complete your profile information."
    },
    {
      question: "Is it safe to shop on RED?",
      answer: "RED provides a secure shopping environment with buyer protection, authentic product verification, and secure payment processing. Always purchase through the platform's official payment system and verify seller credentials before making a purchase."
    },
    {
      question: "How can I verify if a product is authentic?",
      answer: "Look for official store badges, check seller ratings and reviews, and verify product authentication badges. RED also has an anti-counterfeit system in place to protect buyers from fake products."
    },
    {
      question: "What payment methods are accepted?",
      answer: "RED accepts various payment methods including credit cards, debit cards, and digital payment platforms. The specific payment options available may vary depending on your location."
    },
    {
      question: "How do I start creating content?",
      answer: "To create content, click the '+' button in the app, choose between photo or video format, add your content, write a description, add relevant hashtags, and tag products or locations if applicable."
    },
    {
      question: "What types of content can I share?",
      answer: "You can share various types of content including product reviews, lifestyle tips, travel experiences, fashion looks, beauty tutorials, food recommendations, and more. Content should follow community guidelines."
    },
    {
      question: "How can I grow my following?",
      answer: "To grow your following: post regularly, create high-quality content, use relevant hashtags, engage with other users, share authentic experiences, and maintain a consistent theme or style in your posts."
    },
    {
      question: "What should I do if I encounter issues?",
      answer: "If you encounter any issues, you can: contact customer support through the app, report suspicious activity or content, visit the help center for guidance, or reach out through RED's official social media channels."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openQuestion === index ? '−' : '+'}
              </span>
            </button>
            
            {openQuestion === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Feel free to reach out to our support team.
        </p>
        <div className="space-x-4">
          <a
            href="/safety"
            className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Contact Support
          </a>
          <a
            href="/getting-started"
            className="inline-block px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Getting Started Guide
          </a>
        </div>
      </div>
    </main>
  );
} 