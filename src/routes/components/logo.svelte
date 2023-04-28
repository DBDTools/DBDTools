<script>
    export let toolName = ""
    import { goto } from '$app/navigation';
    
    function gotoHome() {
        goto("/")
    }
</script>

<div class="flex place-content-center justify-center place-items-center gap-2 p-4 group cursor-pointer" on:click={gotoHome} on:keydown={gotoHome}>
    <img src="/images/icons/toolbox.png" alt="dbd-toolbox" class="h-16 object-contain group-hover:h-20 transition-all">
    <div>
        <p class="text-2xl text-white customFont group-hover:text-3xl transition-all">dbd.tools</p>   
        <p class="text-xs text-white customFont group-hover:text-sm transition-all">{toolName}</p>
    </div>
</div>

