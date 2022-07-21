<script>
    
    import { getDoc } from "firebase/firestore"; 
    import PortfolioCard from "./PortfolioCard.svelte";

    export let projects = [];  

    $: projectList = [];

    const getItems = async () => {
        const itemDocs = await Promise.all(projects.map(item => getDoc(item)));        
        itemDocs.forEach(item => {
            projectList = [...projectList, {...item.data(), id: item.id}]
        })
    }

    getItems();

</script>

<div class='personal-project'>
    {#each projectList as prj}
        <PortfolioCard {...prj}/>
    {/each}
</div>