<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/09.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '09'}
    <img src={src} alt="Short Hair 09">
    {/if}
    </div>