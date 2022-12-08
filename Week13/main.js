


  let dateDropdown = document.getElementById('year'); 
       
  let currentYear = new Date().getFullYear();    
  let earliestYear = 1894;     
  while (currentYear >= earliestYear) {      
    let dateOption = document.createElement('option');          
    dateOption.text = currentYear;      
    dateOption.value = currentYear;        
    dateDropdown.add(dateOption);      
    currentYear -= 1;    
  }

 
  //const countryList = [];

// function getCountries() {
//     fetch('https://api.first.org/data/v1/countries')
//     .then(response => {
//             if (response.ok) {
//                 response.json().then(data => {
//                     // for (let country of data.items) {
//                     //     countryList.push(country)
                        
//                     // }
//                     console.log(data);
                    
//                 })
//             }  
            
//         });
      
    
    
//      }
    

 

  

    
   

   

/**
 * Creates an array of 250 movies that are used for autofilling the search movie form
 */
 
const imdbApiKey = "k_d55ieqs7"; 
let top250 = []
let searchIMDB = []

 function getFilms(){

    const element = document.getElementById("films");
    element.innerHTML = '';
    var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

 
fetch(`https://imdb-api.com/en/API/Top250Movies/${imdbApiKey}`, requestOptions)
.then(response => {
        if (response.ok) {
            response.json().then(data => {
                for (let movie of data.items) {
                    top250.push(movie)
                    
                }
                displayFilms(...top250);
            })
        } else {
            errorHandler("Cannot get info from IMDB")
        }
    });
  


 }

/*
/ Search the IMDB databade by the key work
*/

function searchFilms(){
    const element = document.getElementById("films");
    element.innerHTML = '';
var requestOptions = {
     method: 'GET',
     redirect: 'follow'
   };
const searched = document.getElementById("searched").value;
console.log(searched);
   fetch(`https://imdb-api.com/en/API/SearchMovie/k_d55ieqs7/${searched}`, requestOptions)
   .then(response => {
    if (response.ok) {
        response.json().then(data => {
            for (let movie of data.results) {
                searchIMDB.push(movie)
                
            }
            console.log(searchIMDB);
            displayFilms(...searchIMDB);
        })
    } else {
        errorHandler("Cannot get info from IMDB")
    }
});
}



function AdvancedSerch(){
    searchIMDB = [];
    const element = document.getElementById("films");
    element.innerHTML = '';
    
var requestOptions = {
     method: 'GET',
     redirect: 'follow'
   };

const searched = document.getElementById("searched").value;
const RatingFilter = document.getElementById("Rating").value;
const GenreFilter = document.getElementById("genre").value;
const YearFilter = document.getElementById("year").value;
const CountryFilter = document.getElementById("country").value;
console.log(YearFilter);
console.log(searched);
   fetch(`https://imdb-api.com/API/AdvancedSearch/k_d55ieqs7?title=${searched}&user_rating=${RatingFilter}&release_date=${YearFilter}-01-01,${YearFilter}-12-31&genres=${GenreFilter}&countries=${CountryFilter}`, requestOptions)
   .then(response => {
    if (response.ok) {
        response.json().then(data => {
            for (let movie of data.results) {
                searchIMDB.push(movie)
                
            }
            // searchIMDB.sort((a,b) => (a.imDbRating < b.imDbRating) ? 1 : ((b.imDbRating
            //      < a.imDbRating) ? -1 : 0))
            console.log(searchIMDB);
            displayFilms(...searchIMDB);
        })
    } else {
        errorHandler("Cannot get info from IMDB")
    }
});

    
}

 function displayFilms(...array){

    for (var i = 0; i < array.length; i += 1) {
     var div = document.createElement("div");
     var title = document.createElement("h4");
     var img = document.createElement("img");
     //var year = document.createElement("p")
     div.setAttribute('id', i);
     div.classList.add("card");
     div.classList.add("div"+i);
     title.classList.add("movie-title");
     title.innerHTML= array[i].title;
     img.setAttribute('src',array[i].image);
    // year.innerHTML = array[i].year;
     
     
     document.getElementById('films').appendChild(div);
     document.getElementById(i).appendChild(title); 
     document.getElementById(i).appendChild(img); 
    // document.getElementById(i).appendChild(year); 
    
        }
 }

    

