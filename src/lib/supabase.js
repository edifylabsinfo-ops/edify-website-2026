import { createClient } from '@supabase/supabase-js';

// [Tech Lead] — Bảo mật là ưu tiên hàng đầu.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Edify OS: Thiếu cấu hình Supabase. Lead sẽ không được lưu vào Database!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
