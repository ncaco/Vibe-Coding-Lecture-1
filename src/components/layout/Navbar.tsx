import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../common/Icon';

interface NavbarProps {
  className?: string;
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ className = '', transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent ? 'bg-transparent' : 'bg-white shadow-md'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Icon name="building" size="sm" className="text-white" />
              </div>
              <span className="text-2xl font-bold text-teal-600">채대리</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              홈
            </Link>
            <Link 
              to="/components" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              컴포넌트
            </Link>
            <a href="#services" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              서비스
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              회사소개
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              문의하기
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button variant="primary" size="sm">
              회원가입
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "close" : "menu"} 
                size="lg" 
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                홈
              </Link>
              <Link 
                to="/components" 
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                컴포넌트
              </Link>
              <a 
                href="#services" 
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                서비스
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                회사소개
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                문의하기
              </a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="w-full mb-2">
                  로그인
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  회원가입
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 