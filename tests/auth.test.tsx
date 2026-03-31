import { render, screen } from '@testing-library/react';
import { GoogleSignIn } from '@/components/GoogleSignIn';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('GoogleSignIn', () => {
  it('renders sign in button', () => {
    render(<GoogleSignIn />);
    expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
  });

  it('has accessible label', () => {
    render(<GoogleSignIn />);
    expect(screen.getByLabelText('Sign in with Google')).toBeInTheDocument();
  });

  it('has proper touch target size', () => {
    render(<GoogleSignIn />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/btn-primary|py-3|px-6|min-h/);
  });
});