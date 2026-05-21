import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

export default function PenizeABankovniSoustava() {
  return (
    <div>
      <List label="<Typography>Peníze - prostředek směny</Typography>">
        <L>
          Zvláštní druh zboží usnadňující směnu, které je přijímáno ostatními
        </L>
      </List>
      <List label={<Typography>Směna =&gt; dělba práce</Typography>}>
        <L>Naturální směna zboží za zboží - barter (barterový obchod)</L>
        <L l label="Peněžní směna">
          <L>Dělitelnost</L>
          <L>Stejnorodost</L>
          <L>Přenosnost</L>
          <L>Přenosnost</L>
          <L>Vzácnost</L>
          <L>Dokonalá likvidita, nulové transakční náklady</L>
          <L>Dokonalá elasticita, nejsou volně reprodukovatelné</L>
          <L l label="směna">
            <L>Zbožové (komoditní)</L>
            <L>Kovové mince Au, Ag</L>
            <L>Papírové peníze - fiatní peníze (demonetizace)</L>
          </L>
          <L l label="Fce">
            <L>Prostředek směny</L>
            <L>Míra hodnot</L>
            <L>Uchovatel hodnot</L>
          </L>
        </L>
      </List>
      <List label={<Typography>Bankovní soustava</Typography>}>
        <L>Soustava institucí, které se zabývají penězi</L>
        <L l label="Centrální banka (čnb)">
          <L>Regulace množství peněz v oběhu</L>
          <L>Emisní fce (vydává peníze)</L>
          <L>
            Určuje diskontní sazbu - určujeuvěrové podmínky pro další komerční
            banky
          </L>
          <L>Určuje povinnou minimální rezervu</L>
          <L>Obchoduje s vládními dluhopisy (nákup a prodej cenných papírů)</L>
        </L>
        <L l label="Obchodní (komerční) banky">
          <L>Aktivní - poskytování úvěrů (výnos)(hypoteční, lombardní)</L>
          <L>Pasivní - přijímání vkladů (náklad)(Termínovaný, ...)</L>
          <L>Zprostředkovatelské - Bezhotovostní platební styk</L>
          <L>Depozitní</L>
        </L>
        <L l label="Ostatní specializované peněžní instituce">
          <L>Uchovatel hodnot</L>
          <L>Prostředník směny</L>
        </L>
      </List>
      <DateMark>21.5.2026</DateMark>
      <Typography level="h3"> Firmy a jejich druhy</Typography>
      <List label="Podnikání">
        <L>samostatná výdělečná činnost</L>
        <L>na vlastní odpovědnost</L>
        <L>na základě oprávnění nebo obdob způsob</L>
        <L>Soustavně za účelem dosažení zisku</L>
      </List>
      <Typography>Podnikatel &gt; živnostník</Typography>
      <Typography>Živnostenský rejstřík</Typography>
      <Typography>
        Právní prameny - živnostenský zákon, občanský zákoník
      </Typography>
      <List label="Živnost">
        <L l label="Ohlašovací">
          <L>řemeslné</L>
          <L>Vázané</L>
          <L>Volné</L>
        </L>
        <L l label="Koncesované">
          <L>SŠ, VOŠ, VŠ</L>
          <L>Nebo 6 let praxe v oboru</L>
        </L>
        <L l label="Podmínky">
          <L>Obecné - 18 let, svéprávnost, trestní bezúhonnost</L>
          <L>Speciální</L>
        </L>
        <L>Portál občana, ičo, dič</L>
      </List>
      <List label="Druhy">
        <L>Obchodní korporace - druh firmy</L>
        <L>Obchodní družstva</L>
        <L l label="Obchodní společnosti">
          <L>Osobní - v.o.s.</L>
          <L>Smíšené k.s.</L>
          <L>Kapitálové s.r.o.</L>
          <L>Akciové a.s.</L>
        </L>
      </List>
    </div>
  );
}
