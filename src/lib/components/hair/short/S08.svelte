<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/08.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '08'}
    <img src={src} alt="Short Hair 08">
    {/if}
    </div>