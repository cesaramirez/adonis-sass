"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use("Route");

Route.on("/").render("welcome");
Route.get("/auth/register", "Auth/RegisterController.index").as(
  "auth.register"
);
Route.post("/auth/register", "Auth/RegisterController.register").as(
  "auth.register"
);
