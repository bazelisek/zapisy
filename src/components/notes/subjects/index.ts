import { JSX } from "react";
import Math from "./math";
import Biology from "./biology";
import Chemistry from "./chemistry";
import Civics from "./civics";
import Czech from "./czech";
import English from "./english";
import Geography from "./geography";
import German from "./german";
import History from "./history";
import Informatics from "./informatics";
import AKP from "./akp";
import Physics from "./physics";

export type Subject = {
    id: string;
    name: string;
    description: string;
    homepage: () => JSX.Element;
};

const subjects: Subject[] = [
    {
        id: "math",
        name: "Matematika",
        description: "6*9=42",
        homepage: Math,
    },
    {
        id: "biology",
        name: "Biologie",
        description: "Studium živých organismů",
        homepage: Biology,
    },
    {
        id: "chemistry",
        name: "Chemie",
        description: "Studium chemických látek a reakcí",
        homepage: Chemistry,
    },
    {
        id: "civics",
        name: "ZSV",
        description: "Studium společnosti a demokracie",
        homepage: Civics,
    },
    {
        id: "czech",
        name: "Čeština",
        description: "Studium českého jazyka a literatury",
        homepage: Czech,
    },
    {
        id: "english",
        name: "Angličtina",
        description: "Studium anglického jazyka",
        homepage: English,
    },
    {
        id: "geography",
        name: "Zeměpis",
        description: "Studium země a přírodních jevů",
        homepage: Geography,
    },
    {
        id: "german",
        name: "Němčina",
        description: "Studium německého jazyka",
        homepage: German,
    },
    {
        id: "history",
        name: "Dějepis",
        description: "Studium historických událostí",
        homepage: History,
    },
    {
        id: "informatics",
        name: "Informatika",
        description: "Studium počítačů a programování",
        homepage: Informatics,
    },
    {
        id: "akp",
        name: "AKP",
        description: "Dějepis^2",
        homepage: AKP,
    },
    {
        id: "physics",
        name: "Fyzika",
        description: "Studium fyzikálních zákonů",
        homepage: Physics,
    }
];
export default subjects;