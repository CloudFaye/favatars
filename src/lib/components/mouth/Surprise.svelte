<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/surprise.svg';
 </script>
 
 <div class="">
     {#if variant === 'surprise'}
     <img src={src} alt="">
     {/if}
 </div>