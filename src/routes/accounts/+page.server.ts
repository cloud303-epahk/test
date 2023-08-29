import { supabase } from "$lib/supabaseClient";
import { fail, redirect } from '@sveltejs/kit'

interface LoadResult {
    aws_account: any[];
  }
  
export async function load(): Promise<LoadResult> {
    const { data } = await supabase.from("aws_account").select();
    return {
        aws_account: data ?? [],
    };
}
