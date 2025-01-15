import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions about Xiaohongshu | RedNote',
  description: 'Find answers to common questions about Xiaohongshu (RED). Learn about account setup, content guidelines, shopping, and troubleshooting.',
  keywords: 'Xiaohongshu FAQ, RED Note questions, Xiaohongshu help, RED app support, common questions, troubleshooting',
};

export default function FAQ() {
  return <FAQClient />;
} 