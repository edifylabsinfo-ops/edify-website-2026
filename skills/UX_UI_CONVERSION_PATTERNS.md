# SKILL: UX/UI CONVERSION PATTERNS

> Áp dụng cho mọi Component để tối ưu hóa hành vi người dùng.

## 1. Visual Hierarchy (Thứ bậc thị giác)
- **Z-Pattern:** Áp dụng cho Hero Section (Logo trái -> Menu phải -> Content giữa -> CTA).
- **F-Pattern:** Áp dụng cho các trang nhiều text (Blog/Dossier).
- **Quy tắc 60-30-10:** 60% màu chủ đạo (#163020), 30% màu bổ trợ (#304D30), 10% màu nhấn bắt sáng (#EEF0E5).

## 2. Micro-interactions (Tương tác nhỏ)
- **Nút CTA:** Phải có hiệu ứng `hover:scale-105` và `active:scale-95`.
- **Scrolling:** Sử dụng `Framer Motion` để các section "trồi lên" nhẹ nhàng (fade-in up) khi user cuộn tới, tạo cảm giác Cinematic cao cấp.

## 3. Mobile Ergonomics (Công thái học di động)
- **Thumb Zone:** Các nút quan trọng nhất phải nằm ở nửa dưới màn hình để dễ bấm bằng ngón cái.
- **Font Size:** Text body tối thiểu 16px, Headline tối thiểu 24px trên Mobile để tránh việc user phải nheo mắt.

## 4. Scarcity & Urgency (Sự khan hiếm)
- Gắn thêm nhãn "Chỉ còn 5 suất" hoặc Countdown Timer (nếu có chiến dịch) nằm ngay cạnh nút đăng ký.
