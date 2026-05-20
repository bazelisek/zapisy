import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

export default function CestovniRuch() {
  return (
    <div>
      <DateMark>20.5.2026</DateMark>
      <Typography>Účastník cestovního ruchu - Měří se podle noclehů</Typography>
      <List label="Dělení">
        <L>Domácí</L>
        <L l label="Zahraniční">
          <L>Aktivní - do ČR</L>
          <L>Pasivní - češi do zahraničí</L>
        </L>

      </List>
      <List label="Atraktivity">
        <L>Historické památky + náb. pam. + poutní místa</L>
        <L>Kulturní akce</L>
        <L>Lázeňství</L>
        <L>Sport. akce</L>
        <L>Gastronomické události</L>
      </List>
    </div>
  );
}
