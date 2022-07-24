<h1 align="center">Welcome to<a href="https://daniilshat.ru/" target="_blank"> Dopio</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">A library to simplify writing JavaScript code</h3>

<hr>

<h4>Let's start. Dopio code examples will be shown below</h4>

<h5>How to change the selected element's text through Dopio<h5>
  
```html
<!-- Create an empty paragraph on html -->
<p></p>
```
  
```js
// Change text on paragrag
dopio("p").setText("Hello World!")
```
<p>Dopio supports searching for elements not only by their tag, but also by class and id</p>

```js
dopio(".text").setText("I")
dopio("#hi").setText("Love")
dopio("h1").setText("You!")
```

<h4>🍁 Below are all Dopio features and their description.</h4>
<p>html: Adding html code to an element</p>
<p>css: Adding css code to an element</p>
<p>setText: Changing the text of an element</p>
<p>on: Simplified analogue of addEventListener from vanilla JavaScript</p>
<p>attribute: Attribute management for elements. If it takes a name, then reads the attribute, if it also takes a value, then overwrites the attribute</p>
<p>click: If it does not accept functions, then it makes an artificial click on the object, otherwise it listens for clicks on the object</p>
<p>addClass: Assigns a class to an element</p>
<p>each: Iterates over the elements of the collection</p>
<p>is: Used as a test for every element in the set. It accepts two arguments</p>
