<script lang="ts">
    import type { NoseProps } from "../../../types/Nose";
    export let variant: NoseProps['variant'];
    const src = '/favatars/mouth/pointy.svg';
 </script>
 
 <div class="">
     {#if variant === 'pointy'}
     <img src={src} alt="">
     {/if}
 </div>