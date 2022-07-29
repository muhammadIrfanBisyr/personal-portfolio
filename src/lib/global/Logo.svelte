<script>

    import logos from '../../assets/logo'
    import { Tooltip } from "sveltestrap"

    export let name = ''
    export let size = 25
    export let link = '#'
    export let unique = ''

    const logoName = (name === 'C#' ? 'csharp' : name).toLocaleLowerCase().replace(/\s/g,'');
    
</script>

{#if link !== '#'}
    <a id={`logo-link-${logoName}-${unique}`} href={link}>
        <img src={logos[logoName]} alt={logoName} width={size} height={size}>
    </a>
{:else}
    <img id={`logo-link-${logoName}-${unique}`} src={logos[logoName]} alt={logoName} width={size} height={size}>
{/if}
<Tooltip target={`logo-link-${logoName}-${unique}`} placement='bottom'>{name}</Tooltip>
