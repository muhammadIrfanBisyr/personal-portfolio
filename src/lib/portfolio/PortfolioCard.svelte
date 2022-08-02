<script>
    import { 
        Card, 
        CardBody, 
        CardTitle, 
        CardHeader, 
        CardSubtitle, 
        CardText, 
        Carousel, 
        CarouselIndicators,
        CarouselItem,
    } from 'sveltestrap';

    import ButtonGroup from './ButtonGroup.svelte';
    import Logo from '../global/Logo.svelte';

    
    import { ref, getDownloadURL } from 'firebase/storage'
    import { storage } from '../../firebase'

    let activeIndex = 0;
    $: items = [];

    export let id = '';
    export let description = '';
    export let name = '';
    export let language = [];
    export let tools = [];
    export let learningPoints = [];
    export let codeUrl = '#';
    export let liveUrl = '#';
    export let rules = {};
    export let numImages = 0;
    
    const images = new Array(numImages).fill(0);

    const getAllImages = async () => {
        items = await Promise.all(images.map((_, index) => getDownloadURL(ref(storage, `project_${id}_${index+1}.jpg`))));        
    }

    getAllImages();
</script>

<Card class='card-body-portfolio'>
    <Carousel {items} bind:activeIndex>
        <CarouselIndicators bind:activeIndex {items} />
        <div class="carousel-inner">
        {#each items as item, index}
            <CarouselItem bind:activeIndex itemIndex={index}>
            <img src={item} class="d-block w-100" alt={`${item} ${index + 1}`} />
            </CarouselItem>
        {/each}
        </div>
        <!-- <CarouselControl direction="prev" bind:activeIndex {items} />
        <CarouselControl direction="next" bind:activeIndex {items} /> -->
    </Carousel>  
    <CardHeader>
        <CardTitle class='card-title-name'>{name}</CardTitle>
        <ButtonGroup codeUrl={codeUrl} liveUrl={liveUrl} rules={rules} />
    </CardHeader>
    <CardBody>
        <CardSubtitle>Summary</CardSubtitle>
        <CardText><p>{description}</p></CardText>
        <CardSubtitle>Key Learning Points</CardSubtitle>
        <ul class='portfolio-learning-list'>
            {#each learningPoints as lp}
                <li>{lp}</li>
            {/each}
        </ul>
        <CardSubtitle>Language</CardSubtitle>
        <CardText>                        
        {#each language as lang}
            <Logo name={lang} unique={id}/>
        {/each}
        </CardText>
        {#if tools.length > 0}
            <CardSubtitle>Tools / Framework</CardSubtitle>
        {/if}
        <CardText>                        
        {#each tools as tool}
            <Logo name={tool} unique={id}/>
        {/each}
        </CardText>
    </CardBody>
</Card>

<style>

    .portfolio-learning-list {
        padding-left: 16px;
    }

    :global(.card-subtitle) {
        margin-bottom: 8px !important;
        font-size: 1.1em;
    }

    :global(.card-body-portfolio){
        box-shadow: 1px 1px 5px 3px #b5b5b58f;
        border: none !important;
        margin-bottom: 16px;
    }

    :global(.card-title-name) {
        font-weight: bold;
        text-align: center;
    }

    p {
        text-align: justify;
    }
</style>
