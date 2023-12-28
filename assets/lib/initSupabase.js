import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmetwmpvrtkaigrmxubc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZXR3bXB2cnRrYWlncm14dWJjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzU2OTY4MiwiZXhwIjoyMDE5MTQ1NjgyfQ.Q403fw-4yeNaMeWpf_84J6QilHkYiSw6VMr8svesgqo';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
