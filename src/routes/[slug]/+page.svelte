<script lang="ts">
    import type { LinkSession } from '../types/linkSesson';
    import type { PageData } from './$types';
    import { ServiceType } from '../types/serviceType';
    import Numerizer from "../components/numerizer/numerizer.svelte"

    export let data: LinkSession;
</script>

{#if data.serviceType == ServiceType.MAP_NUMERIZER}
    <Numerizer/>
{/if}