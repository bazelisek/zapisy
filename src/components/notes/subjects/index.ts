import { JSX } from "react";
import akpTopics from "./akp/topics";
import biologyTopics from "./biology/topics";
import chemistryTopics from "./chemistry/topics";
import civicsTopics from "./civics/topics";
import czechTopics from "./czech/topics";
import englishTopics from "./english/topics";
import geographyTopics from "./geography/topics";
import germanTopics from "./german/topics";
import historyTopics from "./history/topics";
import informaticsTopics from "./informatics/topics";
import mathTopics from "./math/topics";
import physicsTopics from "./physics/topics";

export type Subject = {
    id: string;
    name: string;
    description: string;
    topics: Topic[];    
};

export type Topic = {
    id: string;
    name: string;
    description?: string;
    homepage: () => JSX.Element;
};

const subjects: Subject[] = [
    {
        id: "math",
        name: "Matematika",
        description: "6*9=42",
        topics: mathTopics,
    },
    {
        id: "biology",
        name: "Biologie",
        description: "Studium živých organismů",
        topics: biologyTopics,
    },
    {
        id: "chemistry",
        name: "Chemie",
        description: "Studium chemických látek a reakcí",
        topics: chemistryTopics,
    },
    {
        id: "civics",
        name: "ZSV",
        description: "Studium společnosti a demokracie",
        topics: civicsTopics,
    },
    {
        id: "czech",
        name: "Čeština",
        description: "Studium českého jazyka a literatury",
        topics: czechTopics,
    },
    {
        id: "english",
        name: "Angličtina",
        description: "Studium anglického jazyka",
        topics: englishTopics,
    },
    {
        id: "geography",
        name: "Zeměpis",
        description: "Studium země a přírodních jevů",
        topics: geographyTopics,
    },
    {
        id: "german",
        name: "Němčina",
        description: "Studium německého jazyka",
        topics: germanTopics,
    },
    {
        id: "history",
        name: "Dějepis",
        description: "Studium historických událostí",
        topics: historyTopics,
    },
    {
        id: "informatics",
        name: "Informatika",
        description: "Studium počítačů a programování",
        topics: informaticsTopics,
    },
    {
        id: "akp",
        name: "AKP",
        description: "Dějepis^2",
        topics: akpTopics,
    },
    {
        id: "physics",
        name: "Fyzika",
        description: "Studium fyzikálních zákonů",
        topics: physicsTopics,
    }
];
export default subjects;
