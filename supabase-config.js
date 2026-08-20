// Supabase Configuration
// هذا الملف يحتوي على إعدادات الاتصال بـ Supabase

const SUPABASE_CONFIG = {
  // استبدل هذه القيم ببيانات مشروعك في Supabase
  URL: process.env.SUPABASE_URL || 'https://your-project.supabase.co',
  ANON_KEY: process.env.SUPABASE_ANON_KEY || 'your-anon-key-here',
  SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY || 'your-service-key-here',
};

// تحقق من وجود البيانات
function validateSupabaseConfig() {
  if (!SUPABASE_CONFIG.URL || SUPABASE_CONFIG.URL.includes('your-project')) {
    console.warn('⚠️ تنبيه: تم العثور على قيم افتراضية في إعدادات Supabase. يرجى تحديث .env');
    return false;
  }
  return true;
}

// تصدير الإعدادات
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_CONFIG, validateSupabaseConfig };
}
