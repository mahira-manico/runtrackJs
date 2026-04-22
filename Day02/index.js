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

let textar = document.getElementById("keyloger");
textar.addEventListener("input", function double() {
    let ceQueJeTape = textar.value;
    let doubleTexte = ceQueJeTape + ceQueJeTape;
    console.log(doubleTexte);
});

window.addEventListener("scroll", () => {

    let scrollMax = document.body.scrollHeight - window.innerHeight;
    let pourcentage = (window.scrollY / scrollMax) * 100;

    let footer = document.querySelector("footer");
    footer.style.backgroundColor = `hsl(${pourcentage * 1.2}, 70%, 50%)`;
});






