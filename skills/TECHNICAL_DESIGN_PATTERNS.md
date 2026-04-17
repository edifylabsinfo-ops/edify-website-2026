# EDIFY TECH PATTERNS (React/Vite/Tailwind)

> Cách chúng ta xây dựng hệ thống để dễ bảo trì và scale nhanh.

## 1. Component Pattern (Atomic Design)
- **Atoms:** Các nút bấm, input, text label (Nằm trong `src/components/ui/`).
- **Molecules:** Form đăng ký, Card sản phẩm (Gồm nhiều Atoms kết hợp).
- **Organisms:** HeroSection, Navbar, Footer (Phần lớn của Page).

## 2. Data Fetching Pattern
- Luôn tách Logic gọi API (Supabase) ra khỏi Component UI. 
- Ưu tiên sử dụng Custom Hooks (VD: `useLeads.js`) để quản lý state loading/error.

## 3. Styling Pattern (Tailwind 4.0)
- Ưu tiên dùng `grid` và `flex` để layout. 
- Mọi khoảng cách (margin/padding) phải tuân theo hệ số 4 (p-4, m-8, gap-12) để tạo sự cân đối thị giác hoàn hảo.
