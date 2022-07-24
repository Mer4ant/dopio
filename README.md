<h1 align="center">Welcome to<a href="https://daniilshat.ru/" target="_blank"> Doppio</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">A library to simplify writing JavaScript code</h3>

<hr>

<h4>Let's start. Doppio code examples will be shown below</h4>

<h5>Let's change the selected element's text through Doppio<h5>

<p>Html</p>
  
```
dopio( "button" ).click(function() {
    dopio( "div" ).each(function( index, element ) {
      // element == this
      dopio( element ).css( "backgroundColor", "yellow" );
      if ( dopio( this ).is( "#stop" ) ) {
        dopio( "span" ).setText( "Stopped at div index #" + index );
        return false;
      }
    });
  });
```
  
<p>JavaScript</p>
```
doppio("p").setText("Example text")
```
<p>When viewing the site, we get the text "Example text"</p>
