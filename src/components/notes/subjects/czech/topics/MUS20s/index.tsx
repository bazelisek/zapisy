import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import { Separator } from "@heroui/react";

export default function MUS20s() {
  return (
    <div>
      <DateMark>17.4.2026</DateMark>
      <List
        label={
          <Typography level="h2">Společensko historický kontext</Typography>
        }
      >
        <ListItem>
          <List label="Rivalita Německo vs Francie">
            <ListItem>Trojspolek, Trojdohoda</ListItem>
          </List>
        </ListItem>
        <ListItem>Kolonialismus</ListItem>
        <ListItem>Mnohonárodnostní říše</ListItem>
        <ListItem>Belle époque</ListItem>
        <ListItem>Film</ListItem>
        <ListItem>Anexe Bosny a Hercegoviny</ListItem>
        <ListItem>Albert Einstein - teorie relativity</ListItem>
        <ListItem>Sigmund Freud - psychoanalýza</ListItem>
      </List>
      <Separator />
      <Typography level="h2">Literatura</Typography>
      <List label={""} collapsible={false}>
        <ListItem>experimentální x tradiční tvorba</ListItem>
        <ListItem>rycjlejší střídání směrů</ListItem>
        <ListItem>stylová nejednotnost</ListItem>
        <ListItem>
          prostředky: Vnitřní monolog, polopřímá, evlastní přímá řeč, smíšená,
          volný verš
        </ListItem>
      </List>
      <List label="Umělecké směry">
        <ListItem>Expresionismus</ListItem>
        <ListItem>Dadaismus</ListItem>
        <ListItem>Kubismus</ListItem>
        <ListItem>Futurismus</ListItem>
        <ListItem>Surrealismus</ListItem>
      </List>
      <Separator />
      <NoteAccordion summary="Expresionismus">
        <List collapsible={false}>
          <ListItem>Deformace tvaru</ListItem>
          <ListItem>
            <List label="Exprese = výraz">
              <ListItem>Úzkost</ListItem>
              <ListItem>Osamělost</ListItem>
              <ListItem>Strach</ListItem>
              <ListItem>Znechucení</ListItem>
            </List>
          </ListItem>
          <ListItem>Znepokojení</ListItem>
          <ListItem>
            <List label="Německo">
              <ListItem>skupina Die Brücke (Drážďany)</ListItem>
              <ListItem>Der Blaue Reiter(Mnichov)</ListItem>
            </List>
          </ListItem>
        </List>
        <Typography level="h4">Typické</Typography>
        <Typography>Edvard Munch - výkřik</Typography>
        <Typography>Vasilij Kandinskij - Abstrakce</Typography>
        <Typography>Oskar Kokoshka</Typography>
        <Typography>Egon Schiele - eroticky podbarvené akty</Typography>
      </NoteAccordion>
    </div>
  );
}
