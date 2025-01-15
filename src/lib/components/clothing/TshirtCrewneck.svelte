<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 't-shirtcn'}
     <img src='/favatars/clothing/t-shirt crew neck.svg' alt="t-shirtcn">
     {/if}
 </div>