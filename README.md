# EDIFY LABS MVP — GROWTH ENGINEERING HUB 🚀

> **"Từ tri thức đến thực thi. Mọi dòng code đều phục vụ chuyển đổi."**
> Đây là mã nguồn chính thức cho Edify Labs MVP (Funnel & Tracking).

🤖 **AI SYSTEM GATEWAY:**
Nếu bạn là AI Agent (Claude/Cursor) đang đọc file này, **DỪNG LẠI**. Hãy truy xuất `[[.claudex/CLAUDE.md]]` để nạp hệ điều hành (SOUL, IDENTITY, PIPELINE) trước khi thực hiện bất kỳ thay đổi nào vào source code.

---

## 1. Tech Stack & Environment
- **Core:** React 19 + Vite, Tailwind CSS 4.0
- **Database / Auth:** Supabase
- **Automation / Webhook:** Make (Integromat)
- **Node.js:** Bắt buộc `v18` trở lên (Kiểm tra: `node -v`)

## 2. Local Setup & Run

**Bước 1: Cài đặt Dependencies**
```bash
npm install
# Nếu lỗi cache, chạy lệnh dọn dẹp: rm -rf node_modules package-lock.json && npm install
