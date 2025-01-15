<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
     export let variant: EyeProps['variant'];
     export const src = '/favatars/eyes/dizzy.svg';
  </script>
  
  <div class="">
      {#if variant === 'dizzy'}
      <img src={src} alt="">
      {/if}
  </div>