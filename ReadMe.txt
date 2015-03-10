Note: If handlebars are changed the matching HandleBarsHelper nuget package must be installed

http://Jt76EmberBase/Help will load the web api help area (VS Template item)

jsbin - awesome place to get a quick page running
cdnjs - has downloadable scripts
ember - official page has a starter kit
http://emberjs.com/api/
http://emberjs.com/api/data/

{{}} always looks first in the controller, then in the model

{{bind-attr src="src" alt="title"}} for most other native html elements
class inside of helpers - :class means always  variable:truthy:falsy  or variable:falsy
tagName="li" inside of helpers - link-to as a <li>, etc

//If the resource has a path with title, sending this will automatically choose title for url param. No need to send this.title specifically
{{#link-to 'product' this tagName='button' classNames='btn btn-success'}}Buy for ${{price}}{{/link-to}}

//ember array helpers
data.forEach(function(item){
});
data.findBy("paramName", key);
data.slice(0,3);

renderTemplate: function() {
	this.render('favoritePost', {   // the template to render
		into: 'posts',                // the template to render into
		outlet: 'posts',              // the name of the outlet in that template
		controller: 'blogPost'        // the controller to use for the template
	});
}

this.modelFor("indexErrors") to get another model's data

Shorthand for function(){...}.property("controller.bIsLoaded")
Ember.computed.alias("controller.bIsLoaded") to set a property that is bound to the controllers bIsLoaded property for change events 

http://stackoverflow.com/questions/15235574/ember-data-reloading-content-ui-not-updating
https://github.com/heartsentwined/ember-auth
