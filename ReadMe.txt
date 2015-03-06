Note: If handlebars are changed the matching HandleBarsHelper nuget package must be installed

http://Jt76EmberBase/Help will load the web api help area (VS Template item)

Animated routes
https://github.com/billysbilling/ember-animated-outlet

jsbin - awesome place to get a quick page running
cdnjs - has downloadable scripts
ember - official page has a starter kit

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

https://github.com/heartsentwined/ember-auth

  renderTemplate: function() {
    this.render('favoritePost', {   // the template to render
      into: 'posts',                // the template to render into
      outlet: 'posts',              // the name of the outlet in that template
      controller: 'blogPost'        // the controller to use for the template
    });
  }