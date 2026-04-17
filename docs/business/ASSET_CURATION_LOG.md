# EDIFY ASSET CURATION LOG

> Hướng dẫn sử dụng hình ảnh và video để giữ vững chất "Cinematic".

## 1. Nguyên tắc lựa chọn (The Vibe)
- **Mood:** Ưu tiên ảnh có độ tương phản cao, ánh sáng tập trung (Spotlight), tone màu trầm ấm hoặc xanh rừng sâu.
- **Backgrounds:** Sử dụng ảnh có độ sâu trường ảnh (bokeh) để làm nổi bật phần text Soft Cream phía trên.

## 2. Quy trình xử lý Asset
- Trước khi nhúng ảnh từ `_statics/`, Agent phải kiểm tra định dạng. Ưu tiên chuyển đổi sang `.webp`.
- **Placeholder:** Nếu chưa có ảnh thật, sử dụng placeholder có màu `#163020` thay vì dùng ảnh demo lung tung trên mạng.

## 3. Video Background (The New Streamer)
- Đối với các Section cần video background: Phải set `muted`, `loop`, `playsinline` và che phủ bởi một lớp `bg-[#163020]/40` để đảm bảo text phía trên luôn đọc được rõ ràng.
