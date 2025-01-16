<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/07.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '07'}
    <img src={src} alt="Short Hair 07">
    {/if}
    </div>