import React, { useState } from 'react';
import { Button, Card, Input, Badge, Icon, Carousel } from '@/components';

const Components: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  // 샘플 이미지 URL들
  const sampleImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">채대리 컴포넌트 라이브러리</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            재사용 가능한 UI 컴포넌트들을 확인하고 테스트해보세요
          </p>
        </div>

        {/* Carousel Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Carousel 컴포넌트</h2>
          <div className="space-y-8">
            {/* Basic Carousel */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">기본 Carousel</h3>
              <Carousel className="h-64">
                {sampleImages.map((image, index) => (
                  <div key={index} className="w-full h-64 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">슬라이드 {index + 1}</h3>
                      <p className="text-teal-100">자동 재생되는 캐러셀입니다</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Image Carousel */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">이미지 Carousel</h3>
              <Carousel className="h-80" interval={3000}>
                {sampleImages.map((image, index) => (
                  <div key={index} className="w-full h-80 relative">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-bold mb-2">이미지 {index + 1}</h3>
                        <p className="text-lg">3초마다 자동 전환</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Manual Carousel */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">수동 Carousel (자동재생 비활성화)</h3>
              <Carousel autoPlay={false} className="h-48">
                <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">수동 슬라이드 1</h3>
                    <p>화살표나 점을 클릭하여 이동하세요</p>
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">수동 슬라이드 2</h3>
                    <p>키보드 화살표 키도 사용 가능합니다</p>
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">수동 슬라이드 3</h3>
                    <p>완전히 수동으로 제어되는 캐러셀</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Button 컴포넌트</h2>
          <Card variant="elevated" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Card Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Card 컴포넌트</h2>
          <div className="space-y-8">
            {/* Basic Cards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">기본 카드</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="default" padding="md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Default Card</h3>
                  <p className="text-gray-600">기본 카드 스타일입니다.</p>
                </Card>
                
                <Card variant="elevated" padding="md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Elevated Card</h3>
                  <p className="text-gray-600">그림자가 있는 카드입니다.</p>
                </Card>
                
                <Card variant="outlined" padding="md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlined Card</h3>
                  <p className="text-gray-600">테두리가 있는 카드입니다.</p>
                </Card>
              </div>
            </div>

            {/* Image Cards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">이미지 카드</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card 
                  variant="image" 
                  padding="md"
                  imageSrc={sampleImages[0]}
                  imageAlt="팀워크 이미지"
                  imageHeight="md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">팀워크</h3>
                  <p className="text-gray-600">함께 일하는 팀의 모습입니다.</p>
                  <div className="mt-4">
                    <Badge variant="primary" size="sm">협업</Badge>
                  </div>
                </Card>

                <Card 
                  variant="image" 
                  padding="md"
                  imageSrc={sampleImages[1]}
                  imageAlt="회의 이미지"
                  imageHeight="md"
                  imageOverlay={true}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">회의</h3>
                  <p className="text-gray-600">적극적인 토론이 이루어지는 회의실입니다.</p>
                  <div className="mt-4">
                    <Badge variant="secondary" size="sm">토론</Badge>
                  </div>
                </Card>

                <Card 
                  variant="image" 
                  padding="md"
                  imageSrc={sampleImages[2]}
                  imageAlt="개발 이미지"
                  imageHeight="md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">개발</h3>
                  <p className="text-gray-600">창의적인 개발 환경을 제공합니다.</p>
                  <div className="mt-4">
                    <Badge variant="success" size="sm">개발</Badge>
                  </div>
                </Card>
              </div>
            </div>

            {/* Image Position Cards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">이미지 위치</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  variant="image" 
                  padding="md"
                  imageSrc={sampleImages[0]}
                  imageAlt="상단 이미지"
                  imageHeight="sm"
                  imagePosition="top"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">상단 이미지</h3>
                  <p className="text-gray-600">이미지가 상단에 위치한 카드입니다.</p>
                </Card>

                <Card 
                  variant="image" 
                  padding="md"
                  imageSrc={sampleImages[1]}
                  imageAlt="하단 이미지"
                  imageHeight="sm"
                  imagePosition="bottom"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">하단 이미지</h3>
                  <p className="text-gray-600">이미지가 하단에 위치한 카드입니다.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Input 컴포넌트</h2>
          <Card variant="elevated" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Inputs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="이름" 
                    placeholder="이름을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input 
                    type="email" 
                    label="이메일" 
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Input Sizes</h3>
                <div className="space-y-4">
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input" />
                  <Input size="lg" placeholder="Large input" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Input States</h3>
                <div className="space-y-4">
                  <Input placeholder="Normal input" />
                  <Input placeholder="Disabled input" disabled />
                  <Input placeholder="Error input" error="이 필드는 필수입니다." />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badge Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badge 컴포넌트</h2>
          <Card variant="elevated" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Badge Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Badge Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Icon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Icon 컴포넌트</h2>
          <Card variant="elevated" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Icon Sizes</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Icon name="user" size="sm" />
                    <span className="text-xs text-gray-500 mt-1">Small</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="user" size="md" />
                    <span className="text-xs text-gray-500 mt-1">Medium</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="user" size="lg" />
                    <span className="text-xs text-gray-500 mt-1">Large</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="user" size="xl" />
                    <span className="text-xs text-gray-500 mt-1">Extra Large</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Icons</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    'user', 'users', 'document', 'briefcase', 'chat', 'phone',
                    'building', 'academic', 'lightning', 'search', 'arrowRight', 'arrowLeft'
                  ].map((iconName) => (
                    <div key={iconName} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Icon name={iconName} size="lg" className="text-teal-600" />
                      <span className="text-sm text-gray-600 mt-2">{iconName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">사용 예시</h2>
          <Card variant="elevated" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">프로필 카드 예시</h3>
                <Card variant="elevated" padding="md" className="max-w-md">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Icon name="user" size="lg" className="text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">김채대리</h4>
                      <p className="text-gray-600">프론트엔드 개발자</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="primary" size="sm">React</Badge>
                        <Badge variant="secondary" size="sm">TypeScript</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">폼 예시</h3>
                <div className="max-w-md space-y-4">
                  <Input 
                    label="이름" 
                    placeholder="이름을 입력하세요"
                    required
                  />
                  <Input 
                    type="email" 
                    label="이메일" 
                    placeholder="이메일을 입력하세요"
                    required
                  />
                  <div className="flex gap-2">
                    <Button variant="primary">저장</Button>
                    <Button variant="outline">취소</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Components; 