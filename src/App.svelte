<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>

<script>
    import Main from './lib/Main.svelte';
    import Navigation from './lib/global/Navigation.svelte'
    import CertificateList from './lib/certificate/CertificateList.svelte'
    import PortfolioList from './lib/portfolio/PortfolioList.svelte'

    let menu;
</script>

<Navigation bind:menu={menu}/>  
<main>
    {#if menu === 0}
        <Main/>
    {:else if menu === 1}
        <PortfolioList />
    {:else if menu === 2}
        <CertificateList />
    {/if}
</main>
<div class="footer">
    <p>Footer</p>
</div>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    :global(body) {
        height: 100vh;
        background-color: #f0f0f0;
    }

    main {
        margin: 0 auto;
    }

    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }
</style>
