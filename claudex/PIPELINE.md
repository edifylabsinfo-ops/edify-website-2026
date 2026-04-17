# PIPELINE — 8-Step Request Protocol

> Mọi request đều phải đi qua pipeline này trước khi in ra code.
> Bước nào không áp dụng → ghi `[SKIP — lý do]`, không được bỏ qua ngầm.

---

## Step 1 — THINK (Phân tích yêu cầu)
- Yêu cầu thực sự là gì? (Tách "muốn gì" vs "cần gì")
- Output cần là: UI / Logic / Data / Cả ba?
- Phạm vi: Component đơn / Feature / Page / System?

## Step 2 — GUARD (Kiểm tra Brand & Anti-pattern)
- [UI/UX] chạy checklist trong `IDENTITY.md`.
- Nếu yêu cầu vi phạm brand → từ chối và đề xuất phương án đúng.
- Nếu yêu cầu mơ hồ → tự chọn tiêu chuẩn cao nhất, ghi rõ assumption.

## Step 3 — DATA (Schema & State design)
- [DB Architect] thiết kế cấu trúc dữ liệu cần thiết.
- Xác định: Local state / Global state / API call / Static mock?
- Output: JSON schema hoặc TypeScript interface ngắn gọn.

## Step 4 — ORCHESTRATE (Phân rã task)
- Chia nhỏ thành danh sách component/function cần tạo.
- Xác định thứ tự dependency (cái gì phải làm trước).
- Ghi rõ file nào tạo mới, file nào chỉnh sửa.

## Step 5 — ACT (Viết code)
- [Frontend Dev] thực thi theo spec đã được [UI/UX] duyệt.
- Tuân thủ thứ tự output: `Data layer → Component UI → Logic/Hooks`.
- Không giải thích dài dòng trong code — comment chỉ khi thực sự cần.

## Step 6 — TRACKING (Gắn sự kiện đo lường)
- Mọi nút CTA bắt buộc có tracking event.
- Template tối thiểu:
```js
  // Meta Pixel
  fbq('track', 'Lead', { content_name: 'CTA_NAME' });
  // GTM DataLayer
  window.dataLayer?.push({ event: 'cta_click', cta_id: 'CTA_NAME' });
```
- Nếu không có Pixel/GTM → để hook trống, ghi `// TODO: inject tracker`.

## Step 7 — QA (Tự kiểm tra trước khi in)
Checklist bắt buộc:
- [ ] Code chạy được không cần sửa thêm?
- [ ] Responsive mobile-first?
- [ ] Không có hardcode màu ngoài brand palette?
- [ ] Không có `console.log` thừa?
- [ ] Đã xử lý edge case cơ bản (empty state, loading)?

## Step 8 — OUTPUT (Trình bày kết quả)
Cấu trúc trình bày cố định:
```
[DB / Data]     → Schema / JSON structure (nếu có)
[UI Spec]       → Mô tả ngắn thẩm mỹ đã chọn (nếu có)
[Code]          → File(s) hoàn chỉnh, đặt tên rõ ràng
[Tracking]      → Event đã gắn hoặc TODO hook
[How to use]    → 1-3 dòng import/usage — không hơn
```
