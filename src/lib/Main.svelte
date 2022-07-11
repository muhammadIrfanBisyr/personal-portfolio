<script>
    
    import {slide} from 'svelte/transition'

    import githubLogo from '../assets/logo/github.png'
    import gitlabLogo from '../assets/logo/gitlab.png'
    import linkedinLogo from '../assets/logo/linkedin.png'

    import Logo from './Logo.svelte';
</script>

<div transition:slide="{{ duration: 300 }}">
    <h2>Welcome!</h2>
    <h1>I'm Muhammad Irfan Bisyr</h1>
    <p>
        Three years experience in programmer / software engineer related field, 
        seeking work opportunities as software engineer, web programmer or other IT related field, 
        interested to learn more about current and future technology, especially in software development, 
        web development, both in industry and in daily use, while gaining valuable work experience and work in a team.
    </p>
    <div class='contact-group'>
        <Logo source={githubLogo} alt='github' size={25}/>
        <Logo source={gitlabLogo} alt='gitlab' size={25}/>
        <Logo source={linkedinLogo} alt='linkedin' size={25}/>
    </div>
</div>

<style>
    .contact-group {
        justify-content: space-between;
    }
</style>