import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

export default function Osterreich() {
  return (
    <div>
      <Typography>
        <strong>Bundesrepublik Österreich</strong>
      </Typography>
      <Typography>
        Lage: Eine kleines Binnenland(vnitrozemská země) in südlichen
        Mitteleuropa
      </Typography>
      <Typography>e Fläche: 84000 km2</Typography>
      <List label={<Typography>e Grenze: </Typography>}>
        <L>im Norden Österreich grenzt am Tschechien und Deutschland</L>
        <L>im Osten Österreich grenzt am Slowakei und Ungarn</L>
        <L>im Süden Österreich grenzt am Slowenien und Italien</L>
        <L>im Westen Österreich grenzt an die Schweiz und Liechtenstein</L>
      </List>
      <List label="Oberfläche (povrch)">
        <L>
          Österreich ist ein Mittel und Hochgebirdsland. 63% der Fläche gebietes
          zu den Ostalpen.
        </L>
        <L>Hohe Tauern (Vysoké Taury - ne Tatry)</L>
        <L>
          s Alpenvorland - Pannonisches Tiefland(panonská nížina), Marchfeld
          (Moravské pole), Wienerbecken (vídeňská pánev)
        </L>
        <L>Der höchste Gipfel heisst Großglockner</L>
      </List>
      <List label="das Gewässer">
        <L l label="Flüsse">
          <L>die Donau</L>
          <L>die Drau</L>
          <L>die Mur</L>
          <L>der Inn</L>
          <L>die Thaya(dyje)</L>
          <L>die March</L>
          <L>die Krems</L>
        </L>
        <L label="Seen">
          <L>Neusiedler See</L>
          <L>Mondsee</L>
          <L>Wörthersee</L>
          <L>Bodensee</L>
        </L>
      </List>
      <List label="Einwohner">
        <L>8,9 Millionen Einwohner</L>
        <L>e Amtsprache ist Deutsch, Österreichischen Deutsch</L>
      </List>
      <List label="Städte" variant="ol">
        <L>Wien (2 Millionen Einwohner) - Hauptstadt</L>
        <L>Graz</L>
        <L>Linz</L>
        <L>Salzburg</L>
        <L>Innsbruck</L>
        <L>Krems</L>
        <L>Sankt Pölten (svatý hypolit)</L>
      </List>
      <List label="Konfession">
        <L>Römisch-katholisch</L>
        <L>Protestantisch</L>
        <L>Islam(moslemisch)</L>
      </List>
    </div>
  );
}
