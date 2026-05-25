import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import NoteAccordion from "@/components/elements/NoteAccordion";
import L from "@/components/shorts/L";

export default function SvetovaLiteratura() {
  return (
    <div>
      <h3>Modernismus</h3>
      <List label="Autoři">
        <L>Marcel Proust</L>
        <L>James Joyce</L>
        <L>Virginia Woolfová</L>
      </List>
      <List label="Charakteristika">
        <L>Převaha vnitřních dějů nad vnějšími</L>
        <L>Experimentování s časem - prolínání časových rovin</L>
        <L>Prolínání pásma vypravěče s pásmem postav</L>
      </List>
      <DateMark>19.5.2026</DateMark>
      <NoteAccordion summary="Marcel Proust">
        <List>
          <L>Ve své době novinářský přístup</L>
          <L>Nechtěl román jako vnější vyprávění nebo kroniku</L>
          <L>
            Spíše než kronikářem je analytickám pozorovatelem, schopný zachytit
            atmosféru života privilegované pařížské smetánky ve čtvrti
            Saint-Germain
          </L>
          <L>
            Chtěl aby román vyjadřoval život jako vnitřní intelektuální a
            estetické dobrodružství
          </L>
        </List>
        <List label="Hledání ztraceného času">
          <L>Pracuje s bergsonovským pojetím času</L>
          <L>
            Románový čas neplyne jednosměrně, jakoby loudí v labyrintech
            hrdinovy paměti
          </L>
          <L>Románový cyklus, 7 dílů</L>
          <L>Svět Swannových</L>
          <L>Druhý díl vzbudil pozornost</L>
          <L>Poslední tři posmrtně</L>
          <L>Cyklická kompozice</L>
          <L>Proud vědoomí</L>
          <L>
            Reálná rovina - odbočky do minulosti - vědomí dalších postav -
            technika introspekce
          </L>
          <L>Na M.P. navazují J.P. Satre, Alain Robbe-Grillet</L>
          <L>Eseje - možnost nahlédnout do tvůrčí metody</L>
          <L>Téma homosexuality má autobiografický základ</L>
          <L>
            Klíčová témata - funkce paměti, sebreflexe, vztah ke společnosti
          </L>
        </List>
      </NoteAccordion>
      <NoteAccordion summary="James Joyce">
        <List>
          <L>Odysseus, Dubliňané, Portrét umělce v jonšských letech</L>
          <L>
            Odysseus - označen za pornografii, 1933 omhlo vyjít knižně v USA
          </L>
          <L>
            Původně plánován jako jedna povídka Dubliňanů (Jeden den pana Blooma
            v Dublinu)
          </L>
          <L label="Odysseus" l>
            <L>Metoda Odyssea předjímá povídka Nebožtíci z Dubliňanů</L>
            <L>Realistické a naturalistické se kříží s významy symbolikými</L>
            <L>Svět živých se prolíná se světem mrtvých</L>
            <L l label="Časoprostor, postavy">
              <L>Jeden všední den - 16. června 1904, od osmi do dvou v noci</L>
              <L>Dublin, dublinské ulice fungují jako Daidalův labyrint</L>
              <L>
                Štěpán Dedalus (Telemachos) - ztělesňuje intelekt a tvůrčí
                imaginaci, hledáá ztraceného otce - Leopolda
              </L>
              <L>
                Leopold Bloom (Oddyseus) - ztělesňuje průměrného člověka i
                moralitní postavy Kdožkolvěka - hledá ženu - Molly
              </L>
              <L>
                Molly Bloomová - ztělesňuje smyslnost, tělo, tracená (nevěrná) -
                (Penelope)
              </L>
              <L>
                Jejich banální životy jsou konfrontovány se starověkým mýtem
              </L>
              <L>Obraz rozbitého světa, rozbitého vědomí i jazyka</L>
            </L>
            <L>18 kapitol</L>
            <L>
              Jména kapitol podle Homérových hrdinů - každá epizoda (např.
              Telemachus, Próteus, Kalypso, Lotofagové, Hades, Skylla a
              Charybda, Sirény, Kyklop, Nausikaa, Kirké...)
            </L>
            <L>
              Každé epizodě je přiřazen tělesný orán, umění, barva, symbo a
              technika
            </L>
            <L>
              Celý text - tři části - každá psána z jiného úhlu pohledu a jiným
              stylem - označováno za kubistické první a poslední obsahují 3
              epizody, prostřední 12
            </L>
            <L>
              Poznámkový aparát - dotváří strukturu díla, součást význam díla
            </L>
            <L>Zpředmětnění jayka</L>
            <L>Prolínání vysokého a níkého jazyka</L>
            <L>Nejdelší literální popis jednoho dne</L>
            <L>Bloomsday - svátek - 16. června</L>
          </L>
        </List>
      </NoteAccordion>
    </div>
  );
}
