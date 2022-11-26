
import Auth from "./Auth.js";


function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }


const Authentification = new Auth();


document.getElementById("submit").addEventListener("onclick", (e)=> {Authentification.login});