<script lang="ts">
import type { BodyProps } from "../../../types/Body";
export let variant: BodyProps["variant"];
const src = "/favatars/body/light.svg";
</script>


<div class="">
    {#if variant === 'light'}
     <img src={src} alt="">
    {/if}
</div>