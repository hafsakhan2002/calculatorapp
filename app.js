function cal(num){
    var cal = document.getElementById("calinput");
    cal.value +=(num)
    cal.className=(" calinput")

}

function inpclear(){
    var inpClear = document.getElementById("calinput")
    inpClear.value =" "
    inpClear.className=(" calinput")
}


function inpResult(){
    var inpResult = document.getElementById("calinput")
    inpResult.className= (" calinputResult")
    if(inpResult.value===""){
        inpResult.value="0"      
    }
    else{
        inpResult.value=eval(inpResult.value)
    }


}
function remove(){
    var remove = document.getElementById("calinput")
    remove.value= remove.value.slice(0, - 1)
    remove.className= (" calinput")
}

function dec(){
    var dec = document.getElementById("calinput")
    dec.value+="."
    dec.className=(" calinput")
} 