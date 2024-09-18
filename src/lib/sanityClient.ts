import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vmtsvpe2",
  dataset: "production",
  apiVersion: "2022-03-24", // choose the API version you want
  useCdn: true,
});

export default client;