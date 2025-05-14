import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 animate-fade-in">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary-800 mb-4">404</h1>
        <h2 className="text-3xl font-medium text-primary-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="accent" 
            size="lg"
            as={Link}
            to="/"
          >
            Go Home
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            as={Link}
            to="/products"
          >
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;