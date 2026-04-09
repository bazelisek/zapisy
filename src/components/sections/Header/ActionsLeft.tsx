'use client'
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function ActionsLeft() {
  const router = useRouter();
  function onClick(path: string) {
    router.push(path);
  }
  return (
    <div className="flex gap-2 w-[35vw] px-3">
      <Button onClick={() => onClick("/subjects")} variant="outline">Subjects</Button>
    </div>
  );
}
