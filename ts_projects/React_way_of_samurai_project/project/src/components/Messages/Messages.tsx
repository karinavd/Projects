import type { InferActions } from '../../redux/dialogs_reducer'
import styles from './Messages.module.css'
import React from 'react'
import MessagesItem from './MessagesItem/MessagesItem'
import Message from './Message/Message'

type PropsType={
  dialogsPage: InferActions
  sendMessage: (messageText:string) => void
}


const Messages :React.FC<PropsType>=(props)=>{
let state = props.dialogsPage;

let dialogsElements = state.dialogs.map(d=><MessagesItem name={d.name} key={d.id} id={d.id}/>)
let messagesElements = state.messages.map(d=><Message message={d.message} key={d.id}/>)


return <>
<div className={styles.dialogsItem}>
  {dialogsElements}
</div>
<div className="messages">
  {messagesElements}
</div>
</>
}

export default Messages