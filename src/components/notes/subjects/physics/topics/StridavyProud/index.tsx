import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { Separator } from "@heroui/react";
import { InlineMath } from "react-katex";

export default function StridavyProud() {
  return <div>
    <DateMark>6.5.2026</DateMark>
    <List>
        <L>Alternátor/Generátor</L>
        <L>Stator/Rotor</L>
    </List>
    <Typography level="h4">Vzorce:</Typography>
    <Typography><InlineMath math="\Delta \phi = B*S*cos(\alpha)"></InlineMath></Typography>
    <Typography><InlineMath math="\mu = U_m * sin(\alpha)"></InlineMath></Typography>
    <Typography><InlineMath math="\mu = U_m * sin(\omega t + \varphi_0)"></InlineMath></Typography>
    <Typography><InlineMath math="i = I_m * sin(\omega t + \varphi_0)"></InlineMath></Typography>
    <Typography>Příklad...</Typography>
    <Typography><InlineMath math="y = y_m * sin(\omega t)"></InlineMath></Typography>
    <Typography level="h2">Jednoduché obvody střídavého proudu</Typography>
    <NoteAccordion summary="Obvod s rezistorem">
      <img src="/obvod_s_rezistorem.jpg" alt="Obvod s rezistorem" />
      <Separator />
      <img src="/obvod_s_rezistorem_2.jpg" alt="Obvod s rezistorem" />
    </NoteAccordion>
  </div>;
}
