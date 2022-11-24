import Quest from "../../Quest/types/Quest";

interface Topic {
    id: number;
    title:string;
    quest: Quest[]
}

export default Topic