<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/default.svg';
 </script>
 
 <div class="">
     {#if variant === 'default'}
     <img src={src} alt="">
     {/if}
 </div>