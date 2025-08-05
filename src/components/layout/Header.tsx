import React from 'react';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-teal-600">채대리</h1>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              서비스
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              기업정보
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              커리어
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              고객센터
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" size="md">
              로그인
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 