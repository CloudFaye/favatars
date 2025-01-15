<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 'sweater'}
     <img src='/favatars/clothing/sweater.svg' alt="Sweater">
     {/if}
 </div>