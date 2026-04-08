"use client";

import subjects from "@/components/notes/subjects";
import { Tooltip } from "@heroui/react/tooltip";
import { Separator } from "@heroui/react/separator";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ListBox } from "@heroui/react/list-box";
import { Surface } from "@heroui/react/surface";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = useParams();

  const subject = subjects.find((s) => s.id === slug);
  console.log(subject);
  if (!subject) {
    return <div>Subject not found</div>;
  }
  return (
    <div>
      <h2 className="mb-4 text-center font-bold">Topics</h2>
      <Separator className="mb-4" />
      <Surface className="rounded-lg">
        <ListBox className="p-2" aria-label="topics">
          {subject.topics.map((topic) => (
            <ListBox.Item key={topic.id} textValue={topic.name}>
              <Link
                href={`/subjects/${subject.id}/topics/${topic.id}`}
                className="w-full"
              >
                <Tooltip delay={0}>
                  <Tooltip.Trigger className="w-fit">
                    <span>{topic.name}</span>
                  </Tooltip.Trigger>
                  <Tooltip.Content>{topic.description}</Tooltip.Content>
                </Tooltip>
              </Link>
            </ListBox.Item>
          ))}
        </ListBox>
      </Surface>
    </div>
  );
}
