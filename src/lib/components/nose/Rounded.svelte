<script lang="ts">
    import type { NoseProps } from "../../../types/Nose";
    export let variant: NoseProps['variant'];
    const src = '/favatars/mouth/rounded.svg';
 </script>
 
 <div class="">
     {#if variant === 'rounded'}
     <img src={src} alt="">
     {/if}
 </div>