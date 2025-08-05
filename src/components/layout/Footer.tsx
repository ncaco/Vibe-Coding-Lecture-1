import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Button from '../ui/Button';

interface FooterProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

const Footer: React.FC<FooterProps> = ({ className = '', variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <footer className={`bg-gray-900 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Icon name="building" size="sm" className="text-white" />
              </div>
              <span className="text-xl font-bold">채대리</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                이용약관
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 채대리. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Icon name="building" size="md" className="text-white" />
              </div>
              <span className="text-2xl font-bold">채대리</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              당신의 꿈을 현실로 만드는 채용 서비스. AI 기반 맞춤형 구인구직 매칭으로 최적의 기회를 찾아드려요.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Icon name="twitter" size="sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Icon name="linkedin" size="sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Icon name="facebook" size="sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Icon name="instagram" size="sm" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <h4 className="text-lg font-semibold mb-3">뉴스레터 구독</h4>
              <p className="text-gray-300 text-sm mb-4">
                최신 채용 정보와 업계 소식을 받아보세요.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
                <Button 
                  variant="primary" 
                  size="sm"
                  className="rounded-l-none"
                >
                  구독
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">서비스</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Icon name="users" size="sm" className="mr-2" />
                  구인구직 매칭
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Icon name="document" size="sm" className="mr-2" />
                  이력서 관리
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Icon name="chat" size="sm" className="mr-2" />
                  채용 컨설팅
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Icon name="building" size="sm" className="mr-2" />
                  기업 정보
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Icon name="academic" size="sm" className="mr-2" />
                  커리어 개발
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">고객지원</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  1:1 문의
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Icon name="phone" size="sm" className="text-teal-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">고객센터</p>
                <p className="text-white font-medium">1544-8156</p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="mail" size="sm" className="text-teal-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">이메일</p>
                <p className="text-white font-medium">yyt@uxis.co.kr</p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="location" size="sm" className="text-teal-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">주소</p>
                <p className="text-white font-medium">부산광역시 해운대구 센텀북대로 60</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2024 채대리. All rights reserved.</p>
              <p className="mt-1">㈜유시스 | 대표: 채대리 | 사업자등록번호: 123-45-67890</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 