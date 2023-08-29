import { supabase } from "$lib/supabaseClient";

interface LoadResult {
    n8n_engine: any[];
  }
  
  export async function load(): Promise<LoadResult> {
    const { data } = await supabase.from("n8n_engine").select();
    return {
        n8n_engine: data ?? [],
    };
  }