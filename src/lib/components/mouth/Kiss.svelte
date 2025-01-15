<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/kiss.svg';
 </script>
 
 <div class="">
     {#if variant === 'kiss'}
     <img src={src} alt="">
     {/if}
 </div>