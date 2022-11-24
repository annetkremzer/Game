import Topic from "../../../Topic/types/Topic";

type Action = 
|{type:'INIT_TOPIC'; payload: Topic[]}

export default Action;