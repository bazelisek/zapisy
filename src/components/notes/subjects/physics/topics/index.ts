import { Topic } from "../..";
import LenzuvZakon from "./LenzuvZakon";
import StridavyProud from "./StridavyProud";

const topics: Topic[] = [
  {
    id: "lenzuv-zakon",
    name: "Lenzův zákon",
    description:
      "Vencův zákon je fyzikální zákon, který popisuje směr indukovaného proudu v elektrickém obvodu.",
    homepage: LenzuvZakon,
  },
  {
    id: 'stridavy-proud',
    name: 'Střídavý proud',
    description: 'Blud se neumí rozhodnout kterým směrem půjde.',
    homepage: StridavyProud,
  }
];

export default topics;
