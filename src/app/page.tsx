import { NewsCard } from '@/components';
import { getTopStory, getAllStories } from '@/lib/news';
import Link from 'next/link';

export default function Home() {
  const topStory = getTopStory();
  const allStories = getAllStories();
  const recentStories = allStories.slice(1, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="w-1 h-8 bg-crime-accent mr-3 rounded" />
          Top Story
        </h2>
        <NewsCard story={topStory} isTopStory />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="w-1 h-8 bg-blue-500 mr-3 rounded" />
          Recent Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recentStories.map((story) => (
            <NewsCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Link
          href="/story/1"
          className="inline-flex items-center text-crime-accent hover:text-red-400 transition-colors min-h-[44px] px-2"
        >
          <span>View all stories</span>
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}