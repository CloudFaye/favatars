<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 'turtleneck'}
     <img src='/favatars/clothing/turtleneck.svg' alt="turtleneck">
     {/if}
 </div>