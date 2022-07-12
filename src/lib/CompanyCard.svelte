<script>
    import { 
        Card, 
        CardBody, 
        CardTitle, 
        CardHeader, 
        CardSubtitle, 
        CardText, 
        Container,
        Col,
        Row
    } from 'sveltestrap';

    export let name = '';
    export let jobTitle = '';
    export let location = {};
    export let role = '';
    export let start = '';
    export let end = '';
</script>

<Card class='card-body-company'>
    <CardHeader> 
        <Container>
            <Row>
                <Col xs="6">
                    <CardTitle class='card-title-name'>{name}</CardTitle>
                    {`${location.city}, ${location.country}`}
                </Col >
                <Col xs="6" class='align-right'>{`${start} - ${end}`}</Col>
            </Row>
        </Container>
    </CardHeader>
    <CardBody>
        <CardSubtitle>{jobTitle}</CardSubtitle>
        <CardText>{role}</CardText>
    </CardBody>
</Card>

<style>
    :global(.card-body-company){
        box-shadow: 1px 1px 5px 1px #b5b5b58f;
        border: none !important;
        margin-bottom: 16px;
    }
    
    :global(.card-title-name) {
        margin-bottom: 0px !important;
    }

    :global(.align-right) {
        text-align: right;
    }

</style>