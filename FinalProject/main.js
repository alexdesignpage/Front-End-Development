


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
            console.log(data);
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
            console.log(data);
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

    for (var i = 0; i < array.length; i++) {
     var div = document.createElement("div");
     var title = document.createElement("h4");
     var img = document.createElement("img");
     const code = array[i].id;
     div.setAttribute('id', i);
     div.classList.add("card");
     div.classList.add("div"+i);
     
     div.ontouchend = () => {GetMovieInformation(code)};
     title.classList.add("movie-title");
     title.innerHTML= array[i].title;
     img.setAttribute('src', array[i].image);
    //  img.setAttribute('id', code);
     document.getElementById('films').appendChild(div);
     document.getElementById(i).appendChild(title); 
     document.getElementById(i).appendChild(img); 
    
        }
        
 }


//  fetches information on the movie submited creates the movie card if a card is found
//   @param movie


 function GetMovieInformation(movie) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
    
fetch(`https://imdb-api.com/en/API/Title/${imdbApiKey}/${movie}`, requestOptions)
    
    

        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    if ("Error" in data) {
                        errorHandler("unable to find data for this movie")
                    } else {
                        displayMovieData(data);
                        
                    }
                });
            } else {
                errorHandler("unable to find data for this movie")
            }
        });
}


function fullCast(Cast) {

    console.log(Cast);
    document.getElementById('FullCast').ontouchend = ()  => {CloseCast()};

    for (var i = 0; i < Cast.length; i++){
        var div = document.createElement("div");
        var actorName = document.createElement("p");
        var img = document.createElement("img");
        div.setAttribute('id', Cast[i].id);
        
        img.setAttribute('src', Cast[i].image);
        actorName.innerHTML= Cast[i].name;
        document.getElementById('FullCastHolder').appendChild(div); 
        document.getElementById(Cast[i].id).appendChild(img); 
        document.getElementById(Cast[i].id).appendChild(actorName); 
       

    }

  }

function CloseCast(){
    document.getElementById('FullCastHolder').innerHTML = "";

}



function displayMovieData(Movie) {
    console.log(Movie);
   
    document.getElementById("myForm").style.display = "block";
    
     var img = document.createElement("img");
     document.getElementById('moviePlot').innerHTML = Movie.plot;
     document.getElementById('movieCast').innerHTML = Movie.stars;
     document.getElementById('movieGenre').innerHTML = Movie.genres;
     document.getElementById('movieTitle').innerHTML= Movie.title;
     document.getElementById('movieRatings').innerHTML= Movie.imDbRating;
     for(var i = 0; i < 10; i++){

        var Rate = Math.round(Movie.imDbRating);
        if(i<Rate){
        
        var star = document.createElement("span");
        star.classList.add("fa");
        star.classList.add("fa-star");
        star.classList.add("checked");
        
        document.getElementById('Stars').appendChild(star);

        }
        else{
        var star = document.createElement("span");
        star.classList.add("fa");
        star.classList.add("fa-star");
        
        document.getElementById('Stars').appendChild(star);
        

        }

     }
     img.classList.add("cardImage");
     img.setAttribute('src', Movie.image);
     document.getElementById('FullCast').ontouchend = () => {fullCast(Movie.actorList)};
     
     document.getElementById('movieImage').appendChild(img); 

  }
      
function closeForm() {
        const element1 = document.getElementById("movieTitle");
        element1.innerHTML = '';
        const element2 = document.getElementById("movieImage");
        element2.innerHTML = '';
        const element3 = document.getElementById("movieCast");
        element3.innerHTML = '';
        const element4 = document.getElementById("moviePlot");
        element4.innerHTML = '';
        CloseCast();
        document.getElementById("myForm").style.display = "none";
        document.getElementById('Stars').innerHTML = "";
      }

   

    


