<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/06.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '06'}
    <img src={src} alt="Short Hair 06">
    {/if}
    </div>