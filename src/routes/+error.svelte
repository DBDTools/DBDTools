
<script>
    import { page } from '$app/stores';
    import Logo from './components/logo.svelte';

    let gifs = [
        "NotFound.gif",
        "NotFound2.gif",
        "NotFound3.gif",
        "NotFound4.gif"
    ]

    let gif = gifs[Math.floor(Math.random()*gifs.length)]
    let srcCode = "/images/icons/NotFound/" + gif
</script>

<div class="absolute top-0">
    <Logo />
</div>

<div class="flex flex-col justify-center h-screen w-screen items-center place-content-center text-center">
    <img src={srcCode} alt="NotFound" class="object-contain h-2/3 ">
    <p class="text-white text-4xl">{$page.status}</p>
    <p class="text-white text-4xl">{$page.error.message}</p>
</div>