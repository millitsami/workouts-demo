<script lang="ts">
    import avatarImage from "../images/instructor_image.jpg";
    import bodyCompositionIcon from "../images/bodycomposition.svg";
    import repeatIcon from "../images/repeat_icon.svg";
	import type { workoutListItem } from "$lib/types/types";
    
    export let workout: workoutListItem;
</script>

<div class="border-l-pink border-l-8 rounded-md shadow-lg p-3 m-2 space-y-2 w-2/5 min-w-[11rem] flex flex-col grow" role="listitem">
    <img src={bodyCompositionIcon} alt='body_composition_image' class="w-10 bg-lightpink rounded-md" />
    <div class="flex justify-between">
        <p class="text-gray font-semibold content text-sm">{workout.time}</p>
        <p class="text-lightgray text-sm">{workout.date}</p>
    </div>
    <h3 class="text-pink font-semibold text-base">{workout.title}</h3>
    <p class="text-gray text-sm pb-2">{workout.gymName}, {workout.address}s</p>
    <div class="flex justify-between">
        <img src={avatarImage} alt='avatar_image' class="w-8 rounded-full ring-1 ring-yellow" />
        <img src={repeatIcon} alt='repeat_icon' class="w-4" />
    </div>
</div>