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
      <DateMark>29.4.2026</DateMark>
      <Typography variant="note">Příklad</Typography>
      <InlineMath math="I_i = U_i / R = \frac{\frac{\Delta\phi}{\Delta t}}{R} = \frac{\Delta S \cdot B}{\Delta t \cdot R}" />
      <h3>Přechodný děj</h3>
      <Typography>
        Při přechodném ději se mění proud v obvodu, a tím i magnetické pole.
        Indukovaný proud se snaží zabránit této změně.
      </Typography>
      <Separator/>
      <h3>Energie cívky</h3>
      <Typography>V elektrickém obvodu je zdroj elektromotorického napětí sourčasně také zdrojem energie</Typography>
      <InlineMath math="\Delta E = U_e \cdot \Delta t \cdot I"></InlineMath><br/>
      <InlineMath math="U_e + L \frac{\Delta I}{\Delta t} = R \cdot I"></InlineMath><br/>
      <InlineMath math="U_e = - \frac{\Delta \phi}{\Delta t}"></InlineMath><br/>
      <InlineMath math="U_e = \frac{L \Delta I}{\Delta t}"></InlineMath><br/>
      <InlineMath math="E_m = \frac{1}{2} \phi I"></InlineMath><br/>
      <InlineMath math="\phi = L \cdot I"></InlineMath><br/>
      <strong><InlineMath math="E = \frac{1}{2} L I^2"></InlineMath><br/></strong>
      
    </div>
  );
}
