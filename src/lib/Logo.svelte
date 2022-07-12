<script>

    import { Tooltip } from "sveltestrap"

    export let source = ''
    export let alt = ''
    export let size = 25
    export let link = '#'
    export let withLink = false
    
</script>

{#if withLink}
    <a id={`logo-link-${alt}`} href={link}>
        <img src={source} alt={alt} width={size} height={size}>
    </a>
    <Tooltip target={`logo-link-${alt}`} placement='bottom'>{alt}</Tooltip>
{:else}
    <img src={source} alt={alt} width={size} height={size}>
    <Tooltip target={`logo-link-${alt}`} placement='bottom'>{alt}</Tooltip>
{/if}
