<script>
    
    import {slide} from 'svelte/transition'
    import { Button } from 'sveltestrap'

    import mainBackground from '../assets/image/main-background.jpg'
    import Logo from './global/Logo.svelte';
    import {contacts} from './contact/Contacts'

    import { ref, getDownloadURL } from 'firebase/storage'
    import { storage } from '../firebase'

    $: resumeUrl = '#';        
    getDownloadURL(ref(storage, 'Resume.pdf')).then((res) => resumeUrl = res);
    
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
            <Button color='info' href={resumeUrl}>Download My Resume</Button>
        </div>
        <div class='contact-group'>
            {#each contacts as cont}
                <Logo name={cont.name} size={25} link={cont.url}/>
            {/each}
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