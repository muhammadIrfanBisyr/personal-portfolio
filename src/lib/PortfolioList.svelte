<script>

    import CompanyCard from "./CompanyCard.svelte";
    import { slide } from "svelte/transition";

    const workplaces = [
        {
            jobTitle: 'Software Engineer',
            location: {
                city: 'Jakarta',
                country: 'Indonesia'
            },
            type: 'professional',
            name: 'PT Indodev Niaga (DataOn)',
            start: '7 June 2021',
            role: 'aaa'
        },
        {
            jobTitle: 'Software Engineer',
            location: {
                city: 'Tokyo',
                country: 'Japan'
            },
            type: 'professional',
            name: 'Company2 Inc',
            start: '31 September 2020',
            end: '31 September 2021',
            role: 'bbb'
        },
        {
            jobTitle: 'Software Engineer 3',
            location: {
                city: 'Jakarta',
                country: 'Indonesia'
            },
            type: 'professional',
            name: 'Company3 Inc',
            start: '31 September 2020',
            end: '31 September 2021',
            role: 'bbb'
        },
        {
            description: 'nothing personal kids',
            type: 'personal',
        },
    ]

    const personalProjects = workplaces.filter((item) => item.type === 'personal')
    const professionalProjects = workplaces.filter((item) => item.type === 'professional')

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
    <h2>Work Experience </h2>
    <div class="card-deck">
        {#each professionalProjects as prj, i}
            <CompanyCard {...prj} viewDetail={() => viewDetail(i)} />
        {/each}
    </div>
    <h2>Personal Projects</h2>
    {#each personalProjects as prj}
        {prj.description}
    {/each}
</section>

<style>
    @media only screen and (max-width: 960px) {
        .portfolio-list {
            margin: 0 auto;
            width: 100%;
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
</style>