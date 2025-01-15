<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/cry.svg';
  </script>
  
  <div class="">
      {#if variant === 'cry'}
      <img src={src} alt="">
      {/if}
  </div>