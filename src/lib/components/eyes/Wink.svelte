<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/wink.svg';
  </script>
  
  <div class="">
      {#if variant === 'wink'}
      <img src={src} alt="">
      {/if}
  </div>