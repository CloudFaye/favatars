<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
    export let variant: EyeProps['variant'];
    const src = '/favatars/eyes/happy.svg';
  </script>
  
  <div class="">
      {#if variant === 'happy'}
      <img src={src} alt="">
      {/if}
  </div>