import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { InlineMath } from "react-katex";

export default function Alkadieny() {
  return (
    <div className="space-y-6">
      <Typography level="h2">Alkadieny</Typography>

      <Typography>
        Obecný příklad:
      </Typography>

      <InlineMath math="CH_2 = CH - CH = CH_2" />

      <List variant="ol">
        <L>
          <strong>Konjugované</strong> – nejstabilnější
          <InlineMath math="\dots - C = C - C = C - \dots" />
          Příklad:
          <InlineMath math="CH_3 - CH = CH - CH = CH - CH_3" />
        </L>

        <L>
          <strong>Izolované</strong> – dvojné vazby jsou oddělené více než
          jednou jednoduchou vazbou
          <InlineMath math="CH_2 = CH - CH_2 - CH_2 - CH = CH_2" />
        </L>

        <L>
          <strong>Kumulované</strong> – dvojné vazby vedle sebe
          <InlineMath math="CH_3 - CH = C = CH - CH_3" />
          Jsou velmi nestabilní.
        </L>
      </List>

      <div className="space-y-4">
        <Typography level="h3">Reakce</Typography>

        <List>
          <L>
            <strong>Dehydrogenace:</strong>
            <InlineMath math="CH_2 = CH - CH_2 - CH_3 \xrightarrow{t} CH_2 = CH - CH = CH_2 + H_2" />
          </L>

          <L l label="Adice">
            <L>
              <strong>1,2-adice chloru:</strong>
              <InlineMath math="CH_2 = CH - CH = CH_2 + Cl_2 \xrightarrow[-50^\circ C]{UV} CH_2Cl - CHCl - CH = CH_2" />
            </L>

            <L>
              <strong>1,4-adice chloru:</strong>
              <InlineMath math="CH_2 = CH - CH = CH_2 + Cl_2 \xrightarrow[+50^\circ C]{UV} CH_2Cl - CH = CH - CH_2Cl" />
            </L>

            <L>
                <InlineMath math="CH_2 = CH - CH = CH_2 + HBr \xrightarrow CH_3 - CHBr - CH = CH_2 " />(podle markovnikova pravidla)<br/>
                <InlineMath math="CH_2 = CH - CH = CH_2 + HBr \xrightarrow CH_2Br - CH_2 - CH = CH_2 " />(radikalove (proti pravidlu))
            </L>
          </L>
          <L label="Polymerace">
            <L><InlineMath math="n \cdot CH_2 = CH - CH = CH_2 \xrightarrow{initiator} [-CH_2 - CH = CH - CH_2 -]_n" /></L>
          </L>
        </List>
      </div>
    </div>
  );
}