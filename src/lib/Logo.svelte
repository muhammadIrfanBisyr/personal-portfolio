<script>

    import { Tooltip } from "sveltestrap";

    export let source = ''
    export let alt = ''
    export let size = 25;
    export let link = '#';
    
</script>

<a id={`logo-link-${alt}`} href={link}><img src={source} alt={alt} width={size} height={size}></a>
<Tooltip target={`logo-link-${alt}`} placement='bottom'>{alt}</Tooltip>
