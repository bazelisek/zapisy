import DateMark from "@/components/blocks/DateMark";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";

export default function Primati() {
  return (
    <div>
      <DateMark>16.4.2026</DateMark>
      <Typography>
        Linie vedoucí k primátům vznikla asi před 80 miliony lety(konec křídy,
        druhohor)
      </Typography>
      <Typography>
        <strong>Lidoopi</strong> vznikli až v době před 23-5mil. let - v tomto
        období dochází k hominizaci = soubor změn, které vedly ke změnám ve
        stavbě kostry
      </Typography>
      <NoteAccordion summary="Antropologie">
        <Typography>
          Věda o člověku - zkoumá tělesné, psychické, sociální i kulturní
          vlastnosti v čase a prostoru
        </Typography>
      </NoteAccordion>
      <NoteAccordion summary="Bipedie">
        <Typography>
          Chůze po dvou - vedla k dvojesovitému prohnutí páteře, rozšíření
          pánve, zmohutnění spodních dvou končetin, změna struktury páteře
        </Typography>
        <Typography>
          Chůze po dvou šetří energii na dlouhé vzdálenosti, ale je pomalejší
          než čtyřnohá chůze.
        </Typography>
      </NoteAccordion>
      <NoteAccordion summary="Hominizace">
        <Typography>
          Změny ve stavbě kostry, které vedly k vzniku lidoopů a později lidí
        </Typography>
        <Typography>
          Zahrnuje změny jako bipedie, zvětšení mozkové části, zmenšení
          obličejové části, chrupu, ztráta ochlupení.
        </Typography>
      </NoteAccordion>
    </div>
  );
}
