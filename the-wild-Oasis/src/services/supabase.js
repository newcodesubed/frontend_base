import { createClient } from "@supabase/supabase-js";
const supabaseKey = import.meta.env.SUPABASE_API_KEY;
const supabaseUrl = "https://yksnbttnwxvbrzbaxmmf.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
