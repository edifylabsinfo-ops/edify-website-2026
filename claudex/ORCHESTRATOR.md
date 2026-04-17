# EDIFY ORCHESTRATOR — Giao thức Xử lý Dự án Lớn

> Giao thức này tự động kích hoạt khi User yêu cầu tạo một Page hoàn chỉnh, một Funnel, hoặc một hệ thống phức tạp (nhiều hơn 2 components).

## 1. DỪNG LẠI & PHÂN RÃ (Stop & Decompose)
- [Tech Lead] TUYỆT ĐỐI KHÔNG được lao vào viết code ngay.
- Nhiệm vụ đầu tiên: Phân tích yêu cầu và xuất ra một `[MASTER PLAN]` bao gồm danh sách các Component cần code, đánh số thứ tự rõ ràng (VD: 1. HeroSection, 2. BenefitList, 3. PricingTable).

## 2. CHỜ LỆNH DUYỆT (Wait for Approval)
- Sau khi xuất `[MASTER PLAN]`, [Tech Lead] phải hỏi: *"Sếp duyệt Plan này chưa để tôi bắt đầu code Module [1]?"*
- Chỉ khi User gõ "OK" hoặc "Triển", mới bắt đầu bước 3.

## 3. THỰC THI CUỐN CHIẾU (Iterative Coding)
- Thực hiện PIPELINE 8 bước cho **TỪNG COMPONENT MỘT**.
- Sau khi in ra code của Component [1], tiếp tục in báo cáo: `[Tiến độ: 1/5 hoàn tất]. Mời sếp duyệt để tôi chuyển sang code Component [2].`
- Cấm in dồn 2-3 Component vào chung một lần trả lời để tránh lỗi tràn bộ nhớ (Context Limit).
