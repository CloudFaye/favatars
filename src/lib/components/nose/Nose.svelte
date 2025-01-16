<script lang="ts">
import type { NoseVariant } from "../../../types/Nose";

export let variant: NoseVariant
</script>

{#if variant === 'rounded'}
    <img src="/favatars/nose/rounded.svg" alt="">
{:else if variant === 'pointy'}
<img src="/favatars/nose/pointy.svg" alt="">
{:else if variant === 'default'}  
<img src="/favatars/nose/default.svg" alt="">
{/if}