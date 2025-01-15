<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/tired.svg';
  </script>
  
  <div class="">
      {#if variant === 'tired'}
      <img src={src} alt="">
      {/if}
  </div>