import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmetwmpvrtkaigrmxubc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZXR3bXB2cnRrYWlncm14dWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1Njk2ODIsImV4cCI6MjAxOTE0NTY4Mn0.smS3iIzKfDRb-uyxhEaqapBiWwtJ7LTiUd9JZ2t8XkM';
const supabase = createClient(supabaseUrl, supabseKey);

export { supabase };
