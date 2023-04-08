var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;
//----------------------------------------------------------------------------------

const submitButton = document.querySelector('button[type="submit"]');
let smoothieCount = parseInt(localStorage.getItem("smoothieCount"));
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    smoothieCount += 1;
    
    localStorage.setItem('smoothieCount', smoothieCount);
    
});

//------------------------------------------------------------------------------------

const fruitsURL = "https://andejuli.github.io/wdd230/fruit.json";
const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    console.log(data);

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select1 = document.getElementById('fruits1');
        select1.appendChild(newoption);
    });

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select2 = document.getElementById('fruits2');
        select2.appendChild(newoption);
    });

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select3 = document.getElementById('fruits3');
        select3.appendChild(newoption);
    });
}

getFruits();

//----------------------------------------------------------------------------------------
function calculateNutrition() {
    var fruits = document.querySelectorAll('select[name="fruit"]');
    var totalCarbs = 0;
    var totalProtein = 0;
    var totalFat = 0;
    var totalSugar = 0;
    var totalCalories = 0;
    for (var i = 0; i < fruits.length; i++) {
        var fruit = fruits[i].value;
        var fruitInfo = fruitData[fruit];
        totalCarbs += fruitInfo.carbs;
        totalProtein += fruitInfo.protein;
        totalFat += fruitInfo.fat;
        totalSugar += fruitInfo.sugar;
        totalCalories += fruitInfo.calories;
    }
    document.getElementById('carbs').innerHTML = totalCarbs + ' g';
    document.getElementById('protein').innerHTML = totalProtein + ' g';
    document.getElementById('fat').innerHTML = totalFat + ' g';
    document.getElementById('sugar').innerHTML = totalSugar + ' g';
    document.getElementById('calories').innerHTML = totalCalories + ' cal';
}

function calculateNutrition1() {
    const getFruits = async () => {
        const response = await fetch("https://andejuli.github.io/wdd230/fruit.json");
        const fruitsInfo = await response.json();
        let fruit1 = document.getElementById("fruits1");

        console.log(fruit1.target.value);
    }

}

calculateNutrition1();

function submitForm(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var fruits = document.querySelectorAll('select[name="fruit"]');
    var fruitNames = '';
    for (var i = 0; i < fruits.length; i++) {
        fruitNames += fruits[i].value + ', ';
    }
    fruitNames = fruitNames.slice(0, -2);
    var specialInstructions = document.getElementById('specialInstructions').value;
    var orderDate = new Date();
    var output = 'Order Details:<br><br>';
    output += 'First Name: ' + firstName + '<br>';
    output += 'Email: ' + email + '<br>';
    output += 'Phone: ' + phone + '<br>';
    output += 'Fruit Selections: ' + fruitNames + '<br>';
    output += 'Special Instructions: ' + specialInstructions + '<br>';
    output += 'Order Date: ' + orderDate + '<br>';
    output += 'Nutrition Information:<br>';
    output += 'Total Carbohydrates: <span id="carbs"></span><br>';
    output += 'Total Protein: <span id="protein"></span><br>';
    output += 'Total Fat: <span id="fat"></span><br>';
    output += 'Total Sugar: <span id="sugar"></span><br>';
    output += 'Total Calories: <span id="calories"></span><br>';
    document.getElementById('output').innerHTML = output;
    calculateNutrition();
}

