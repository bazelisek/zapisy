import DateMark from "@/components/blocks/DateMark";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import { Separator } from "@heroui/react";
import { InlineMath } from "react-katex";

export default function LenzuvZakon() {
  return (
    <div>
      <Typography>
        Zákon říká, že indukovaný proud bude vždy směřovat tak, aby vytvářel
        magnetické pole, které se snaží zabránit změně, která ho vyvolala.
      </Typography>
      <Separator />
      <Typography>
        Proud v obvodu má takový směr, že svým magnetickým polem působí proti
        změně magnetického indukčního toku, která je jeho příčinou.
      </Typography>
      <Typography variant="note">
        Zkráceně, proud působí proti změně, která ho vyvolala
      </Typography>
      <Typography>
        Také se nazývají jako <strong>Foucaltovy proudy</strong>
      </Typography>
      <Separator></Separator>
      <InlineMath math="\phi = B \cdot S \cdot \cos(\alpha)">
        $\phi = B \cdot S \cdot \cos(\alpha)$
      </InlineMath>
      <br />
      <InlineMath math="U_i = (\Delta\phi)/(\Delta t) = (\Delta B*S*cos(\alpha))/(\Delta t)" />
      <DateMark>20.4.2026</DateMark>
      <NoteAccordion summary="Indukčnost cívky">
        <InlineMath math="L=\mu_0 N^2 * S / l"></InlineMath>
        <br></br>
        <InlineMath math="[L] = H (Henry)"></InlineMath>
      </NoteAccordion>
    </div>
  );
}
