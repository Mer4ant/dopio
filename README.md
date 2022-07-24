<h1 align="center">Welcome to<a href="https://daniilshat.ru/" target="_blank"> Doppio</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">A library to simplify writing JavaScript code</h3>

<hr>

<h4>Let's start. Doppio code examples will be shown below</h4>

<h5>Let's change the selected element's text through Doppio<h5>
  
```html
<!-- Create an empty paragraph on html -->
<p></p>
```
  
```js
// Change text on paragrag
doppio("p").setText("Hello World!")
```
<p>Doppio supports searching for elements not only by their tag, but also by class and id</p>

```js
doppio(".text").setText("I")
doppio("#hi").setText("Love")
doppio("h1").setText("You!")
```
