import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

export default function Uvaha() {
  return (
    <div>
      <List
        label={
          <Typography level="h4" variant="note">
            Funkcni styly
          </Typography>
        }
      >
        <L>Umělecký</L>
        <L>Prostě sdělovací</L>
        <L>Odborný - administrativní</L>
        <L>Publicistický</L>
        <L>Řečnický</L>
      </List>
      <List
        label={
          <Typography level="h4" variant="note">
            Slohové postupy
          </Typography>
        }
      >
        <L>Informační</L>
        <L>Popisný</L>
        <L>Vyprávěcí</L>
        <L>Úvahový</L>
      </List>
      <List
        label={
          <Typography level="h4" variant="note">
            Slovotvorní činitelé
          </Typography>
        }
      >
        <L l label="Subjektivní - autor">
          <L>Věk</L>
          <L>Vzdělání</L>
          <L>Pohlaví</L>
          <L>Soc. skupina</L>
        </L>
        <L l label="Objektivní">
          <L>Publikum</L>
          <L>ctenaruv vek, vzdelani</L>
          <L>Psaná / mluvená forma</L>
        </L>
      </List>
      <List>
        <L>Názor</L>
        <L>Argumenty</L>
        <L>Protiargumenty</L>
        <L>Závěr</L>
        <L>Dávat najevo ze premyslim</L>
        <L>Argumenty podkladat na zaklade faktu</L>
        <L>Recnicke otazky - Neplyvat!!!</L>
      </List>
    </div>
  );
}
