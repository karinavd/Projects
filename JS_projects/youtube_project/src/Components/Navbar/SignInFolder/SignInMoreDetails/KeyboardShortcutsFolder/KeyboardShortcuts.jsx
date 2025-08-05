import styles from './KeyboardShortcutsFolder.module.css'
import React from 'react'
import dataJson from './KeyboardShortcuts.json'
const KeyboardShortcuts = () => {
    return (
    <div>
        {
            Object.entries(dataJson).map(([category,shortcuts])=>
            <div key={category}  className="categorySection">
<h3>{category}</h3>
<div className="shortcutsList">
    {
       shortcuts.map((shortcut,i)=>(
      <p key={i}>{shortcut.name}</p>  
    ))
    }
</div>
            </div>
            )
        }
        {}</div>
  )
}

export default KeyboardShortcuts