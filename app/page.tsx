import { client } from "./lib/sanity";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = await getData();

  return (
    <h1>Hi from the index page</h1>
  )
}
