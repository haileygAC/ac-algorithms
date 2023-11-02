let dropdownList = document.querySelector(".dropdown-list");
let question = document.querySelector(".question h3");
let weatherIcon;
let response;
let formBox;
let reset = document.querySelector('.reset')

dropdownList.addEventListener("change", function() {
  response = dropdownList.value;

  if (response === "sunny") {
    sunnySelected();
  }
  timeResponse()
});


  // if 'sunny' is selected =>
  //icons change =>
  //question changes =>
  //select options change =>
  // time function is called next

function sunnySelected() {

  //change weather icon to match sunny

  weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.classList.add("fa-sun");

  //alter css for the question element and replace question text
  question.style.lineHeight = "30px";
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
  if (response === "more than 30 minutes") {
    finalResult();
    busResult()
  }
  else if (response === "less than 30 minutes") {
    finalResult();
    walkResult();
  } else {}
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
  busText.innerHTML = `Safest bet...take the bus! <i class="fa-solid fa-bus bus-icon"></i> `;

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
  walkText.innerHTML = `Feel the sun. Take deep breaths. Go for a walk! <i class="fa-solid fa-shoe-prints fa-rotate-270 walk-icon"></i>`;

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


function transportationOptions() {
  // Write code here to make the decision tree into an algorithm!
}


reset.addEventListener("click", function () {
  window.location.reload();
})

