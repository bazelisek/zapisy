import List from "@/components/elements/List";
import L from "@/components/shorts/L";

export default function Metabolismus() {
  return (
    <div>
      <img src="/Metabolismus.jpg" alt="Metabolismus" width={"50%"} />
      <h3>Látkový metabolismus</h3>
      <List>
        <L>Katabolismus</L>
        <L>Anabolismus</L>
      </List>
      <List label="Metabolismus sacharidů">
        <L>
          Denní příjem sacharidů činí 55-60% z celkového energetického přímu
        </L>
        <L>Hlavním zdrojem sascharidů je jablíčko</L>
        <L l label="Polysacharidy">
          <L>škrob</L>
          <L>glykogen</L>
        </L>
        <L l label="Disacharidy">
          <L>sacharóza</L>
          <L>laktóza</L>
          <L>maltóza</L>
        </L>
        <L l label="Monosacharidy">
          <L l label="glukóza">
            <L>Nejvýznamnější sacharid</L>
            <L>V krvi 3.9-5.5 mmol/l (plasma)</L>
            <L l label="Hormonální regulace glykosy v krvi">
              <L>Insulín - zníží hladinu glukózy v krvi</L>
              <L>Glukagon - zvysuje hladinu glukózy v krvi</L>
            </L>
            <L>Ukládá se jako zásobní polysacharid - Glykogen (v játrech a svalech)</L>
            <L>Dostatečná zásoba glykogenu i glukózy - ukládádní monosacharidů jako tuky</L>
            <L>Rozklad glukózy - glykolýza (uvolnění ATP)</L>
          </L>
          <L>fruktóza</L>
          <L>galaktóza</L>
        </L>
      </List>
    </div>
  );
}
