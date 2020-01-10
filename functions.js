function add(a,b){
    a = a*1;
    b = b*1;
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    if(b === "0"){
        return "Stop trying to break me!"
    }else{
        return a/b
    }
}
function operate(a,b,operand){
    if(operand === "+"){
        return add(a,b);
    }
    else if(operand === "-"){
        return subtract(a,b);
    }
    else if(operand === "*"){
        return multiply(a,b);
    }
    else if(operand === "/"){
        return divide(a,b);
    }
}

var output = "";
const test = document.querySelector("#window");

function zero(){
    output = output+"0";
    test.textContent = output;
}
const pressZero = document.querySelector("#zero");
pressZero.addEventListener('click',zero);

function one(){
    output = output+"1";
    test.textContent = output;
}
const pressOne = document.querySelector("#one");
pressOne.addEventListener('click',one);

function two(){
    output = output+"2";
    test.textContent = output;
}
const pressTwo = document.querySelector("#two");
pressTwo.addEventListener('click',two);

function three(){
    output = output+"3";
    test.textContent = output;
}
const pressThree = document.querySelector("#three");
pressThree.addEventListener('click',three);

function four(){
    output = output+"4";
    test.textContent = output;
}
const pressFour = document.querySelector("#four");
pressFour.addEventListener('click',four);

function five(){
    output = output+"5";
    test.textContent = output;
}
const pressFive = document.querySelector("#five");
pressFive.addEventListener('click',five);

function six(){
    output = output+"6";
    test.textContent = output;
}
const pressSix = document.querySelector("#six");
pressSix.addEventListener('click',six);

function seven(){
    output = output+"7";
    test.textContent = output;
}
const pressSeven = document.querySelector("#seven");
pressSeven.addEventListener('click',seven);

function eight(){
    output = output+"8";
    test.textContent = output;
}
const pressEight = document.querySelector("#eight");
pressEight.addEventListener('click',eight);

function nine(){
    output = output+"9";
    test.textContent = output;
}
const pressNine = document.querySelector("#nine");
pressNine.addEventListener('click',nine);

function addClick(){  
    
    output = output+"+"; 
    test.textContent = output;
}
const plus = document.querySelector("#plus");
plus.addEventListener('click',addClick);

function addSubtract(){
    
    output = output+"-";
    test.textContent = output;
}
const minus = document.querySelector("#minus");
minus.addEventListener('click',addSubtract);

function addMultiply(){
   
    output = output+"*";
    test.textContent = output;
}
const multi = document.querySelector("#multiply");
multi.addEventListener('click',addMultiply);

function addDivide(){
    
    output = output+"/";
    test.textContent = output;
}
const division = document.querySelector("#divide");
division.addEventListener('click',addDivide);

function clear(){
    output = "";
    test.textContent = "";
}

const clearing = document.querySelector("#clear");
clearing.addEventListener('click',clear);
    
const key = document.querySelector("#enter");
key.addEventListener('click',bestEnter);


   



function bestEnter(){
    let expression = test.textContent;
    let operators1 = new Set();
    let operators2 = new Set();
    operators1.add("*");
    operators1.add("/");
    operators2.add("+");
    operators2.add("-");
    let totalOperators = new Set();
    totalOperators.add("*");
    totalOperators.add("/");
    totalOperators.add("+");
    totalOperators.add("-");

    if(!totalOperators.has(expression.substring(expression.length-1)) && !(expression.indexOf("*") == -1
     && expression.indexOf("/") == -1 && expression.indexOf("+") == -1 &&expression.indexOf("-") == -1)){
        let simplified;
        let i = 0;
        for(let i = 0; i< expression.length;i++){
            if(operators1.has(expression.charAt(i))){
                let begin = i-1;
                while(begin !=-1 && !totalOperators.has(expression.charAt(begin))){
                    begin--;
                }
                let end = i+1;
                while(end!= expression.length && !totalOperators.has(expression.charAt(end))){
                    end++;
                }
                let firstNumber = expression.substring(begin+1,i);
                let secondNumber;
                if(end == expression.length){
                    secondNumber = expression.substring(i+1);
                }else{
                    secondNumber = expression.substring(i+1,end);
                }
                simplified = operate(firstNumber,secondNumber,expression.charAt(i));
                if(simplified == "Stop trying to break me!"){
                    i = expression.length;
                    break;
                }
                expression = expression.substring(0,begin+1)+simplified+expression.substring(end);
                i = 0;
            }
        }
        if(simplified == "Stop trying to break me!"){
            expression = simplified;
        }
        else{
            for(let k = 0; k < expression.length;k++){
                if(operators2.has(expression.charAt(k))){
                    let nextOperator = k+1;
                    while(nextOperator != expression.length && !operators2.has(expression.charAt(nextOperator))){
                        nextOperator++;
                    }
                    let newFirst = operate(expression.substring(0,k),expression.substring(k+1,nextOperator),expression.charAt(k));
                    expression = newFirst+expression.substring(nextOperator);
                    k = 0;
                }
            }
        }
    }
        test.textContent = expression;
}


