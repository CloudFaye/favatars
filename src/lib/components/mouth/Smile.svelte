<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/smile.svg';
 </script>
 
 <div class="">
     {#if variant === 'smile'}
     <img src={src} alt="">
     {/if}
 </div>