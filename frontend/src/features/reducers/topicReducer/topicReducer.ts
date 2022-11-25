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
            const switchScore = state.score + action.payload
            return {
                ...state,
                score: switchScore
            }
        default: return state
    }
}

