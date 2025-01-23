import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "TikTok Refugee's Guide: How to Go Live on RedNote | RedNote Guide",
  description: "A comprehensive guide for TikTok creators transitioning to RedNote live streaming. Learn the requirements, setup process, and best practices for successful live streaming on RedNote.",
};

export default function TikTokToRedNoteLive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">TikTok Refugee&apos;s Guide: How to Go Live on RedNote</h1>
      
      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              As TikTok faces potential bans and restrictions in various countries, many creators are looking for alternative platforms to continue their live streaming journey. RedNote (Xiaohongshu) offers a vibrant and engaging live streaming platform that&apos;s gaining popularity globally. This guide will help you transition from TikTok to RedNote live streaming seamlessly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Requirements for Going Live on RedNote</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A verified RedNote account</li>
              <li>At least 100 followers</li>
              <li>Regular posting history (minimum 3-5 posts)</li>
              <li>Account age of at least 7 days</li>
              <li>No major community guidelines violations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Setting Up Your Live Stream</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Access Live Feature:</strong>
                <p>Open your RedNote app and tap the "+" button. If you meet all requirements, you&apos;ll see the "Go Live" option.</p>
              </li>
              <li>
                <strong>Configure Stream Settings:</strong>
                <p>Set your stream title, category, and cover image. Choose a title that accurately describes your content and attracts viewers.</p>
              </li>
              <li>
                <strong>Prepare Your Setup:</strong>
                <p>Ensure good lighting, stable internet connection (preferably 5Mbps upload speed or higher), and minimal background noise.</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Best Practices for RedNote Live Streaming</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-medium mb-2">Content Guidelines</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Focus on lifestyle, beauty, fashion, or product reviews - these perform well on RedNote</li>
                  <li>Maintain a professional and positive atmosphere</li>
                  <li>Engage with comments and questions from viewers</li>
                  <li>Use both English and Chinese if possible to reach a broader audience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Technical Tips</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stream in portrait mode (vertical) as most RedNote users browse on mobile</li>
                  <li>Maintain good lighting and clear audio</li>
                  <li>Use a stable internet connection</li>
                  <li>Consider using external microphone for better sound quality</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Monetization and Growth</h2>
            <div className="space-y-4 text-gray-700">
              <p>RedNote offers several ways to monetize your live streams:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Virtual gifts from viewers</li>
                <li>Product sales through RedNote&apos;s shopping features</li>
                <li>Brand collaboration opportunities</li>
                <li>Affiliate marketing</li>
              </ul>
              <p className="mt-4">
                To maximize your earnings and growth, maintain a consistent streaming schedule and build a loyal community by engaging with your viewers regularly.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Common Challenges and Solutions</h2>
            <div className="space-y-4 text-gray-700">
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">Language Barrier</h3>
                <p>Solution: Use translation apps or have a bilingual moderator. Focus on visual content when possible.</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">Cultural Differences</h3>
                <p>Solution: Research RedNote&apos;s content preferences and adapt your style while maintaining authenticity.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Technical Issues</h3>
                <p>Solution: Test your setup before going live and have backup equipment ready.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 