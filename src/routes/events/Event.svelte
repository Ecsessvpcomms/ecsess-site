<script>
	export let image, title, date, location, information, ticketsLink;
</script>

<div class="rounded overflow-hidden shadow-lg flex flex-row bg-green-700 h-96">
	<img class="w-1/2 h-full object-cover" src={image} alt={'Picture for ' + title} />
	<div class="flex flex-col px-6 py-4 text-white w-1/2">
		<div class="font-extrabold text-xl mb-2">{title}</div>
		<div class="font-semibold text-l">{date}</div>
		<div class="font-semibold text-l mb-2">{location}</div>
		<p class="text-base flex-grow mb-4 overflow-y-auto">
			{information}
		</p>

		<div class="flex justify-center">
			<button
				class="bg-green-800 rounded px-8 py-2 font-semibold"
				on:click={() => (window.location = ticketsLink)}>Get Tickets</button
			>
		</div>
	</div>
</div>
