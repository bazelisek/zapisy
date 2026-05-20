import { Topic } from "../..";
import CestovniRuch from "./CestovniRuch";
import Demografie from "./Demografie";
import Doprava from "./Doprava";

const topics: Topic[] = [
    {
        name: 'Demografie',
        id: 'demografie',
        homepage: Demografie,
        description: 'Kolik morgošů je v čr'
    },
    {
        name: 'Doprava',
        id: 'doprava',
        homepage: Doprava,
        description: 'Jak morgoš dojde z Paskova do Bludova'
    },
    {
        name: 'Cestovni ruch',
        id: 'cestovni-ruch',
        homepage: CestovniRuch,
        description: 'Jak morgoš cestuje'
    }
];

export default topics;
