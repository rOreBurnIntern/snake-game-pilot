'use client';

import { useSession, signOut } from 'next-auth/react';
import { GoogleSignIn } from './GoogleSignIn';

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-crime-darker border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-crime-accent rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CrimeWire</h1>
              <p className="text-xs text-gray-400">True Crime News</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="h-10 w-24 bg-gray-700 animate-pulse rounded-lg" />
            ) : session?.user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-300 hidden sm:block">
                  {session.user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <GoogleSignIn />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}