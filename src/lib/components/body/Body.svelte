<script lang="ts">
import type { BodyVariant } from "../../../types/Body";

export let variant: BodyVariant
</script>


{#if variant === 'black'}
    <img src="/favatars/body/black.svg" alt="">
{:else if variant === 'light'}
<img src="/favatars/body/light.svg" alt="">
{:else if variant === 'pale'}
<img class="animate-spin" src="/favatars/body/pale.svg" alt="">
{:else if variant === 'yellow'}
<img src="/favatars/body/yellow.svg" alt="">
{:else if variant === 'dark-brown'}
<img src="/favatars/body/dark-brown.svg" alt="">
{/if}



