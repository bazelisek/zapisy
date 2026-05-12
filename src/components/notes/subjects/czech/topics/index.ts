import { Topic } from "../..";
import MUS20s from "./MUS20s";
import SvetovaLiteratura from "./SvetovaLiteratura1pol20st";
import Uvaha from "./Uvaha";

const topics: Topic[] = [
    {
        name: 'Moderní umělecké směry 20. století',
        id: "mus20s",
        homepage: MUS20s,
        description: "kuraaa dalsi zvasty"
    },
    {
        name: 'Úvaha',
        id: "uvaha",
        homepage: Uvaha,
        description: "kuraaa dalsi zvasty"
    },
    {
        name: 'Světová literatura 1. poloviny 20. století',
        id: "svetova-literatura",
        homepage: SvetovaLiteratura,
        description: "kuraaa dalsi zvasty"
    }
];

export default topics;
