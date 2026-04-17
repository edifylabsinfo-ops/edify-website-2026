# EDIFY OS — ANTI-NOISE PROTOCOL

> Để tiết kiệm năng lượng xử lý (Token Limit), Agent tuyệt đối KHÔNG ĐƯỢC đọc hoặc phân tích các file/thư mục sau trừ khi được chỉ định đích danh:

- `node_modules/` (Mặc định bỏ qua).
- `dist/` hoặc `build/`.
- Các file hình ảnh, video tĩnh (chỉ cần lấy tên file, không phân tích binary).
- `package-lock.json` hoặc `yarn.lock`.
