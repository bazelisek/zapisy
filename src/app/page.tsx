'use client'
import Typography from "@/components/elements/Typography";
import { Button, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Surface className="p-8 flex items-center flex-col gap-4">
          <Typography level="h1">
            Zápisy z random hodin v random škole
          </Typography>
          <Button variant="primary" onClick={() => {router.push("/subjects")}}>Přejít na předměty</Button>
        </Surface>
      </main>
    </div>
  );
}
