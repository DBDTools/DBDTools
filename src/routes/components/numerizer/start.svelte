<script>
    let linkToCopy = ""
    $: linkToCopyCode = linkToCopy.substring(linkToCopy.lastIndexOf('/') + 1) /* Diese Logik vielleicht in linkGenerator.ts abbilden */
    
    let letOthersChooseMaps = true

    import Icon from '@iconify/svelte';
    import confirmIcon from '@iconify/icons-line-md/confirm-circle';
    import { generateNewLink } from '../../scripts/linkGenerator'

    function generateLink() {        
        linkToCopy = generateNewLink()
        copyLink()
    }

    function copyLink() {
        navigator.clipboard.writeText(linkToCopy)
    }
</script>

<div class="flex flex-col justify-center h-full w-full place-items-center gap-5">
    <div class="bg-box">
        <div class="flex justify-center">
            <p class="text-white text-4xl customFont">Map Numerizer</p>
        </div>
        <div class="flex flex-col gap-5 justify-center p-5 w-full">
            <div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input bind:checked={letOthersChooseMaps} type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Let others choose Maps</span>
                </label>
            </div>
            <button on:click={generateLink} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Generate Link
            </button>
        </div>
    </div>
    {#if linkToCopy != ""}
        <div class="bg-box flex flex-col gap-5">
            <input type="text" class="bg-transparent w-full text-white text-xl border-transparent" bind:value={linkToCopyCode}>
            <button on:click={copyLink} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Copy
            </button>
            <div class="flex gap-3">
                <Icon icon={confirmIcon} class="text-3xl text-green-500"/>
                <p>Copied successfully</p>
            </div>
        </div>
    {/if}
</div>
