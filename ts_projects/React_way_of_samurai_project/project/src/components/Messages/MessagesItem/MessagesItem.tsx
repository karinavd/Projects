import React from 'react'
import { NavLink } from 'react-router-dom'

type ComponentType ={
    name:string
    id:number
}
const MessagesItem:React.FC<ComponentType> = ({name,id}) => {
   let path= '/dialogs/'+{id}
    return (
   
    <div>
        <p>{name}</p>
        <p>{id}</p>
<NavLink to={path}>{name}</NavLink>
    </div>
  )
}

export default MessagesItem