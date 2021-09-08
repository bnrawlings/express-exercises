const PORT = 3004;
const express = require("express");
const app = express();

// app.get("/helloThere", (req, res) => {
//     res.send("Why hello there!");
// });
// app.listen(PORT,console.log(`Listening on ${PORT}`))

// app.post("/postEmoji", (req, res) => {
//     res.send("🥭 is 🔥")
// })
// app.listen(PORT,console.log(`Listening on ${PORT}`))

// app.post("/wrongRoute", (req, res) => {
//     res.send("I wonder what's wrong with this route 🤔?")
// })
// app.listen(PORT,console.log(`Listening on ${PORT}`))

// app.get("/dogFood", (req,res) => {
//     res.send("Happy 🐶 loves yummy dog food!")
// })
// app.listen(PORT,console.log(`Listening on ${PORT}`))

// app.get("/fruitsmoothie",(req, res) => {
//     res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!")
// })
// app.listen(PORT,console.log(`Listening on ${PORT}`))

app.post("/lastOne", (req, res) => {
    res.send("I think you've got it!")
})
app.listen(PORT,console.log(`Listening on ${PORT}`))