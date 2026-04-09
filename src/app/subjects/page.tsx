import { ListBox, Separator, Surface, Tooltip } from "@heroui/react";
import subjects from "../../components/notes/subjects";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] p-4">
        <h1 className="mb-4 text-center font-bold">Subjects</h1>
        <Separator className="mb-4" />
        <Surface className="rounded-lg">
          <ListBox className="p-2" aria-label="subjects">
            {subjects.map((subject) => (
              <ListBox.Item key={subject.id} textValue={subject.name}>
                <Link href={`/subjects/${subject.id}`} className="w-full">
                  <Tooltip delay={0}>
                    <Tooltip.Trigger className="w-fit">
                      <span>{subject.name}</span>
                    </Tooltip.Trigger>
                    <Tooltip.Content>{subject.description}</Tooltip.Content>
                  </Tooltip>
                </Link>
              </ListBox.Item>
            ))}
          </ListBox>
        </Surface>
      </div>
    </div>
  );
}
