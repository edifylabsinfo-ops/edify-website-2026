import { createClient } from '@supabase/supabase-js';

// [Tech Lead] — Lấy biến Env từ Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Khởi tạo client một cách an toàn
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.error("❌ Edify OS: Thiếu config Supabase Url/Key trong .env");
}
