import DateMark from "@/components/blocks/DateMark";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

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
      <Typography variant="note">Chybějící zápis</Typography>
      <DateMark>7.5.2026</DateMark>
      <Typography level="h3">Vývoj rodu Homo</Typography>
      <NoteAccordion summary="Homo erectus">
        <Typography>
          U lidoopů se zvětšila mozková část lebky, zkracování obličejové části,
          dlouhé spodní končetiny - naplno využíval chůzi po dvou
        </Typography>
      </NoteAccordion>
      <NoteAccordion summary="Homo heidelbergensis">
        Prvni clovek na ceskem uzemi - zil v asii, africe a evrope
      </NoteAccordion>
      <NoteAccordion summary="člověk neandrtálský">
        <L l>
          <L>
            Vyvinuli se asi před 150 - 200 tis. lety z evropské formy člověka
            heidelberského
          </L>
          <L>
            Žili ve velmi drsnýc podmínkách v době ledové, vytvořili vyspělou
            kulturu
          </L>
          <L>Pravdepodobne slepa vyvojova vetev - vytlaceni homo sapiens</L>
          <L>Velký mozek</L>
          <L>Vydutá mozkovna - obrovský mozek</L>
          <L>Velke nadočnicové oblouky</L>
          <L>
            Podsaditá postava s velkými klouby a mohutnými spodními končetinami
            cožmu v době ledové pomáhalo šetřit teplo
          </L>
          <L>Jeskyně šipka</L>
          <L>Jeskyně kůlna</L>
          <L>Jeskyně Švédův důl</L>
        </L>
      </NoteAccordion>
      <NoteAccordion summary="homo sapiens">
        <L l>
          <L>Existuje asi 200 tisíc let</L>
          <L>Vyvinul se z člověka heidelberského</L>
          <L>Přiblžně před 120-130 tisíci lety se dostal do Asie z afriky</L>
          <L>Do Austrálie před 50-60tis lety</L>
          <L>Do evropy před 85 tis</L>
          <L>Do ameriky před 15-16tis lety</L>
          <L>Jeskyně pekárna v ČR</L>
        </L>
      </NoteAccordion>
    </div>
  );
}
