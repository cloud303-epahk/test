<script lang="ts">
    type RowMapperFunction = (item: any) => Array<any>;
    export let headers: Array<string> = [];
    export let data: Array<any> = [];
    export let rowMapper: RowMapperFunction = item => [];
</script>

<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                {#each headers as header}
                    <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each data as item (item.id)}
                <tr>
                    {#each rowMapper(item) as cell}
                        <td>{cell}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>
