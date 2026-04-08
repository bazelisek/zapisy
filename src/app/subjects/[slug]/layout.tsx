"use client";

import subjects from "@/components/notes/subjects";
import { useParams } from "next/navigation";

import { Separator, Surface } from "@heroui/react";
import Typography from "@/components/elements/Typography";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { slug } = useParams();

  const subject = subjects.find((s) => s.id === slug);
  if (!subject) {
    return <div>Subject not found</div>;
  }
  return (
    <div className="p-5 flex flex-col items-center gap-4">
      <Surface className="flex flex-col items-center gap-0 rounded-lg px-16 py-4 justify-center w-fit">
        <h1>{subject.name}</h1>
        <Typography variant="note">{subject.description}</Typography>
      </Surface>
      <Separator></Separator>
      <Surface
        className="my-4 rounded-3xl w-[90vw] md:w-[50vw] border p-8"
        variant="transparent"
      >
        {children}
      </Surface>
    </div>
  );
}
