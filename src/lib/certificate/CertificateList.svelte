<script>
    import { query, collection, onSnapshot } from "firebase/firestore"; 
    import { db } from '../../firebase'

    import { slide } from "svelte/transition";
    import CertificateCard from './CertificateCard.svelte' 

    $: certificates = [];

    const _query = query(collection(db, "certificates"));
    const unsubscribe = onSnapshot(_query, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            certificates = [...certificates, {...doc.data(), id: doc.id}];
            console.log(doc.data())
        });
    });

</script>

<section in:slide="{{ duration: 300 }}" class='certificate-list'>
    <h2>Work Experience </h2>
    <div class="card-deck">
        {#each certificates as cert}
            <CertificateCard {...cert}/>
        {/each}
    </div>
</section>

<style>
    @media only screen and (max-width: 960px) {
        .certificate-list {
            margin: 0 auto;
            width: 100%;
        }
    }
    @media only screen and (min-width: 960px) {
        .certificate-list {
            margin: 0 auto;
            width: 80%;
        }
    }

    .certificate-list h2{
        text-align: center;
        border-bottom: 8px solid #383eff;
        padding-bottom: 12px;
        font-weight: bold;
    }
</style>

        