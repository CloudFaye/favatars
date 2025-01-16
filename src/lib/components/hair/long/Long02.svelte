<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant'];
    export let style: HairProps['style'];
    const src = '/favatars/head/hair/long/02.svg';
 </script>
 
 <div class="">
     {#if variant === 'long' && style === '02'}
     <img src={src} alt="Long Hair 02">
     {/if}
 </div>