import { supabase } from './lib/supabase';

/**
 * submitLead — Nhiệm vụ: Ghi danh khách hàng vào hệ thống
 * @param {Object} data — Gồm: { full_name, email, phone, ...utms }
 */
export const submitLead = async (data) => {
  try {
    const { data: result, error } = await supabase
      .from('leads') // Sếp nhớ tạo table 'leads' trên Supabase nhé
      .insert([
        { 
          ...data,
          source_url: window.location.href,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
    return { success: true, result };
  } catch (error) {
    console.error("❌ Lead Engine Error:", error.message);
    return { success: false, error: error.message };
  }
};
