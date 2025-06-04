import { createClient } from "@supabase/supabase-js";
// const supabaseKey = import.meta.env.SUPABASE_API_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrc25idHRud3h2YnJ6YmF4bW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTU5MTEsImV4cCI6MjA2NDQzMTkxMX0.QjmhAi74_NCengDSdhKMKCRHlXxcftrlXgCGy5ojqfs";
const supabaseUrl = "https://yksnbttnwxvbrzbaxmmf.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
