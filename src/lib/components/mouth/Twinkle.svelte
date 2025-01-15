<script lang="ts">
    import type { MouthProps } from "../../../types/Mouth";
    export let variant: MouthProps['variant'];
    const src = '/favatars/mouth/twinkle.svg';
 </script>
 
 <div class="">
     {#if variant === 'twinkle'}
     <img src={src} alt="">
     {/if}
 </div>