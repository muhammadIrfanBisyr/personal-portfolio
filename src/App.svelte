<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<script>
  import Navigation from './lib/Navigation.svelte'
  import PortfolioCard from "./lib/PortfolioCard.svelte";
</script>

<main>
  <Navigation />
  <!-- <img src={logo} alt="Svelte Logo" /> -->
  <h2>Welcome!</h2>
  <h1>I'm Muhammad Irfan Bisyr</h1>

  <PortfolioCard />

  <p>
    Three years experience in programmer / software engineer related field, 
    seeking work opportunities as software engineer, web programmer or other IT related field, 
    interested to learn more about current and future technology, especially in software development, 
    web development, both in industry and in daily use, while gaining valuable work experience and work in a team.
  </p>
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
