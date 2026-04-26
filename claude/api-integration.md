# LUỒNG DỮ LIỆU LEAD GENERATION

**1. Component: `LeadForm.jsx`**
- Không cần backend node.js phức tạp. 
- Mặc định chuẩn bị sẵn hàm fetch() bắn dữ liệu sang Webhook (Make.com, Zapier, hoặc Google Apps Script).
- Payload chuẩn bị gửi đi phải đủ: Tên, SĐT, Nhu cầu (từ bài Quiz trước đó nếu có) và Thời gian.

**2. Trải nghiệm sau khi Submit:**
- Thay nút "Gửi" thành trạng thái "Đang xử lý..." (Spinner).
- Hiển thị thông báo Success chuẩn Cinematic: Tối giản, xác nhận rõ ràng "Chuyên gia sẽ liên hệ trong X phút".
