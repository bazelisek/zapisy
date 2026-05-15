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
      <List label="Bundesländer - 9">
        <L>Burgenland - Eisenstadt </L>
        <L>Kärnten (korutany) - Klagenfurt (celovec)</L>
        <L>Niederösterreich - Sankt Pölten</L>
        <L>Wien - Wien</L>
        <L>Oberösterreich - Linz</L>
        <L>Salzburg - Salzburg</L>
        <L>Steiermark (Štýrsko) - Graz</L>
        <L>Tirol - Innsbruck</L>
        <L>Vorarlberg - Bregenz</L>
      </List>
      <List label="Politisches System">
        <L>Die republik \Osterreich ist eine neutrale, parlamentarisch-demokratische Bundesrepublik.</L>
        <L>das Staatsoberhaupt ist derr Bundespräzident. Er wird von der Bürgern für sechs Jahre gewählt. Die Teilnahme an der Präsidentenwahl ist obligatorisch. Derselbe Präsident kann nur noch einmal gewählt werden - <strong>Alexander Van der Bellen</strong>. </L>
        <L>Die Bundesregiereung - and der Spitze der Regierung steht der Bundeskänzler. Die regierung hat 4 Jahre im Amt. Der Bundeskanzler heisst <strong>Christian Stocker</strong>.</L>
        <L>Der Bunderparlament besteht aus 2 Kammern - Nationalrat, Bundesrat</L>
        <L>Der Bundesgerichtshof</L>
        <L>Das Wahlrecht hatte alle Bürger als 19 Jahren</L>
      </List>
      <List label="Politische Parteien">
        <L>SPÖ - Sozialdemokratische Partei Österreichs</L>
        <L>ÖVP - Österreicheische Volkspartei</L>
        <L>Die Grünen - Grüne Alternative</L>
        <L>FPÖ - Freiheitliche Partei Österreichs</L>
      </List>
      <List label="Staatsymbole">
        <L>die Flagge - drei waagrechte Streiffen, rot-weiß-rot</L>
        <L>das Wappen - es bildet das schwarzgraue gekrönte Adlerweibchen mit roter Zunge.</L>
      </List>
      <List label="Währung">
        <L>die Euro, der Cent</L>
      </List>
      <List label="Volkswirtschaft">
        <L l label="Bodenschätze">
          <L>Salz</L>
          <L>Erdöl, Erdgas</L>
          <L>Eisenerz</L>
          <L>Braunkohle</L>
        </L>
        <L l label="Industriezweige">
          <L>Maschinenbau</L>
          <L>Hüttenwesen</L>
          <L>Elektroindustrie</L>
          <L>Chemieindustrie</L>
          <L>Textilindustrie</L>
          <L>Holzindustrie</L>
          <L>Papierindustrie</L>
          <L>Glas- und Porzellanerzeugung</L>
          <L>Nahrungsmittelindustrie</L>
          <L>Fremdenverkehr</L>
        </L>
        <L l label="Landwirtschaft">
          <L>Getreide</L>
          <L>Mais</L>
          <L>Obst</L>
          <L>Kartoffeln</L>
          <L>Zückerrüben</L>
          <L>Wein</L>
          <L>Fortswirtschaft</L>
          <L>Viehzucht</L>
        </L>
      </List>
    </div>
  );
}
