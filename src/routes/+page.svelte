<script lang="ts">
 
    import Mouth from '$lib/components/mouth/Mouth.svelte';
    import Nose from '$lib/components/nose/Nose.svelte';
    import Body from '$lib/components/body/Body.svelte';
    import FacialHair from '$lib/components/facial-hair/FacialHair.svelte';
    import Accessories from '$lib/components/accessories/Accessories.svelte';
    
</script>

<div>
    <h2>Body</h2>
    <Body variant="black" />
    <Body variant="pale" />
    <Body variant="yellow" />
    <Body variant="light" />
    <Body variant="dark-brown" />


    <h2>Nose</h2>
    <Nose variant="rounded" />
    <Nose variant="pointy" />
    <Nose variant="default" />

    <h2>Mouth</h2>
   <Mouth variant="conserned" />
   <Mouth variant="serious" />
   <Mouth variant="kiss" />
    <Mouth variant="smile" />
    <Mouth variant="grimace" />
    <Mouth variant="tongue" />

    <h2>Facial hair</h2>
    <FacialHair variant="moustache-chevron" />
    <FacialHair variant="beard-huge" />
    <FacialHair variant="beard-large" />
    <FacialHair variant="moustache-handlebar" />
    <FacialHair variant="moustache-horseshoe" />
    <FacialHair variant="beard-medium" />
    <FacialHair variant="beard-short" />
    <FacialHair variant="no-facial-hair" />
    <FacialHair variant="beard-long" />
    <Accessories variant="winter-cap" />

</div>


