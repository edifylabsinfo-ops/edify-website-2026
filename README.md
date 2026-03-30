# Edify Labs MVP - Local Run & Setup Guide 🚀

## 1. Requirements
**Bắt buộc:**
- Node.js ≥ 18
- npm hoặc yarn

**Check nhanh:**
```bash
node -v
```

## 2. Install Dependencies
```bash
npm install
```
*Nếu lỗi → fix nhanh:*
```bash
rm -rf node_modules package-lock.json
npm install
```

## 3. Env Setup (Quan Trọng)
Đảm bảo file `.env` đã được tạo với nội dung:
```env
VITE_SUPABASE_URL=https://weiukwzxxkycvqgdtlqq.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_xxx
```

## 4. Run Dev Server
```bash
npm run dev
```
**Kết quả:** Mở trình duyệt tại `http://localhost:5173`

## 5. Test Flow (Bắt buộc)
**Test full funnel:**
1. Vào `/workshop`
2. Submit form

**Check:**
- ✅ **Supabase**: Table `users` và `leads` đã có dữ liệu chưa.
- ✅ **Make**: Scenario nhận webhook đã trigger thành công chưa.

## 6. Lỗi Thường Gặp
❌ **Không insert được DB**
👉 Fix: Check RLS policy trên Supabase (Đảm bảo table leads và users cho phép insert).

❌ **Webhook không chạy**
👉 Fix: Make scenario chưa bật ON, hoặc chưa click “Run once” để test.

❌ **ENV undefined**
👉 Fix: Restart server: `npm run dev`

## 7. Pro Dev Commands
- 🔄 **restart nhanh**: `ctrl + c` rồi `npm run dev`
- 📦 **add package**: `npm install <package>`

## 8. Ready Check
| Item | Status |
| --- | --- |
| Node 18+ | ✅ |
| ENV | ✅ |
| Supabase | ✅ |
| Webhook | ✅ |
| Dev server | ✅ |

---

### 🔥 Kết Luận
Với setup này, bạn có thể chạy full hệ thống local, test funnel và sau đó deploy trực tiếp lên Vercel.

### 🚀 Next Steps (Deploy)
1. `git init`
2. `git add .`
3. `git commit -m "init mvp"`
4. Push lên GitHub
5. Connect Vercel → LIVE!
