function copy(){
    let cpy=document.getElementById('pass').value;
    if(cpy.length>0){
        navigator.clipboard.writeText(cpy);
        alert("You Copied Password: "+cpy);
    }
    else alert("Please Generate Password First before Coping It.");
    password="";
    document.getElementById('pass').value="";
    document.getElementById('pass').style.fontWeight=100;
}

function show(){
    document.getElementById('lenpass').innerText="Password Length: "+document.getElementById('slidebar').value;
}

function getconstrains(){
    let length=document.getElementById('slidebar').value;
    let upp=0,lower=0,num=0,symbol=0;
    if(document.getElementById('upper').checked){
        upp++;
        length--;
    }
    if(document.getElementById('lower').checked){
        lower++;
        length--;
    }
    if(document.getElementById('numbers').checked){
        num++;
        length--;
    }
    if(document.getElementById('symbols').checked){
        symbol++;
        length--;
    }
    
    if(upp>0 && length>0){
        upp=(Math.floor((Math.random()*length)+1))+1;
        length-=(upp-1);
    }
    if(lower>0 && length>0){
        lower=(Math.floor((Math.random()*length)+1))+1;
        length-=(lower-1);
    }
    if(num>0 && length>0){
        num=(Math.floor((Math.random()*length)+1))+1;
        length-=(num-1);
    }
    if(symbol>0 && length>0){
        symbol=(Math.floor((Math.random()*length)+1))+1;
        length-=(symbol-1);
    }
    
    if(length>0){
        if(document.getElementById('upper').checked) upp+=length;
        else if(document.getElementById('lower').checked) lower+=length;
        else if(document.getElementById('numbers').checked) num+=length;
        else if(document.getElementById('symbols').checked) symbol+=length;
    }

    let upchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowchar="abcdefghijklmnopqrstuvwxyz";
    let sym="~!@#$%^&*";

    let password="";
    for(let i=0; i<upp; i++){
        let idx=Math.floor(Math.random()*26);
        password+=upchar.charAt(idx);
    }
    for(let i=0; i<lower; i++){
        let idx=Math.floor(Math.random()*26);
        password+=lowchar.charAt(idx);
    }
    for(let i=0; i<symbol; i++){
        let idx=Math.floor(Math.random()*9);
        password+=sym.charAt(idx);
    }
    for(let i=0; i<num; i++){
        let idx=Math.floor(Math.random()*10);
        password+=idx;
    }

    if(password.length>0){
        document.getElementById('pass').value=password;
        document.getElementById('pass').style.fontWeight=700;
    }
    else alert("Please Select atleast one constraints to Generate Password.");
}
