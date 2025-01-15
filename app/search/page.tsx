import { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: 'Search Xiaohongshu (RED) Resources | RedNote',
  description: 'Search through our comprehensive collection of Xiaohongshu (RED) guides, tutorials, and tips. Find the information you need to master the platform.',
  keywords: 'Xiaohongshu search, RED Note resources, search guides, find tutorials, RED app help',
};

export default function Search() {
  return <SearchClient />;
} 