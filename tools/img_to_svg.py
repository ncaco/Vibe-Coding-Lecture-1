import sys
from PIL import Image
import numpy as np

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % tuple(rgb)

def image_to_svg(image_path, svg_path, scale=1):
    img = Image.open(image_path).convert('RGBA')
    if scale != 1:
        img = img.resize((int(img.width * scale), int(img.height * scale)), Image.ANTIALIAS)
    arr = np.array(img)
    height, width = arr.shape[:2]

    svg_header = f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">\n'
    svg_content = []
    for y in range(height):
        for x in range(width):
            r, g, b, a = arr[y, x]
            if a == 0:
                continue  # 투명 픽셀은 무시
            color = rgb_to_hex((r, g, b))
            opacity = a / 255
            svg_content.append(
                f'<rect x="{x}" y="{y}" width="1" height="1" fill="{color}" fill-opacity="{opacity:.2f}"/>'
            )
    svg_footer = '</svg>\n'

    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_header)
        f.writelines(line + '\n' for line in svg_content)
        f.write(svg_footer)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("사용법: python img_to_svg.py <이미지파일> <svg파일> [스케일(옵션)]")
        sys.exit(1)
    image_path = sys.argv[1]
    svg_path = sys.argv[2]
    scale = float(sys.argv[3]) if len(sys.argv) > 3 else 1
    image_to_svg(image_path, svg_path, scale)
    print(f"{image_path} → {svg_path} 변환 완료")
