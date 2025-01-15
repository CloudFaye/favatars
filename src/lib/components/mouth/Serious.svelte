<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/serious.svg';
 </script>
 
 <div class="">
     {#if variant === 'serious'}
     <img src={src} alt="">
     {/if}
 </div>