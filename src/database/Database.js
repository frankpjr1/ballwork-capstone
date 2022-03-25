
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://daaceyayqplykibiooqs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhYWNleWF5cXBseWtpYmlvb3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyNzYxNjEsImV4cCI6MTk2Mjg1MjE2MX0.VloR0wEBZavhqX_52sJAkzPzROtuGl2UfrpqFuXeFkE'
const supabase = createClient(supabaseUrl, supabaseKey)