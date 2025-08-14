import { configureStore } from '@reduxjs/toolkit'
import { dialogsReducer } from './dialogs_reducer'
import { profileReducer } from './profile_reducer'
import { combineReducers } from "redux"
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})
let store = configureStore({
    reducer: reducers
})
declare global {
    interface Window {
        store: typeof store
    }
}
type ReducersType= typeof reducers
export type AppStateType = ReturnType<ReducersType>
export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;





window.store = store;
export default store;