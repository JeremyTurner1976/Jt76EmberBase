TODO-
Finish out the email system and validations
loading bar remove
textarea spellcheck then losing focus causes isDirty?


Note: If handlebars are changed the matching HandleBarsHelper nuget package must be installed

http://Jt76EmberBase/Help will load the web api help area (VS Template item)

jsbin - awesome place to get a quick page running
cdnjs - has downloadable scripts
ember - official page has a starter kit
http://emberjs.com/api/
http://emberjs.com/api/data/

{{}} always looks first in the controller, then in the model
{{{}}} for raw html

{{bind-attr src="src" alt="title"}} for most other native html elements
class inside of helpers - :class means always  variable:truthy:falsy variable:truthy or variable::falsy
tagName="li" inside of helpers - link-to as a <li>, etc

//If the resource has a path with title, sending this will automatically choose title for url param. No need to send this.title specifically
{{#link-to 'product' this tagName='button' classNames='btn btn-success'}}Buy for ${{price}}{{/link-to}}

//targets possible on actions or use Send
{{action "gotoPage" "Prev" target=view.parentView.controller}}
this.set("parentView.controller.paginationData", this.get("pagination"));
this.get("parentView.controller").send("gotoPage"); //, item); //objects can be passed, as many as needed separated by commas

//ember array helpers
data.forEach(function(item){
});
data.findBy("paramName", key);
data.slice(0,3);
"@each.strStackTrace" //set this to watch model changes for properties that can change

renderTemplate: function() {
	this.render('favoritePost', {   // the template to render
		into: 'posts',                // the template to render into
		outlet: 'posts',              // the name of the outlet in that template
		controller: 'blogPost'        // the controller to use for the template
	});
}

this.modelFor("indexErrors") to get another model's data

this.store.unloadAll("error") to clear the cache
this.get('content').deleteRecord();        
this.get('content.transaction').commit();

Shorthand for function(){...}.property("controller.bIsLoaded")
Ember.computed.alias("controller.bIsLoaded") to set a property that is bound to the controllers bIsLoaded property for change events 
Ember.computed -> gt >, lt <, gte >=, lte <=, map, any, filter, max, min

.property().volatile() means it is reloaded every time it is called

willDestroyElement: function () {
    var clone = this.$().clone();
    this.$().parent().append(clone);
    setTimeout(function () {
        clone.removeClass("jt76-slow-slide-in");
        clone.addClass("jt76-unloaded-slide");
    }, 50); //give the dom time to set the jt76-loading class then switch it
    //clone.fadeOut();
}

className: ["jt76-slow-slide"],
classNameBindings: ["bIsLoading"],
bIsLoading: function () {
    return this.get("controller.bIsLoaded") ? "jt76-slow-slide-in" : "jt76-slow-slide";
}.property("controller.bIsLoaded")
also
jt76LoadedSlide: Ember.computed.alias("controller.bIsLoaded"), //will give the hyphenated class based on caps of jt76-slow-slide-in
jt76LoadingSlide: !Ember.computed.alias("controller.bIsLoaded"), //will give the hyphenated class based on caps of jt76-slow-slide

{{view App.TextField value=model.searchValue placeholder=model.searchHint classBinding="isSearchFormValid::invalid" tabindex="1" type="text" id="search-value" aria-label="Search For" maxlength=60 }}
{{view Ember.Select value=selectedRating content=ratings}}

partials are components with nothing needed to be passed in, holds access to the parent controller
Partials must be named with an underscore ie, _singleItemButtonSet.hbs and placed at the index level
partials are for common controls, tightly linked to their parent view

Components will be like partials, but they will have their own controller as a Ember.Component
components are for encapsulating and creating reuseable code for more complex items in a parent view

Renders are views that do not need a route or view defined, but still get a controller {{render}}

Ember views have many ui event handlers such as click, submit, change, mouseDown, keyDown, and keyUp

http://stackoverflow.com/questions/15235574/ember-data-reloading-content-ui-not-updating
https://github.com/heartsentwined/ember-auth
http://stackoverflow.com/questions/18863710/how-do-i-call-an-action-method-on-controller-from-the-outside-with-the-same-beh
http://stackoverflow.com/questions/17434350/handling-server-side-validation-with-ember-data


File Work
	getPdf: function () {
		window.location.href = "GetPdfResponse";
	}
	for pdfs there is also https://mozilla.github.io/pdf.js/ <https://mozilla.github.io/pdf.js/> 
	https://mozilla.github.io/pdf.js/web/viewer.html

http://www.codeproject.com/Articles/889240/Real-time-data-update-using-SignalR







	todo

	get this to handle data errors - client and server side
	validations	- throw exceptions on validation error - get this to bubble up
	get error checking in place for responses and in the app for logging
	
	
	should probably clean up the sort select - content = displayProperties
	draw in admin dashboard
	return 422 and get the validation errors (ModelState.isValid)
	Controller#controllerFor is deprecated, please use Controller#needs instead
	Loading image for the pdf load and make this an object, ie8 needs iframes though