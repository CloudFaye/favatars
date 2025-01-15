<script lang="ts">
    import type { EyeProps } from '../../../types/Eyes';
     export let variant: EyeProps['variant'];
     const src = '/favatars/eyes/closed.svg';
  </script>
  
  <div class="">
      {#if variant === 'closed'}
      <img src={src} alt="">
      {/if}
  </div>