<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/sad.svg';
 </script>
 
 <div class="">
     {#if variant === 'sad'}
     <img src={src} alt="">
     {/if}
 </div>