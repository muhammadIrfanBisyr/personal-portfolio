<script>
    
    import {slide} from 'svelte/transition'

    import mainBackground from '../assets/image/main-background.jpg'

    import githubLogo from '../assets/logo/github.png'
    import gitlabLogo from '../assets/logo/gitlab.png'
    import linkedinLogo from '../assets/logo/linkedin.png'

    import Logo from './global/Logo.svelte';
</script>

<section class="main-section" in:slide="{{ duration: 300 }}">
    <div class="main-background" style="background-image: url({mainBackground});"/>
    <div class="main-text">
        <h2>Welcome!</h2>
        <h1>I'm Muhammad Irfan Bisyr</h1>
        <p>
            <span class="text-years">3</span> years experience in programmer / software engineer related field.
        </p>
        <div class='contact-group'>
            <Logo source={linkedinLogo} alt='linkedin' size={25} withLink link='https://www.linkedin.com/in/muhammad-irfan-bisyr'/>
            <Logo source={githubLogo} alt='github' size={25} withLink link='https://github.com/muhammadIrfanBisyr'/>
            <Logo source={gitlabLogo} alt='gitlab' size={25} withLink link='https://gitlab.com/muhammadIrfanBisyr'/>
        </div>
    </div>
</section>

<style>
    .contact-group {
        justify-content: space-between;
    }

    .text-years {
        font-size: 48pt;
        font-weight: bold;
    }

    .main-section {
        text-align: center;
    }

    .main-background {
        height: 80vh;
        background-size: cover;
        background-position: 0% 45%;

        filter: blur(4px);
        -webkit-filter: blur(4px);
    }

    .main-text {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
       
        color: white;
        font-weight: bold;

    }

</style>