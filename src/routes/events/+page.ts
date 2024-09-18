import client from "$lib/sanityClient"
import type { PageLoad } from "./$types"

export async function load () {
    const events = await client.fetch("*[_type == 'event'] {title, start, end, location, description, image->}");
    return { events };
}