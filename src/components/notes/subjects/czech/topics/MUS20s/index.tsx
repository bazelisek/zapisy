import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
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
        <Typography>Paul Qualley</Typography>
        <Typography>Egon Schiele - eroticky podbarvené akty</Typography>
        <DateMark>21.4.2026</DateMark>
        <Typography>Amade Modigiani</Typography>
        <Typography>Marc Chagall - rodne mesto, vzpominky</Typography>
      </NoteAccordion>
      <NoteAccordion summary="Kubismus">
        <List collapsible={false}>
          <ListItem>Odklon od realistického zobrazování</ListItem>
          <ListItem>
            <List label="Analytické období">
              <ListItem>Rozklad předmětů na tvary, linie</ListItem>
              <ListItem>Omezen barevnost - šedá, hnědá</ListItem>
              <ListItem>Zátiší, portréty, koláže</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List label="Syntetické období">
              <ListItem>
                Vliv na architekturu - fukncionalismus, purismus,
                konstriktivismu
              </ListItem>
              <ListItem>Obnovená barevnost</ListItem>
              <ListItem>Zátiší, portréty, koláže</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List label="autoři">
              <ListItem>Pablo Picasso</ListItem>
              <ListItem>Georges Braque</ListItem>
              <ListItem>Alexandr Archipenko - socha5</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <List label="Kubismus u nás">
              <ListItem>Bohumil Kubišta</ListItem>
              <ListItem>Emil Filla</ListItem>
              <ListItem>Ottog Gutfreund</ListItem>
              <ListItem>Vincenc Beneš</ListItem>
              <ListItem>
                <List label="Tvrdošíjní">
                  <ListItem>Josef Čapek</ListItem>
                  <ListItem>Václav Špála</ListItem>
                  <ListItem>Rudolf Kremlička</ListItem>
                </List>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </NoteAccordion>
      <NoteAccordion summary="Futurismus">
        <List collapsible={false}>
          <ListItem>Manifest futuristické poezie</ListItem>
          <ListItem>
            Současnost, velkoměsto, krása strojů, rychlost - automobily a
            letadla
          </ListItem>
          <ListItem>Itálie</ListItem>
          <ListItem>Rusko</ListItem>
          <ListItem>"Válka je hygienou světa"</ListItem>
          <ListItem>"Zbořte muzea"</ListItem>
          <ListItem>fašismus</ListItem>
          <ListItem>
            <List label="autoři">
              <ListItem>Giacamo Balla</ListItem>
              <ListItem>Luigi Russolo</ListItem>
            </List>
          </ListItem>
        </List>
      </NoteAccordion>
      <NoteAccordion summary="Abstrakce - nefigurativní umění">
        <List collapsible={false}>
          <ListItem>De Stijl</ListItem>
          <ListItem>Piet Mondrian</ListItem>
          <ListItem>Kazimír Malevič</ListItem>
        </List>
      </NoteAccordion>
      <NoteAccordion summary="Dadaismus">
        <ListItem>Tristan Tzaza</ListItem>
        <ListItem>Marcel Duchamp</ListItem>
        <ListItem>Kurt Schwiter</ListItem>
        <ListItem>Man Ray</ListItem>
        <ListItem>Hans Arp</ListItem>
      </NoteAccordion>
      <NoteAccordion summary="Surrealismus">
        <List>
          <ListItem>Andaluský pes</ListItem>
          <ListItem>Magnetická pole</ListItem>
          <ListItem>Automatická kresba, a. text, asociace představ</ListItem>
          <ListItem>Výklad snů</ListItem>
          <ListItem>Guillaume Appolinaire</ListItem>
          <ListItem>André Breton 1924, 32, 42</ListItem>
          <ListItem>Philip Soupault</ListItem>
          <L>Salvador Dalí</L>
          <L>René Magritte</L>
          <L>Max Ernst</L>
          <L>Luis Bunuel - Andaluský pes</L>
          <L>André Masson</L>
          <L>Joan Miró</L>
        </List>
        <List label={<h5>Pásmo</h5>}>
          <L>Lyrická báseň</L>
          <L>Polytematická - lyrický subjekt</L>
          <L>Asociace představ</L>
        </List>
        
      </NoteAccordion>
    </div>
  );
}
