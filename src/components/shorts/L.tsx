import type { ComponentPropsWithoutRef, ReactNode } from "react";
import List from "../elements/List";
import ListItem from "../elements/ListItem";

type ItemProps = ComponentPropsWithoutRef<typeof ListItem>;
type NestedListProps = Omit<ComponentPropsWithoutRef<typeof List>, "children">;

type LProps =
  | ({ children: ReactNode; l?: false } & ItemProps)
  | ({
      children: ReactNode;
      l: true;
      itemProps?: ItemProps;
    } & NestedListProps);

export default function L(props: LProps) {
  if (props.l) {
    const { children, l: _l, itemProps, ...listProps } = props;
    void _l;

    return (
      <ListItem {...itemProps}>
        <List {...listProps}>{children}</List>
      </ListItem>
    );
  }

  const { children, l: _l, ...itemProps } = props;
  void _l;

  return <ListItem {...itemProps}>{children}</ListItem>;
}
