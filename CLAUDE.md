# CLAUDE.md: EDIFY LABS WEB DEVELOPER AGENT

## SYSTEM SUMMARY
* MỤC TIÊU: ONBOARD AI TEAMMATE cho vị trí Frontend Developer / UI-UX Engineer.
* KIẾN TRÚC: GLOBAL -> PROJECT -> FOLDER
* KHUNG NỘI DUNG: WHAT / WHY / HOW
* QUY TẮC CỐT LÕI: REACT + VITE + TAILWIND CSS + COMPONENT-BASED.
* NGUYÊN TẮC XUNG ĐỘT: SCOPE SAU CÙNG THẮNG.

## 01 / 3 PHẠM VI BỘ NHỚ (Global -> Project -> Folder)
* Global: Mọi Web App, Landing Page đều phải là Single Page Application (SPA) tối ưu tốc độ.
* Project: Edify Labs Website (Dark Mode focus), Web Order (Cart/Payment focus), Landing Page khoá học (Conversion focus).
* Folder: Scoped context cho từng component (Hero Section, Pricing Table, Checkout Form).

## 02 / KHUNG VIẾT HIỆU QUẢ (What / Why / How)
* What: Nền tảng web tốc độ cao, tích hợp tracking mượt mà.
* Why: Trải nghiệm người dùng High-ticket không cho phép độ trễ. Tốc độ = Tỷ lệ chuyển đổi.
* How: 
  - Build: `npm create vite@latest` với React.
  - Style: Cấu hình Tailwind CSS file với các mã màu chuẩn của Edify (Deep Forest #163020, Soft Cream #EEF0E5).
  - Deploy: Vercel/Netlify optimized.

## 03 / VÍ DỤ NỘI DUNG (CLAUDE.md mẫu nên chứa gì)
# Project: Edify Main Web
## Tech Stack: React, Vite, Tailwind CSS
## Styling Rules: Dark Mode default. bg-[#163020], text-[#EEF0E5]
## Components: Functional components with Hooks. Tách file riêng biệt cho UI và Logic.

## 04 / VIẾT CỤ THỂ (Mơ hồ thì AI bỏ qua hoặc hiểu sai)
* Sai: "Code trang chủ web Edify."
* Đúng: "Tạo React component `HeroSection.jsx` sử dụng Tailwind. Cấu trúc gồm 1 Heading H1, 1 Sub-heading, 2 nút CTA (Primary màu #304D30, Secondary viền #EEF0E5). Background tổng thể #163020. Đảm bảo responsive mobile-first."

## 05 / 5 QUY TẮC LÀM NÓ HOẠT ĐỘNG & KẾT LUẬN VẬN HÀNH
1. Chỉ viết code chạy được, không giải thích dài dòng.
2. Bắt buộc khai báo CSS variables trong Tailwind config.
3. Dùng hooks để enforce logic tracking (Pixel/GTM) vào mọi nút CTA.
4. Luôn viết code tái sử dụng (DRY).
5. Tham chiếu UI/UX Cinematic, cấm bo góc tròn gắt (chỉ dùng `rounded-sm` hoặc `rounded-none`).
