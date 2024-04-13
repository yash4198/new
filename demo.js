

let inc=document.getElementById("a1");

let res=document.getElementById("res");

let dec=document.getElementById("dec");

let label=document.getElementById("label");

let r=0;

inc.onclick=function(){
    r++;
 label.textContent=r;
}


res.onclick=function(){
    r=0;
 label.textContent=r;
}


dec.onclick=function(){
    r--;
 label.textContent=r;
}
