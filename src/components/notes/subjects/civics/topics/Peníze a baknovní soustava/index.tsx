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
        <L l label='Centrální banka (čnb)'>
          <L>Regulace množství peněz v oběhu</L>
          <L>Emisní fce (vydává peníze)</L>
          <L>Určuje diskontní sazbu - určujeuvěrové podmínky pro další komerční banky</L>
          <L>Určuje povinnou minimální rezervu</L>
          <L>Obchoduje s vládními dluhopisy (nákup a prodej cenných papírů)</L>
        </L>
        <L l label='Obchodní (komerční) banky'>
          <L>Aktivní - poskytování úvěrů (výnos)(hypoteční, lombardní)</L>
          <L>Pasivní - přijímání vkladů (náklad)(Termínovaný, ...)</L>
          <L>Zprostředkovatelské - Bezhotovostní platební styk</L>
          <L>Depozitní</L>
        </L>
        <L l label='Ostatní specializované peněžní instituce'>
          <L>Uchovatel hodnot</L>
          <L>Prostředník směny</L>
        </L>
      </List>
    </div>
  );
}
