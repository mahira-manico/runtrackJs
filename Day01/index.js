
//window.alert("This is an alert!"); //pop up alert
//console.log("omo"); //display in console
//console.log("i love chocolate!");

//document.getElementById("MyH1").textContent="hello"; //display content in page
//document.getElementById("myP").textContent="I love pizza";

//let age=25;
//let price=10.99;
//let firstName="Mahira";

//console.log(typeof firstName)
//console.log(price);
//console.log(age);

//console.log(`You are ${age} years old`);
//console.log(`The price is ${price}$`);
//console.log(`Your name is ${firstName}`);

function bisextile(year){
    if(year%400==0){ //check the most specific condition first
        console.log(`${year} is bisextile`) 
    } else if(year%100==0){
        console.log(`${year} is not bisextile`)
    } else if(year%4==0){
        console.log(`${year} is bisextile`)
    } else{
        console.log(`${year} is not bisextile`)
    }

}

//let result=bisextile(2000);

function displayDayByWeek(){ 
    let daysWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] 
    for(let i=0;i<daysWeek.length;i++){  //use i to loop until the end of the list
        console.log(daysWeek[i]) //display each loop using i
    }
}

//let display=displayDayByWeek()

function fizzbuzz(){
   for(let i=1;i<152;i++){//display numbers first
    if(i%3==0&&i%5==0){ //most uncommon condition first
        console.log("FizzBuzz")
    } else if(i%3==0){
        console.log("Fizz")
    } else if(i%5==0){
        console.log("Buzz")
    } else{
        console.log(i)
    }
   }
}

//let display=fizzbuzz()