<h1 align="center">Welcome to<a href="https://daniilshat.ru/" target="_blank"> Dopio</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">A library to simplify writing JavaScript code</h3>

<hr>

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
