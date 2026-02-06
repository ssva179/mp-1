
    function addition() {
    let numone = document.getElementById('first-number').value;
    let numtwo = document.getElementById('second-number').value;
    numone = Number(numone);
    numtwo = Number(numtwo);
    let result = numone + numtwo;
    let out = document.getElementById("output");
    out.innerHTML=String(result);

    if(result < 0){
        out.style.color = "#a10303";
    }else{
        out.style.color = "white";
    }
}
    function multiplication() {
    let numone = document.getElementById('first-number').value;
    let numtwo = document.getElementById('second-number').value;
    numone = Number(numone);
    numtwo = Number(numtwo);
    let result = numone * numtwo;
    let out = document.getElementById("output");
    out.innerHTML=String(result);

    if(result < 0){
        out.style.color = "#a10303";
    }else{
        out.style.color = "white";
    }
}
    function division() {
    let numone = document.getElementById('first-number').value;
    let numtwo = document.getElementById('second-number').value;
    numone = Number(numone);
    numtwo = Number(numtwo);
    let result = numone / numtwo;
    let out = document.getElementById("output");
    out.innerHTML=String(result);

    if(result < 0){
        out.style.color = "#a10303";
    }else{
        out.style.color = "white";
    }
}
    function subtraction(){
    let numone = document.getElementById('first-number').value;
    let numtwo = document.getElementById('second-number').value;
    numone = Number(numone);
    numtwo = Number(numtwo);
    let result = numone - numtwo;
    let out = document.getElementById("output");
    out.innerHTML=String(result);

    if(result < 0){
        out.style.color = "#a10303";
    }else{
        out.style.color = "white";
    }
}
    function power(){
    let numone = document.getElementById('first-number').value;
    let numtwo = document.getElementById('second-number').value;
    numone = Number(numone);
    numtwo = Number(numtwo);
    let  result = 1;
    for(let i = 1; i <= numtwo; i++){
    result = result*numone;
}
    let out = document.getElementById("output");
    out.innerHTML=String(result);
    if(result < 0){
        out.style.color = "#a10303";
    }else{
        out.style.color = "white";
    }
}
    function clearC(){
    document.getElementById('first-number').value='';
    document.getElementById('second-number').value='';
    document.getElementById("output").innerHTML='';
}


