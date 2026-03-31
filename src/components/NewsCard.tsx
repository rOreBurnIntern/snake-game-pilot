import Link from 'next/link';
import { ShareButton } from './ShareButton';
import type { Story } from '@/lib/news';

interface NewsCardProps {
  story: Story;
  isTopStory?: boolean;
}

export function NewsCard({ story, isTopStory = false }: NewsCardProps) {
  const timestamp = new Date(story.timestamp);
  const formattedDate = timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const categoryColors: Record<Story['category'], string> = {
    breaking: 'bg-red-600',
    trial: 'bg-blue-600',
    investigation: 'bg-purple-600',
    'cold-case': 'bg-yellow-600',
    'missing-person': 'bg-green-600',
  };

  return (
    <article className={`card ${isTopStory ? 'border-2 border-crime-accent' : ''}`}>
      {isTopStory && (
        <div className="flex items-center space-x-2 mb-3">
          <span className="bg-crime-accent text-white text-xs font-bold px-2 py-1 rounded">
            TOP STORY
          </span>
        </div>
      )}
      <div className="flex items-center space-x-2 mb-3">
        <span
          className={`${categoryColors[story.category]} text-white text-xs font-semibold px-2 py-1 rounded uppercase`}
        >
          {story.category.replace('-', ' ')}        </span>
        <span className="text-gray-400 text-sm">
          {formattedDate} at {formattedTime}
        </span>
      </div>

      <Link href={`/story/${story.id}`}>
        <h2
          className={`font-serif font-bold text-white hover:text-crime-accent transition-colors cursor-pointer mb-3 ${
            isTopStory ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {story.headline}
        </h2>
      </Link>

      <p className="text-gray-300 mb-4 leading-relaxed">{story.summary}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Source:</span>
          <span className="text-crime-accent font-medium">{story.source}</span>
          {story.author && (
            <>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">{story.author}</span>
            </>
          )}
        </div>
        <ShareButton storyId={story.id} headline={story.headline} />
      </div>
    </article>
  );
}