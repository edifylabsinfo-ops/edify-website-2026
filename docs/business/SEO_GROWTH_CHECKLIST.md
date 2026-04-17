# EDIFY SEO & SOCIAL SHARE RULES

> [Conversion Hacker] và [Frontend Dev] phải check list này trước khi hoàn thành bất kỳ trang Landing Page nào.

## 1. Meta Tags Bắt Buộc
- **Title:** Tối đa 60 ký tự, phải chứa keyword chính (VD: "Edify Labs", "Marketing Thuê Ngoài").
- **Description:** 150-160 ký tự, phải có CTA mời gọi.
- **Canonical URL:** Luôn phải có để tránh trùng lặp nội dung.

## 2. Social Share (Open Graph)
- **og:image:** Phải sử dụng ảnh từ `_statics` có độ phân giải 1200x630.
- **og:title & og:description:** Phải đồng nhất với Meta Tags.
- **Twitter Card:** Phải set `summary_large_image`.

## 3. Performance Guard (Lighthouse)
- Ảnh phải dùng định dạng `.webp` hoặc `.avif` để tối ưu dung lượng.
- Phải có thuộc tính `loading="lazy"` cho các ảnh nằm dưới màn hình đầu tiên (below the fold).
- Font chữ Montserrat phải được preload để tránh tình trạng nhảy font (CLS).
