<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant'];
    export let style: HairProps['style'];
    const src = '/favatars/head/hair/long/08.svg';
 </script>
 
 <div class="">
     {#if variant === 'long' && style === '08'}
     <img src={src} alt="Long Hair 08">
     {/if}
 </div>
