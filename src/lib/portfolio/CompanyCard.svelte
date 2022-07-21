<script>
    
    import { 
        Card, 
        CardBody, 
        CardTitle, 
        CardHeader, 
        CardSubtitle, 
        CardText, 
        Button,
        Icon
    } from 'sveltestrap';

    import {formatFirebaseDate} from '../utils'
    import { getDownloadURL, ref } from 'firebase/storage'
    import { storage } from '../../firebase'

    export let name = '';
    export let jobTitle = '';
    export let location = {};
    export let role = '';
    export let start = '';
    export let end = '';
    export let id = '';
    export let description = '';
    export const viewDetail = () => {}
    
    import JapanFlag from '../../assets/logo/japan.png'
    import IndonesiaFlag from '../../assets/logo/indonesia.png';

    $: image = ''
    getDownloadURL(ref(storage, `work_${id}.jpg`)).then((url) => image = url)

</script>

<Card class='card-body-company'>
    <img class='card-img-top card-img' src={image} alt='a'/>
    <CardHeader> 
        <CardTitle class='card-title-name'>{name}</CardTitle>
        <div class="info-row"><Icon name='arrow-right-square-fill'/>{formatFirebaseDate(start)}</div>
        <div class="info-row"><Icon name='arrow-left-square-fill'/>{formatFirebaseDate(end)}</div>
        <div class="info-row">
            <img 
                class="country-flag"
                src={location.country === 'Japan' ? JapanFlag : IndonesiaFlag} 
                alt={location.country} 
            /> 
            {`${location.city}, ${location.country}`}
        </div>
    </CardHeader>
    <CardBody>
        <CardSubtitle>{jobTitle}</CardSubtitle>
        <CardText>{role}</CardText>
        <p>{description}</p>
        <Button on:click{viewDetail} color='primary'>View More</Button>
    </CardBody>
</Card>

<style>
    :global(.card-body-company){
        box-shadow: 1px 1px 5px 3px #b5b5b58f;
        border: none !important;
        margin-bottom: 16px;
    }

    .country-flag {
        box-shadow: 1px 1px 5px 1px #b5b5b58f;
    }

    .info-row > *:first-child{
        width: 24px;
        margin-right: 4px;
        font-size: 24px;
    }

    .card-img{
        height: 220px;
        object-fit: cover;
    }

    :global(.card-title-name) {
        font-weight: bold;
    }

    :global(.bi-arrow-right-square-fill::before){
        margin-right: 16px;
        color: #20cc20;
    }

    :global(.bi-arrow-left-square-fill::before){
        margin-right: 16px;
        color: #f40000;

    }
    
    p {
        text-align: justify;
    }

</style>