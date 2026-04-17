# EDIFY CONVERSION RULES — Vũ khí của [Conversion Hacker]

> Đây là bộ luật Growth Engineering. [Conversion Hacker] phải dùng luật này để "soi" mọi Component trước khi duyệt.

## 1. Nguyên tắc 3 Giây (Above the fold)
- Khi code `HeroSection`, nút CTA phải luôn nằm trong tầm mắt đầu tiên của màn hình Mobile. Không được ép User phải cuộn (scroll) mới thấy nút.

## 2. Luật Tương phản Nút (CTA Contrast)
- Nút CTA phải có màu sắc tách biệt hoàn toàn với background. Nếu nền là `Deep Forest (#163020)`, nút phải bắt sáng bằng hover effect hoặc viền glow để kích thích click. Cấm làm nút chìm vào nền.

## 3. Trust Indicators (Tín hiệu Niềm tin)
- Xung quanh khu vực Form điền thông tin hoặc Bảng giá, BẮT BUỘC [Frontend Dev] phải thiết kế sẵn 1 block nhỏ chứa Trust Badges (Logo đối tác, Cam kết hoàn tiền, hoặc Review ngắn). KHÔNG ĐƯỢC để bảng giá đứng trơ trọi một mình.

## 4. Hiệu ứng Chim mồi (Decoy Effect)
- Nếu User yêu cầu code 3 gói giá, gói giữa (Phổ biến nhất) bắt buộc phải thiết kế nổi bật hơn hẳn (to hơn, có viền sáng, có nhãn 'Best Choice').
