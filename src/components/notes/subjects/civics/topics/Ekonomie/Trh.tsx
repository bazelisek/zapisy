import DateMark from "@/components/blocks/DateMark";
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
      <Typography level="h4">Poptávka</Typography>
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
        <ListItem>
          Výše důchodu (liší se zboží nezbytné, zbytné a luxusní)
        </ListItem>
        <ListItem>Móda, preference</ListItem>
        <ListItem>Demografická struktura obyvatelstva</ListItem>
        <ListItem>Očekávání spotřebitele</ListItem>
      </List>
      <DateMark>16.4.2026</DateMark>
      <Typography level="h4">Nabídka</Typography>
      <NoteAccordion summary="Nabídka">
        <div>
          <Typography>
            Ochota prodávajícího prodávat určité množství zboží za určitou cenu
            (v určitém čase)
          </Typography>
          <List label="Typy nabídky">
            <ListItem>Individuální nabídka (1 ={">"} 1)</ListItem>
            <ListItem>Celková nabídka (všichni ={">"} 1)</ListItem>
            <ListItem>Agregátní nabídka (všichni ={">"} všechno)</ListItem>
          </List>
        </div>
      </NoteAccordion>
      <Typography>Čím větší je cena, tím větší je množství zboží na trhu(nabídka) - parabolický tvar křivky.</Typography>
      <List label="Faktory posunu křivky nabídky">
        <ListItem>Cena je větší - víc prodávajících vstupuje na trh</ListItem>
        <ListItem>Změna struktury výroby</ListItem>
      </List>
      <List label="Faktory posunu křivky nabídky (cena neměnná)">
        <ListItem>Ceny vstupu do výroby</ListItem>
        <ListItem>Technologie</ListItem>
        <ListItem>Ceny alternativ</ListItem>
        <ListItem>Úrodný vs neúrodný rok</ListItem>
        <ListItem>Očekávání trhu</ListItem>
        <ListItem>Počet firem na trhu</ListItem>
        <ListItem>Podmínky výroby</ListItem>
      </List>
      <Typography level="h4">Rovnováha na trhu</Typography>
      <Typography>bod E - (ekvilibrum) rovnovážný bod: kde se střetává poptávková a nabídková křivka</Typography>
      <DateMark>21.4.2026</DateMark>
      <Typography>Celková elasticita poptávky</Typography>
      <Typography>elastická poptávka</Typography>
      <Typography>Giffenuv efakt, neelasticka popatvka 1% nevim kura nedavam pozor a je mi to u prdele</Typography>
      <Typography>Náklady - v penězích vyjádřena spotřeba výrobních činitelů</Typography>
      <Typography>Implicitní náklady</Typography>
      <Typography>účetní zisk, čistý ekonomický zisk</Typography>
    </div>
  );
}
