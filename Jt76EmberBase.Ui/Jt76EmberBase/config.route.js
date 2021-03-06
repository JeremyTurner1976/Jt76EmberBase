﻿//ROUTES
//Router Map - 
//use routes for adjectives, verbs, adverbs (Controller based properties)
//use resources for Nouns (Route setting model properties)
//:variablename if passing a primitive
//:itemProperty if passing an item
//:[itemname]_id if only doing a find by id (no need to create the route, ember does this)
Jt76EmberBase.Router.map(function () {
    this.route("index", { path: "" }, function() {
        this.route("dashboard"),
        this.route("projects", { path: "projects/" }, function () {
            this.route("projectOne");
            this.route("projectTwo");
        });
        this.route("contact");
        this.route("about");
        this.route("admin", { path: "admin/" }, function () {
            this.route("dashboard");
            this.route("errors");
            this.route("errorDetails", { path: "errors/:id" });
            this.route("logMessages");
            this.route("logMessage", { path: "logMessage/:id" });
            this.route("userAdmin");
        });
    });
});




