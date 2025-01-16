<script lang="ts"> 
import type {  AccessoryVariant } from '../../../types/Accessories';

export let variant: AccessoryVariant
</script>


{#if variant === 'winter-cap'}

<img src="/favatars/head/accessories/winter-cap.svg" alt="">

{:else if variant === 'turban'}

<img src="static/favatars/head/accessories/turban.svg" alt="">

{:else if variant === 'hijab'}

<img src="static/favatars/head/accessories/hijab.svg" alt="">

{/if}