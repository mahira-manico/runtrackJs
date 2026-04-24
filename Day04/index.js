function show(){
fetch("expression.txt")
.then(response=>response.text())
.then(data=>document.getElementById("p").innerHTML=data)
.catch(error=>console.error(error));
}

function jsonValueKey(jsonString, key){
 
    let parsing=JSON.parse(jsonString);
    let value=parsing[key];
    return value;
}

const test='{ "name":"La Plateforme", "address":"8 rue d Hozier", "city":"Marseille", "nb_staff":"11","creation":"2019"}'

let testing=jsonValueKey(test,"name");
console.log(testing);