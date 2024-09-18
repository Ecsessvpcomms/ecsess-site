<script>
	export let title, start, end, location, description, image;
	import client from "$lib/sanityClient"
	import imageUrlBuilder from "@sanity/image-url";
	const builder = imageUrlBuilder(client)
</script>

<div class="rounded overflow-hidden shadow-lg flex flex-row bg-green-700 h-96">
	<img class="w-1/2 h-full object-cover" src={builder.image(image).url()} alt={'Picture for ' + title} />
	<div class="flex flex-col px-6 py-4 text-white w-1/2">
		<div class="font-extrabold text-xl mb-2">{title}</div>
		<div class="font-semibold text-l">{start}</div>
		<div class="font-semibold text-l mb-2">{location}</div>
		<p class="text-base flex-grow mb-4 overflow-y-auto">
			{description}
		</p>

		<div class="flex justify-center">
			<button
				class="bg-green-800 rounded px-8 py-2 font-semibold"
				on:click={() => (/*window.location = ticketsLink*/console.log("Been pressed"))}>Get Tickets</button
			>
		</div>
	</div>
</div>
