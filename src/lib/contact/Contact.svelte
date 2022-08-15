<script>
    import { slide } from "svelte/transition";
    import { Button, Icon, Card, CardBody, Tooltip } from "sveltestrap";
    import Logo from "../global/Logo.svelte";
    import {contacts} from './Contacts'

    const newContacts = [{name: 'email', url:'irfan100397@gmail.com'}].concat(contacts);
</script>

<section in:slide="{{ duration: 300 }}" class='contact-page'>
    <h2> Contacts </h2>
    <h5> If you have questions or suggestion, please feel free to contact me.</h5>
    <Card class="card-contact">
        <CardBody>
            {#each newContacts as cont}
                <div class="contact-group">
                    <Logo name={cont.name} size={30}/>
                    <span class='contact-url'> <a href={cont.name !== 'email' ? cont.url : '#'}>{cont.url}</a></span>
                    <Button id={`btn-${cont.name}`} color='primary' on:click={() => navigator.clipboard.writeText(cont.url)}>
                        <Icon name='clipboard-plus'/>
                    </Button>
                    <Tooltip target={`btn-${cont.name}`}> Copy To Clipboard </Tooltip>
                </div>
            {/each}
        </CardBody>
    </Card>

</section>

<style>

    .contact-page {
        margin: 0 auto;
        max-width: 60%;
    }

    .contact-url {
        padding-left: 8px;
        display: inline-block;
        width: 90%;
        height: 32px;
        overflow: hidden;
        border: 1px solid #cdcdcd;
        vertical-align: middle;
        border-radius: 4px;
        background-color: #e3e3e3;
        color: #4a4a4a;
    }

    .contact-group {
        margin-bottom: 8px;
    }

    :global(.card-contact){
        box-shadow: 1px 1px 5px 3px #b5b5b58f;
        border: none !important;
        margin: 16px 0px 16px;
    }

    h2{
        text-align: center;
        
        margin: 24px 0px 24px;

        padding-bottom: 12px;
        font-weight: bold;
        
        background-image: linear-gradient(to right, #007bff, #007bff);
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: 15% 8px;

    }

    h5 {
        text-align: center;
    }
</style>