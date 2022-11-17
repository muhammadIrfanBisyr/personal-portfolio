<script>
    
    import { slide } from 'svelte/transition'
    import { Button } from 'sveltestrap'

    import mainBackground from '../assets/image/main-background.jpg'
    import Logo from './global/Logo.svelte';
    import { contacts } from './contact/Contacts'

    import { ref, getDownloadURL } from 'firebase/storage'
    import { storage } from '../firebase'

    import JapanFlag from '../assets/logo/japan.png'
    import IndonesiaFlag from '../assets/logo/indonesia.png';

    $: resumeUrl = '#';        
    getDownloadURL(ref(storage, 'Resume.pdf')).then((res) => resumeUrl = res);
    
    export let menu;
</script>

<section class="main-section">
    <div class="main-background" style="background-image: url({mainBackground});"> </div>
    <div class="main-text">
        <h1 class="title-name">Welcome!</h1>
        <h1 class="title-name">I'm Muhammad Irfan Bisyr</h1>
        <div class="card-deck main-row" in:slide="{{ duration: 500 }}">
            <div class="card main-info">
                <h1 class="main-info-title">3+ Years</h1>
                <p class='main-info-text'>of Software Engineer Experience</p>
            </div>
            <div class="card main-info">
                <h1 class="main-info-title">2 Country</h1>
                <span>
                    <img 
                        class="country-flag"
                        src={JapanFlag} 
                        alt='Japan' 
                    /> 
                    <img 
                        class="country-flag"
                        src={IndonesiaFlag} 
                        alt='Indonesia'
                    /> 
                </span>
               
            </div>
            <div class="card main-info">
                <h1 class="main-info-title" >5+ Technology</h1>
                <span class="main-tech-group">
                    <Logo name='React'/>
                    <Logo name='Python'/>
                    <Logo name='C'/>
                    <Logo name='Javascript' />
                    <Logo name='Django'/>
                </span>
            </div>
        </div>
        <div class='button-group'>
            <Button color='primary' on:click={() => menu = 1}>
                <span class="button-text">My Experience</span>
            </Button>
            <Button color='info' href={resumeUrl}>
                <span class="button-text">My Resume</span>
            </Button>
        </div>
        <div class='contact-group'>
            {#each contacts as cont}
                <Logo name={cont.name} link={cont.url}/>
            {/each}
        </div>
    </div>
</section>

<style>
    .contact-group {
        justify-content: space-between;
    }

    .title-name {
        font-weight: bolder;
        font-size: 5vh;
        margin-bottom: 16px;
    }

    .button-group{
        margin: 16px;
    }

    .button-text{
        font-size: 2vh;
        font-weight: bold;
    }
    
    .main-section {
        text-align: center;
    }

    .main-background{
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0% 45%;
        top: 0;
        z-index: -1;

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

    .main-info{
        background: rgba(0,0,0,0);
        border: 0px;
    }

    .main-info-text {
        font-size: 2vh;
    }

    .main-info-title {
        font-weight: bold;
        font-size: 4.5vh;
    }

    .main-row {
        margin: 0 auto;
    }

    .main-row img {
        width: 5vh;
    }
</style>