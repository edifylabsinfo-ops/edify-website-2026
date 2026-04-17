# SKILL: A/B TESTING GENERATOR

> Khi User yêu cầu "Optimize" hoặc "A/B Test", Agent phải xuất ra tối thiểu 2 phiên bản dựa trên các giả thuyết khác nhau.

## 1. Phiên bản A (Control - An toàn)
- Tuân thủ đúng Brand Guidelines hiện tại.
- Layout truyền thống, CTA rõ ràng.

## 2. Phiên bản B (Challenger - Đột phá)
- [Conversion Hacker] đề xuất 1 thay đổi táo bạo dựa trên `CONVERSION_RULES.md`.
- Ví dụ: Đổi màu nút CTA từ Hunter Green sang một tone sáng hơn (nếu an toàn về brand), hoặc thay đổi Headline từ "Giải pháp" sang "Nỗi đau".

## 3. Cách thức bàn giao
- Xuất code cho cả 2 phiên bản.
- Ghi chú rõ: `// VERSION_A: Focus on Trust` và `// VERSION_B: Focus on Urgency`.
- Gắn Tracking ID khác nhau (VD: `cta_click_v1`, `cta_click_v2`) để sếp đo lường được trên GA4/Pixel.
