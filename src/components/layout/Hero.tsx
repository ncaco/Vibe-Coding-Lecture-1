import React from 'react';
import Button from '../ui/Button';
import Icon from '../common/Icon';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  className?: string;
  variant?: 'default' | 'centered' | 'split';
}

const Hero: React.FC<HeroProps> = ({
  title = "당신의 꿈을 현실로 만드는 채용 서비스",
  subtitle = "AI 기반 맞춤형 구인구직 매칭으로 최적의 기회를 찾아드려요. 채대리와 함께라면 더 나은 기회를 찾을 수 있어요.",
  primaryButtonText = "구인구직 시작하기",
  secondaryButtonText = "서비스 둘러보기",
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  className = '',
  variant = 'default',
}) => {
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  const renderContent = () => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
      variant === 'centered' ? 'text-center' : ''
    }`}>
      <div className={`py-20 lg:py-32 ${
        variant === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : ''
      }`}>
        {/* Text Content */}
        <div className={`${variant === 'split' ? 'lg:pr-8' : ''}`}>
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              <Icon name="lightning" size="sm" className="mr-2" />
              AI 기반 매칭 서비스
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight ${
            variant === 'centered' ? 'mx-auto max-w-4xl' : 'max-w-3xl'
          }`}>
            {title}
          </h1>
          
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${
            variant === 'centered' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}>
            {subtitle}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${
            variant === 'centered' ? 'justify-center' : ''
          }`}>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onPrimaryClick}
              className="flex items-center justify-center"
            >
              {primaryButtonText}
              <Icon name="arrowRight" size="sm" className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">10K+</div>
              <div className="text-sm text-gray-600">성공 매칭</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">협력 기업</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">만족도</div>
            </div>
          </div>
        </div>

        {/* Visual Content for Split Variant */}
        {variant === 'split' && (
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="users" size="lg" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">실시간 매칭</h3>
                    <p className="text-teal-100">AI가 분석하는 최적의 기회</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="check" size="sm" className="text-teal-200 mr-3" />
                    <span>개인 맞춤형 추천</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="check" size="sm" className="text-teal-200 mr-3" />
                    <span>실시간 채용 정보</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="check" size="sm" className="text-teal-200 mr-3" />
                    <span>전문 컨설팅 지원</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-300 rounded-full opacity-30"></div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section 
      className={`relative overflow-hidden ${
        backgroundImage 
          ? 'bg-cover bg-center bg-no-repeat' 
          : 'bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50'
      } ${className}`}
      style={backgroundStyle}
    >
      {/* Background Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {renderContent()}
      </div>

      {/* Decorative Background Elements */}
      {!backgroundImage && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </>
      )}
    </section>
  );
};

export default Hero; 