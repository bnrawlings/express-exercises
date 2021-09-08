const PORT = 3001
const express = require("express")
const app = express()


// Write your routes between the ***
// app.get("/", (req,res) => {
    //     res.send("Node and express are just lovely")});
    // ***

    // const cities = [
    //     { city: "London", continent: "Europe" },
    //     { city: "Santiago", continent: "South America" },
    //     { city: "Paris", continent: "Europe" },
    //     { city: "Seoul", continent: "Asia" },
    //     { city: "Nairobi", continent: "Africa" },
    //     { city: "Sydney", continent: "Australia" },
    //     { city: "Lagos", continent: "Africa" },
    //     { city: "Chicago", continent: "North America" },
    //     { city: "Copenhagen", continent: "Europe" },
    //     { city: "Houston", continent: "North America" }
    //   ];
    
    //   const es6Renderer = require("express-es6-template-engine");
    //   app.engine("html", es6Renderer);
    //   app.set('views', 'templates');
    //   app.set('view engine', 'html');
    
    // app.get("/", (req,res) => {
        //     res.render("first", {
            // locals: {
                
//     cities,
// }
//     });
// });
// ***

// app.get("/", (req,res) => {
//     res.status(400).send("This is an invalid route")});
// *** 

// const aboutMe = {name:"britt", city:"spring", state:"confusion"}
// app.get("/", (req,res) => {
//     res.send(aboutMe)});
// ***

const movies = [
        { movieName: "Harry Potter and the Prizoner of Azkaban", poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg" },
        { movieName: "Midsommar", poster: "https://resizing.flixster.com/3Q-le8L5EBRUHHEG28Uz2dfF9FA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Q0YmFmZWRhLTY0MjYtNGI5OS1hZGQyLTUwNmI1ZTZlNjcxNC53ZWJw" },
        { movieName: "Now and Then", poster: "https://m.media-amazon.com/images/I/91kCcGTG0IL._SY445_.jpg" },
        { movieName: "Girls Trip", poster: "https://m.media-amazon.com/images/I/81qOYSmKt7L._SL1500_.jpg" },
        { movieName: "Steel Magnolias", poster: "https://upload.wikimedia.org/wikipedia/en/3/32/Steel_magnolias_poster.jpg" }
      ];
      
      app.use(express.static("public"));
      const es6Renderer = require("express-es6-template-engine");
      app.engine("html", es6Renderer);
      app.set('views', 'templates');
      app.set('view engine', 'html');
    
    app.get("/", (req,res) => {
            res.render("second", {
            locals: {
                
    movies,
}
    });
});


app.listen(PORT, console.log(`Listening on port ${PORT}`))
