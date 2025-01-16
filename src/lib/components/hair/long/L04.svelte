<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant'];
    export let style: HairProps['style'];
    const src = '/favatars/head/hair/long/04.svg';
 </script>
 
 <div class="">
     {#if variant === 'long' && style === '04'}
     <img src={src} alt="Long Hair 04">
     {/if}
 </div>
