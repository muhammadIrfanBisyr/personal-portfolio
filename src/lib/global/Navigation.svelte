<script>
    import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse  } from 'sveltestrap';

    let isOpen = false;

    const handleUpdate = (event) => {
        isOpen = event.detail.isOpen;
    }

    export let menu = 0;
    
</script>

<Navbar color='primary' dark expand="md">
    <NavbarBrand href="/">IRFAN BISYR</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem>
                <NavLink href="#" on:click={() => {menu = 0}}>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" on:click={() => {menu = 1}}>Experience</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" on:click={() => {menu = 2}}>Certificate</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Resume</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" on:click={() => {menu = 3}}>Contact</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>

<style>
    :global(.navbar-dark .navbar-nav .nav-link){
        color: white !important;
    }
</style>
