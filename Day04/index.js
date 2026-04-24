function show(){
fetch("expression.txt")
.then(response=>response.text())
.then(data=>document.getElementById("p").innerHTML=data)
.catch(error=>console.error(error));
}