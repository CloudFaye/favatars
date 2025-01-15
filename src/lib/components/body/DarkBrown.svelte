<script lang="ts">
    import type { BodyProps } from "../../../types/Body";
       export let variant: BodyProps["variant"];
       const src = "/favatars/body/dark-brown.svg";
   </script>
   
   
   <div class=''>
       {#if variant === 'dark-brown'}
        <img src={src} alt="">
       {/if}
   </div>