<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'

  export let menu = 1;

</script>

<main>
  <ul id="menu">
    <li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li> |
    <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Portfolio</a></li> |
    <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Download My Resume</a></li>
  </ul>

  <!-- <img src={logo} alt="Svelte Logo" /> -->
  <h2>Welcome!</h2>
  <h1>I'm Muhammad Irfan Bisyr</h1>

  <!-- <Counter /> -->

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
  
  ul#menu li{
		display : inline;
	}
  
  img {
    height: 16rem;
    width: 16rem;
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
