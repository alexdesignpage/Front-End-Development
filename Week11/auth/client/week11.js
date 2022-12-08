
import Auth from "./Auth.js";


//function getJSON(url) {
    //return fetch(url)
     // .then(function(response) {
      //  if (!response.ok) {
      //    throw Error(response.statusText);
       // } else {
     //     return response.json();
     //   }
     // })
    //  .catch(function(error) {
     //   console.log(error);
    //  });
//  }


const Authentification = new Auth();


document.getElementById("submit").addEventListener("click", (e)=> {
  Authentification.login(getPosts)});

async function getPosts() {
  try {
    const postData = await makeRequest('posts', 'GET', null, myAuth.token);
    console.log(postData);
  
  } catch(err) {
    console.log(err);
  }
}