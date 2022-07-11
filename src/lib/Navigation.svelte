<script>
    import { Icon } from 'sveltestrap';
    
    export let menu = 0;
</script>

<ul id="menu">
    <li><a href="/" on:click|preventDefault={() => (menu = 0)}> <Icon name="house-door"/> Home</a></li> |
    <li><a href="/" on:click|preventDefault={() => (menu = 1)}> <Icon name="file-earmark-text"/> Portfolio</a></li> |
    <li><a href="/" on:click|preventDefault={() => (menu = 2)}> <Icon name="file-earmark-text"/> Certificate</a></li> |
    <li><a href="/" on:click|preventDefault><Icon name="download"/> My Resume</a></li>
</ul>

<style>  
    ul {
        text-align: right;
    }
    ul#menu li{
		display : inline;
    }

    a{
        text-decoration: none;
    }
</style>