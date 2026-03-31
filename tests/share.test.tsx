import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShareButton } from '@/components/ShareButton';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  },
});

describe('ShareButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders share button', () => {
    render(<ShareButton storyId="1" headline="Test Headline" />);
    expect(screen.getByLabelText('Share story')).toBeInTheDocument();
  });

  it('shows dropdown menu when clicked', async () => {
    render(<ShareButton storyId="1" headline="Test Headline" />);
    const button = screen.getByLabelText('Share story');
    await userEvent.click(button);
    
    expect(screen.getByText('Copy Link')).toBeInTheDocument();
  });

  it('copies link to clipboard', async () => {
    render(<ShareButton storyId="1" headline="Test Headline" />);
    const button = screen.getByLabelText('Share story');
    await userEvent.click(button);
    
    const copyButton = screen.getByText('Copy Link');
    await userEvent.click(copyButton);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  it('shows "Copied!" feedback after copying', async () => {
    render(<ShareButton storyId="1" headline="Test Headline" />);
    const button = screen.getByLabelText('Share story');
    await userEvent.click(button);
    
    const copyButton = screen.getByText('Copy Link');
    await userEvent.click(copyButton);
    
    await screen.findByText('Copied!');
  });

  it('has proper touch target size', () => {
    render(<ShareButton storyId="1" headline="Test Headline" />);
    const button = screen.getByLabelText('Share story');
    expect(button.className).toMatch(/min-h-\[44px\]/);
  });
});