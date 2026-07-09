import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// null until NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are set (see SUPABASE_SETUP.md)
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export type Lead = {
  source: "contact_form" | "consultation_form";
  name: string;
  email: string;
  phone: string;
  grade?: string;
  school?: string;
  message?: string;
  country?: string;
  city?: string;
  heard_about?: string;
};

export async function submitLead(lead: Lead) {
  if (!supabase) {
    return { error: new Error("Supabase is not configured. See SUPABASE_SETUP.md") };
  }
  const { error } = await supabase.from("leads").insert(lead);
  return { error };
}
