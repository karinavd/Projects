import type { InitialEntry } from "react-router-dom"
import type { InferActionsType } from "./redux_store"

type MessageType = {
    id: number,
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        { id: 1, message: "1", likesCount: 1 },
        { id: 2, message: "2", likesCount: 2 },
        { id: 3, message: "3", likesCount: 3 },
        { id: 4, message: "4", likesCount: 4 },
        { id: 5, message: "5", likesCount: 5 }
    ] as Array<MessageType>
}
export const profileReducer = (state = initialState, action: ActionsType): InferActions => {
    switch (action.type) {
        case "ADD_POST": {
            let newPost = { id: 6, message: action.newPostText, likesCount: 0 }
            return {
                ...state,
                posts: [...state.posts, newPost]

            }

        }
        default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: "ADD_POST", newPostText })
}
type ActionsType = InferActionsType<typeof actions>
 type InferActions = typeof initialState