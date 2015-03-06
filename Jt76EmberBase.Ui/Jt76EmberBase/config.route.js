//ROUTES
//Router Map - 
//use routes for adjectives, verbs, adverbs (Controller based properties)
//use resources for Nouns (Route setting model properties)
//:variablename if passing a primitive
//:itemProperty if passing an item
//:[itemname]_id if only doing a find by id (no need to create the route, ember does this)
Jt76EmberBase.Router.map(function () {
    this.resource("index", { path: "" }, function() {
        this.route("dashboard"); //, { path: "" }); //sets this as the default page, removes onload index.cshtml functions
        this.route("projects", { path: "projects/" }, function () {
            this.route("projectOne");
            this.route("projectTwo");
        });
        this.route("contact");
        this.route("about");
        this.route("admin", { path: "admin/" }, function () {
            this.route("dashboard");
            this.route("errors");
            this.route("customError", { path: "errors/:id" });
            this.route("logMessages", { path: "logMessages/" }, function () {
                this.route("logMessage", { path: "logMessage/:id" });
            });
            this.route("userAdmin");
        });
    });
});




