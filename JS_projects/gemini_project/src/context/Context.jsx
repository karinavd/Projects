import { createContext, useCallback, useState } from "react";
import mainRun from "../config/gemini"
export const Context = createContext();
const ContextProvider = (props)=>{
    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showRes,setShowRes] = useState(false)
    const [loading,setLoading] = useState(false);
    const [resData,setResData] = useState("");

const delayPara = (index,nextWord)=>{
setTimeout(function(){
setResData(prev=>prev+nextWord)
},75*index)
}
const newChat=()=>{
     setLoading(false)
    setShowRes(false)
}


    const onSent = async (prompt)=>{



    setResData("")
    setLoading(true)
   
    setShowRes(true)

    let responseVariable;
    if(prompt!==undefined){
responseVariable=await mainRun(prompt)
setRecentPrompt(prompt)
    }
    else{
 setPrevPrompts(x=>[...x,input])
  setRecentPrompt(input)
   responseVariable =  await mainRun(input)
    }
   
       
       let responseArr = responseVariable.split("**")
       let newArr="";
       for(let i=0;i<responseArr.length;i++){
        if(i===0||i%2!==1){
           newArr+= responseArr[i]
        }
        else{
            newArr+="<b>"+responseArr[i]+"</b>"
        }
       }
       let arr = newArr.split("*").join("<br/>")
       let arrRes=arr.split(" ");
    //    arrRes.forEach((x,index)=>{
       
    //    })
       for(let i=0;i<arrRes.length;i++){
 delayPara(i,arrRes[i]+" ")
       }
       
       setResData(arr)
       setLoading(false)
       setInput("")

    }
    const contextValue= {
prevPrompts,
setPrevPrompts,
onSent,
recentPrompt,
setRecentPrompt,
showRes,
loading,
resData,
input,
setInput,
newChat
    }
    return (
        <Context.Provider value={contextValue}>
{props.children}
        </Context.Provider>
    )
}
export default ContextProvider;

