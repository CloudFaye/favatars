<script lang="ts">
    import type { NoseProps } from "../../../types/Nose";
    export let variant: NoseProps['variant'];
    const src = '/favatars/mouth/default.svg';
 </script>
 
 <div class="">
     {#if variant === 'default'}
     <img src={src} alt="">
     {/if}
 </div>