<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/conserned-teeth.svg';
 </script>
 
 <div class="">
     {#if variant === 'conserned-teeth'}
     <img src={src} alt="">
     {/if}
 </div>