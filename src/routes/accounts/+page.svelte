<script lang="ts">
    import type { PageData } from './$types';
    import DataTable from '$lib/components/DataTable.svelte';
    
    export let data: PageData;
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-end">
		<a href="/accounts/new" class="btn variant-ghost-primary"> New Account </a>
	</div>
	<DataTable headers={['Id', 'Account Number']} 
               data={data.aws_account} 
               rowMapper={acct => [acct.id, acct.account_number]} />
</div>