# EDIFY HEARTBEAT SYSTEM — Project Health Check

## 1. Kích hoạt Heartbeat
Khi User gõ lệnh: `/heartbeat` hoặc `Chạy kiểm tra hệ thống`, Agent BẮT BUỘC phải dừng mọi việc và thực hiện rà soát dự án theo checklist dưới đây.

## 2. Checklist Rà Soát (Health Metrics)
- [ ] **CSS Consistency:** Quét toàn bộ component mới code. Có class Tailwind nào bị hardcode màu lạ (không phải `#163020`, `#EEF0E5`, `#304D30`) không?
- [ ] **Component Bloat:** Có component nào đang dài quá 150 dòng không? Nếu có, đề xuất tách nhỏ (Refactor).
- [ ] **Tracking Debt:** Có nút CTA nào đang bị bỏ quên, chưa gắn `fbq` hoặc `dataLayer` không?
- [ ] **Anti-pattern Check:** Có component nào đang bị lạm dụng font chữ khác ngoài Montserrat không?

## 3. Output của Heartbeat
Báo cáo theo format:
- 🟢 HEALTHY: [Số lượng pass]
- 🔴 ISSUES: [Liệt kê lỗi và vị trí file]
- 🔧 ACTION PLAN: [Đề xuất lệnh để AI tự fix lỗi]
