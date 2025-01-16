<script lang="ts">
    import type { FacialHairVariant } from "../../../types/FacialHair";
    
    export let variant: FacialHairVariant;
</script>


{#if variant === 'moustache-chevron'}

<img src="/favatars/facial hair/moustache-chevron.svg" alt="">

{:else if variant === 'beard-huge'}

<img src="/favatars/facial hair/beard-huge.svg" alt="">

{:else if variant === 'beard-large'}

<img src="/favatars/facial hair/beard-large.svg" alt="">

{:else if variant === 'beard-medium'}

<img src="/favatars/facial hair/beard-medium.svg" alt="">

{:else if variant === 'beard-short'}

<img src="/favatars/facial hair/beard-short.svg" alt="">

{:else if variant === 'moustache-horseshoe'}

<img src="/favatars/facial hair/moustache-horseshoe.svg" alt="">

{:else if variant === 'moustache-handlebar'}

<img src="/favatars/facial hair/moustache-handlebar.svg" alt="">

{:else if variant === 'no-facial-hair'}

<img src="/favatars/facial hair/no-facial.svg" alt="">

{:else if variant === 'beard-long'}

<img src="/favatars/facial hair/beard-long.svg" alt="">



{/if}