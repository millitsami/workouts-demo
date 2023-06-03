<script lang="ts">
	import AddWorkoutButton from "./common/AddWorkoutButton.svelte";
	import WorkoutsListItem from "./WorkoutsListItem.svelte";
	import UpcomingWorkoutsButton from "./common/UpcomingWorkoutsButton.svelte";
	import type { workoutListItem } from "$lib/types/types";
	import workouts from '../mockData.json'
    
    export let workoutList: workoutListItem[] = workouts;
</script>

<div class="flex flex-col p-3">
    <UpcomingWorkoutsButton />
    <div class="flex flex-nowrap overflow-x-auto">
        {#each workoutList as workout (workout.id)}
            <WorkoutsListItem workout={workout} />
        {/each}
    </div>
    <AddWorkoutButton />
</div>
