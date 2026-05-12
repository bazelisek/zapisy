import { Topic } from "../..";
import Alkadieny from "./organika/Alkadieny";
import AlkenyAlkyny from "./organika/AlkenyAlkyny";

const topics: Topic[] = [
    {
        id: "alkeny-alkyny",
        name: 'Alkeny, Alkyny',
        description: "Alkeny a alkyny jsou nasycené uhlovodíky, které obsahují dvojnou nebo trojnou vazbu mezi atomy uhlíku. Alkeny mají obecný vzorec CnH2n, zatímco alkyny mají obecný vzorec CnH2n-2. Tyto sloučeniny jsou důležité v organické chemii a mají různé využití v průmyslu a každodenním životě.",
        homepage: AlkenyAlkyny
    },
    {
        id: "alkadieny",
        name: 'Alkadieny',
        description: "Alkadieny jsou nasycené uhlovodíky, které obsahují dvě dvojnou vazbu mezi atomy uhlíku. Mají obecný vzorec CnH2n-2. Alkadieny jsou důležité v organické chemii a mají různé využití v průmyslu a každodenním životě.",
        homepage: Alkadieny
    }
];

export default topics;
