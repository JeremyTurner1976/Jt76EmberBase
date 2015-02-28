Note: If handlebars are changed the matching HandleBarsHelper nuget package must be installed

jsbin - awesome place to get a quick page running
cdnjs - has downloadable scripts
ember - official page has a starter kit

{{}} always looks first in the controller, then in the model

bind-attr src="src" for most other non specified helpers
class inside of helpers - :class means always  variable:truthy:falsy  or variable:falsy
tagName="li" inside of helpers - link-to as a <li>, etc

//If the resource has a path with title, sending this will automatically choose title for url param. No need to send this.title specifically
{{#link-to 'product' this tagName='button' classNames='btn btn-success'}}Buy for ${{price}}{{/link-to}}