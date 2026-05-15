import { Topic } from "../..";
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
    }
];

export default topics;
