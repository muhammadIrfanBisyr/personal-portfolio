<script>

    import CompanyCard from "./CompanyCard.svelte";

    const workplaces = [
        {
            jobTitle: 'Software Engineer',
            location: {
                city: 'Jakarta',
                country: 'Indonesia'
            },
            type: 'professional',
            name: 'Company Inc',
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
            start: '7 June 2020',
            end: '31 July 2021',
            role: 'bbb'
        },
        {
            description: 'nothing personal kids',
            type: 'personal',
        },
    ]

    const personalProjects = workplaces.filter((item) => item.type === 'personal')
    const professionalProjects = workplaces.filter((item) => item.type === 'professional')

</script>

<section class='portfolio-list'>
    <h2>Professional Projects</h2>
    {#each professionalProjects as prj}
        <CompanyCard {...prj} />
    {/each}
    <h2>Personal Projects</h2>
    {#each personalProjects as prj}
        {prj.description}
    {/each}
</section>

<style>
    @media only screen and (max-width: 640px) {
        .portfolio-list {
            margin: 0 auto;
            width: 100%;
        }
    }
    @media only screen and (min-width: 640px) {
        .portfolio-list {
            margin: 0 auto;
            width: 70%;
        }
    }

    .portfolio-list h2{
        text-align: center;
        border-bottom: 8px solid #383eff;
        padding-bottom: 12px;
    }
</style>