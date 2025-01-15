<script lang="ts">
    import type { ClothingProps } from '../../../types/Clothing';
    export let variant: ClothingProps['variant'];
 </script>
 
 <div class="">
     {#if variant === 't-shirtvn'}
     <img src='/favatars/clothing/t-shirt V neck.svg' alt="t-shirtvn">
     {/if}
 </div>