<script>

    import logos from '../../assets/logo'
    import { Tooltip } from "sveltestrap"

    export let name = ''
    export let link = '#'
    export let unique = ''

    const logoName = (name === 'C#' ? 'csharp' : name).toLocaleLowerCase().replace(/\s/g,'');
    
</script>

{#if link !== '#'}
    <a id={`logo-link-${logoName}-${unique}`} href={link}>
        <img class="logo-style" src={logos[logoName]} alt={logoName}>
    </a>
{:else}
    <img class="logo-style" id={`logo-link-${logoName}-${unique}`} src={logos[logoName]} alt={logoName}>
{/if}
<Tooltip target={`logo-link-${logoName}-${unique}`} placement='bottom'>{name}</Tooltip>

<style>
    .logo-style{
        width: 4vh;
        margin: 8px;
    }
</style>
