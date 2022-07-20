<script>

    import CompanyCard from "./CompanyCard.svelte";
    import { slide } from "svelte/transition";

    import { query, collection, onSnapshot, orderBy } from "firebase/firestore"; 
    import { db } from '../../firebase'

    $: workplaces = [];
    
    const _query = query(collection(db, "workplaces"), orderBy('start', 'desc'));
    const unsubscribe = onSnapshot(_query, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            workplaces = [...workplaces, {...doc.data(), id: doc.id}];
            console.log(doc.data())
        });
    });

    $: personalProjects = workplaces?.filter((item) => item.type === 'personal') ?? []
    $: professionalProjects = workplaces?.filter((item) => item.type === 'professional') ?? []

    let isViewDetail = false
    let projectToview = 0

    const resetView = () => {
        isViewDetail = false
        projectToview = 0
    }

    const viewDetail = (/** @type {number} */ projectNum) => {
        projectToview = projectNum
        isViewDetail = true

        console.log(projectNum)
    }
    
</script>

<section in:slide="{{ duration: 300 }}" class='portfolio-list'>
    <h2 class="list-title">Work Experience </h2>
    <div class="card-deck">
        {#each professionalProjects as prj, i}
            <CompanyCard {...prj} viewDetail={() => viewDetail(i)} />
        {/each}
    </div>
    <h2 class="list-title">Personal Projects</h2>
    {#each personalProjects as prj}
        {prj.description}
    {/each}
</section>

<style>
    @media only screen and (max-width: 960px) {
        .portfolio-list {
            margin: 0 auto;
            width: 100%;
            padding-left: 0.5em;
            padding-right: 0.5em;
        }
    }
    @media only screen and (min-width: 960px) {
        .portfolio-list {
            margin: 0 auto;
            width: 80%;
        }
    }

    .portfolio-list h2{
        text-align: center;
        border-bottom: 8px solid #383eff;
        padding-bottom: 12px;
        font-weight: bold;
    }

    .list-title {
        margin-top: 10px;
    }

</style>