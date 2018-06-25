// Konami Code: up, up, down, down, left, right, left, right, B, A

/*
There are a few different ways to do this:
  - as an array
  - as a string
*/

// var konami = [ 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a' ];

// var konami = 'ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a';
var konami = 'password';

var keysPressed = [];

window.addEventListener( 'keydown', ( e ) => {
  keysPressed.push( e.key );
              // use .split() to avoid using the length of all the chars in str
  keysPressed.splice( ( -konami.length -1 ), ( keysPressed.length - konami.length ) );
  console.log(keysPressed);
  

  if ( keysPressed.join( '' ) === konami ) {
    cornify_add();
  }
});