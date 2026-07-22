import os
from PIL import Image

images_dir = r"c:\projects\HIQUALITY\public\images"

for root, dirs, files in os.walk(images_dir):
    for file in files:
        if file.lower().endswith(('.png', '.jpg', '.jpeg')) and not file.lower().endswith('.webp'):
            input_path = os.path.join(root, file)
            base_name = os.path.splitext(file)[0]
            output_path = os.path.join(root, f"{base_name}.webp")
            
            try:
                with Image.open(input_path) as img:
                    # Convert RGBA to RGB if saving without alpha or keep RGBA for webp
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img = img.convert('RGBA')
                    else:
                        img = img.convert('RGB')
                    
                    img.save(output_path, 'WEBP', quality=85, method=6)
                    print(f"Converted: {file} -> {base_name}.webp")
            except Exception as e:
                print(f"Failed to convert {file}: {e}")

print("Image conversion complete.")
