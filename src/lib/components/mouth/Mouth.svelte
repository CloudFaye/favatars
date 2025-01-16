<script lang="ts">
    import Conserned from './Conserned.svelte';
    import Serious from './Serious.svelte';
    import Kiss from './Kiss.svelte';
    import Smile from './Smile.svelte';
    import Grimace from './Grimace.svelte';
    import Tongue from './Tongue.svelte';
    import DefaultBig from './DefaultBig.svelte';
	import type { MouthVariant } from '../../../types/Mouth';

    export let variant: MouthVariant
</script>

{#if variant === 'conserned'}
    <Conserned variant={variant} />
{:else if variant === 'serious'}
    <Serious variant={variant} />
{:else if variant === 'kiss'}
<Kiss variant={variant} />
{:else if variant === 'smile'}
<Smile variant={variant} />
{:else if variant === 'grimace'}
<Grimace variant={variant} />
{:else if variant === 'tongue'}
<Tongue variant={variant} />
{/if}