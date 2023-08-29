import { supabase } from "$lib/supabaseClient";

interface LoadResult {
    macro: any[];
  }
  
  export async function load(): Promise<LoadResult> {
    const { data } = await supabase.from("macro").select();
    return {
        macro: data ?? [],
    };
  }