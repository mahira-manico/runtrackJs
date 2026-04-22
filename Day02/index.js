function citation(){
    let word=document.getElementById("citation").textContent
    console.log(word)
}

function showhide(){
    let art=document.getElementById("article");
    if(art.style.display=="none"){
        art.style.display="block";
    }else{
        art.style.display="none";
    }

}

let count=0;
let btn=document.getElementById("button");
let display=document.getElementById("counter");
btn.addEventListener("click",function addOne(){
    count++
    display.innerHTML=count;

});

