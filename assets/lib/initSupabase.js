import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '';
const supabaseKey = '';
const supabase = createClient(supabaseUrl, supabseKey);

export { supabase };
