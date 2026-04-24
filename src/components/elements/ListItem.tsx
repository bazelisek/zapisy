import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ListItemProps = ComponentPropsWithoutRef<"li"> & {
  children: ReactNode;
};

export default function ListItem({
  children,
  className,
  ...props
}: ListItemProps) {
  const itemClassName = ["my-px", className].filter(Boolean).join(" ");

  return (
    <li className={itemClassName} {...props}>
      {children}
    </li>
  );
}
