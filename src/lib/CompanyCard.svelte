<script>
    import { 
        Card, 
        CardBody, 
        CardTitle, 
        CardHeader, 
        CardSubtitle, 
        CardText, 
    } from 'sveltestrap';

    export let name = '';
    export let jobTitle = '';
    export let location = {};
    export let role = '';
</script>

<div>
    <Card>
        <CardHeader> 
            <CardTitle> {name} </CardTitle>
            {`${location.city}, ${location.country}`}
        </CardHeader>
        <CardBody>
            <CardSubtitle>{jobTitle}</CardSubtitle>
            <CardText>{role}</CardText>
        </CardBody>
    </Card>
</div>

<style>
    .card-title {
        margin-bottom: 0px;
    }
</style>