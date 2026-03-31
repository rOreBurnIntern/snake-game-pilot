'use client';

import { useState } from 'react';

interface ShareButtonProps {
  storyId: string;
  headline: string;
}

export function ShareButton({ storyId, headline }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/story/${storyId}`
    : `/story/${storyId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: headline,
          text: `Check out this story: ${headline}`,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    }
    setShowMenu(false);
  };

  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="btn-secondary py-2 px-4 text-sm min-w-[44px] min-h-[44px]"
        aria-label="Share story"
        aria-expanded={showMenu}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-crime-darker border border-gray-600 rounded-lg shadow-xl z-50">
            <button
              onClick={handleCopyLink}
              className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 rounded-t-lg transition-colors min-h-[44px] flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
            {canNativeShare && (
              <button
                onClick={handleNativeShare}
                className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 rounded-b-lg transition-colors min-h-[44px] flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Share via App</span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}