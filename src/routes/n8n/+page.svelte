<script lang="ts">
    import type { PageData } from './$types';
    import DataTable from '$lib/components/DataTable.svelte';

    export let data: PageData;
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-end">
		<a href="n8n/new" class="btn variant-ghost-primary"> New Workflow </a>
	</div>
    <p>
        aasdflasdhflasdfoasdhflasdhfoasdfjasdf
    </p>
	<DataTable headers={['Id', 'Name', 'Base Url']} 
               data={data.n8n_engine} 
               rowMapper={n8n => [n8n.id, n8n.name, n8n.base_url]} />
</div>