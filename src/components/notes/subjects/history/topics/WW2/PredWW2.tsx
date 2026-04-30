import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import { Separator } from "@heroui/react";
import { HandStop } from "@gravity-ui/icons";
import DateMark from "@/components/blocks/DateMark";

export default function PredWW2() {
  return (
    <>
      <h2>Před druhou světovou válkou</h2>
      <Typography>Zapisy na OneNote</Typography>
      <Separator />
      <Typography level="h4">1922: Janov</Typography>
      <Typography>
        Západní mocnosti (VB a FR) se snažily vyřešit otázku německého a ruského
        dluhu (SSSR odmítl uznat předválečné dluhy carského ruska)
      </Typography>
      <Separator></Separator>
      <Typography level="h4">Rapallská smlouva</Typography>
      <Typography>Dokument podepsaný německem a SSSR.</Typography>
      <Typography>
        Vzájemně si odpustili dluhy a navázali spolupráci v hospodářské i
        vojenské oblasti.
      </Typography>
      <Separator></Separator>
      <Typography level="h4">1925: Locarno</Typography>
      <Typography>
        Garance západních hranic německa. Němci ale odmítli garantovat své
        hranice východní, což do budoucna představovalo bezpečnostní problém pro
        ČS. Fr tímto výrazně oslabila své pozice ve střední Evropě.
      </Typography>
      <DateMark>16.4.2026</DateMark>
      <NoteAccordion icon={<HandStop />} summary="Vznik NSDAP a role Hitlera">
        <Typography>
          Hitler se po válce chvilku velmi těžce protloukal, ale poté našel
          zaměstnání v armádní rozvědce. Tam dostal za úkol sledování strany DAP
          (Deutsche Arbeit Partei).
        </Typography>
        <Typography>
          Ta se mu natolik zalíbila, že do ní vstoupil a do roku 1920 v ní
          získal klíčové postavení. Tehdy se přejmenovala na NSDAP.
        </Typography>
        <Separator />
        <Typography>
          V roce 1923 došlo k pokusu o puč, který byl přímo inspirovaný
          Mussolinim. Hitler asi nebyl hlavním hybatelem, ale rozhodně se
          účastnil. Puč byl potlačen, Hitler zatčen.
        </Typography>
        <DateMark>30.4.2026</DateMark>
        <Typography>
          I přes konjunkturu docházelo k značnému zadlužování, které pak bylo
          částečně pokryto z válečné kořisti a majetku zabaveého "nepřátelským
          skupinám obyvatel" (především židů)
        </Typography>
        <Typography>
          Koncentrační tábory vznikly hned v roce 1933 (prvním byl Dachau).
          Spolu s tím byla nacisty zahájena "Očista politického a kulturního
          života". Snaha po širším konsenzu s tradičními elitami (armáda,
          průmyslníci) vedla k eliminaci radikálního křídla NSDAP v podobě SA. V
          roce 1934 proto přišla "noc dlouhých nožů", během které byly
          zlikvidovány mocenské špičky SA i jejich vliv ve straně.
        </Typography>
        <Typography>
          1934 došlo také k úmrtí Hindenburga a Hitler převzal jeho funkci -
          stal se tak vůdcem a absolutním vládcem Německa.
        </Typography>
        <Separator />
        <Typography level="h3">Zahraniční politika</Typography>
        <Typography>
          Cílem bylo získat "Levensraum" na východě a za tím účelem dosáhnout
          revize versaillského systému.
        </Typography>
        <Typography>1935 - zavedení všeobecné branné povinnosti</Typography>
        <Typography>
          1936 - remilitarizace porýní (faktické zrušení Locarna)
        </Typography>
        <Typography>1936 - Spolupráce s Itálií a Japonskem</Typography>
        <Typography level="h3">
          Antisemitická politika
        </Typography>
        <Typography>Vyloučení židů ze státní správy, univerzit, lékařských a právnických komor. To mělo za cíl podporu emigrace. Odcházeli především mladší, vzdělanější a bohatší.</Typography>
      </NoteAccordion>
    </>
  );
}
