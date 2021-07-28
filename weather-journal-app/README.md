# Weather-Journal App Project



## all the steps 


 ## first step install exprss and cors and body-parser in server.js:  

 1- open server.js
 2- open terminal
 3- after installing the node  write " npm install express"
 4- "npm install cors"
 5- "npm install "body-parser"
 6- insert the project folder "website" in the server.js
 7- run the server at port 8000 using function listening 
 8- write in terminal node server.js to run the server



  ## second step Create API credentials on OpenWeatherMap.com in app.js

1- go to the website openweathermap.com
2- sign up to my account 
3- get my personal api key 
4- get the link from the website get weatherby zip code 
5- creating global var (base url and personal api)



## third step 
1- make  asynchronous function to fetch the data from the app endpoint called weatherData
2- make var to zip code and var to the content (feelings)
3-write alert if the zip code empty
4- fetch the data from api
5- transfer this data to can define it using json()
6-take the tempreture and the city name from this data


  ## fourth step in server.js
   1- make callback function to complete get (allData)
   2- make callback function to post (addData)
   3- update the running server

## fifth step in app.js
1- post data from server
2- Convertsthis data from  JavaScript value to a JavaScript Object using (JSON) string.
3- get the project data from "allData"
4- updating ui by the project data
5- Inside the async function using the  elements  innerHTML properties dynamically set according to data returned by the app route
6- Add an event listener to the button generate with click as the first parameter, and weatherData as the second parameter.

## last step 
 make alot of chanching in style.css to change the design of the website

## end of the project

##  How to use this app: 

you should  write the ZIP code of the city (us).

then  write your feelings .

click generate .

## The application will show you.
the date.
the name of the city.
the temperature.
your feelings.

## resourses :
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

* https://www.w3schools.com/cssref/pr_background-image.asp

* https://www.w3schools.com/js/js_async.asp

*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

* https://www.w3schools.com/js/js_json.asp

* https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

* https://en.wikipedia.org/wiki/Responsive_web_design

   

