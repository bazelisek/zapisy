import { Topic } from "../..";
import Kombinatorika from "./Kombinatorika";
import Pravdepodobnost from "./Pravdepodobnost";

const topics: Topic[] = [
    {
        id: "kombinatorika",
        name: "Kombinatorika",
        description: "Kombinatorika je oblast matematiky, která se zabývá studiem uspořádání a kombinací objektů. Zahrnuje různé techniky a vzorce pro výpočet počtu možných uspořádání nebo kombinací daných objektů.",
        homepage: Kombinatorika,
    },
    {
        id: "pravdepodonost",
        name: "Pravděpodobnost",
        description: "S jakou pravděpodobností Péťa zítra nepřijde do školy?",
        homepage: Pravdepodobnost
    }
];

export default topics;
