import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getStoryById } from '@/lib/news';
import { ShareButton } from '@/components';

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = getStoryById(params.id);

  if (!story) {
    notFound();
  }

  const timestamp = new Date(story.timestamp);
  const formattedDate = timestamp.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const categoryColors: Record<string, string> = {
    breaking: 'bg-red-600',
    trial: 'bg-blue-600',
    investigation: 'bg-purple-600',
    'cold-case': 'bg-yellow-600',
    'missing-person': 'bg-green-600',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors min-h-[44px] px-2"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Home</span>
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`${categoryColors[story.category]} text-white text-sm font-semibold px-3 py-1 rounded uppercase`}
            >
              {story.category.replace('-', ' ')}
            </span>
            <time className="text-gray-400">
              {formattedDate} at {formattedTime}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            {story.headline}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-700">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-crime-accent font-medium">{story.source}</p>
                {story.author && (
                  <p className="text-gray-400 text-sm">By {story.author}</p>
                )}
              </div>
            </div>
            <ShareButton storyId={story.id} headline={story.headline} />
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed font-medium">
            {story.summary}
          </p>

          <div className="text-gray-300 space-y-4 leading-relaxed">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>        </div>

        <footer className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-gray-400 text-sm">
                Source: <a 
                  href={story.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-crime-accent hover:underline"
                >
                  {story.source}
                </a>
              </p>
            </div>
            <ShareButton storyId={story.id} headline={story.headline} />
          </div>
        </footer>
      </article>
    </div>
  );
}