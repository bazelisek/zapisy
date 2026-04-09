import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import Typography from "@/components/elements/Typography";

export default function Kombinatorika() {
  return (
    <div>
      <Typography level="h3">Kombinatorika</Typography>
      <p>Studium uspořádání a kombinací</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quo.
      </p>
      <List variant="ol" collapsible={false}>
        <ListItem>Permutace</ListItem>
        <ListItem>
          <List variant="ol" collapsible label="Something">
            <ListItem>Permutace</ListItem>
            <ListItem>Kombinace</ListItem>
            <ListItem>Variace</ListItem>
          </List>
        </ListItem>
        <ListItem>Variace</ListItem>
      </List>
    </div>
  );
}
