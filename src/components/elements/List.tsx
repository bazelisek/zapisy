"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import DropdownIcon from "../icons/DropdownIcon";
import Typography from "./Typography";

interface ListProps extends React.HTMLAttributes<
  HTMLUListElement | HTMLOListElement
> {
  variant?: "ul" | "ol";
  children: ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  label?: ReactNode;
}

const ListDepthContext = createContext(0);

const unorderedStyles = [
  "list-disc",
  "[list-style-type:circle]",
  "[list-style-type:square]",
  "[list-style-type:disclosure-closed]",
];

const orderedStyles = [
  "list-decimal",
  "list-[lower-alpha]",
  "list-[lower-roman]",
  "list-[upper-alpha]",
];

export default function List({
  variant = "ul",
  children,
  className,
  collapsible = true,
  defaultCollapsed = false,
  label = (<Typography variant="note">Details</Typography>),
  ...props
}: ListProps) {
  const depth = useContext(ListDepthContext);
  const ListComponent = variant;
  const stylePattern = variant === "ol" ? orderedStyles : unorderedStyles;
  const markerClassName = stylePattern[depth % stylePattern.length];
  const listClassName =
    `ml-1.5 list-inside ${markerClassName} ${className ?? ""}`.trim();
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <ListDepthContext.Provider value={depth + 1}>
      <>
        {collapsible ? (
          <>
            <button
              type="button"
              onClick={() => setIsCollapsed((prev) => !prev)}
              className="inline-flex items-center gap-1 align-middle text-left text-inherit cursor-pointer"
              aria-expanded={!isCollapsed}
            >
              <span>{label}</span>
              <DropdownIcon
                className={`text-gray-400 transition-transform duration-200 ${
                  isCollapsed ? "-rotate-90" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                isCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
              }`}
            >
              <div className="overflow-hidden">
                <ListComponent className={listClassName} {...props}>
                  {children}
                </ListComponent>
              </div>
            </div>
          </>
        ) : (
          <>
            {label}
            <ListComponent className={listClassName} {...props}>
              {children}
            </ListComponent>
          </>
        )}
      </>
    </ListDepthContext.Provider>
  );
}
