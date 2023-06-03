<script>
	import MembershipWidget from "$lib/components/MembershipWidget.svelte";
	import WorkoutsList from "$lib/components/WorkoutsList.svelte";
	import Header from "$lib/components/common/Header.svelte";
	import "../app.css";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Header />
	<div class="md:w-[60%] md:m-auto">
		<MembershipWidget />
		<WorkoutsList />
	</div>
</section>
