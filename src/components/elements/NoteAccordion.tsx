import type { ReactNode } from "react";
import { Accordion, AccordionBody, AccordionHeading } from "@heroui/react";
import { ChevronDown } from "@gravity-ui/icons";

interface NoteAccordionProps {
  icon: ReactNode;
  summary: ReactNode;
  children: ReactNode;
}

export default function NoteAccordion({
  icon,
  summary,
  children,
}: NoteAccordionProps) {
  return (
    <Accordion variant="surface">
      <Accordion.Item>
        <AccordionHeading>
          <Accordion.Trigger>
            <span className="mr-1">{icon}</span> {summary}
            <Accordion.Indicator>
              <ChevronDown />
            </Accordion.Indicator>
          </Accordion.Trigger>
        </AccordionHeading>
        <Accordion.Panel>
          <AccordionBody>{children}</AccordionBody>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
