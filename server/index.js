//STEP 3
// in order to get our server working we will need to use Node Package Manager to install two packages.
// open up your terminal window and install express and cors using this command:
// npm i express cors



// We will need to import the express package into our index.js file next
// inside index.js, import express like so:
const express = require("express")



//import the cors pacakge next, similar to how you imported express
//inside index.js, import cors like so:
const cors = require("cors")



//STEP 4
//Next, to avoid repeating lengthy code, we will create a variable called app
//that we will reuse to initialize express commands. Set app equal to the invocation of express
//on the next line in index.js, set the invocation of express equal to a variable called app like this:
const app = express();



//STEP 5
//We would like to accept and use JSON objects in our server’s responses, so let’s do that.
//on the next line in index.js, use the use method from express to invoke express.json
app.use(express.json());



//STEP 6
//Let’s now tell express to set our server up to listen on port 4000
//on the next line, set your express server up to listen to requests on port 4000
app.listen(4000, () => console.log("Server running on port 4000"));



// Use the nodemon command in your terminal to get your new server listening on port 4000
// in terminal, use the command to check that your server is working correctly so far
// nodemon server/index ==> server running on port 4000



// Step 7
// We will create first endpoint and method to handle sending a friends array back to the client (front end)
// in index.js, above the listen but below any middleware (app.use calls are middleware),
// create the follow GET endpoint and method as follows:
app.get("/api/users", (req, res) => {
  let friends = ["Caroline", "Erick", "Huy", "Khoa", "Uyen"];
  res.status(200).send(friends);
});



// Let’s add another endpoint and method that will tell us how the weather is today
// on the next line, create another GET endpoint and method as follows:
app.get("/weather/:temperature", (req,res) => {
  const sentence = `<h3> It is ${req.params.temperature} today</h3>`;
  res.status(200).send(sentence);
});




// With object destructuring, we can make the above code a little easier to read

// app.get("/weather/:temperature", (req, res) => {
//   const { temperature } = req.params;
//   const phrase = `<h3>It was ${temperature} today</h3>`;
//   res.status(200).send(phrase);
// }




// STEP 8
// Launch the index.html file in your browser and test out your endpoints by clicking
// the “GET Friends List” button or by navigating to
// either http://localhost:4000/weather/hot or to http://localhost:4000/weather/cold
