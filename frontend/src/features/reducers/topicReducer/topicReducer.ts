// import { stat } from "fs"
import Action from "./types/Action"
import State from "./types/State"

export const init = {
    topics: [],
    score: 0
}

export const topicReducer = (
    state: State = init,
    action: Action
): State => {
    switch (action.type) {
        case 'INIT_TOPIC':
            return {
                ...state,
                topics: action.payload
            }
        case 'SCORE_PLUS':
            console.log(action.payload);
            let switchScore;
            if(action.payload !== 0) {
                switchScore = state.score + action.payload;
            } else {
                switchScore = 0;
            }
            return {
                ...state,
                score: switchScore
            }
        default: return state
    }
}

