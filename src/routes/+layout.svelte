<script>
    import "../app.css";
    import Icon from '@iconify/svelte';
    import githubIcon from '@iconify/icons-mdi/github';

    import baselineDiscord from '@iconify/icons-ic/baseline-discord';
    import globeIcon from '@iconify/icons-ph/globe';

    let wallpapers = [
        "6B801DB8-4E28-4F8A-8ECC-269380EF8F5E.jpg", 
        "8F65FBBD-5D28-4A5F-88C6-4463123D0352.jpg",
        "7574E3CC-9C48-4390-9147-4C0413B36235.jpg",
        "B9B772DB-719E-4C8E-99DB-2A2EED676A4A.jpg",
        "CE3B7D84-3C87-4140-85A4-5AC1371238F4.jpg",
        "E7CA48A6-3A11-4C38-B364-2393E38BEF15.jpg"
        ]
    let wallpaper = wallpapers[Math.floor(Math.random()*wallpapers.length)]
    let bgImage = "background-image: url(/images/wallpaper/"+ wallpaper + ")"
    
</script>

<div class="h-screen w-screen bg-cover" style={bgImage}>
    <slot />
</div>

<div class="absolute bottom-0 right-0">
    <div class="flex gap-1 p-4">
        <a href="https://github.com/DBDTools" target="_blank"><Icon icon={githubIcon} class="text-white text-4xl" /></a>
        <Icon icon={globeIcon} class="text-white text-4xl"/>
        <Icon icon={baselineDiscord} class="text-white text-4xl"/>
    </div>
</div>