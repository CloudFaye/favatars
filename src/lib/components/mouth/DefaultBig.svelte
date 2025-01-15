<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/default-big.svg';
 </script>
 
 <div class="">
     {#if variant === 'default-big'}
     <img src={src} alt="">
     {/if}
 </div>