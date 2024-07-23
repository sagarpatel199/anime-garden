import axios from "axios";

async function getHomeData() {
  const res = await axios.get("/api/home/route.ts");
  return res.data;
}

export default async function Home() {
  try {
    const data = await getHomeData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
