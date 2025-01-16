<script lang="ts">
    import type { HairProps } from "../../../../types/Hair";
    export let variant: HairProps['variant']
    export let style: HairProps['style']
    const src = '/favatars/head/hair/short/05.svg';
    
    </script>
    
    <div class="">
    {#if variant === 'short' && style === '05'}
    <img src={src} alt="Short Hair 05">
    {/if}
    </div>