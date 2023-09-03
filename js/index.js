$('.menu').click(function (e) {
    if ($('.menu').hasClass('fa fa-bars')) {
        $('.side-nav').animate({ left: 0 }, 500);
        $('.menu').removeClass('fa fa-bars');
        $('.menu').addClass('fa fa-close');
        $('.links').animate({ top: 0 }, 1000);


    }
    else {
        $('.side-nav').animate({ left: '-150.562px' }, 500);
        $('.menu').removeClass('fa fa-close');
        $('.menu').addClass('fa fa-bars');
        $('.links').animate({ top: '300px' }, 1000);

    }


});


var homearr = {};
let i = 0;
async function gethome() {
    var request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    var data = await request.json();
    homearr = data;
    displayHome(homearr);

}
gethome();
function displayHome(arr) {
    let box = ``;
    for (let i = 0; i < arr.meals.length; i++) {
       
        box += `
        <div class="col-md-3 mt-3 "onclick="getMeal('${arr.meals[i].idMeal}') ">
            <div class="card border-0 position-relative overflow-hidden "id="card" >
           <img class="card-img-top w-100" src="${arr.meals[i].strMealThumb}" alt="Card image cap">
                <div class="overlay position-absolute d-flex align-items-center "><h3 class="ps-4">${arr.meals[i].strMeal}</h3></div>
                </div>
        </div>
   `
    }
    $('.home-row').html(box);
}
function getSearch(){
    
    let box=`
    <div class="form-group">
      <input type="text" class="form-control m-3 bg-transparent text-white namesearch" id="name" aria-describedby="emailHelp" placeholder="Search by name" onkeyup="searchByName(this.value)">
    </div>
    <div class="form-group">
      <input type="text" class="form-control m-3 bg-transparent text-white" id="letter" placeholder="Search by first letter" onkeyup="searchByLetter(this.value)">
    </div>
    `;
    $('.home-row').html(box);


}
async function searchByName(value)
{
   let search={};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    var data = await request.json();
    search=data;  
    displaySearchName(search);

}
function displaySearchName(arr){
    let box = ``;
    for (let i = 0; i < arr.meals.length; i++) {
       
        box += `
        <div class="col-md-3 mt-3 ">
            <div class="card border-0 position-relative overflow-hidden "id="card">
           <img class="card-img-top w-100" src="${arr.meals[i].strMealThumb}" alt="Card image cap">
                <div class="overlay position-absolute d-flex align-items-center "><h3 class="ps-4">${arr.meals[i].strMeal}</h3></div>
                </div>
        </div>
   `
    }
    $('.searchrow').html(box);
 

}

async function searchByLetter(value){
    let letterSearch={};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
    var data = await request.json();
    letterSearch=data;  
    displaySearchLetter(letterSearch);
}
function displaySearchLetter(arr){
    let box = ``;
    for (let i = 0; i < arr.meals.length; i++) {
       
        box += `
        <div class="col-md-3 mt-3 ">
            <div class="card border-0 position-relative overflow-hidden "id="card">
           <img class="card-img-top w-100" src="${arr.meals[i].strMealThumb}" alt="Card image cap">
                <div class="overlay position-absolute d-flex align-items-center "><h3 class="ps-4">${arr.meals[i].strMeal}</h3></div>
                </div>
        </div>
   `
    }
    $('.searchrow').html(box);
 
}
async function categories(){
    let category = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    var data = await request.json();
    category=data;
    console.log(category)
    displayCategories(category);
}
function displayCategories(arr){
    let box = ``;
    for (let i = 0; i < arr.categories.length; i++) {
       
        box += `
        <div class="col-md-3 mt-3 ">
            <div class="card border-0 position-relative overflow-hidden "id="${arr.categories[i].idCategory}"onclick="getmeals('${arr.categories[i].strCategory}');">
           <img class="card-img-top w-100" src="${arr.categories[i].strCategoryThumb}" alt="Card image cap">
                <div class="overlay position-absolute d-flex align-items-center "><h3 class="ps-4">${arr.categories[i].strCategory}</h3></div>
                </div>
        </div>
   `
    }
    $('.home-row').html(box);
}
async function getmeals(cat){
    let categoryMeals = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    var data = await request.json();
    categoryMeals=data;
    console.log(categoryMeals)
    displayHome(categoryMeals);
}
async function getIngredients(){
    let ingredients = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    var data = await request.json();
   ingredients=data;
   console.log(ingredients)
   displayIngredients(ingredients);
}
function displayIngredients(arr){
    let box = ``;
    for (let i = 0; i <24; i++) {
       
        box += `
        <div class="col-md-3 mt-3 text-center">
            <div class="card border-0" onclick="getMealByIngred('${arr.meals[i].strIngredient}');">
                <h5 class="ps-4 "> ${arr.meals[i].strIngredient}</h5>
                <p class="">${arr.meals[i].strDescription.slice(0,100)}</p>
              
                </div>
                </div>
        </div>
   `
    }
    $('.home-row').html(box);
}
async function getMealByIngred(ingred){
    let meals = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
    var data = await request.json();
   meals=data;
   console.log(meals);
   displayHome(meals);
}
async function getArea(){
    let areas = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    var data = await request.json();
   areas=data;
  // console.log(areas);

   displayAreas(areas);
  
}
function displayAreas(arr){
    let box = ``;
    for (let i = 0; i <24; i++) {
       
        box += `
        <div class="col-md-3 mt-3 text-center">
            <div class="card border-0" onclick="mealsByArea('${arr.meals[i].strArea}')">
            <i class="fa fa-home" style="font-size:48px;color:black"></i>
                <h2 class="ps-4 "> ${arr.meals[i].strArea}</h2>
                </div>
                </div>
        </div>
   `
    }
    $('.home-row').html(box);
}

async function mealsByArea(country){
    let meals = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    var data = await request.json();
   meals=data;
  // console.log(areas);

  displayHome(meals);
}
async function getMeal(id){
   
    let meal = {};
    var request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    var data = await request.json();
   meal=data;
   console.log(meal);
   displayMeal(meal);
   getRecipie(meal);
}
function displayMeal(arr){
var box =`
<div class="col-md-4 ">
<img class="w-100 rounded-3" src="${arr.meals[0].strMealThumb}">
<h2 class="text-white">${arr.meals[0].strMeal}</h2>
</div>
<div class="col-md-8 text-white">
<h2>Instructions</h2>
<p>${arr.meals[0].strInstructions}</p>
<h3>Area : ${arr.meals[0].strArea}</h3>
<h3>Category : ${arr.meals[0].strCategory}</h3>
<h3 >Recipie :</h3>
<div id="recipie"></div>
<h3>Tags :</h3>
<a class="btn btn-success" href="${arr.meals[0].strSource}">Source</a>
<a class="btn btn-danger" href="${arr.meals[0].strYoutube}">Youtube</a>
</div>
`;
$('.home-row').html(box);

}

function getRecipie(arr){
    var ingredients =[];
    var measures=[];
    Object.entries(arr.meals[0]).map(entry=>{
        let key = entry[0];
        let value= entry[1];
        if(key.startsWith('strIngredient')&&(value!=""|value!=' '|value!=''|value!=" ")){
            ingredients.push(value);
            console.log(ingredients);
        }
    })
    Object.entries(arr.meals[0]).map(entry=>{
        let key = entry[0];
        let value= entry[1];
        if(key.startsWith('strMeasure')&&(value!=" "&&value!=""&&value!=' '&&value!='')){
            measures.push(value);
            console.log(measures)
        }
    })

    for(let x =0; x<measures.length;x++){
        
            measures[x]=measures[x]+" "+ingredients[x];
       
    
    }
    
    displayRecipie(measures);

}
 function displayRecipie(arr){
    var box='';
    for(var i =0;i<arr.length;i++){
            box+=`<span class="p-2 bg-info-subtle text-info d-inline-block m-1 rounded-3 fw-bold">${arr[i]}</span>`

       
        
    }
    $('#recipie').html(box);
    
 }

function displayForm(){
  let box=`
  <div class="col-md-6 mt-5">
  <input type="text" class="form-control login" id="loginname"  placeholder="Enter your name" onkeyup="validation();">
  <p class="mt-2 text-danger d-none name-alert bg-danger-subtle p-2 rounded-2">Enter valid name</p>
  </div>
  <div class="col-md-6 mt-5">
  <input type="text" class="form-control login" id="loginphone"  placeholder="Enter your phone" onkeyup="validation();">
  <p class="mt-2 text-danger d-none phone-alert  bg-danger-subtle p-2 rounded-2">Enter valid phone</p>
  </div>
  <div class="col-md-6 mt-5 ">
  <input type="password" class="form-control login" id="loginpass"  placeholder="Enter your password" onkeyup="validation();">
  <p class="mt-2 text-danger d-none pass-alert  bg-danger-subtle p-2 rounded-2">password must be at least 8 length and at least one uppercase letter and at least one number.</p>
  </div>
  <div class="col-md-6 mt-5">
  <input type="text" class="form-control login" id="email" placeholder="Enter your email" onkeyup="validation();">
  <p class="mt-2 text-danger d-none email-alert  bg-danger-subtle p-2 rounded-2">Enter valid email</p>
  </div>
  <div class="col-md-6 mt-5">
  <input type="text" class="form-control login" id="age" placeholder="Enter age" onkeyup="validation();">
  <p class="mt-2 text-danger d-none age-alert  bg-danger-subtle p-2 rounded-2">Enter valid age</p>
  </div>
  <div class="col-md-6 mt-5">
  <input type="password" class="form-control login" id="repass" placeholder="Enter your repassword" onkeyup="validation();">
  <p class="mt-2 text-danger d-none repass-alert  bg-danger-subtle p-2 rounded-2">Enter valid repassword</p>
  </div>
  <div class="col-md-6 mt-5">
  <button class="btn btn-danger disabled start-100 position-relative translate-middle-x" id="login">Submit</button>
  </div>
  `;
  $('.home-row').html(box);
  $('.home-row').addClass('m-auto');
}
let password;
function validName(name){
  let regex = new RegExp('[a-zA-Z]+');
  return regex.test(name); 


}
function validPhone(phone){
    let regex = new RegExp('01[0125][0-9]{8}');
    return regex.test(phone);

}
function validPassword(pass){
    let regex = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}');
    password=pass;
    return regex.test(pass);
   

}
function validAge(age){
    let regex=new RegExp('([1-9]+)');
    return regex.test(age);
}
function validRePassword(pass){
    if (pass==password){
        
        return true;
    }
    else{
        return false;
    }
}
function validEmail(email){
    let regex = new RegExp('[a-z]@[a-z]\.[a-z]{2,3}')
    return regex.test(email);
}
function validation(){
    var name =validName($('#loginname').val());
    var age =validAge($('#age').val());
    var password = validPassword($('#loginpass').val());
    var repass = validRePassword($('#repass').val());
    var phone = validPhone($('#loginphone').val());
    var email = validEmail($('#email').val());
    if(name&&age&&email&&password&&repass&&phone&&$('#age').val()!=''){
        $('#login').removeClass('disabled');
        $('.repass-alert').addClass('d-none');
    }
    else{
    if(!password){
        $('.pass-alert').removeClass('d-none');
        
    }else{
        $('.pass-alert').addClass('d-none');
    }
    if(!phone){
        $('.phone-alert').removeClass('d-none');
      
    }else{
        $('.phone-alert').addClass('d-none');
    }
    if(!email){
        $('.email-alert').removeClass('d-none');
       
       
    }else{
        $('.email-alert').addClass('d-none');
    }
    if(!repass){
        $('.repass-alert').removeClass('d-none');
       
    }else{
        $('.repass-alert').addClass('d-none');
        
    }
    if(!age){
        $('.age-alert').removeClass('d-none');
   }else{
    $('.age-alert').addClass('d-none');
   }
    }
}



