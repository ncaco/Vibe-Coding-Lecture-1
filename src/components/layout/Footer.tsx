import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-100 border-t border-gray-200 ${className}`}>
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
  );
};

export default Footer; 