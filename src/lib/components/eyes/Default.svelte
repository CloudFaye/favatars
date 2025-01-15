<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/default.svg';
  </script>
  
  <div class="">
      {#if variant === 'default'}
      <img src={src} alt="">
      {/if}
  </div>