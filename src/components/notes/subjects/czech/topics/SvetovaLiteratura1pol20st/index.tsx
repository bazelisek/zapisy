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
      <NoteAccordion summary="Marcel Proust">
        <List label="Hledání ztraceného času">
            <L>Románový cyklus, 7 dílů</L>
            <L>Svět Swannových</L>
            <L>Druhý díl vzbudil pozornost</L>
            <L>Poslední tři posmrtně</L>
            <L>Cyklická kompozice</L>
            <L>Proud vědoomí</L>
            <L>Reálná rovina - odbočky do minulosti - vědomí dalších postav - technika introspekce</L>
            <L>Na M.P. navazují J.P. Satre, Alain Robbe-Grillet</L>
        </List>
      </NoteAccordion>
    </div>
  );
}
