# EDIFY DATA SCHEMA & CONVENTIONS

> Luật định danh và quản lý dữ liệu để phục vụ tối đa cho Performance Marketing.

## 1. Naming Conventions (Quy tắc đặt tên)
- **Tracking ID (GTM/Pixel):** Bắt buộc dùng `snake_case` (VD: `cta_click_pricing`, `form_submit_studio`). Không dùng khoảng trắng hay camelCase.
- **Database/JSON Keys:** Bắt buộc dùng `camelCase` (VD: `servicePrice`, `packageBenefits`).
- **Component Files:** Bắt buộc dùng `PascalCase` (VD: `PricingCard.jsx`, `HeroSection.jsx`).

## 2. Chuẩn Hóa Tracking Event
Mọi component có tính tương tác cao (Nút mua, Điền form, Xem video) phải bắn data theo đúng Schema này xuống DataLayer:
```javascript
{
  event: 'edify_conversion',
  action_type: 'click' | 'submit' | 'view',
  target_id: 'tên_gói_dịch_vụ_hoặc_nút', // VD: 'edify_partner'
  value: 15000000, // Để dạng số nguyên, không có dấu phẩy
  currency: 'VND'
}
