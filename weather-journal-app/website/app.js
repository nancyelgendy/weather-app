/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// The URL to get the weather information from his API
const mainURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

// my Personal API Key from OpenWeatherMap API
const personalApi = ",&appid=927e65510be4aad5cce6c24a8d768545&units=metric";

// Event listener to the button generate

const genrate = document.getElementById("generate")

const weatherData = async() => 
// GET Web API Data
{   let countryZip = document.getElementById("zip").value;
    let newFeelings = document.getElementById("feelings").value;

   // alert if didn't put zip code

   if (!countryZip){
    alert("please enter zip code")
    return}

    const resp = await fetch( mainURL+ countryZip +personalApi)
    const allData = await resp.json()
    let temperature = allData.main.temp;
    let name = allData.name;

  
    // POST data
     const responseData = await fetch('/addData', 
     { method: 'POST', 
       credentials: 'same-origin',
       headers: {'Content-Type': 'application/json', },

    body: JSON.stringify(
      { date:newDate,
        temp: temperature,
        feelings: newFeelings,
        city: name,})})

// GET Project Data
  const allServers = await fetch ("/allData",
   { credentials:"same-origin" })

//  updating UI by project data
try{const finalData = await allServers.json()
  document.getElementById("date").innerHTML = finalData.date;
  document.getElementById("name").innerHTML = finalData.city;
  document.getElementById("temp").innerHTML = finalData.temp+ "&degC" ;
  document.getElementById("content").innerHTML = finalData.feelings;}
  catch (error) { console.log(error); }}

genrate.addEventListener("click", weatherData );
