import sys
from PIL import Image

def image_to_ico(image_path, ico_path, sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]):
    """
    이미지를 다양한 크기의 아이콘(ico) 파일로 변환합니다.
    :param image_path: 입력 이미지 파일 경로
    :param ico_path: 저장할 ico 파일 경로
    :param sizes: 아이콘에 포함할 크기 리스트 (기본값: 윈도우 표준 크기)
    """
    img = Image.open(image_path).convert("RGBA")
    # 각 크기에 맞게 리사이즈한 이미지 리스트 생성
    icons = [img.resize(size, Image.LANCZOS) for size in sizes]
    # 첫 번째 이미지를 기준으로 저장, 나머지는 append_images로 추가
    icons[0].save(ico_path, format='ICO', sizes=sizes)
    
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("사용법: python img_to_ico.py <이미지파일> <ico파일> [크기1,크기2,...(옵션)]")
        print("예시: python img_to_ico.py logo.png favicon.ico 16,32,48,64,128,256")
        sys.exit(1)
    image_path = sys.argv[1]
    ico_path = sys.argv[2]
    if len(sys.argv) > 3:
        # 쉼표로 구분된 크기 문자열을 튜플 리스트로 변환
        sizes = [int(s) for s in sys.argv[3].split(',')]
        sizes = [(s, s) for s in sizes]
    else:
        sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    image_to_ico(image_path, ico_path, sizes)
    print(f"{image_path} → {ico_path} 변환 완료")
