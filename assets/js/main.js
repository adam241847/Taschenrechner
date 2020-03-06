

function getNumber(x){
    document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+x
}
function clearResult(){
    document.getElementById("result").innerHTML="";
}
function rechnen(){
    console.log(eval(document.getElementById("result").innerHTML))
    document.getElementById("result").innerHTML=eval(document.getElementById("result").innerHTML)
}
