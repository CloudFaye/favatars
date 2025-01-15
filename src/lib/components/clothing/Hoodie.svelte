<script lang="ts">
   import type { ClothingProps } from '../../../types/Clothing';
   export let variant: ClothingProps['variant'];
</script>

<div class="">
    {#if variant === 'hoodie'}
    <img src="/favatar assets/clothing/hoodie.svg" alt="">
    {/if}
</div>