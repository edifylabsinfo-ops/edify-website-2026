# EDIFY KNOWLEDGE VAULT — Linking Rules

## 1. Cơ chế Wikilinks [[target]]
Mọi tài liệu trong folder `docs/` phải sử dụng liên kết chéo. 
- Khi nhắc đến màu sắc, phải trỏ về [[Color_Palette]].
- Khi nhắc đến dịch vụ, phải trỏ về [[Service_Packages]].
- Mục đích: Để AI tự động truy xuất dữ liệu gốc, không bao giờ dùng "Mock Data".

## 2. Document Registration
Mọi file mới được tạo trong `src/` hoặc `skills/` phải được đăng ký vào file `docs/INDEX.md` để Agent có cái nhìn tổng quan về hệ thống.

## 3. Search Strategy
Sử dụng tư duy Hybrid Search: Kết hợp từ khóa (Keyword) và ý nghĩa (Semantic) khi tra cứu tài liệu trong Vault để đảm bảo độ chính xác 100%.
