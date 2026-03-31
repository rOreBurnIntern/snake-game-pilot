export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Story Not Found</h1>
      <p className="text-gray-400 mb-8">
        The story you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <a href="/" className="btn-primary">
        Return to Home
      </a>
    </div>
  );
}