<script>
    import { goto } from '$app/navigation';
    
    function gotoNumerizer() {
        goto("/numerizer")
    }
</script>

<div class="flex flex-col justify-center h-full w-full place-items-center">
    <img src="/images/icons/toolbox.png" alt="dbd-toolbox">
    <p class="text-9xl text-white customFont">dbd.tools</p>   
    <div class="flex">
        <div class="flex flex-col h-44 justify-center group cursor-pointer" on:click={gotoNumerizer} on:keydown={gotoNumerizer}>
            <img src="/images/icons/leader.webp" alt="dbd-toolbox" class="h-44 group-hover:h-56 transition-all">
            <p class="text-white text-center text-lg customFont justify-start group-hover:text-xl transition-all">Map Numerizer</p>
        </div>
    </div>
</div>
