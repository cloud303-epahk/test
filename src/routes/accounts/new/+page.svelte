<script lang="ts">
    import type { PageData } from './$types';
    import { enhance, type SubmitFunction } from '$app/forms'
    
    export let data: PageData;
    let content: string;
    let loading = false;
    let profileForm: HTMLFormElement

    const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
    <form class="card p-4 flex flex-col gap-3"
          method="POST"
          action="?/update"
          use:enhance={handleSubmit}
          bind:this={profileForm}>
        <h2>New Account</h2>
        <input bind:value={content} name="account_number" type="text" placeholder="Account Number..." />
        <!-- <InputChip bind:value={tags} name="tags" placeholder="Tags..." /> -->
        <div class="self-end">
			<input
				type="submit"
				class="btn variant-ghost-primary"
				value={loading ? 'Loading...' : 'Create'}
				disabled={loading}
			/>
		</div>
    </form>
</div>