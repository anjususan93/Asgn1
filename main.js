//Hello Message when a page loads//

window.alert("Hello - Welcome");

//Read More button//
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



// Image change on hover//

function changeImage(x, image)
   {
    if (x==1)
    {
       image.src = 'Images/anju.jpg' 
    }
    if (x == 2)
    {
       image.src = 'Images/profile.jpg' 
    }
   }


// Changing colour
window.onload = function(){

  var tx = document.querySelector(".icon");

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  function changeColor(){
    tx.style.color= getRandomColor();
  }
  
  setInterval(changeColor,1000);
}
