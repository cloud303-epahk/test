<script lang="ts">
	import { drawerStore } from "@skeletonlabs/skeleton";
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    let selectedResource: string = 'accounts'

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<!-- <nav class="list-nav p-1">
    <ListBox hover="hover:variant-outline-tertiary">
        <ListBoxItem bind:group={selectedResource} name="resource" value="accounts">
            <a href="/new">Accounts</a>
        </ListBoxItem>
        <ListBoxItem bind:group={selectedResource} name="resource" value="staks">Mac Staks</ListBoxItem>
        <ListBoxItem bind:group={selectedResource} name="resource" value="macros">Macros</ListBoxItem>
        <ListBoxItem bind:group={selectedResource} name="resource" value="webhooks">Webhooks</ListBoxItem>
    </ListBox>
</nav> -->

<nav class="list-nav p-1">
    <ul>
        <li><a href="/accounts" on:click={drawerClose}>Accounts</a></li>
        <li><a href="/macstaks" on:click={drawerClose}>Mac Staks</a></li>
        <li><a href="/macros" on:click={drawerClose}>Macros</a></li>
        <li><a href="/n8n" on:click={drawerClose}>Workflows</a></li>
    </ul>
</nav>