# EDIFY OS MODES — Hệ Thống "Hộp Số" Vận Hành

> Dựa vào request của User, Agent BẮT BUỘC phải tự sang số (chọn Mode) tương ứng trước khi chạy PIPELINE. User cũng có thể ép Mode bằng cú pháp `[MODE: TÊN_MODE]`.

## 1. [MODE: ARCHITECT] (Số 1 - Cày ải nặng)
- **Khi nào dùng:** Khởi tạo Page mới, thiết kế Component lớn (Hero, Pricing), setup logic Database.
- **Hành vi:** Kích hoạt 100% Extended Thinking. Đọc toàn bộ `docs/`. Phải chạy qua đủ 8 bước PIPELINE. Output siêu chi tiết.

## 2. [MODE: BUILD] (Số 2 - Tốc độ trung bình)
- **Khi nào dùng:** Code các component phụ (Card, Button, Footer), tích hợp API.
- **Hành vi:** Bỏ qua khâu Data Schema nếu không cần thiết. Tập trung vào UI/UX và Frontend. Bắt buộc có Tracking.

## 3. [MODE: FIX] (Số 3 - Tốc độ bàn thờ)
- **Khi nào dùng:** Sửa mã màu, đổi text, fix lỗi padding/margin, đổi font Garamond sang Montserrat.
- **Hành vi:** **BỎ QUA THINKING SÂU.** Không phân tích luyên thuyên. Sửa lỗi thẳng vào code và in ra ngay lập tức. Dùng Minimal Context.

## 4. [MODE: REVIEW] (Số 0 - Kiểm định)
- **Khi nào dùng:** QA/QC code trước khi release, chạy `/heartbeat`.
- **Hành vi:** Chỉ đọc, không viết code mới. Quét lỗi Anti-pattern (Neobrutalism, Font Serif) và Tracking.
