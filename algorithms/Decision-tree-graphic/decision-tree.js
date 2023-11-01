let dropdownList = document.querySelector(".dropdown-list");
let question = document.querySelector(".question h3");
let weatherIcon = document.querySelector("i, .weather-icon");
let response;
let formBox;
let reset = document.querySelector('.reset')

dropdownList.addEventListener("change", function () {
  response = dropdownList.value;

  if (response === "sunny") {
    sunnySelected();
  }
  timeResponse()


  console.log(response);
});

function sunnySelected() {
  // if 'sunny' is selected =>
  //icons change =>
  //question changes =>
  //select options change =>
  // time function is called next

  weatherIcon.classList.replace("fa-cloud-moon", "fa-sun");

  question.style.lineHeight = "30px";
  question.innerHTML =
    "How long would it take you to walk to your destination?";

  dropdownList.innerHTML = "";

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
  //< 30 > results  =>
  //call finalResults function to remove the form =>
  //display landing page with animated result of walking or taking the bus (in progress)
  response = dropdownList.value;
  if (response === "more than 30 minutes") {
    finalResult();
    busResult()
  }
  if (response === "less than 30 minutes") {
    finalResult();
    walkResult();
  }
}

function finalResult() {
  let form = document.querySelector(".form");
  form.classList.add("hidden");
}

function busResult() {
  let bus = document.createElement("div")
  bus.classList.add('question')
 
  let busText = document.createElement("h3")
  busText.innerHTML = `Safest bet...the bus! <i class="fa-solid fa-bus bus-icon"></i> `;
  busText.classList.add('busText')
  bus.append(busText)

  question = document.querySelector(".question h3")
  bus.style.lineHeight = "30px";
  bus.style.width = "80%";

  formBox = document.querySelector(".form-box")
  formBox.append(bus)
}

function walkResult() {
  let walk = document.createElement("div")
  walk.classList.add('question')
 
  let walkText = document.createElement("h3")
  walkText.innerHTML = `Feel the sun. Take deep breaths. Go for a walk! <i class="fa-solid fa-shoe-prints fa-rotate-270 walk-icon"></i>`;
  walkText.classList.add('walkText')
  walk.appendChild(walkText)


  formBox = document.querySelector(".form-box")
  formBox.append(walk)

  walk.style.width = "90%";
  question.style.width = "90%";
}


function transportationOptions() {
  // Write code here to make the decision tree into an algorithm!
}


reset.addEventListener("click", function () {
  window.location.reload();
})

