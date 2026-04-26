# NHỮNG ĐIỀU CẤM KỴ & BẮT BUỘC NHỚ MÃI MÃI

**1. Luật Thư Mục (Án tử nếu vi phạm):**
- Dự án sử dụng CẤU TRÚC PHẲNG (Flat Architecture).
- TOÀN BỘ file UI component chỉ được phép nằm ngang hàng nhau trong `src/components/`. 
- KHÔNG BAO GIỜ được tạo thư mục `sections/`, `pages/` hay bất kỳ thư mục con nào khác.

**2. Luật Đặt Tên (PascalCase):**
- Tên file Component BẮT BUỘC viết hoa chữ cái đầu: `Hero.jsx`, `Button.jsx`, `Team.jsx`.
- Máy chủ Vercel (Linux) phân biệt HOA/thường cực kỳ gắt gao. Gọi `button.jsx` sẽ làm sập toàn bộ hệ thống.

**3. Luật Import:**
- Từ thư mục `components` gọi ra `hooks` chỉ lùi 1 cấp: `import abc from '../hooks/abc.js'`.
