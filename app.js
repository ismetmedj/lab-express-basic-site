/**
 * Require express function
 */
const express = require("express");
/**
 * Require hbs
 */
const hbs = require("hbs");

/**
 * Create the app object
 */
const app = express();

/**
 * Setup time!
 */
// We need to define where the static files are
app.use(express.static(__dirname + "/public"));
// Register hbs partials
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views");

/**
 * ROUTES
 */

app.get("/", (request, response) => {
  response.render("home", { css: ["home"] });
});

app.get("/about", (request, response) => {
  response.render("about", { css: ["about"] });
});

app.get("/works", (request, response) => {
  response.render("works");
});

app.get("/gallery", (request, response) => {
  response.render("gallery");
});

app.get("*", (request, response) => {
  response.render("error", { disableNavbar: true });
});

/**
 * Listen to a specific PORT
 */
app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`http://localhost:3000`);
});
