<script>

    import CompanyCard from "./CompanyCard.svelte";
    import PersonalProjectList from "./PersonalProjectList.svelte";
    import { slide } from "svelte/transition";

    import { query, collection, onSnapshot, orderBy } from "firebase/firestore"; 
    import { db } from '../../firebase'

    $: workplaces = [];
    
    const _query = query(collection(db, "workplaces"), orderBy('start', 'desc'));
    onSnapshot(_query, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            workplaces = [...workplaces, {...doc.data(), id: doc.id}];
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
        <PersonalProjectList {...prj}/>
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
        
        margin: 24px 0px 24px;

        padding-bottom: 12px;
        font-weight: bold;
        
        background-image: linear-gradient(to right, #007bff, #007bff);
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: 15% 8px;

    }

    .list-title {
        margin-top: 10px;
    }

</style>