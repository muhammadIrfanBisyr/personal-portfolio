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
        CarouselControl,
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
    export let codeUrl = '#';
    export let liveUrl = '#';
    export let rules = {};
    export let numImages = 0;
    
    const images = new Array(numImages).fill(0);

    const getAllImages = async () => {
        items = await Promise.all(images.map((_, index) => getDownloadURL(ref(storage, `project_${id}_${index+1}.png`))));        
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
        <CarouselControl direction="prev" bind:activeIndex {items} />
        <CarouselControl direction="next" bind:activeIndex {items} />
    </Carousel>  
    <CardHeader>
        <CardTitle class='card-title-name'>{name}</CardTitle>
        <ButtonGroup codeUrl={codeUrl} liveUrl={liveUrl} rules={rules} />
    </CardHeader>
    <CardBody>
        <CardSubtitle>Summary</CardSubtitle>
        <CardText>{description}</CardText>
        <CardSubtitle>Language</CardSubtitle>
        <CardText>                        
        {#each language as lang}
            <Logo name={lang}/>
        {/each}
        </CardText>
        <CardSubtitle>Tools / Framework</CardSubtitle>
        <CardText>                        
        {#each tools as tool}
            <Logo name={tool}/>
        {/each}
        </CardText>
    </CardBody>
</Card>

<style>
    :global(.card-body-portfolio){
        box-shadow: 1px 1px 5px 3px #b5b5b58f;
        border: none !important;
        margin-bottom: 16px;
    }

    :global(.card-title-name) {
        font-weight: bold;
        text-align: center;
    }
</style>
