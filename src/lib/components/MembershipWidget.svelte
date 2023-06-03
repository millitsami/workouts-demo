<script>
    import checkIcon from '../images/check_icon.svg';
</script>

<div class="p-4">
    <h6 class="text-lightbluegray font-semibold py-3">Membership status</h6>
    <div class="bg-white rounded-lg shadow-lg flex">
        <div class="flex items-center justify-center mx-2">
            <svg class="transform -rotate-90 w-24 h-24">
                <circle cx="48" cy="48" r="42" stroke="currentColor" stroke-width="6" fill="transparent" class="text-ivory" />
                <circle cx="48" cy="48" r="42" stroke="currentColor" stroke-width="6" fill="transparent"
                    stroke-dasharray=260
                    stroke-dashoffset={-40}
                    class="text-blue " />
            </svg>
            <span class="absolute text-5xl">
                <img src={checkIcon} alt="fda" />
            </span>
        </div>
        <div class="p-4 flex-grow text-base">
            <p class="text-gray font-semibold">Relax, <br/> you have <span class="text-blue">225 days</span> left</p>
            <p class="text-lightgray py-1">Premium exlusive</p>
            <span class="inline-flex items-center rounded-md bg-lightgreen px-2 py-1 text-sm font-medium text-green ring-inset ring-green-600/20">Active</span>
        </div>
    </div>
</div>