"use client";

import Typography from "@/components/elements/Typography";
import subjects from "@/components/notes/subjects";
import { Separator } from "@heroui/react";
import { useParams } from "next/navigation";

export default function Page() {
  const { topic: topicSlug, slug } = useParams();
  const subject = subjects.find((s) => s.id === slug);
  if (!subject) {
    return <div>subject not found</div>;
  }
  const topic = subject.topics.find((t) => t.id === topicSlug);
  if (!topic) {
    return <div>topic not found</div>;
  }
  const Homepage = topic.homepage;
  return (
    <div>
      <Typography level="h2">{topic.name}</Typography>
      <Typography variant="note" textAlign="center">
        {topic.description}
      </Typography>
      <Separator className="my-8" />
      <Homepage />
    </div>
  );
}
