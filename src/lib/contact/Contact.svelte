<script>
    import { slide } from "svelte/transition";
    import { Input, Button, Icon, Tooltip } from "sveltestrap";
    import Logo from "../global/Logo.svelte";
</script>

<section in:slide="{{ duration: 300 }}" class='contact-page'>
    <h2> Contacts</h2>
    <Logo name='linkedin' size={30}/>
    <Input disabled type="url" name="url" id="exampleUrl" placeholder="url placeholder" value='https://www.linkedin.com/in/muhammad-irfan-bisyr' />
    <Button><Icon name='clipboard-plus'/></Button>
    <Logo name='github' size={30}/>
    <Input disabled type="url" name="url" id="exampleUrl" placeholder="url placeholder" value='https://github.com/muhammadIrfanBisyr'/>
    <Button><Icon name='clipboard-plus'/></Button>
    <Logo name='gitlab' size={30}/>
    <Input disabled type="url" name="url" id="exampleUrl" placeholder="url placeholder" value='https://gitlab.com/muhammadIrfanBisyr'/>
    <Button><Icon name='clipboard-plus'/></Button>

</section>