<script lang="ts">
 import type { BodyProps } from "../../../types/Body";
    export let variant: BodyProps["variant"];
    const src = "/favatars/body/black.svg";
</script>


<div class=''>
    {#if variant === 'black'}
     <img src={src} alt="">
    {/if}
</div>