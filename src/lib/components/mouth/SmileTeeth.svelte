<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/smile-teeth.svg';
 </script>
 
 <div class="">
     {#if variant === 'smile-teeth'}
     <img src={src} alt="">
     {/if}
 </div>