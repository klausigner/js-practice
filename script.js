let Greeting = ["Hello", "Hallo", "Hola", "Salut", "Ciao", "Namaste"];
document.getElementById("field-text-msg").innerHTML = Greeting;


document.getElementById("field-text-msg").innerHTML = Greeting[1];


let SpanishGreeting = Greeting[2];
document.getElementById("field-text-msg").innerHTML = SpanishGreeting;


let length = Greeting.length;
document.getElementById("field-text-msg").innerHTML = length;


let last = Greeting[Greeting.length -1];
document.getElementById("field-text-msg").innerHTML = last;


Greeting.forEach((item, index, array) => {console.log(item, index, array);});


document.getElementById("field-text-msg").innerHTML = Greeting.toString();


let last1 = Greeting.pop();
document.getElementById("field-text-msg").innerHTML = Greeting;


Greeting.push("Oi");
document.getElementById("field-text-msg").innerHTML = Greeting;


let first1 = Greeting.shift();
document.getElementById("field-text-msg").innerHTML = Greeting;


Greeting.unshift("Bawo");
document.getElementById("field-text-msg").innerHTML = Greeting;


let Language = ["Yoruba", "Deutsche", "Espanol", "Francais", "Italia", "Portugues"];
let GreLan = Greeting.concat(Language);
document.getElementById("field-text-msg").innerHTML = GreLan;


let sliced = Language.slice(1, 3);
document.getElementById("field-text-msg").innerHTML = sliced;


GreLan.sort()
document.getElementById("field-text-msg").innerHTML = GreLan;


GreLan.reverse()
document.getElementById("field-text-msg").innerHTML = GreLan;


let num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = num1.map(multiply);
function multiply(value){
    return value * 1000;
}
document.getElementById("field-text-msg").innerHTML = num2;


let num3 = num2.filter(comp);
    function comp(value){                                                                    
    return value>5000;                                                                                                                                            
}           
document.getElementById("field-text-msg").innerHTML = num3;


let num4 = num3.reduce(sum);
    function sum(total, value){
    return total + value;
} 
document.getElementById("field-text-msg").innerHTML = num4;


let x;
for(x=0; x<10; x++){
    console.log(x);
}


let y=5;
while(y<4){
    console.log(y);
    y++;
}


let z=5;
do {
    console.log(z);
    z++;
}
while(z<10);


let a;
for (a=1; a<=10; a++){
    console.log(a);
    if (a===5)
    break;
}


let b;
for (b=1; b<=10; b++){
    if (b===9)
    continue;
    console.log(b);
}        


let klausBio = {
    name: "Klaus",
    age: 25,
    sex: "Male",
    position: "Striker",
    number: 9,
    club: "Stuttgart",
    nation: "Germany",
    message: function(){
        alert("Have a good season Klaus!");
    },
    get posNum() {
        return this.position + this.number;
    },
    set role(role){
        this.position = role;
        },
}
document.getElementById("field-text-msg").innerHTML = klausBio.name + " is a " + klausBio.position;


let klausStat = new Object();
klausStat.corners = 14;
klausStat.crossing = 15;
klausStat.dribbling = 20;
klausStat.finishing = 16;
klausStat.firstTouch = 19;
klausStat.longShots = 17;
klausStat.technique = 18;
document.getElementById("field-text-msg").innerHTML = klausBio.name + " possesses a dribbling ability of " + klausStat.dribbling;


function kla(pace, acceleration, stamina, agility, balance, strength, jumping){
    this.pace = pace;
    this.acceleration = acceleration;
    this.stamina = stamina;
    this.agility = agility;
    this.balance = balance;
    this.strength = strength;
    this.jumping = jumping;
}
let klausPhy = new kla(19, 20, 15, 18, 17, 13, 12);
document.getElementById("field-text-msg").innerHTML = klausBio.name + " possesses a jumping ability of " + klausPhy.jumping;


document.getElementById("button").onclick = klausBio.message;


document.getElementById("field-text-msg").innerHTML = klausBio.posNum;


klausBio.role = "Attacking Midfielder";
document.getElementById("field-text-msg").innerHTML = klausBio.position;
