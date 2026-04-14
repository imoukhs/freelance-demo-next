import { redirect } from "next/navigation";
import { DEFAULT_NICHE } from "@/lib/niches";

export default function Home() {
  redirect(`/demo?niche=${DEFAULT_NICHE}`);
}
