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
          <L>Spíše než kronikářem je analytickám pozorovatelem, schopný zachytit atmosféru života privilegované pařížské smetánky ve čtvrti Saint-Germain</L>
          <L>Chtěl aby román vyjadřoval život jako vnitřní intelektuální a estetické dobrodružství</L>
        </List>
        <List label="Hledání ztraceného času">
            <L>Pracuje s bergsonovským pojetím času</L>
            <L>Románový čas neplyne jednosměrně, jakoby loudí v labyrintech hrdinovy paměti</L>
            <L>Románový cyklus, 7 dílů</L>
            <L>Svět Swannových</L>
            <L>Druhý díl vzbudil pozornost</L>
            <L>Poslední tři posmrtně</L>
            <L>Cyklická kompozice</L>
            <L>Proud vědoomí</L>
            <L>Reálná rovina - odbočky do minulosti - vědomí dalších postav - technika introspekce</L>
            <L>Na M.P. navazují J.P. Satre, Alain Robbe-Grillet</L>
            <L>Eseje - možnost nahlédnout do tvůrčí metody</L>
            <L>Téma homosexuality má autobiografický základ</L>
            <L>Klíčová témata - funkce paměti, sebreflexe, vztah ke společnosti</L>
        </List>
      </NoteAccordion>
      <NoteAccordion summary="James Joyce"></NoteAccordion>
    </div>
  );
}
