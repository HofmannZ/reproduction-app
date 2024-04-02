import { unstable_noStore as noStore } from "next/cache";

async function getData(): Promise<number> {
  throw new Error("This is a test error");
  return 1;
}

export default async function Home() {
  noStore(); // Disable prerendering for the layout (In the real world this page uses user data therefore we don't want to prerender i)

  await getData();

  return <div>I am a page</div>;
}
