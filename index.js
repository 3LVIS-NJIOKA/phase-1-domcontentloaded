// Your code goes here@@ -1,9 +1,9 @@
function domContentLoaded() {
    document.addEventListener("DOMContentLoaded", function(event) {
      updateDOM()
    });
  }
  document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById("text").innerHTML = "This is really cool!";
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }

