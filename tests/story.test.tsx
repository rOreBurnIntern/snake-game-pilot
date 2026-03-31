import { render, screen } from '@testing-library/react';
import { NewsCard } from '@/components/NewsCard';
import { mockStories } from '@/lib/news';

const story = mockStories[0];

describe('NewsCard', () => {
  it('renders story headline', () => {
    render(<NewsCard story={story} />);
    expect(screen.getByText(story.headline)).toBeInTheDocument();
  });

  it('renders story summary', () => {
    render(<NewsCard story={story} />);
    expect(screen.getByText(story.summary)).toBeInTheDocument();
  });

  it('renders story source', () => {
    render(<NewsCard story={story} />);
    expect(screen.getByText(story.source)).toBeInTheDocument();
  });

  it('renders category badge', () => {
    render(<NewsCard story={story} />);
    const categoryText = story.category.replace('-', ' ');
    const badges = screen.getAllByText(new RegExp(categoryText, 'i'));
    expect(badges.length).toBeGreaterThan(0);
  });

  it('shows TOP STORY badge when isTopStory is true', () => {
    render(<NewsCard story={story} isTopStory />);
    expect(screen.getByText('TOP STORY')).toBeInTheDocument();
  });

  it('does not show TOP STORY badge when isTopStory is false', () => {
    render(<NewsCard story={story} isTopStory={false} />);
    expect(screen.queryByText('TOP STORY')).not.toBeInTheDocument();
  });

  it('links to story detail page', () => {
    render(<NewsCard story={story} />);
    const link = screen.getByRole('link');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe(`/story/${story.id}`);
  });

  it('has proper touch targets for share button', () => {
    render(<NewsCard story={story} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      if (button.getAttribute('aria-label')?.includes('Share')) {
        expect(button.className).toMatch(/min-h-\[44px\]|min-w-\[44px\]/);
      }
    });
  });
});