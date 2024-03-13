let colour = document.querySelector(':root');

function optaion1(){
    colour.style.setProperty('--maincolor', 'hsl(222, 26%, 31%)')
    colour.style.setProperty('--screen', 'hsl(224, 36%, 15%)')
    colour.style.setProperty('--keybadbackground', 'hsl(224, 36%, 22%)')
    colour.style.setProperty('--keybackground', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--keyshadow', ' hsl(224, 28%, 35%)')
    colour.style.setProperty('--togglebackground', ' hsl(6, 63%, 50%)')
    colour.style.setProperty('--toggleshadow', 'hsl(6, 70%, 34%)')
    colour.style.setProperty('--lastkeybackground', 'hsl(222, 26%, 31%)')
    colour.style.setProperty('--lastKeyshadow', 'hsl(28, 16%, 65%)')
    colour.style.setProperty('--textcolor', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--btntextcolor','hsl(221, 14%, 31%)')
    colour.style.setProperty('--keybtnhover', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--btn2background', 'hsl(6, 63%, 50%)')
    colour.style.setProperty('--btn2text', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--btntext', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--screentext','hsl(0, 0%, 100%)')
}

function optaion2(){
    colour.style.setProperty('--maincolor', ' hsl(0, 0%, 90%)')
    colour.style.setProperty('--screen', 'hsl(0, 0%, 93%)')
    colour.style.setProperty('--keybadbackground', ' hsl(0, 5%, 81%)')
    colour.style.setProperty('--keybackground', 'hsl(0, 0%, 90%)')
    colour.style.setProperty('--keyshadow', ' hsl(35, 11%, 61%)')
    colour.style.setProperty('--togglebackground', ' hsl(0, 5%, 81%)')
    colour.style.setProperty('--toggleshadow', ' hsl(25, 99%, 27%)')
    colour.style.setProperty('--lastkeybackground', 'hsl(185, 42%, 37%)')
    colour.style.setProperty('--lastKeyshadow', 'hsl(185, 58%, 25%)')
    colour.style.setProperty('--textcolor', 'hsl(60, 10%, 19%)')
    colour.style.setProperty('--btntextcolor', 'hsl(60, 10%, 19%)')
    colour.style.setProperty('--keybtnhover', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--btn2background', 'hsl(25, 98%, 40%)')
    colour.style.setProperty('--btn2text', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--btntext', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--screentext','hsl(60, 10%, 19%)')
}

function optaion3(){
    colour.style.setProperty('--maincolor', 'hsl(268, 75%, 9%)')
    colour.style.setProperty('--screen', 'hsl(268, 71%, 12%)')
    colour.style.setProperty('--keybadbackground', 'hsl(268, 71%, 12%)')
    colour.style.setProperty('--keybackground', 'hsl(281, 89%, 26%)')
    colour.style.setProperty('--keyshadow', 'hsl(285, 91%, 52%)')
    colour.style.setProperty('--togglebackground', 'hsl(176, 100%, 44%)')
    colour.style.setProperty('--toggleshadow', 'hsl(177, 92%, 70%)')
    colour.style.setProperty('--lastkeybackground', 'hsl(268, 47%, 21%)')
    colour.style.setProperty('--lastKeyshadow', 'hsl(290, 70%, 36%)')
    colour.style.setProperty('--textcolor', 'hsl(52, 100%, 62%)')
    colour.style.setProperty('--btntextcolor', 'hsl(52, 100%, 62%)')
    colour.style.setProperty('--keybtnhover', 'hsl(285, 91%, 52%)')
    colour.style.setProperty('--btn2background', 'hsl(176, 100%, 44%)')
    colour.style.setProperty('--btn2text', 'hsl(198, 20%, 13%)')
    colour.style.setProperty('--btntext', 'hsl(0, 0%, 100%)')
    colour.style.setProperty('--screentext','hsl(52, 100%, 62%)')
}

let screen2 = document.querySelector("#show");

let three = document.querySelector("#btn3");
let two = document.querySelector("#btn2");
let one = document.querySelector("#btn1");
let six = document.querySelector("#btn6");
let five = document.querySelector("#btn5");
let four = document.querySelector("#btn4");
let nine = document.querySelector("#btn9");
let eight = document.querySelector("#btn8");
let seven = document.querySelector("#btn7");
let zero = document.querySelector("#btn0");
let plus = document.querySelector("#addition");
let sup = document.querySelector("#subtraction");
let seperate = document.querySelector("#dot");
let devide = document.querySelector("#division");
let multi = document.querySelector("#multiplication");


seven.addEventListener('click', function(){
    screen2.textContent = screen2.textContent +"7";
});

eight.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "8";
});

nine.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "9";
});

four.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "4";
});

five.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "5";
});

six.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "6";
});

plus.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "+";
});

one.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "1";
});

two.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "2";
});

three.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "3";
});
zero.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "0";
});

sup.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "-";
});

seperate.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + ".";
});

devide.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "/";
});

multi.addEventListener('click', function(){
    screen2.textContent =screen2.textContent + "*";
});

//delete button
let clean = document.querySelector("#del");
clean.addEventListener('click', function(){
    screen2.textContent = screen2.textContent.slice(0,-1);
});
//reset button

let clear = document.querySelector("#reset");
clear.addEventListener('click', function(){
    screen2.textContent = "";
});

let operation = document.querySelector("#equal");
operation.addEventListener('click', function(){
    screen2.textContent = eval(screen2.textContent);
});