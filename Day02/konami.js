let keys={
    "ArrowUp": "up",
    "ArrowDown": "down",
    "ArrowLeft": "left",
    "ArrowRight": "right",
    "a": "a",
    "b": "b"
}

let konamiCode=["up","up","down","down","left","right","left","right","b","a"]
 let keyCounter=0;
document.addEventListener("keydown",checkKonamiCode, false);

function checkKonamiCode(event){
    let keyPressed=keys[event.key];
    console.log(event.key);
    if(keyPressed===konamiCode[keyCounter]){
        keyCounter++;
        if(keyCounter===konamiCode.length){
            console.log("you did it")
            document.body.style.backgroundColor="blue";
            keyCounter=0;
        }

    } else{
        console.log("you failed");
        keyCounter=0;
    }  
}
