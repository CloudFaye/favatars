<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 'shirt'}
     <img src='/favatars/clothing/shirt.svg' alt="Shirt">
     {/if}
 </div>