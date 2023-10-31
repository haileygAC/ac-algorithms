
function transportationOptions() {
    // Write code here to make the decision tree into an algorithm!
    let firstResponse = document.querySelector('.weather-type')

    firstResponse.addEventListener("change", function() {
      let selectedWeather = firstResponse.value
      console.log(selectedWeather)
    })
  }

  transportationOptions()