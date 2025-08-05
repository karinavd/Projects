import { useEffect,useState } from "react";
import React from 'react'
import styles from "./LanguageList.module.css"
const LanguageList = () => {
    const [loading,setLoading]=useState(false)
    const [languagesList,setLanguagesList]=useState([]);
    useEffect(()=>{
 const loadingDataFunction=async()=>{
try{
 const API_KEY = 'AIzaSyDabsKlo3FEo_-8Wf-W8pqljeQbFdyJFIw';
 const response =await fetch(`https://www.googleapis.com/youtube/v3/i18nLanguages?part=snippet&key=${API_KEY}`)
 const data = await response.json()

 if(data.items){

    console.log(data.items)
    setLanguagesList(data.items.map(i=>({
       code: i.snippet.hl,
            name: i.snippet.name
    })))
 }
}


catch(e){
    console.log(e)
}
finally{
    setLoading(false)
}
    }
    loadingDataFunction();
    },[])
   
  return (<div>
   {loading&& <div>Loading...</div>}
   <div className={styles.loadingListLanguageSection}>
   {languagesList.map(i=>(
  <div className={styles.languageSection} key={i.code}>
        <p>{i.name}</p>
    </div>
    ))}
  
   </div>
    </div>
  )
}

export default LanguageList