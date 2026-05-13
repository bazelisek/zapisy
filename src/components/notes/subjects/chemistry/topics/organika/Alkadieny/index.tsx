import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { InlineMath, BlockMath } from "react-katex";

export default function Alkadieny() {
  return (
    <div className="space-y-6">
      <DateMark>12.5.2026</DateMark>

      <Typography>Obecný příklad:</Typography>

      <BlockMath math="CH_2 = CH - CH = CH_2" />

      <List variant="ol" label="Dělení">
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

        <List label="Druhy reakcí">
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
              <InlineMath math="CH_2 = CH - CH = CH_2 + HBr \xrightarrow CH_3 - CHBr - CH = CH_2 " />
              (podle markovnikova pravidla)
              <br />
              <InlineMath math="CH_2 = CH - CH = CH_2 + HBr \xrightarrow CH_2Br - CH_2 - CH = CH_2 " />
              (radikalove (proti pravidlu))
            </L>
          </L>
          <L l label="Polymerace" variant="ol">
            <L>
              <InlineMath math="n \cdot CH_2 = CH - CH = CH_2 \xrightarrow[]{} [-CH_2 - CH = CH - CH_2 -]_n" />
            </L>
            <L>
              <Typography>
                2-Methylbuta-1,3,-dien{" "}
                <InlineMath math="n \cdot CH_2 = C(CH_3) - CH = CH_2 \xrightarrow[]{} [-CH_2 - C(CH_3) = CH - CH_2 -]_n"></InlineMath>
                <br></br>
                Kaučukovníky (Heveo brasiliensis) - latex -&gt; vulkanizace (treni se sirou)
                <br/>
                <strong>Elastomery</strong> - pružné polymery
              </Typography>
            </L>
          </L>
        </List>
      </div>
    </div>
  );
}
