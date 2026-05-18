import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { InlineMath } from "react-katex";

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
            <L>
              Ukládá se jako zásobní polysacharid - Glykogen (v játrech a
              svalech)
            </L>
            <L>
              Dostatečná zásoba glykogenu i glukózy - ukládádní monosacharidů
              jako tuky
            </L>
            <L>Rozklad glukózy - glykolýza (uvolnění ATP)</L>
          </L>
          <L>fruktóza</L>
          <L>galaktóza</L>
        </L>
      </List>
      <List label="Metabolismus tuků">
        <L>Význam: Zdroj energie, membrány, ochrana, izolace, neurony</L>
        <L>
          Lipidy přijímáme ve formě triacylglycerolů a volných mastných kyselin
        </L>
        <L l label="mastné kyseliny">
          <L>
            Nasycené mastné kyseliny obsahují jen jednoduché vazby, nenasycené
            ne
          </L>
          <L>
            Nasycené - zdroje z živočišných produktů, kokosový, palmový,
            palmojádrový olej
          </L>
          <L>Nenasycené - např ořechy atd.</L>
          <L>Omega 3 - proti zánětlivým reakcím</L>
          <L>Omega 6 - pro zánětlivé reakce</L>
          <L>Měly by být v poměru 1:2-1:6</L>
        </L>
        <L l label="Trávení lipidů">
          <L>Lipázy</L>
          <L>Začíná v žaludku -&gt; tenké střevo</L>
          <L>Štěpení na MK a glycerol</L>
          <L>
            <Typography variant="note">
              <InlineMath math="\Beta"></InlineMath> oxidace
            </Typography>
          </L>
        </L>
      </List>
      <List label="Metabolismus bílkovin">
        <L l label="Funkce">
          <L>Stavební a strukturní</L>
          <L>Katalytická a řídící (enzymy a hormony)</L>
          <L>Obranná a imunitní</L>
          <L>Transportní a skladovací</L>
          <L>Pohybová (kontraktilní)</L>
          <L>Energetická</L>
        </L>
        <L l label="Aminokyseliny">
          <L l label="Proteosyntéza">
            <L>Obnova a růst tkání</L>
            <L>Tvorba enzymů a hormonů</L>
            <L>Tvorba protilatek</L>
          </L>
          <L>Tvorba nebílkovinných složek (glukóza, neurotransmiterů)</L>
          <L>Nadbytečné aminokyseliny - deaminace - tvorba močoviny</L>
        </L>
        <L l label="Trávení proteinů">
          <L>Peptidázy, proteázy</L>
        </L>
      </List>
    </div>
  );
}
