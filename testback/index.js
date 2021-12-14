const express = require("express");

const app = express();

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const port = 8000;

const admin = (req, res) => {
    return res.send("this is admin page");
}

const isAdmin = (req, res, next) => {
    console.log("isAdmin running");
    next();
}

const isLoggedIn = (req, res, next) => {
    console.log("isLoggedIn running");
    next();
}

app.get("/", (req, res) => {
    return res.send("You are visiting home route");
});

app.get("/admin",isLoggedIn, isAdmin, admin);

app.get("/login", (req, res) => {
    return res.send("You are visiting login route");
});
app.get("/signup", (req, res) => {
    return res.send("This is signup route");
});

app.listen(port, () => {
    console.log("Server Running!")
});
