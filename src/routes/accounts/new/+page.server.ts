import { supabase } from "$lib/supabaseClient";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { goto } from "$app/navigation";


export const actions = {
    update: async ({ request }) => {
        console.log(request)
        const formData = await request.formData();
        const account_number = formData.get('account_number') as string;
        console.log(account_number);

        const { error } = await supabase.from('aws_account').upsert({
            account_number: account_number,
        })
        console.log(error);
        if (error) {
            return fail(500, {
                account_number,
            })
        }
        else {
            console.log('REDDIRECTTTT boi')
            throw redirect(303, '/');
        }
    },
} satisfies Actions;