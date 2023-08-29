<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, 
			 AppBar, 
			 Avatar, 
			 Drawer, 
			 drawerStore,
			 Toast,
			 toastStore,
			 Modal,
			 AppRail,
			 AppRailTile,
			 AppRailAnchor
			} from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data;

  	let { supabase, session } = data
  	$: ({ supabase, session } = data)
	let currentTile: number = 0;

	function drawerOpen(): void {
		drawerStore.open();
	}

	function drawerClose(): void {
		drawerStore.close();
	}

</script>

<Toast position="tr" />
<Modal />
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4">
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4" on:click={drawerOpen}>
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl uppercase">C303</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Avatar initials="MB" background="bg-primary-500" width="w-10"/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
		
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">
		<strong class="text-xl uppercase">{$page.url.pathname.replace(/\//g, "")}</strong>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
