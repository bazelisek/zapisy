import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import { ArrowUp } from "@gravity-ui/icons";
import { Separator } from "@heroui/react";

export default function Trh() {
  return (
    <div>
      <h3>Trh</h3>
      <Typography variant="note" textAlign="center">
        Místo, kde dochází ke střetu poptávky a nabídky
      </Typography>
      <Separator />
      <List label="Trh" collapsible={false}>
        <ListItem>Trh zboží a služeb</ListItem>
        <ListItem>Trh práce</ListItem>
        <ListItem>Trh kapitálu</ListItem>
      </List>
      <Typography>Cena - jak moc vzácný statek je</Typography>
      <Typography>Plat vs Mzda - Plat - stát, mzda - ostatní</Typography>
      <NoteAccordion summary="Poptávka">
        <div>
          <Typography>
            Ochota kupujícího kupovat zboží za určitou cenu (v určitém čase)
          </Typography>
          <List label="Typy poptávky">
            <ListItem>Individuální poptávka</ListItem>
            <ListItem>Tržní poptávka</ListItem>
            <ListItem>Celková poptávka</ListItem>
            <ListItem>Agregátní poptávka</ListItem>
          </List>
        </div>
      </NoteAccordion>
      <Typography>
        Substitut - zboží, které může být použito místo jiného zboží
      </Typography>
      <Typography>
        Důchodový efekt - s rostoucí cenou a stejným důchodem klesá poptávka
      </Typography>
      <NoteAccordion summary="Poptávané množství x Obchodované množství">
        <Typography>Poptávané množství - zamýšlené, aby se prodalo</Typography>
        <Typography>
          Obchodované množství - skutečné množství, které se prodalo
        </Typography>
      </NoteAccordion>
      <Typography level="h4">
        Faktory (činitelé), které ovlivňují posun poptávkové křivky.
      </Typography>
      <List label="Faktory posunu poptávkové křivky">
        <ListItem>Ceny příbuzných výrobků - substitut/komplement</ListItem>
        <ListItem>Výše důchodu (liší se zboží nezbytné, zbytné a luxusní)</ListItem>
        <ListItem>Móda, preference</ListItem>
        <ListItem>Demografická struktura obyvatelstva</ListItem>
        <ListItem>Očekávání spotřebitele</ListItem>
      </List>
    </div>
  );
}
