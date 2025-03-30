import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uftyzfgvsdojvfybjryq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // ✅ recommended for Vite
export const supabase = createClient(supabaseUrl, supabaseKey);