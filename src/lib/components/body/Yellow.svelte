<script lang="ts">
    import type { BodyProps } from "../../../types/Body";
       export let variant: BodyProps["variant"];
       const src = "/favatars/body/yellow.svg";
   </script>
   
   
   <div class=''>
       {#if variant === 'yellow'}
        <img src={src} alt="">
       {/if}
   </div>