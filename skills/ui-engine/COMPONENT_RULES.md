# EDIFY UI ENGINE — Component Architecture Rules

> Đây là bộ luật tối cao cho mọi file `.jsx` / `.tsx` được sinh ra. Bất kỳ component nào vi phạm sẽ bị reject ở khâu [QA].

## 1. Cấu trúc Component Chuẩn
- **Single Responsibility:** Mỗi component chỉ làm 1 việc. Đừng nhét cả Header và Footer vào chung 1 file Layout.
- **Props Definition:** Phải định nghĩa rõ ràng. Ưu tiên truyền data theo dạng Object (VD: `data={{ title, price, features }}`) thay vì truyền lẻ tẻ 10 cái props.

## 2. Thẩm mỹ Cinematic (Cinematic Specs)
- **Backgrounds:** Sử dụng layer mờ (`backdrop-blur-md` hoặc `backdrop-blur-lg`) kết hợp với background opacity (VD: `bg-[#163020]/80`) để tạo độ sâu.
- **Shadows:** Cấm dùng shadow mặc định của Tailwind. Phải dùng shadow có màu của thương hiệu (VD: `shadow-lg shadow-[#163020]/20`).
- **Gradients:** Chỉ được dùng gradient góc xiên (`bg-gradient-to-br`) từ #163020 sang các tone tối hơn, tạo cảm giác bí ẩn, sang trọng.

## 3. Motion & Animation (Chuyển động)
- Mọi nút bấm (CTA) bắt buộc có hiệu ứng `hover:scale-105` và `transition-all duration-300`.
- Fade-in: Các section khi cuộn tới phải dùng class `animate-fade-in-up` (yêu cầu cấu hình sẵn trong tailwind.config). Không làm component xuất hiện giật cục.

## 4. State Management (Quản lý trạng thái)
- Hạn chế tối đa dùng `useState` tràn lan. Nếu là data tĩnh (Bảng giá, Text), hardcode hoặc lấy từ JSON.
- Chỉ dùng State cho: Mở/đóng Modal, Toggle Menu, hoặc Form input.
