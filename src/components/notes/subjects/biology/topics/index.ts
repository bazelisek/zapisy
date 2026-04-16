import { Topic } from "../..";
import Primati from "./Primáti";
import TraviciSoustava from "./TraviciSoustava";

const topics: Topic[] = [
    {
        id: 'travici-soustava',
        name: 'Travící soustava',
        description: 'Jak strávit pratura',
        homepage: TraviciSoustava,
   },
   {
        id: 'primati',
        name: 'Primáti',
        description: 'seš opice',
        homepage: Primati,
   }
];

export default topics;
