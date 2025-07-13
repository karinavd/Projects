let optionsButton = document.querySelectorAll('.option-button');
let advanceOptionsButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fonts');
let fontSize = document.getElementById('fontSize');
let linkButton = document.getElementById('createLink');
let areaWriting = document.getElementById('text-input');
let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelectorAll('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');

let fontList = ["Arial","Verdana","Times New Roman","Garamond","Georgia","Courier New","cursive"]
const initializer=()=>{
highlighter(alignButtons,true);
highlighter(scriptButtons,true);
highlighter(spacingButtons,true);
highlighter(formatButtons,false);
fontList.map((value)=>{
    let option =  document.createElement("option");
    option.value = value;
    option.innerHTML = value;
fontName.appendChild(option)
})
}
const highlighter =(nameButtons,isNeedRemove)=>{
nameButtons.forEach(x=>{
    x.addEventListener("click",()=>{
if(isNeedRemove){
    let alreadyActive = false;
    if(x.classList.contains("active")){
        alreadyActive = true;
    }
    highlightRemover(nameButtons);
    if(!alreadyActive){
        x.classList.add("active");
    }
}
else{
    x.classList.toggle("active");
}
    });
})
}
const highlightRemover=(nameButtons)=>{
nameButtons.forEach(x=>{
    x.classList.remove("active");
})
}


const modifyText=(cmd,defaultUI,value)=>{
document.execCommand(cmd,defaultUI,value);
}
 
optionsButton.forEach(x=>{
    x.addEventListener("click",()=>{
        modifyText(x.id,false,null);
    })
})
advanceOptionsButton.forEach(x=>{
    x.addEventListener("change",()=>{
        modifyText(x.id,false,x.value);
    })
})
    linkButton.addEventListener("click",()=>{
        let userLink = prompt("Enter a URL");
        if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
        }
        else{
            userLink += "http://";
             modifyText(linkButton.id,false,userLink);
        }
    })
initializer();




// function getAverage(arr){
// return arr.reduce((x,curr)=> x+curr)/arr.length;
// }
// function getGrade(score){
//    switch(score){
// case 100:
// return "A+";
// break;
// case score>=90&&score<=99:
// return "A";
// case score>=80&&score<=89:
// return "B";
// case score>=70&&score<=79:
// return "C";
// case score>=60&&score<=69:
// return "D";
// case score>=0&&score<=59:
// return "F";
//   }
// }
// function hasPassingGrade(score){
// return getGrade(score)==="F"?false:true;
// }

// function studentMsg(arr,score){
//   return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You ${hasPassingGrade(score)===true?"passed":"failed"} the course.`
// }
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


let inventory =[];
function findProductIndex(productName){
return inventory.findIndex(x=>x.name.toLowerCase()===productName.toLowerCase());
}

function addProduct(productName){
  const index = findProductIndex(productName.name);
if(index!==-1){
  inventory[index].quantity += productName.quantity;
  console.log(`${productName.name.toLowerCase()} quantity updated`)
}else{
  inventory.push({
name:productName.name.toLowerCase(),
quantity:productName.quantity
  });
  console.log(`${productName.name.toLowerCase()} added to inventory`)
}
}
function removeProduct(productName,quantity){
  let index =findProductIndex(productName);

if(index===-1){
  console.log(`${productName.toLowerCase()} not found`)
}
const product= inventory[index];
if(product.quantity<quantity){
  console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`)
}
product.quantity -=quantity;
if(product.quantity===0){
  inventory.splice(index,1);
  console.log(`Remaining ${product.name} pieces: ${product.quantity}`)
}
else{
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`)
}
}
removeProduct("FLOUR", 5)
