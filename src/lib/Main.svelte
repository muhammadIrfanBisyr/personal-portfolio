<script>
    
    import {slide} from 'svelte/transition'
    import { Button } from 'sveltestrap'

    import mainBackground from '../assets/image/main-background.jpg'
    import Logo from './global/Logo.svelte';

    export let menu;
</script>

<section class="main-section" in:slide="{{ duration: 100 }}">
    <div class="main-background" style="background-image: url({mainBackground});"/>
    <div class="main-text">
        <h2>Welcome!</h2>
        <h1>I'm Muhammad Irfan Bisyr</h1>
        <p>
            <span class="text-years">3</span> years experience in programmer / software engineer related field.
        </p>
        <div class='button-group'>
            <Button color='primary' on:click={() => menu = 1}>View My Experience</Button>
            <Button color='info'>Download My Resume</Button>
        </div>
        <div class='contact-group'>
            <Logo name='linkedin' size={25} link='https://www.linkedin.com/in/muhammad-irfan-bisyr'/>
            <Logo name='github' size={25} link='https://github.com/muhammadIrfanBisyr'/>
            <Logo name='gitlab' size={25} link='https://gitlab.com/muhammadIrfanBisyr'/>
        </div>
    </div>
</section>

<style>
    .contact-group {
        justify-content: space-between;
    }

    .button-group {
        margin-bottom: 8px;
    }

    .text-years {
        font-size: 48pt;
        font-weight: bold;
    }

    .main-section {
        text-align: center;
    }

    .main-background {
        z-index: -1;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: 0% 45%;
        top: 0;

        position: absolute;
        filter: blur(4px);
        -webkit-filter: blur(4px);
    }

    .main-text {
        color: white;
        font-weight: bold;
        position: relative;
        padding: 10%;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
</style>