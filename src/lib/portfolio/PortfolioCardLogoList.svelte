<script>
    import { CardSubtitle, CardText } from "sveltestrap";
    import Logo from '../global/Logo.svelte';

    export let cardId = ''
    export let title = ''
    export let logoList = []
</script>

<div class="card-logo-list">
    {#if logoList.length > 0}
        <CardSubtitle>{title}</CardSubtitle>
    {/if}
    <CardText>                        
        {#each logoList as logo}
            <Logo name={logo} unique={cardId}/>
        {/each}
    </CardText>
</div>