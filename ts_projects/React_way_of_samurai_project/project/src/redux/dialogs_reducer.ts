import type{InferActionsType} from './redux_store'
const SEND_MESSAGE:string = 'SEND_MESSAGE';
type DiaLogType={
    id:number
    name:string
}
type MessageType={
    id:number
    message:string
}

let initialState={
    dialogs:[
        {id:1,name:'Name1'},
        {id:2,name:'Name2'},
        {id:3,name:'Name3'},
        {id:4,name:'Name4'},
        {id:5,name:'Name5'}
    ] as Array<DiaLogType>,
    messages:[
{id:1,message:"Message1"},
{id:2,message:"Message2"},
{id:3,message:"Message3"},
{id:4,message:"Message4"},
{id:5,message:"Message5"}
    ] as Array<MessageType>
}
export const dialogsReducer =(state=initialState,action:ActionsType):InferActions=>{
    switch(action.type){
       
             case SEND_MESSAGE:
                let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages,{id:6,message:body}]
            }
            default:
                return state;
    }
}
export const actions ={
    sendMessage:(newMessageBody:string)=>({type:"SEND_MESSAGE",newMessageBody} )
}
export type InferActions = typeof initialState
 type ActionsType =InferActionsType<typeof actions>