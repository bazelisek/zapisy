import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import Typography from "@/components/elements/Typography";
import { Separator } from "@heroui/react";
import { InlineMath } from "react-katex";

export default function AlkenyAlkyny() {
  return (
    <div>
      <object
        data="/materials/Alkeny_alkyny1.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ minHeight: "900px" }}
      >
        <p>
          <a href="/materials/Alkeny_alkyny1.pdf">Open PDF</a>
        </p>
      </object>
      <DateMark>20.4.2026</DateMark>
      <InlineMath math="CH_4-CH_3-CH_3-CH_4 -> CH_3=CH-CH_2-CH_3 + H2" />
      <br />
      <InlineMath math="CH_4-CH_2OH-CH_3-CH_3-CH_4 -> CH_3-CH=CH-CH_3-CH_3 + H20" />
      <Separator />
      <Typography level="h3">Příprava alkynů</Typography>
      <List label="způsoby">
        <ListItem>
          Dehydrogenace alkenu{" "}
          <InlineMath math="CH_2=CH-CH_3 -> HC\equivC-CH_3" /> Kat. platina
        </ListItem>
        <ListItem>Výroba acetylenu z karbidu vápníku <InlineMath math="CaC_2 + H_2O -> C_2H_2 + CA(OH)_2"/></ListItem>
      </List>
      <Separator></Separator>
      <object
        data="/materials/Alkeny_alkyny2.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ minHeight: "900px" }}
      >
        <p>
          <a href="/materials/Alkeny_alkyny2.pdf">Open PDF</a>
        </p>
      </object>
    </div>
  );
}
