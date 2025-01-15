<script lang="ts">
   import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/angry.svg';
 </script>
 
 <div class="">
     {#if variant === 'angry'}
     <img src={src} alt="">
     {/if}
 </div>