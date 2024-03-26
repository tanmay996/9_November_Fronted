function add(){
    let a = parseInt(prompt("Enter value of A")) 
    let b = parseInt(prompt("Enter value of B"))
    let c = a + b;
    alert("Addition is " + c);
} 
function sub(){
    let a = parseInt(prompt("Enter value of A"))
    let b = parseInt(prompt("Enter value of B"))
    let c = a - b;
    alert("Subtraction is " + c);

}
function mul(){
    let a = parseInt(prompt("Enter value of A"))
    let b = parseInt(prompt("Enter value of B"))
    let c = a * b;
    alert("Addition is " + c);

}
function div(){
    let a = parseInt(prompt("Enter value of A"))
    let b = parseInt(prompt("Enter value of B"))
    let c = a / b;
    alert("Addition is " + c);
}
export {add , sub , mul , div};
