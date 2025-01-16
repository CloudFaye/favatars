<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/12.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '12'}
    <img src={src} alt="Short Hair 12">
    {/if}
    </div>