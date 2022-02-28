prompt("What is your name?");
prompt("What is their name?")
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n > 70) {
    alert("Your compatibility score is " + n + "%, you should go for it.");
}

if (n > 30 && n <= 70) {
    alert("Your compatibility score is " + n + "%, possible but unlikely.");
}

if (n <= 30) { 
    alert("Your compatibility score is " + n + "%, you should run away.");    
}
