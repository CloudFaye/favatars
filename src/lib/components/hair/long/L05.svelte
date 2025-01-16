<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant'];
    export let style: HairProps['style'];
    const src = '/favatars/head/hair/long/05.svg';
 </script>
 
 <div class="">
     {#if variant === 'long' && style === '05'}
     <img src={src} alt="Long Hair 05">
     {/if}
 </div>
