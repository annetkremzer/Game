import Topic from "../../../TopicItem/types/Topic";

type Action = 
|{type:'INIT_TOPIC'; payload: Topic[]}
|{type:'SCORE_PLUS';payload:number}

export default Action;