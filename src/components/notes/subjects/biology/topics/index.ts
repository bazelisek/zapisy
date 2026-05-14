import { Topic } from "../..";
import Metabolismus from "./Metabolismus";
import Primati from "./Primáti";
import TraviciSoustava from "./TraviciSoustava";
import VylucovaciSoustava from "./VylucovaciSoustava/Index";

const topics: Topic[] = [
  {
    id: "travici-soustava",
    name: "Travící soustava",
    description: "Jak strávit pratura",
    homepage: TraviciSoustava,
  },
  {
    id: "primati",
    name: "Primáti",
    description: "seš opice",
    homepage: Primati,
  },
  {
    id: "metabolismus",
    name: "Metabolismus",
    description: "Jak se strava mění na energii",
    homepage: Metabolismus,
  },
  {
    id: 'vylucovaci-soustava',
    name: 'Vylučovací soustava',
    description: 'Jak se zbavit odpadů',
    homepage: () => VylucovaciSoustava(),
  }
];

export default topics;
