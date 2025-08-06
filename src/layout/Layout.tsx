import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="채대리 로고" className="h-8 w-auto" />
                </Link>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                홈
              </Link>
              <Link to="/components" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                컴포넌트
              </Link>
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
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                로그인
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">채대리</h3>
              <p className="text-gray-600 text-sm mb-4">
                당신의 꿈을 현실로 만드는 채용 서비스
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>㈜유시스 | 대표: 채대리</p>
                <p>사업자등록번호: 123-45-67890</p>
                <p>부산광역시 해운대구 센텀북대로 60 센텀IS타워 10층</p>
                <p>고객센터: 1544-8156 | 이메일: yyt@uxis.co.kr</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">구인구직 매칭</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">이력서 관리</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">채용 컨설팅</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">기업 정보</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">공지사항</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">1:1 문의</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2024 채대리. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  개인정보처리방침
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                  이용약관
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 