<script>
    
    import { getDownloadURL, ref } from 'firebase/storage'
    import { storage } from '../../firebase'
    
    import { Card, CardBody, CardTitle, CardHeader, CardSubtitle, CardText, Icon } from 'sveltestrap';

    import moment from 'moment'

    export let id = ''
    export let name = ''
    export let location = ''
    export let date = ''
    export let description = ''

    $: image = ''
    getDownloadURL(ref(storage, `cert_${id}.jpg`)).then((url) => image = url)

</script>

<Card class='card-body-company'>
    <img class='card-img-top' src={image} alt='a'/>
    <CardHeader> 
        <CardTitle class='card-title-name'>{name}</CardTitle>
        <CardSubtitle>{moment(date.toDate().toDateString(), 'ddd MMM DD YYYY').format('DD MMMM YYYY')}</CardSubtitle>
        <CardSubtitle>{location}</CardSubtitle>
    </CardHeader>
    <CardBody>
        <CardText>{description}</CardText>
    </CardBody>
</Card>

<style>
    :global(.card-body-company){
        box-shadow: 1px 1px 5px 3px #b5b5b58f;
        border: none !important;
        margin-bottom: 16px;
    }

    :global(.card-title-name) {
        font-weight: bold;
    }

</style>