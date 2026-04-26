# SỔ TAY CẤP CỨU LỖI

**1. Vercel Build Failed (Command "npm run build" exited with 1):**
- *Kiểm tra ngay:* Tên file trên GitHub đã viết hoa chưa? (`Button.jsx` vs `button.jsx`).
- *Kiểm tra ngay:* Trong file `App.jsx` có gọi component nào mà CHƯA TẠO file trong thư mục `components` không?

**2. Module Not Found (Could not resolve):**
- Cắt bỏ ngay các dấu `../` thừa thãi. Chỉ dùng 1 cấp lùi `../` từ `components` ra `src`.

**3. Hiệu ứng không chạy:**
- Kiểm tra xem component đã gắn class `reveal` chưa.
- Kiểm tra file `index.css` đã có định dạng cho class `.reveal` và `.reveal.visible` chưa.
