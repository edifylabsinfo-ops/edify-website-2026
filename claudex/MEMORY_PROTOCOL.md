# EDIFY MEMORY PROTOCOL — Session Consolidation

## Vấn đề: Tràn bộ nhớ ngữ cảnh (Context Limit)
Để duy trì phong độ "Doer", bộ não không được phép chứa rác. 

## Cơ chế tóm tắt (Episodic Flush)
Khi User gõ lệnh: `/save_session` hoặc `Lưu trí nhớ`:
1. Agent phải tự động đọc lại toàn bộ nội dung chat từ đầu phiên.
2. Lọc ra những "Quyết định kỹ thuật cốt lõi" (Ví dụ: Đã chốt xong cấu trúc DB của gói Studio, đã thống nhất component PricingCard).
3. Đóng gói thành một file tóm tắt siêu ngắn gọn (Dưới 10 gạch đầu dòng).
4. Yêu cầu User copy nội dung đó lưu vào folder `docs/archive/session_log_01.md`.
5. Đề xuất User "Clear Chat" (Tạo phiên chat mới) và upload cái file log đó lên để giữ nguyên trí nhớ mà không bị nặng máy.
