<script lang="ts">
    import type { PageData } from './$types';
    import DataTable from '$lib/components/DataTable.svelte';
    
    export let data: PageData;
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-end">
		<a href="/macros/new" class="btn variant-ghost-primary"> New Macro </a>
	</div>
	<DataTable headers={['Id', 'Name', 'Active', 'Nodes', 'Connections', 'Settings', 'Static Data', 'Pin Data', 'Version', 'Last Updated']} 
               data={data.macro} 
               rowMapper={mac => [
                mac.id,
                mac.name,
                mac.active,
                mac.nodes,
                mac.connections,
                mac.settings,
                mac.staticData,
                mac.pinData,
                mac.versionId,
                mac.updatedAt
               ]} />
</div>