import Action from "./types/Action"
import State from "./types/State"

export const init = {
    topics: []
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
        default: return state
    }
}
