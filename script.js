
let inp=document.querySelector("#input-box");
let btn=document.querySelector("button");
let ul= document.querySelector("ul");

btn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText=inp.value;

    
    let input=document.createElement("input");
    input.type="checkbox";
    input.id="check";

    input.addEventListener("change", function(){
        labelText.style.textDecoration=input.checked?'line-through':'none';
    });
    

    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    //dltBtn.classList.add("remove");

    
    item.appendChild(input);
    item.appendChild(span);
    
    ul.appendChild(item);
    inp.value="";
});


ul.addEventListener("click", function(event){
    console.log(event);
    if(event.target.nodeName=="SPAN"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})