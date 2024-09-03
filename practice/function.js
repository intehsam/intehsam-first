function square( num1)
{
var num2=num1*num1;
console.log(num2);
}
square(10);
function celcious(num3)
{
    var c=  ( num3 * 1.8) + 32
    console.log("converted to fahrenheit"+c);
}
celcious(25);
function area(a,b,c,r)
{
    s = (a + b + c) / 2;
    area = ((s *(s - a) *(s - b) *(s - c)))*((s *(s - a) *(s - b) *(s - c)));
    console.log("area of a triangle is"+area);
    var radius= Math.PI * r * r;
    console.log("radius is"+radius);

}
area(2,3,4,5);
  
function sum1(){

const array = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i]; // Add each element to sum
}

console.log("Sum:", sum); 
}
sum1();
function product()
{

    const array = [10, 20, 30, 40, 50];
    let product = 1;
    
    for (let i = 0; i < array.length; i++) {
      product *= array[i]; 
    }
    
    console.log("product:", product); 
    }
    product();


