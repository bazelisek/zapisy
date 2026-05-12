import { Topic } from "../..";
import Ekonomie from "./Ekonomie";
import PenizeABankovniSoustava from "./Peníze a baknovní soustava";

const topics: Topic[] = [
    {
        id: 'ekonomie',
        name: 'Ekonomie',
        description: 'Pět peněz, pět peněz',
        homepage: Ekonomie,
    },
    {
        id: 'penize-a-bankovni-soustava',
        name: 'Peníze a bankovní soustava',
        description: 'Pět peněz, pět peněz',
        homepage: PenizeABankovniSoustava,
    }
];

export default topics;
