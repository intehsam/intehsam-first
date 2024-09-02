
//Create a function to convert Celsius to Fahrenheit. Use it to convert the temperatures below:

 
 function Fahrenheit()
{
    var celcious=38 ;
    var f= Fahrenheit = (9 * celcious / 5) + 32
    console.log("celcius"+celcious+"="+"temperature in fahrenheit is"+f);
}
Fahrenheit();

//The array below is the classification of students in a contest. It is ordered from lowest 

        
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
console.log(classification.slice(3,));
//3) Consider the object below:
var course = {
    title: "Learn to Code in Python 3",
    categories: ['programming', 'technology', 'python'],
    
    stars_reviews4: 80,
    stars_reviews3: 33,
    _stars_reviews2: 20,
    _stars_reviews1: 4,
    }

//Show the course title in the box below:
console.log(course.title);
//The main category is the first element of the categories array. Show it in the box below:
console.log(course.categories[0]);

var course = {
    title: "Learn to Code in Python 3",
    categories: ['programming', 'technology', 'python'],
    
    stars_reviews4: 80,
    stars_reviews3: 33,
    _stars_reviews2: 20,
    _stars_reviews1: 4,
    //method
    _stars_review5:function(value,totalvalue)
    {
    var percentage=(value/totalvalue)*100;
    return percentage;
    }
}

    console.log  ("percentage is"+course._stars_review5(87,200));





var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
console.log(shoppingList);
//Get the last item and place it at the beginning of the list.
shoppingList.pop();
shoppingList.unshift("chocalate");
console.log(shoppingList);
//Add two more items at the end of the list: Cheese and Eggs

shoppingList.push("cheese");
shoppingList.push("eggs");
console.log(shoppingList);


          

  

              

