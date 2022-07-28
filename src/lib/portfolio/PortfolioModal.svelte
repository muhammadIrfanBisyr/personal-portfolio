<script>

    import { getDoc } from "firebase/firestore"; 

    import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'sveltestrap'
    import PortfolioCard from './PortfolioCard.svelte';

    export let openModal = false;
    export let companyId = '';
    export let companyList = [];
    export let toggleModal = () => {}

    $: projectList = [];
    $: companyData = companyList.find((item) => item.id === companyId)

    const getItems = async (companyProjects) => {
        const itemDocs = await Promise.all(companyProjects.map(item => getDoc(item))) ?? [];        
        itemDocs.forEach(item => {
            projectList.push({...item.data(), id: item.id})
        })
    }
    
    $: { getItems(companyData?.projects) };

</script>

<Modal isOpen={openModal} toggle={toggleModal}>
    <ModalHeader>{companyData.name}</ModalHeader>
    <ModalBody>
        {#each projectList as prj}
            <PortfolioCard {...prj}/>
        {/each}
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" on:click={toggleModal}>Close</Button>
    </ModalFooter>
</Modal>
