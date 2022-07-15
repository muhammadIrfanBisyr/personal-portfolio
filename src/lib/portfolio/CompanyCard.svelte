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

    export let name = '';
    export let jobTitle = '';
    export let location = {};
    export let role = '';
    export let start = '';
    export let end = '';
    export const viewDetail = () => {}
    
    import JapanFlag from '../../assets/logo/japan.png'
    import IndonesiaFlag from '../../assets/logo/indonesia.png';

    const items = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
</script>

<Card class='card-body-company'>
    <img class='card-img-top' src={items} alt='a'/>
    <CardHeader> 
        <CardTitle class='card-title-name'>{name}</CardTitle>
        <div class="info-row"><Icon name='arrow-right-square-fill' color='green'/>{start}</div>
        <div class="info-row"><Icon name='arrow-left-square-fill'/>{end}</div>
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

    :global(.card-title-name) {
        font-weight: bold;
    }

    :global(.bi-arrow-right-square-fill::before){
        margin-right: 16px;
    }

    :global(.bi-arrow-left-square-fill::before){
        margin-right: 16px;
    }

</style>