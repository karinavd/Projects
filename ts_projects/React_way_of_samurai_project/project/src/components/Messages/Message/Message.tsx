import React from 'react'

type MessageType={
    message:string
}
const Message:React.FC<MessageType> = ({message}) => {
  return (
    <div>{message}</div>
  )
}

export default Message