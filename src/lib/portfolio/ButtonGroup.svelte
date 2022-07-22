<script>
    import {Button, Icon} from 'sveltestrap'

    export let codeUrl = '#'
    export let liveUrl = '#'
    export let rules = {}

    const liveText = rules?.isHere ? 'You are Here' : 2;

</script>

<div class="button-group">
    {#if rules?.isHere}
        <Button color='primary'>You are Here <Icon name='emoji-smile'/></Button>
    {:else if rules?.isLive}
        <Button color='primary' href={liveUrl} target="_blank"><Icon name='eye'/> View Live </Button>
    {/if}

    {#if rules?.isOpen}
        <Button color='info' href={codeUrl} target="_blank"><Icon name='code-slash'/> Source Code</Button> 
    {:else}
        <Button color='secondary' href={codeUrl} target="_blank"><Icon name='code-slash'/> Closed Source</Button> 
    {/if}
</div>


<style>
    .button-group {
        text-align: center;
    }
</style>