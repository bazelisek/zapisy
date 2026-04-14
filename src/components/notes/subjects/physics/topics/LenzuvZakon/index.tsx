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
    </div>
  );
}
