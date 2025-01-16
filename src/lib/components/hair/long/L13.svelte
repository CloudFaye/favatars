<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant'];
    export let style: HairProps['style'];
    const src = '/favatars/head/hair/long/13.svg';
 </script>
 
 <div class="">
     {#if variant === 'long' && style === '13'}
     <img src={src} alt="Long Hair 13">
     {/if}
 </div>
