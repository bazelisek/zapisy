import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { InlineMath } from "react-katex";

export default function Pravdepodobnost() {
  return (
    <div>
      <Typography>
        Pravděpodobnost (pst) náhodného jevu je reálné číslo z {"<0,1>"}, které
        vyjadřuje míru možnosti, že tento jev nastane
      </Typography>
      <InlineMath math="P(A), P(\emptyset) = 0, P(\Omega) = 1"></InlineMath>
      <Typography>3 způsoby</Typography>
      <List label="Způsoby">
        <L>
          Klasická definice pravděpodobnosti, výsledky jsou stejně možné,
          navzájem se vylučují - P(A) = m/n, m = počet výsledků přiřazených jevu
          A, n - celkovy pocet
        </L>
        <L>
          <InlineMath math="\Omega" /> ...nekonečná Vytváří ohraničenou a
          uzavřenou oblast{" "}
          <InlineMath math="|\Omega|,  P(A)=\frac{|A|}{|\Omega|}" /> (Proste
          pomer obsahu)
        </L>
        <L>
          Pokud máme obecnou kostku, tak nekonečným počtem hodů získáme
          pravděpodobnost jednotlivých prvků - v realitě se tedy blíží -{" "}
          <InlineMath math="P(A) \approx \frac{m}{n}" />, kde m je počet příznivých jevu A, n
          počet opakování
        </L>
      </List>
    </div>
  );
}
