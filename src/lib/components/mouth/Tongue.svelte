<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/tonge.svg';
 </script>
 
 <div class="">
     {#if variant === 'tongue'}
     <img src={src} alt="">
     {/if}
 </div>