mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JheWt3aXNlIiwiYSI6ImNrd3YyeHZpbTAxeGgydnNlNDFhbDd3NzIifQ.mOSLG5_GSqzNKwwgHThnKA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/graykwise/ckwv55t8s4zhc14pogssef324',
  center: [-73.995242, 40.750610],
  zoom: 9
});
//https://www.zumper.com/rent-research/
var nycRentData = JSON.parse(rentData);
var freeRateData = JSON.parse(rateData);
//import mapData from "./mapdata.json";

map.on('load', () => {
  var data = map.addSource('neighborhoods', {
    'type': 'geojson',
    data: 'https://raw.githubusercontent.com/graykwise/nycneighborhooddata/main/neighborhoodrent.json'
  });


  for(let counter = 0; counter < nycRentData.length; counter++){
    // ADD DARKER OULTINES TO EVERYTHING
    map.addLayer({
      'id': nycRentData[counter].Neighborhood,
      'type': 'fill',
      'source': 'neighborhoods', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#333',
        'fill-opacity': 0.5,
      },
      'filter': ['==', 'neighborhood', nycRentData[counter].Neighborhood]
    });
  }

});


var under40Counter = 0;
var to60Counter = 0;
var over60Counter = 0;

function setToActive(neighborhoodName, hoursToWork) {
  if (0 < hoursToWork && hoursToWork < 40) {
    map.setPaintProperty(neighborhoodName, 'fill-color', 'rgba(33, 130, 88, 1)');
    under40Counter++;
  } else if (40 < hoursToWork && hoursToWork < 60){
    map.setPaintProperty(neighborhoodName, 'fill-color', 'rgba(249, 160, 43, 1)');
    to60Counter++;
  }
  else {
    //var hourMultiplier = hoursToWork / 211;
    //map.setPaintProperty(neighborhoodName, 'fill-color', 'rgba('+255*hourMultiplier+', 0, 0, 1)');
    map.setPaintProperty(neighborhoodName, 'fill-color', 'rgba(183, 49, 46, 1)');
    over60Counter++;
  }

};

function setToUnactive(neighborhoodName) {
  map.setPaintProperty(neighborhoodName, 'fill-color', '#333333');
};


// creating dropdown with freelance info
var select = document.getElementById("freelanceJobPicker");
select.name = "Freelance Job Picker";

for(let counter = 0; counter < freeRateData.length; counter++){
  var option = document.createElement("option");
  option.value = freeRateData[counter].Job;
  option.id = 'freelanceJobOption';
  option.text = freeRateData[counter].Job;
  select.appendChild(option);

}

var label = document.createElement("label");
label.innerHTML = "Choose your job: "
label.htmlFor = "jobs";



// Trigger the new state based on dropdown update
document.getElementById('freelanceJobPicker').onchange = function() {
  updateSpendingMoney(this.value);
  //console.log(document.querySelector('input[name="roommateCheck"]:checked').value);
  //console.log(this.value);
}

var radios = document.querySelectorAll('input[type=radio][name="roommateCheck"]');

function changeHandler(event) {
   if ( this.value === 'one' ) {
     var chosenJob = document.getElementById('freelanceJobPicker').value;
     updateSpendingMoney(chosenJob);
     //console.log('one');
   } else if ( this.value === 'none' ) {
      //console.log('none');
      var chosenJob = document.getElementById('freelanceJobPicker').value;
      updateSpendingMoney(chosenJob);
   }
}

Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', changeHandler);
});


function updateSpendingMoney(chosenJob) {
  under40Counter = 0;
  to60Counter = 0;
  over60Counter = 0;
  var jobPayRate = 0;
  for(let count = 0; count < freeRateData.length; count++) {
    if (freeRateData[count].Job == chosenJob) {
      jobPayRate = freeRateData[count].Rate;
    }
    else {}
  }
  // const hours = 40;
  // const weeks = 4;
  // var monthlyIncome = jobPayRate * hours * weeks;
  //findAffordableNeighborhoods(monthlyIncome);
  findNeighborhoodScale(chosenJob, jobPayRate);
}

function updatePercentageText(chosenJob) {
  var totalHoods = nycRentData.length;
  var greenPer = ((under40Counter / totalHoods) * 100).toFixed();
  var yellowPer = ((to60Counter / totalHoods) * 100).toFixed();
  var redPer = ((over60Counter / totalHoods) * 100).toFixed();

  // console.log(greenPer);
  // console.log(yellowPer);
  // console.log(redPer);

  if (chosenJob != 'default'){
    document.getElementById('greenText').innerHTML = 'You can afford a 1 bedroom apartment in ' +
    greenPer + '% of NYC neighborhoods while working 40 hours or less each week.';

    document.getElementById('yellowText').innerHTML = 'You can afford a 1 bedroom apartment in ' +
    yellowPer + '% of NYC neighborhoods while working 40 to 60 hours each week.';

    document.getElementById('redText').innerHTML = 'You would need to work more than 60 hours each week to afford a 1 bedroom apartment in ' +
    redPer + '% of NYC neighborhoods.';
  }
  else {
    document.getElementById('greenText').innerHTML = '';

    document.getElementById('yellowText').innerHTML = '';

    document.getElementById('redText').innerHTML = '';
  }
}

function findNeighborhoodScale(chosenJob, givenPayRate) {

  var numberOfRoommates = document.querySelector('input[name="roommateCheck"]:checked').value;
  var splitCostDiv = 0;

  if (numberOfRoommates == 'one'){
     splitCostDiv = 2;
  }
  else {
    splitCostDiv = 1;
  }

  for(let counter = 0; counter < nycRentData.length; counter++){
    if (chosenJob == 'default') {
      setToUnactive(nycRentData[counter].Neighborhood)
    }
    else {
    var rentString = nycRentData[counter].Rent;
    var rentNumber = parseFloat(rentString.replace(/,/g, ''));
    var rentBarrier = (rentNumber * 3) / splitCostDiv;
    var payTimesWeeks = givenPayRate * 4;
    var hoursToWork = rentBarrier / payTimesWeeks;


    setToActive(nycRentData[counter].Neighborhood, hoursToWork)
    //console.log(maxHoursNeeded);
  }
  }

  updatePercentageText(chosenJob);

}



// function findAffordableNeighborhoods(monthlyIncome) {
//   // add radio clicker for turning on and off 3x rent barrier?
//   for(let counter = 0; counter < nycRentData.length; counter++){
//     var rentString = nycRentData[counter].Rent;
//     var rentNumber = parseFloat(rentString.replace(/,/g, ''));
//
//     if (monthlyIncome >= rentNumber * 3) {
//       setToActive(nycRentData[counter].Neighborhood);
//     }
//     else {
//       setToUnactive(nycRentData[counter].Neighborhood);
//     }
//   }
// }
