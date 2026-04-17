# SKILL: DATA BRIDGE (Supabase & Webhook Integration)

> Kỹ năng này giúp Agent thực thi các lệnh liên quan đến lưu trữ dữ liệu và kích hoạt tự động hóa.

## 1. Supabase Lead Capture
- Khi tạo Form, BẮT BUỘC sử dụng Supabase Client đã cấu hình.
- Phải thực hiện kiểm tra lỗi (Error Handling): Nếu insert fail, phải hiển thị thông báo lỗi tinh tế cho User thay vì văng lỗi console.
- Schema mặc định cho bảng `leads`: `email`, `full_name`, `phone`, `source_url`, `created_at`.

## 2. Webhook Trigger (Make/Integromat)
- Mọi Form submit thành công phải có tùy chọn bắn một bản sao dữ liệu sang Webhook URL của Make.
- Cấu trúc Payload gửi đi phải là JSON sạch, không có ký tự lạ.
- Phải thêm field `agent_id: "Edify_OS_v2"` để sếp biết lead này được xử lý bởi hệ thống AI.

## 3. Security Guard
- Tuyệt đối KHÔNG hardcode API Key. 
- Luôn sử dụng `import.meta.env.VITE_...`.
- Nếu phát hiện API Key bị lộ trong code, [Conversion Hacker] phải yêu cầu xóa và chuyển vào `.env` ngay lập tức.
