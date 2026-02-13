import { createClient } from "@supabase/supabase-js";

// These will now be 'undefined' if you try to use them in a Client Component ("use client")
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
