function getInputValueById(id){
    const value =document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const convertedInnerText = parseFloat(innerText);
    return convertedInnerText;
}

function setInnerTextByIdAndValue(id,value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id,value){
    document.getElementById(id).style.display = value;
   }