let un=document.querySelector("#un");
let p=document.querySelector("#pass");
let bt=document.querySelector("#bt");
let i=document.querySelector("input");

p.addEventListener("change",function () {
    if (un.value.length>0 && p.value.length>0  ) {
        
            bt.removeAttribute("disabled");
        } 
    });
    
    

