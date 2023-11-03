let dropdownList = document.querySelector(".dropdown-list");
let question = document.querySelector(".question h3");
let weatherIcon;
let response;
let formBox;
let reset = document.querySelector('.reset')

dropdownList.addEventListener("change", function() {
  response = dropdownList.value;

  if (response === "sunny") {
    sunnyResponse();
  }
  timeResponse()

  if (response === "cloudy") {
    cloudyResponse();
  }
  hungryResponse()

  if (response === "rainy") {
    rainyResponse()
  }
});


function sunnyResponse() {

  //change weather icon to match sunny
  weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.classList.add("fa-sun");
  weatherIcon.classList.add("sun-icon");

  //alter css for the question element and replace question text
  question.innerHTML =
    "How long would it take you to walk to your destination?";

  //remove old select options
  dropdownList.innerHTML = "";

  //add new select options and append them to the form element
  let select = document.createElement("option");
  select.text = "select";
  select.value = "select";
  select.disabled = true;
  select.selected = true;


  let over30 = document.createElement("option");
  over30.text = "more than 30 minutes";
  over30.value = "more than 30 minutes";

  let under30 = document.createElement("option");
  under30.text = "less than 30 minutes";
  under30.value = "less than 30 minutes";

  dropdownList.appendChild(select);
  dropdownList.appendChild(over30);
  dropdownList.appendChild(under30);
}



function timeResponse() {

//declare argument value
  response = dropdownList.value;

  //set condition for bus vs walk result function to be ran
  if (response === "more than 30 minutes") {
    finalResult();
    busResult()
  }
  else if (response === "less than 30 minutes") {
    finalResult();
    walkResult();
  } else {}
}


function cloudyResponse() {

  //change weather icon to match sunny

  weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.classList.add("fa-cloud");
  weatherIcon.classList.add("cloud-icon");

  //alter css for the question element and replace question text
  question.innerHTML =
    "Are you hungry?";

  //remove old select options
  dropdownList.innerHTML = "";

  //add new select options and append them to the form element
  let select = document.createElement("option");
  select.text = "select";
  select.value = "select";
  select.disabled = true;
  select.selected = true;


  let yes = document.createElement("option");
  yes.text = "yes";
  yes.value = "yes";

  let no = document.createElement("option");
  no.text = "no";
  no.value = "no";

  dropdownList.appendChild(select);
  dropdownList.appendChild(yes);
  dropdownList.appendChild(no);
}



function hungryResponse() {

//declare argument value
  response = dropdownList.value;

  //set condition for bus vs walk result function to be ran
  if (response === "yes") {
    finalResult();
    busResult()
  }
  else if (response === "no") {
    finalResult();
    walkResult();
  } else {}
}

function rainyResponse() {

  finalResult()
  //create a new div 
  let bus = document.createElement("div")

  //assign it a class so it will have css formatting applied
  bus.classList.add('question')

  //create new h3 element
  let busText = document.createElement("h3")

  //declare variables value
  busText.innerHTML = `Take the bus!<br><i class="fa-solid fa-bus rain"></i><i class="fa-solid fa-cloud-showers-heavy rain-icon"></i><i class="fa-solid fa-umbrella rain"></i> `;

  //add class name
  busText.classList.add('busText')

  //append to created div
  bus.append(busText)

  //call a form.box element
  formBox = document.querySelector(".form-box")

  //append new div to formBox
  formBox.append(bus)

  //remove title content
  let title = document.querySelector(".title")
  title.textContent = '';

}



function finalResult() {

  //select form element 
  let form = document.querySelector(".form");
  //add hidden class
  form.classList.add("hidden");
}

function busResult() {
  //create a new div 
  let bus = document.createElement("div")

  //assign it a class so it will have css formatting applied
  bus.classList.add('question')

  //create new h3 element
  let busText = document.createElement("h3")

  //declare variables value
  busText.innerHTML = `Safest bet...<br>take the bus!<br><i class="fa-solid fa-bus bus-icon"></i> `;

  //add class name
  busText.classList.add('busText')

  //append to created div
  bus.append(busText)

  //call a form.box element
  formBox = document.querySelector(".form-box")

  //append new div to formBox
  formBox.append(bus)

  //remove title content
  let title = document.querySelector(".title")
  title.textContent = '';

}

function walkResult() {
    //create a new div 
  let walk = document.createElement("div")

  //assign it a class so it will have css formatting applied
  walk.classList.add('question')
 
    //create new h3 element
  let walkText = document.createElement("h3")
  walkText.innerHTML = `Get some fresh air & go for a walk!<br><i class="fa-solid fa-shoe-prints fa-rotate-270 walk-icon"></i> `;

   //add class name
  walkText.classList.add('walkText')

  //append to created div
  walk.appendChild(walkText)

   //call a form.box element
  formBox = document.querySelector(".form-box")
  formBox.append(walk)

  //remove title content
  let title = document.querySelector(".title")
  title.textContent = '';
}

//resets the page when the button is clicked 
reset.addEventListener("click", function () {
  window.location.reload();
})





