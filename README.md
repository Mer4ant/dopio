<h1 align="center">Welcome to<a href="https://daniilshat.ru/" target="_blank"> Dopio</a>  <!-- what the fuck... -->
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">A library to simplify writing JavaScript code</h3>

<hr>

<h4>Let's start. Dopio code examples will be shown below</h4>

<h5>How to change the selected element's text through Dopio<h5>
  
```html
<!-- Create an empty paragraph in html -->
<p></p>
```
  
```js
// Change text in paragraph
dopio("p").text("Hello World!")
```
<p>Dopio supports searching for elements not only by their tag, but also either by class or id</p>

```js
dopio(".text").text("I")
dopio("#hi").text("Love")
dopio("h1").text("You!")
```
  
```js
// 🍁 Below are all Dopio features and their description. 
html: Adds html code to an element
css: Adds css code to an element
text: Changes the text of an element
on: Simplified analogue of addEventListener from vanilla JavaScript
attribute: Attribute management for elements. If it takes a name, then reads the attribute, if it also takes a value, then overwrites the attribute
click: If it does not accept functions, then it makes an artificial click on the object, otherwise it listens for clicks on the object
addClass: Assigns a class to an element
each: Iterates over the elements of the collection
is: Used as a test for every element in the set. It accepts two arguments
```
  
```js
// ❤️ An example of creating a plugin for Dopio (As an example, hiding an element from the page)
dopioClass.prototype.hidden = function hidden() {
    for (const el of this.container) {
        el.style.display = "none";
    }
};
  
// Testing plugin
dopio(".text").hidden()
```
