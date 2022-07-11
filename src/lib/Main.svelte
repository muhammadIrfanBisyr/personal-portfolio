<script>
    
    import {slide} from 'svelte/transition'
    import {Col, Container, Row} from 'sveltestrap'

    import githubLogo from '../assets/logo/github.png'
    import gitlabLogo from '../assets/logo/gitlab.png'
    import linkedinLogo from '../assets/logo/linkedin.png'

    import mainPhoto from '../assets/image/main-photo.jpg'

    import Logo from './Logo.svelte';
</script>

<div transition:slide="{{ duration: 300 }}">
    <Container>
        <Row cols={2}>
            <Col>
                <h2>Welcome!</h2>
                <h1>I'm Muhammad Irfan Bisyr</h1>
                <p>
                    <span class="text-years">3</span> years experience in programmer / software engineer related field.
                </p>
                <div class='contact-group'>
                    <Logo source={linkedinLogo} alt='linkedin' size={25} link='https://www.linkedin.com/in/muhammad-irfan-bisyr'/>
                    <Logo source={githubLogo} alt='github' size={25} link='https://github.com/muhammadIrfanBisyr'/>
                    <Logo source={gitlabLogo} alt='gitlab' size={25} link='https://gitlab.com/muhammadIrfanBisyr'/>
                </div>
            </Col>
            <Col>
                <img class="main-photo" src={mainPhoto} alt='mainphoto'/>
            </Col>
        </Row>
    </Container>
</div>

<style>
    .contact-group {
        justify-content: space-between;
    }

    .text-years {
        font-size: 48pt;
        font-weight: bold;
    }

    .main-photo {
        width: 400px;
    }
</style>