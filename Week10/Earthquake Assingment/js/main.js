import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";

let quakes = [];

// We need to refactor the everything function. In the end we want a function like below
// create the appropriate functions, move the functionality from everything() to the functions so that the showQuakes() function below will work.
async function showQuakes() {
    // get the current location
    const location = await initPos();
    // get the list of quakes for the location
    quakes = await getQuakesForLocation(location);
    // render the list to the list element
    const listElement = document.querySelector("#quakeList");
    listElement.innerHTML = generateListMarkup(
      quakes.features,
      earthquakeListTemplate
    );
  
    // attach a listener to the quakes that will listen for a click and render out details about the quake
    listElement.addEventListener("click", earthQuakeClickHandler);
  }