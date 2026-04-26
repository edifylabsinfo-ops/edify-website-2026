# BẢO VỆ KIẾN TRÚC

1. **Bảo tồn code cũ:** Khi yêu cầu sửa một phần nhỏ trong file, không được tự ý xóa hoặc thay đổi logic của các hàm khác đang chạy ổn định.
2. **Không chế thư viện:** Chỉ sử dụng các thư viện đã có trong dự án: `react`, `lucide-react`, `tailwindcss`. Trừ khi được yêu cầu rõ ràng, tuyệt đối không tự thêm `framer-motion`, `mui`, `bootstrap`.
3. **Tailwind Safety:** Dùng mã màu HEX trực tiếp trong class (VD: `bg-[#163020]`) thay vì cấu hình phức tạp trong `tailwind.config.js` trừ khi cần thiết.
