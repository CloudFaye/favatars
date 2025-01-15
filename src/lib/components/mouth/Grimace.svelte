<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/grimace.svg';
 </script>
 
 <div class="">
     {#if variant === 'grimace'}
     <img src={src} alt="">
     {/if}
 </div>