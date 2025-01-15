<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 't-shirt'}
     <img src='/favatars/clothing/t-shirt.svg' alt="t-shirt">
     {/if}
 </div>