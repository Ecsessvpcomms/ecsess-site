<script>
	import Event from './Event.svelte';
	export let data;
</script>

<h1 class="text-5xl text-center">All Upcoming Events</h1>

<div class="flex justify-center items-center min-h-screen">
	<div class="flex flex-col gap-4 w-3/5 justify-center items-center p-10">
		{#each data.posts as post}
			<Event {...post} />
		{/each}
	</div>
</div>
