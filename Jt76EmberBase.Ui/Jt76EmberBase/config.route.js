//ROUTES
//Router Map
//:variablename if passing a primitive
//:itemProperty if passing an item
//:[itemname]_id if only doing a find by id (no need to create the route, ember does this)
Jt76EmberBase.Router.map(function () {
    this.resource("dashboard");
    this.resource("project", { path: "Project/" }, function (){
        this.resource("projectOne");
        this.resource("projectTwo");
    });
    this.resource("contact");
    this.resource("admin");
});


