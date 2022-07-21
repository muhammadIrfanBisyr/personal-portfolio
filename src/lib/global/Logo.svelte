<script>

    import logos from '../../assets/logo'
    import { Tooltip } from "sveltestrap"

    export let name = ''
    export let size = 25
    export let link = '#'

    const logoName = (name === 'C#' ? 'csharp' : name).toLocaleLowerCase().replace(/\s/g,'');
    
</script>

{#if link !== '#'}
    <a id={`logo-link-${logoName}`} href={link}>
        <img src={logos[logoName]} alt={logoName} width={size} height={size}>
    </a>
    <Tooltip target={`logo-link-${logoName}`} placement='bottom'>{name}</Tooltip>
{:else}
    <img id={`logo-link-${logoName}`} src={logos[logoName]} alt={logoName} width={size} height={size}>
    <Tooltip target={`logo-link-${logoName}`} placement='bottom'>{name}</Tooltip>
{/if}
