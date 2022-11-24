import { combineReducers, createStore } from "redux";
import { topicReducer } from "./topicReducer/topicReducer";

const store = createStore(
    combineReducers({
        topicState: topicReducer,
        // userState: userReducer
    })
)
export default store
export type RootState = ReturnType<typeof store.getState>;