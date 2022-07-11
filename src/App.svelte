<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>

<script>
    import Main from './lib/Main.svelte';
    import Navigation from './lib/Navigation.svelte'
    import PortfolioCard from './lib/PortfolioCard.svelte'

    let menu;
</script>

<main>
    <Navigation bind:menu={menu}/>  
    {#if menu === 0}
        <Main/>
    {:else if menu === 1}
        <PortfolioCard />
    {:else if menu === 2}
        <PortfolioCard />
    {/if}
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        background-color: #f0f0f0;
    }

    h1 {
        color: #ff3e00;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }

    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>
