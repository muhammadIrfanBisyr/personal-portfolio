<script>
    
    import { slide } from 'svelte/transition'
    import { Button, Container, Row, Col } from 'sveltestrap'

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
    <div class="main-background" style="background-image: url({mainBackground});"/>
    <div class="main-text">
        <h1>Welcome!</h1>
        <h1 class="title-name">I'm Muhammad Irfan Bisyr</h1>
        <div class="main-row">
            <Container>
                <Row>
                    <Col>
                        <div in:slide="{{ duration: 300 }}">
                            <h1>3+ Years</h1>
                            of Software Engineer Experience
                        </div>
                    </Col>
                    <Col>
                        <div in:slide="{{ duration: 300 }}">
                            <h1>2 Country</h1>
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
                        </div>
                    </Col>
                    <Col>
                        <div in:slide="{{ duration: 300 }}">
                            <h1>5+ Technology</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
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

    .title-name {
        font-weight: bold;
        font-size: 36pt;
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

    .main-row {
        font-weight: bold;
        margin: 42px;
    }

    .main-row img {
        width: 40px;
    }
</style>