import Quest from "../../QuestItem/types/Quest";

interface Topic {
    id: number;
    title:string;
    quests: Quest[]
}

export default Topic