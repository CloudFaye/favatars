<script lang="ts">
    import type { BodyProps } from "../../../types/Body";
       export let variant: BodyProps["variant"];
       const src = "/favatars/body/pale.svg";
   </script>
   
   
   <div class=''>
       {#if variant === 'pale'}
        <img src={src} alt="">
       {/if}
   </div>